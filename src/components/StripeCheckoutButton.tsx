'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { supabaseBrowserClient } from '../lib/supabase/browser';

interface StripeCheckoutButtonProps {
  planId: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function StripeCheckoutButton({ planId, disabled = false, className = '', children }: StripeCheckoutButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (disabled || loading) {
      return;
    }

    setLoading(true);

    try {
      if (!supabaseBrowserClient) {
        router.push('/signin?next=/pricing');
        return;
      }

      const { data } = await supabaseBrowserClient.auth.getSession();
      const user = data.session?.user;

      if (!user) {
        router.push('/signin?next=/pricing');
        return;
      }

      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId,
          userId: user.id,
          email: user.email,
        }),
      });

      const result: unknown = await response.json();

      function isRecord(v: unknown): v is Record<string, unknown> {
        return typeof v === 'object' && v !== null;
      }

      if (!response.ok) {
        if (isRecord(result)) {
          const maybeMessage = result['message'];
          if (typeof maybeMessage === 'string') {
            throw new Error(maybeMessage);
          }
        }
        throw new Error('Unable to start checkout.');
      }

      if (isRecord(result)) {
        const maybeUrl = result['url'];
        if (typeof maybeUrl === 'string') {
          window.location.href = maybeUrl;
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={() => void handleClick()}
      disabled={disabled || loading}
      className={className}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
    >
      {loading ? 'Preparing subscription...' : children}
    </motion.button>
  );
}
