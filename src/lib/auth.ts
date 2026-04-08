import type { User } from '@supabase/supabase-js';
import { supabaseBrowserClient } from './supabase/browser';

export async function upsertUserProfile(user: User) {
  if (!supabaseBrowserClient) {
    throw new Error('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
  }

  const fullName =
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.user_metadata?.first_name ||
    user.email?.split('@')[0] ||
    null;

  const { error } = await supabaseBrowserClient.from('profiles').upsert(
    {
      id: user.id,
      email: user.email ?? null,
      full_name: fullName,
      avatar_url: user.user_metadata?.avatar_url ?? user.user_metadata?.picture ?? null,
      provider: user.app_metadata?.provider ?? null,
      updated_at: new Date().toISOString(),
    },
    {
      onConflict: 'id',
    },
  );

  if (error) {
    throw error;
  }
}
