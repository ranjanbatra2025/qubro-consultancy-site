import { getSiteUrl, siteConfig } from '../../lib/site';

export default function Head() {
  return (
    <>
      <title>{siteConfig.shortName} Blog | AI Trends, Case Studies & Insights</title>
      <meta
        name="description"
        content="Read Absolute AI Consulting insights on agentic AI, automation, data engineering, company updates, and practical business AI strategies."
      />
      <link rel="canonical" href={getSiteUrl('/blog')} />
    </>
  );
}
