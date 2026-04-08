create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text unique,
  full_name text,
  avatar_url text,
  provider text,
  stripe_customer_id text,
  stripe_checkout_session_id text,
  stripe_payment_status text,
  stripe_last_payment_at timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists public.payments (
  id bigserial primary key,
  stripe_session_id text unique not null,
  stripe_invoice_id text unique,
  stripe_subscription_id text,
  stripe_customer_id text,
  supabase_user_id uuid,
  email text,
  amount_total integer not null default 0,
  currency text not null default 'usd',
  payment_status text,
  plan_id text,
  plan_title text,
  raw_event jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id bigserial primary key,
  stripe_subscription_id text unique not null,
  stripe_customer_id text,
  supabase_user_id uuid,
  email text,
  status text not null,
  price_id text,
  product_id text,
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  canceled_at timestamptz,
  raw_event jsonb,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can read their own profile"
  on public.profiles
  for select
  using (auth.uid() = id);

create policy "Users can insert their own profile"
  on public.profiles
  for insert
  with check (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

alter table public.payments enable row level security;

alter table public.subscriptions enable row level security;

create policy "Users can read their own payments"
  on public.payments
  for select
  using (auth.uid() = supabase_user_id);

create policy "Users can read their own subscriptions"
  on public.subscriptions
  for select
  using (auth.uid() = supabase_user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url, provider, updated_at)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data ->> 'avatar_url',
    new.raw_app_meta_data ->> 'provider',
    now()
  )
  on conflict (id) do update set
    email = excluded.email,
    full_name = excluded.full_name,
    avatar_url = excluded.avatar_url,
    provider = excluded.provider,
    updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
