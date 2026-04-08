import Link from 'next/link';
import { Metadata } from 'next';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';
import StripeCheckoutButton from '../../components/StripeCheckoutButton';
import StripePortalButton from '../../components/StripePortalButton';
import { stripePlans } from '../../lib/stripe/client';
import { siteConfig } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Pricing | Absolute AI Consulting',
  description: 'Explore AI strategy, automation, and enterprise build packages from Absolute AI Consulting.',
  robots: { index: true, follow: true },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-600">Pricing</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Choose a Stripe-backed engagement</h1>
          <p className="mt-4 text-lg text-slate-600">
            Every checkout creates a Stripe subscription and stores the customer, subscription, and invoice details in Supabase.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {stripePlans.map((plan) => {
            const isAvailable = Boolean(plan.priceId);

            return (
              <div key={plan.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">{plan.feature}</p>
                    <h2 className="mt-3 text-2xl font-bold">{plan.title}</h2>
                  </div>
                  <Sparkles className="h-6 w-6 text-teal-600" />
                </div>

                <p className="mt-4 text-slate-600">{plan.description}</p>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-900">
                  {plan.amountLabel}
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 text-teal-600" /> Stripe checkout flow</li>
                  <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 text-teal-600" /> Supabase profile sync</li>
                  <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 text-teal-600" /> Webhook-backed payment logging</li>
                </ul>

                <div className="mt-8">
                  <StripeCheckoutButton
                    planId={plan.id}
                    disabled={!isAvailable}
                    className={`w-full rounded-2xl px-5 py-4 text-sm font-semibold text-white transition ${isAvailable ? 'bg-slate-950 hover:bg-slate-800' : 'cursor-not-allowed bg-slate-400'}`}
                  >
                    {isAvailable ? 'Start subscription' : 'Add Stripe price ID'}
                  </StripeCheckoutButton>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-bold">Built for authenticated customers</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              The checkout button checks for a Supabase session first. If the user is not signed in, it sends them to {siteConfig.shortName} sign-in before starting Stripe subscription checkout.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
            <ShieldCheck className="h-5 w-5 text-teal-300" />
            Protected by Supabase auth, Stripe subscriptions, and webhooks
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/contact" className="text-sm font-semibold text-teal-700 underline underline-offset-4">
            Need a custom invoice or enterprise setup? Contact us.
          </Link>
        </div>

        <div className="mt-6 flex justify-center">
          <StripePortalButton className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50">
            Manage billing
          </StripePortalButton>
        </div>
      </section>
    </div>
  );
}
