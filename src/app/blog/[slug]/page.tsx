import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';
import type { Metadata } from 'next';
import { blogPosts } from '../../../lib/blog-posts';
import { getSiteUrl, siteConfig } from '../../../lib/site';

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.link === `/blog/${slug}`);

  if (!post) {
    return {
      title: `${siteConfig.shortName} Blog`,
      description: siteConfig.description,
      alternates: {
        canonical: getSiteUrl('/blog'),
      },
    };
  }

  return {
    title: `${post.title} | ${siteConfig.shortName} Blog`,
    description: post.desc,
    alternates: {
      canonical: getSiteUrl(`/blog/${slug}`),
    },
    openGraph: {
      title: post.title,
      description: post.desc,
      url: getSiteUrl(`/blog/${slug}`),
      siteName: siteConfig.name,
      type: 'article',
      images: [
        {
          url: getSiteUrl(post.image),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  await Promise.resolve();
  return blogPosts.map((post) => ({
    slug: post.link.replace('/blog/', ''),
  }));
}

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.link === `/blog/${slug}`);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}