import { getSiteUrl, siteConfig } from '../../lib/site';

export default function Head() {
  return (
    <>
      <title>Privacy Policy | {siteConfig.name}</title>
      <meta name="description" content="Privacy policy for Absolute AI Consulting." />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href={getSiteUrl('/privacy')} />
    </>
  );
}
