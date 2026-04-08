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

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to start checkout.');
      }

      if (result.url) {
        window.location.href = result.url;
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
      onClick={handleClick}
      disabled={disabled || loading}
      className={className}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
    >
      {loading ? 'Preparing subscription...' : children}
    </motion.button>
  );
}
