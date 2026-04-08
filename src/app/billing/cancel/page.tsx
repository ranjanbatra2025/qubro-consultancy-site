import Link from 'next/link';

export default function BillingCancelPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-20 text-center text-slate-900">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg">
        <h1 className="text-4xl font-bold">Subscription checkout canceled</h1>
        <p className="mt-4 text-slate-600">You can return to pricing and try again whenever you're ready.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/pricing" className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
            Back to pricing
          </Link>
          <Link href="/contact" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
