import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { stripe } from '../../../../lib/stripe/server';
import { getSiteUrl } from '../../../../lib/site';

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

    const body = await request.json();
    const { userId } = body as { userId?: string };

    if (!userId) {
      return NextResponse.json({ message: 'User is required.' }, { status: 400 });
    }

    if (!serviceClient) {
      return NextResponse.json({ message: 'Supabase service role key is missing.' }, { status: 500 });
    }

    const { data: profile } = await serviceClient
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', userId)
      .maybeSingle();

    if (!profile?.stripe_customer_id) {
      return NextResponse.json({ message: 'No Stripe customer found for this account.' }, { status: 400 });
    }

    const returnUrl = process.env.NEXT_PUBLIC_STRIPE_PORTAL_RETURN_URL ?? getSiteUrl('/pricing');

    const session = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: returnUrl,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe portal error:', error);
    return NextResponse.json({ message: 'Unable to create billing portal session.' }, { status: 500 });
  }
}
