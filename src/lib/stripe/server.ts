import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2025-03-31.basil',
    })
  : null;

export function getStripeBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'https://absoluteaiconsulting.com';
}
