import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '../../../../lib/stripe/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const serviceClient =
  supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      })
    : null;

async function saveStripePayment(session: Stripe.Checkout.Session) {
  if (!serviceClient) {
    throw new Error('Supabase service role key is missing.');
  }

  const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id ?? null;
  const userId = session.client_reference_id || session.metadata?.supabase_user_id || null;

  if (userId) {
    await serviceClient
      .from('profiles')
      .upsert(
        {
          id: userId,
          email: session.customer_details?.email ?? session.customer_email ?? null,
          stripe_customer_id: customerId,
          stripe_checkout_session_id: session.id,
          stripe_payment_status: session.payment_status,
          stripe_last_payment_at: new Date().toISOString(),
          provider: session.metadata?.site ?? 'stripe',
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'id' },
      );

    if (session.subscription) {
      const subscription = await stripe?.subscriptions.retrieve(session.subscription as string);

      if (subscription) {
        await serviceClient.from('subscriptions').upsert(
          {
            stripe_subscription_id: subscription.id,
            stripe_customer_id: customerId,
            supabase_user_id: userId,
            email: session.customer_details?.email ?? session.customer_email ?? null,
            status: subscription.status,
            price_id: subscription.items.data[0]?.price.id ?? null,
            product_id: typeof subscription.items.data[0]?.price.product === 'string'
              ? subscription.items.data[0]?.price.product
              : subscription.items.data[0]?.price.product?.id ?? null,
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            cancel_at_period_end: subscription.cancel_at_period_end,
            canceled_at: subscription.canceled_at ? new Date(subscription.canceled_at * 1000).toISOString() : null,
            raw_event: subscription,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'stripe_subscription_id' },
        );
      }
    }
  }

  await serviceClient.from('payments').insert({
    stripe_session_id: session.id,
    stripe_customer_id: customerId,
    supabase_user_id: userId,
    email: session.customer_details?.email ?? session.customer_email ?? null,
    amount_total: session.amount_total ?? 0,
    currency: session.currency ?? 'usd',
    payment_status: session.payment_status,
    plan_id: session.metadata?.planId ?? null,
    plan_title: session.metadata?.planTitle ?? null,
    raw_event: session,
  });
}

async function upsertSubscription(subscription: Stripe.Subscription) {
  if (!serviceClient) {
    throw new Error('Supabase service role key is missing.');
  }

  const customerId = typeof subscription.customer === 'string' ? subscription.customer : subscription.customer?.id ?? null;
  const price = subscription.items.data[0]?.price;
  const userId = subscription.metadata?.supabase_user_id || null;

  await serviceClient.from('subscriptions').upsert(
    {
      stripe_subscription_id: subscription.id,
      stripe_customer_id: customerId,
      supabase_user_id: userId,
      email: subscription.customer_email ?? null,
      status: subscription.status,
      price_id: price?.id ?? null,
      product_id: typeof price?.product === 'string' ? price.product : price?.product?.id ?? null,
      current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
      canceled_at: subscription.canceled_at ? new Date(subscription.canceled_at * 1000).toISOString() : null,
      raw_event: subscription,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'stripe_subscription_id' },
  );
}

async function saveInvoicePayment(invoice: Stripe.Invoice) {
  if (!serviceClient) {
    throw new Error('Supabase service role key is missing.');
  }

  const subscriptionId = typeof invoice.subscription === 'string' ? invoice.subscription : invoice.subscription?.id ?? null;
  const customerId = typeof invoice.customer === 'string' ? invoice.customer : invoice.customer?.id ?? null;

  await serviceClient.from('payments').upsert(
    {
      stripe_session_id: invoice.id,
      stripe_invoice_id: invoice.id,
      stripe_subscription_id: subscriptionId,
      stripe_customer_id: customerId,
      supabase_user_id: invoice.metadata?.supabase_user_id ?? null,
      email: invoice.customer_email ?? null,
      amount_total: invoice.amount_paid ?? 0,
      currency: invoice.currency ?? 'usd',
      payment_status: invoice.status,
      plan_id: invoice.metadata?.planId ?? null,
      plan_title: invoice.metadata?.planTitle ?? null,
      raw_event: invoice,
    },
    { onConflict: 'stripe_invoice_id' },
  );
}

export async function POST(request: NextRequest) {
  if (!stripe || !webhookSecret) {
    return NextResponse.json({ message: 'Stripe is not configured yet.' }, { status: 500 });
  }

  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ message: 'Missing Stripe signature.' }, { status: 400 });
  }

  const payload = await request.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Invalid webhook payload.';
    return NextResponse.json({ message }, { status: 400 });
  }

  try {
    if (event.type === 'checkout.session.completed') {
      await saveStripePayment(event.data.object as Stripe.Checkout.Session);
    }

    if (event.type === 'customer.subscription.created' || event.type === 'customer.subscription.updated') {
      await upsertSubscription(event.data.object as Stripe.Subscription);
    }

    if (event.type === 'customer.subscription.deleted') {
      const subscription = event.data.object as Stripe.Subscription;

      await upsertSubscription(subscription);
    }

    if (event.type === 'invoice.payment_succeeded') {
      await saveInvoicePayment(event.data.object as Stripe.Invoice);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Stripe webhook handling failed:', error);
    return NextResponse.json({ message: 'Webhook handler failed.' }, { status: 500 });
  }
}
