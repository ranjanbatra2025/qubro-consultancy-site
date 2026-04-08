export const stripePlans = [
  {
    id: 'strategy-session',
    title: 'AI Strategy Session',
    description: 'A focused kickoff call to identify where AI can generate the fastest ROI.',
    priceId: process.env.NEXT_PUBLIC_STRIPE_STRATEGY_PRICE_ID ?? '',
    amountLabel: '$249 / month',
    feature: 'Best for discovery and roadmap planning',
  },
  {
    id: 'automation-sprint',
    title: 'Automation Sprint',
    description: 'A build sprint for process automation, AI workflows, and measurable efficiency wins.',
    priceId: process.env.NEXT_PUBLIC_STRIPE_SPRINT_PRICE_ID ?? '',
    amountLabel: '$1,500 / month',
    feature: 'Best for a defined implementation package',
  },
  {
    id: 'enterprise-build',
    title: 'Enterprise AI Build',
    description: 'A larger delivery engagement for custom GenAI, data engineering, and agentic systems.',
    priceId: process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID ?? '',
    amountLabel: 'Custom recurring pricing',
    feature: 'Best for larger scoped partnerships',
  },
] as const;

export function getStripePlanById(planId: string) {
  return stripePlans.find((plan) => plan.id === planId);
}
