import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2024-06-20',
    })
  : null;

export function getStripeBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'https://absoluteaiconsulting.com';
}
