import { getSiteUrl, siteConfig } from '../../lib/site';

export default function Head() {
  return (
    <>
      <title>Terms of Service | {siteConfig.name}</title>
      <meta name="description" content="Terms of service for Absolute AI Consulting." />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href={getSiteUrl('/terms')} />
    </>
  );
}
