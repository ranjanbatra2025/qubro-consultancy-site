import { getSiteUrl, siteConfig } from '../../lib/site';

export default function Head() {
  return (
    <>
      <title>About {siteConfig.shortName} | AI Consulting Team</title>
      <meta
        name="description"
        content="Learn how Absolute AI Consulting helps organizations ship GenAI, automation, and data engineering solutions faster."
      />
      <link rel="canonical" href={getSiteUrl('/about')} />
    </>
  );
}
