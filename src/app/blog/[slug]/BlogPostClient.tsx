'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

interface BlogPostClientProps {
  post: Post;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
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

            {/* Full image using aspect ratio container */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover rounded-xl"
                sizes="(min-width: 1024px) 896px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all duration-300 text-lg font-semibold"
              aria-label="Back to Blog"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
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
    </div>
  );
}