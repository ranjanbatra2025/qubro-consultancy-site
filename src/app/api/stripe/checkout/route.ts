import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { stripe } from '../../../../lib/stripe/server';
import { getStripePlanById } from '../../../../lib/stripe/client';
import { getSiteUrl, siteConfig } from '../../../../lib/site';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const serviceClient =
  supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      })
    : null;

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ message: 'Stripe is not configured yet.' }, { status: 500 });
    }

    const body: unknown = await request.json();
    if (typeof body !== 'object' || body === null) {
      return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
    }
    const b = body as Record<string, unknown>;
    const planId = typeof b.planId === 'string' ? b.planId : undefined;
    const userId = typeof b.userId === 'string' ? b.userId : undefined;
    const email = typeof b.email === 'string' ? b.email : undefined;

    if (!planId) {
      return NextResponse.json({ message: 'Plan is required.' }, { status: 400 });
    }

    const plan = getStripePlanById(planId);

    if (!plan) {
      return NextResponse.json({ message: 'Unknown plan.' }, { status: 400 });
    }

    if (!plan.priceId) {
      return NextResponse.json({ message: 'Stripe price ID is missing for this plan.' }, { status: 400 });
    }

    let customerId: string | null = null;

    if (serviceClient && userId) {
      const { data: profile, error: profileError } = await serviceClient
        .from('profiles')
        .select('stripe_customer_id')
        .eq('id', userId)
        .maybeSingle();

      if (profileError) {
        console.error('Profile lookup failed:', profileError);
      }

      const profileRecord = profile as Record<string, unknown> | null;
      if (profileRecord && typeof profileRecord['stripe_customer_id'] === 'string') {
        customerId = profileRecord['stripe_customer_id'];
      } else {
        customerId = null;
      }
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      client_reference_id: userId,
      customer: customerId ?? undefined,
      customer_email: email,
      line_items: [
        {
          price: plan.priceId,
          quantity: 1,
        },
      ],
      metadata: {
        planId: plan.id,
        planTitle: plan.title,
        supabase_user_id: userId ?? '',
        site: siteConfig.name,
      },
      success_url: `${getSiteUrl('/billing/success')}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: getSiteUrl('/billing/cancel'),
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ message: 'Failed to create checkout session.' }, { status: 500 });
  }
}
