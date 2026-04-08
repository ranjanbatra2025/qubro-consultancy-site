'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { supabaseBrowserClient } from '../../lib/supabase/browser';
import { upsertUserProfile } from '../../lib/auth';

type Mode = 'signin' | 'signup';

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get('next') ?? '/';

  const [mode, setMode] = useState<Mode>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [sessionReady, setSessionReady] = useState(false);

  const isConfigured = Boolean(supabaseBrowserClient);

  useEffect(() => {
    if (!supabaseBrowserClient) {
      return;
    }

    let mounted = true;

    supabaseBrowserClient.auth.getSession().then(async ({ data }) => {
      if (!mounted) {
        return;
      }

      if (data.session?.user) {
        try {
          await upsertUserProfile(data.session.user);
          router.replace(nextPath);
        } catch (error) {
          setMessage(error instanceof Error ? error.message : 'Unable to sync your profile.');
        }
      }

      setSessionReady(true);
    });

    const {
      data: { subscription },
    } = supabaseBrowserClient.auth.onAuthStateChange(async (event, currentSession) => {
      if (!currentSession?.user) {
        return;
      }

      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
        try {
          await upsertUserProfile(currentSession.user);
          if (event === 'SIGNED_IN') {
            router.replace(nextPath);
          }
        } catch (error) {
          setMessage(error instanceof Error ? error.message : 'Unable to sync your profile.');
        }
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [nextPath, router]);

  const handlePasswordAuth = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabaseBrowserClient) {
      setMessage('Supabase is not configured yet.');
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      if (mode === 'signup') {
        const { data, error } = await supabaseBrowserClient.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
            emailRedirectTo: `${window.location.origin}/signin?next=${encodeURIComponent(nextPath)}`,
          },
        });

        if (error) {
          throw error;
        }

        if (data.user) {
          await upsertUserProfile(data.user);
        }

        setMessage('Check your email to confirm your account, then sign in again.');
        return;
      }

      const { data, error } = await supabaseBrowserClient.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        await upsertUserProfile(data.user);
      }

      router.replace(nextPath);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Authentication failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!supabaseBrowserClient) {
      setMessage('Supabase is not configured yet.');
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const { error } = await supabaseBrowserClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/signin?next=${encodeURIComponent(nextPath)}`,
        },
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Google sign-in failed.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.22),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
          <section className="relative overflow-hidden bg-slate-950 px-8 py-12 text-white sm:px-10 lg:px-12 lg:py-16">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,184,166,0.22),transparent_40%,rgba(59,130,246,0.18))]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-10">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-teal-300">Absolute AI Consulting</p>
                <h1 className="mt-5 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
                  Sign in with Google or email and keep your profile synced to Supabase.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  This page is ready for production keys later. Once configured, it will authenticate users, store the profile in your database, and send them into the site.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {['Google OAuth', 'Email sign-in', 'Profile upsert'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-10 sm:px-8 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-md">
              <div className="mb-8 flex rounded-2xl bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${mode === 'signin' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600'}`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${mode === 'signup' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600'}`}
                >
                  Create Account
                </button>
              </div>

              <motion.button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading || !isConfigured}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#EA4335" d="M12 10.2v3.95h5.48c-.24 1.3-1.5 3.8-5.48 3.8-3.3 0-5.99-2.74-5.99-6.12S8.7 5.71 12 5.71c1.88 0 3.14.8 3.86 1.49l2.63-2.53C16.8 3.11 14.7 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c5.73 0 9.52-4.03 9.52-9.7 0-.65-.07-1.14-.16-1.6H12z" />
                </svg>
                Continue with Google
              </motion.button>

              <div className="my-6 flex items-center gap-3 text-sm text-slate-400">
                <span className="h-px flex-1 bg-slate-200" />
                or
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <form className="space-y-4" onSubmit={handlePasswordAuth}>
                {mode === 'signup' && (
                  <label className="block text-sm font-medium text-slate-700">
                    Full name
                    <input
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </label>
                )}

                <label className="block text-sm font-medium text-slate-700">
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Password
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15"
                    placeholder="Your password"
                    autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                    required
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading || !isConfigured}
                  className="flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Working...' : mode === 'signup' ? 'Create account' : 'Sign in'}
                </button>
              </form>

              {message && (
                <motion.p
                  className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {message}
                </motion.p>
              )}

              {!isConfigured && sessionReady && (
                <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                  Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable sign in.
                </p>
              )}

              <p className="mt-6 text-sm text-slate-500">
                By continuing, you agree to the{' '}
                <Link href="/terms" className="font-medium text-slate-900 underline underline-offset-4">
                  terms of service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="font-medium text-slate-900 underline underline-offset-4">
                  privacy policy
                </Link>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
