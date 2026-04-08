import { getSiteUrl, siteConfig } from '../../lib/site';

export default function Head() {
  return (
    <>
      <title>{siteConfig.shortName} Services | GenAI, Agentic Systems & Data Engineering</title>
      <meta
        name="description"
        content="Explore Absolute AI Consulting services for generative AI, autonomous agents, digital marketing, product development, and data engineering."
      />
      <link rel="canonical" href={getSiteUrl('/services')} />
    </>
  );
}
