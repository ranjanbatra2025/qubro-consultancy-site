import { getSiteUrl, siteConfig } from '../../lib/site';

export default function Head() {
  return (
    <>
      <title>Contact {siteConfig.shortName} | Book an AI Strategy Call</title>
      <meta
        name="description"
        content="Contact Absolute AI Consulting to discuss AI strategy, automation, data engineering, or a custom GenAI solution for your business."
      />
      <link rel="canonical" href={getSiteUrl('/contact')} />
    </>
  );
}
