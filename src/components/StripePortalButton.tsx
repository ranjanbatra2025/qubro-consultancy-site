'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabaseBrowserClient } from '../lib/supabase/browser';

interface StripePortalButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function StripePortalButton({ className = '', children }: StripePortalButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      if (!supabaseBrowserClient) {
        window.location.href = '/signin?next=/pricing';
        return;
      }

      const { data } = await supabaseBrowserClient.auth.getSession();
      const user = data.session?.user;

      if (!user) {
        window.location.href = '/signin?next=/pricing';
        return;
      }

      const response = await fetch('/api/stripe/portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to open billing portal.');
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
      disabled={loading}
      className={className}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
    >
      {loading ? 'Opening portal...' : children}
    </motion.button>
  );
}
