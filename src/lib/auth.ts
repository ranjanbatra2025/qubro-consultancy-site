import type { User } from '@supabase/supabase-js';
import { supabaseBrowserClient } from './supabase/browser';

export async function upsertUserProfile(user: User) {
  if (!supabaseBrowserClient) {
    throw new Error('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
  }

  const fullName =
    // Narrow user metadata to a record to avoid unsafe `any` assignment
    (() => {
      const metadata = typeof user.user_metadata === 'object' && user.user_metadata !== null ? (user.user_metadata as Record<string, unknown>) : {} as Record<string, unknown>;
      const candidate =
        (typeof metadata.full_name === 'string' && metadata.full_name) ||
        (typeof metadata.name === 'string' && metadata.name) ||
        (typeof metadata.first_name === 'string' && metadata.first_name) ||
        (typeof user.email === 'string' && user.email.split('@')[0]);
      return candidate ?? null;
    })();

  const { error } = await supabaseBrowserClient.from('profiles').upsert(
    {
      id: user.id,
      email: user.email ?? null,
      full_name: fullName,
      avatar_url: (() => {
        const metadata = typeof user.user_metadata === 'object' && user.user_metadata !== null ? (user.user_metadata as Record<string, unknown>) : {} as Record<string, unknown>;
        if (typeof metadata.avatar_url === 'string') return metadata.avatar_url;
        if (typeof metadata.picture === 'string') return metadata.picture;
        return null;
      })(),
      provider: (() => {
        const appMeta = typeof user.app_metadata === 'object' && user.app_metadata !== null ? (user.app_metadata as Record<string, unknown>) : {} as Record<string, unknown>;
        return typeof appMeta.provider === 'string' ? appMeta.provider : null;
      })(),
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
