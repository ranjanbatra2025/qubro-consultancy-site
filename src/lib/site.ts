export const siteConfig = {
  name: 'Absolute AI Consulting',
  shortName: 'Absolute AI',
  description:
    'Absolute AI Consulting builds GenAI, agentic systems, data engineering, and automation solutions that help businesses grow faster.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://absoluteaiconsulting.com',
  email: 'hello@absoluteaiconsulting.com',
  twitter: '@AbsoluteAI',
  stripe: {
    strategyPriceId: process.env.NEXT_PUBLIC_STRIPE_STRATEGY_PRICE_ID ?? '',
    sprintPriceId: process.env.NEXT_PUBLIC_STRIPE_SPRINT_PRICE_ID ?? '',
    enterprisePriceId: process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID ?? '',
  },
  keywords: [
    'Absolute AI Consulting',
    'Absolute AI',
    'AI consulting',
    'generative AI',
    'agentic systems',
    'AI automation',
    'data engineering',
    'business AI solutions',
    'Halifax AI consulting',
  ],
};

export function getSiteUrl(pathname = '/') {
  return new URL(pathname, siteConfig.url).toString();
}
