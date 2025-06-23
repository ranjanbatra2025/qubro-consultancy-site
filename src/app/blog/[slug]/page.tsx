import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

interface Post {
  title: string;
  desc: string;
  category: string;
  date: string;
  gradient: string;
  icon?: string;
  link: string;
  image: string;
}

const posts: Post[] = [
  {
    title: 'The Future of Agentic AI in Business Operations',
    desc: 'Explore how autonomous AI agents are revolutionizing business processes, enhancing efficiency, and driving innovation across industries.',
    category: 'AI Trends',
    date: 'January 15, 2025',
    gradient: 'from-teal-600 to-blue-600',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    link: '/blog/future-of-agentic-ai',
    image: '/images/hero1.png',
  },
  {
    title: 'Absolute AI Expands Services to Maritime Industries',
    desc: 'Discover our expansion into maritime AI solutions, bringing intelligent automation to shipping and logistics.',
    category: 'Company News',
    date: 'January 7, 2025',
    gradient: 'from-orange-600 to-orange-700',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    link: '/blog/maritime-expansion',
    image: '/images/hero2.png',
  },
  {
    title: 'Building Intelligent Automation',
    desc: 'Learn the steps to implement AI-driven automation for streamlined workflows and improved operational efficiency.',
    category: 'Technology',
    date: 'January 5, 2025',
    gradient: 'from-purple-600 to-indigo-600',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    link: '/blog/intelligent-automation',
    image: '/images/hero3.png',
  },
  {
    title: 'How AI Reduced Operational Costs by 45% for Local Startup',
    desc: 'A deep dive into our recent project that helped a Halifax tech startup streamline operations and cut costs significantly.',
    category: 'Case Study',
    date: 'December 28, 2024',
    gradient: 'from-green-600 to-teal-600',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    link: '/blog/cost-reduction-case-study',
    image: '/images/hero4.png',
  },
  {
    title: 'AI Ethics in Business Operations',
    desc: 'Understanding the ethical considerations when implementing AI solutions and building responsible AI systems.',
    category: 'Education',
    date: 'December 20, 2024',
    gradient: 'from-pink-600 to-rose-600',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    link: '/blog/ai-ethics-framework',
    image: '/images/hero5.png',
  },
  {
    title: '2025 AI Predictions: What’s Next for Business Intelligence',
    desc: 'Our annual report on emerging AI trends and predictions for how they’ll shape business intelligence in 2025.',
    category: 'Industry Report',
    date: 'December 15, 2024',
    gradient: 'from-yellow-600 to-orange-600',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    link: '/blog/ai-predictions-2025',
    image: '/images/hero6.png',
  },
  {
    title: 'AI-Driven Customer Support',
    desc: 'GenAI chatbot improving response times by 70% for a leading e-commerce platform, enhancing customer satisfaction.',
    category: 'Featured Project',
    date: 'December 20, 2024',
    gradient: 'from-green-600 to-teal-600',
    icon: 'M9 12l2 2 4l9-2a6 9 0 11-0 0 0 9 9 0 0 18 0 1',
    link: '/blog/customer-support',
    image: '/images/hero7.png',
  },
  {
    title: 'Data Pipeline Optimization',
    desc: 'Scalable pipeline reducing processing time by 50% for a financial services firm, enabling faster insights.',
    category: 'Featured Project',
    date: 'December 15, 2024',
    gradient: 'from-pink-600 to-rose-600',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    link: '/blog/data-pipeline',
    image: '/images/hero8.png',
  },
  {
    title: 'Agentic Workflow Automation',
    desc: 'Autonomous agents boosting efficiency by 40% for a logistics company, streamlining operations.',
    category: 'Featured Project',
    date: 'December 10, 2024',
    gradient: 'from-yellow-600 to-orange-600',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    link: '/blog/workflow-automation',
    image: '/images/hero9.png',
  },
];

export async function generateStaticParams() {
  await Promise.resolve();
  return posts.map((post) => ({
    slug: post.link.replace('/blog/', ''),
  }));
}

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.link === `/blog/${slug}`);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}