import { getSiteUrl, siteConfig } from '../lib/site';

export default function Head() {
  return (
    <>
      <title>{siteConfig.name} | GenAI, Agentic Systems & Data Engineering</title>
      <meta name="description" content={siteConfig.description} />
      <meta name="keywords" content={siteConfig.keywords.join(', ')} />
      <link rel="canonical" href={getSiteUrl('/')} />
    </>
  );
}
