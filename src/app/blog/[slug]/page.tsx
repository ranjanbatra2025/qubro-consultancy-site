'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';

// Define TypeScript interface for params
interface BlogPostProps {
  params: { slug: string };
}

// Sample posts data (same as in BlogPage and Home)
const posts = [
  {
    title: 'The Future of Agentic AI in Business Operations',
    desc: 'Explore how autonomous AI agents are revolutionizing business processes, enhancing efficiency, and driving innovation across industries.',
    category: 'AI Trends',
    date: 'January 15, 2025',
    gradient: 'from-teal-500 to-blue-600',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    link: '/blog/future-of-agentic-ai',
    image: '/images/hero1.png',
  },
  {
    title: 'Absolute AI Expands Services to Maritime Industries',
    desc: 'Announcing our expansion into maritime AI solutions, bringing intelligent automation to shipping and logistics.',
    category: 'Company News',
    date: 'January 10, 2025',
    gradient: 'from-teal-500 to-orange-600',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    link: '/blog/maritime-expansion',
    image: '/images/hero2.png',
  },
  {
    title: 'Building Intelligent Automation',
    desc: 'Learn the steps to implement AI-driven automation for streamlined workflows and improved operational efficiency.',
    category: 'Technology',
    date: 'January 5, 2025',
    gradient: 'from-purple-500 to-indigo-600',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    link: '/blog/intelligent-automation',
    image: '/images/hero3.png',
  },
  {
    title: 'How AI Reduced Operational Costs by 40% for Local Startup',
    desc: 'A deep dive into our recent project that helped a Halifax tech startup streamline operations and cut costs significantly.',
    category: 'Case Study',
    date: 'December 28, 2024',
    gradient: 'from-green-500 to-teal-600',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    link: '/blog/cost-reduction-case-study',
    image: '/images/hero4.png',
  },
  {
    title: 'AI Ethics in Business: A Comprehensive Framework',
    desc: 'Understanding the ethical considerations when implementing AI solutions and building responsible AI systems.',
    category: 'Education',
    date: 'December 20, 2024',
    gradient: 'from-pink-500 to-rose-600',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    link: '/blog/ai-ethics-framework',
    image: '/images/hero5.png',
  },
  {
    title: '2025 AI Predictions: What’s Next for Business Intelligence',
    desc: 'Our annual report on emerging AI trends and predictions for how they’ll shape business intelligence in 2025.',
    category: 'Industry Report',
    date: 'December 15, 2024',
    gradient: 'from-yellow-500 to-orange-600',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    link: '/blog/ai-predictions-2025',
    image: '/images/hero6.png',
  },
  {
    title: 'AI-Driven Customer Support',
    desc: 'GenAI chatbot improving response times by 70% for a leading e-commerce platform, enhancing customer satisfaction.',
    category: 'Featured Project',
    date: 'December 20, 2024',
    gradient: 'from-green-500 to-teal-600',
    link: '/work/project1',
    image: '/images/hero1.png',
  },
  {
    title: 'Data Pipeline Optimization',
    desc: 'Scalable pipeline reducing processing time by 50% for a financial services firm, enabling faster insights.',
    category: 'Featured Project',
    date: 'December 15, 2024',
    gradient: 'from-pink-500 to-rose-600',
    link: '/work/project2',
    image: '/images/hero2.png',
  },
  {
    title: 'Agentic Workflow Automation',
    desc: 'Autonomous agents boosting efficiency by 40% for a logistics company, streamlining operations.',
    category: 'Featured Project',
    date: 'December 10, 2024',
    gradient: 'from-yellow-500 to-orange-600',
    link: '/work/project3',
    image: '/images/hero3.png',
  },
];

export default function BlogPost({ params }: BlogPostProps) {
  const router = useRouter();
  const { slug } = params;

  // Find the post by matching the slug from the link
  const post = posts.find((p) => p.link === `/blog/${slug}`);

  // If no post is found, trigger Next.js notFound
  if (!post) {
    notFound();
  }

  // Sample content for the blog post (since full content isn't provided)
  const sampleContent = `
    <h2>Introduction</h2>
    <p>This blog post dives deep into the topic of "${post.title}". As AI continues to evolve, understanding its implications and applications is crucial for businesses and individuals alike.</p>
    
    <h2>Key Points</h2>
    <p>${post.desc}</p>
    <ul>
      <li><strong>Innovation:</strong> How AI is transforming the industry.</li>
      <li><strong>Implementation:</strong> Practical steps to adopt this technology.</li>
      <li><strong>Impact:</strong> Real-world outcomes and benefits.</li>
    </ul>
    
    <h2>Case Study</h2>
    <p>We worked with a leading company to implement solutions that resulted in significant improvements. For example, leveraging AI led to a measurable increase in efficiency and cost savings.</p>
    
    <h2>Conclusion</h2>
    <p>The future of AI in this domain is bright, with endless possibilities for innovation and growth. Stay tuned for more updates as we continue to explore this exciting field.</p>
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-teal-50 to-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-semibold">{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">{post.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{post.desc}</p>
            <div className="relative h-64 sm:h-96">
              <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="prose prose-lg prose-teal max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: sampleContent }}
          />
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => router.back()}
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all duration-300 text-lg font-semibold"
              aria-label="Back to Blog"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-teal-800 to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Stay Informed with Absolute AI
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Subscribe to our newsletter for the latest AI insights and updates.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg font-semibold"
              aria-label="Subscribe Now"
            >
              Subscribe Now
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .prose-teal a {
          color: #319795;
          text-decoration: underline;
          transition: color 0.3s;
        }
        .prose-teal a:hover {
          color: #2c7a7b;
        }
        .prose h2 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a202c;
        }
        .prose p {
          margin-bottom: 1.25rem;
          color: #4a5568;
        }
        .prose ul {
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
          list-style-type: disc;
        }
        .prose li {
          margin-bottom: 0.5rem;
          color: #4a5568;
        }
      `}</style>
    </div>
  );
}