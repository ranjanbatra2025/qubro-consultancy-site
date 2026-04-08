import { getSiteUrl, siteConfig } from '../lib/site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: getSiteUrl('/sitemap.xml'),
    host: siteConfig.url,
  };
}
