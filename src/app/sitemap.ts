import { blogPosts } from '../lib/blog-posts';
import { getSiteUrl } from '../lib/site';

export default function sitemap() {
  const staticRoutes = ['/', '/about', '/services', '/pricing', '/contact', '/blog', '/privacy', '/terms'];

  const staticEntries = staticRoutes.map((route) => ({
    url: getSiteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: getSiteUrl(post.link),
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
