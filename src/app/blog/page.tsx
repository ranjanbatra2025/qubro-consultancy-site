'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts, type BlogPost } from '../../lib/blog-posts';

export default function BlogPage() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const posts: BlogPost[] = blogPosts;

  const categories = ['All', ...Array.from(new Set(posts.map((post) => post.category)))];

  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = category === 'All' ? posts.length : posts.filter((post) => post.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  const filteredPosts = posts
    .filter((post) => (filter === 'All' ? true : post.category === filter))
    .filter((post) =>
      searchQuery
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.desc.toLowerCase().includes(searchQuery.toLowerCase())
        : true,
    )
    .slice(0, visiblePosts);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visiblePosts < posts.length) {
          setIsLoading(true);
          setTimeout(() => {
            setVisiblePosts((prev) => Math.min(prev + 6, posts.length));
            setIsLoading(false);
          }, 1000);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [visiblePosts, posts.length]);

  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      <section className="relative py-20 bg-gradient-to-b from-teal-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Absolute AI Blog
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay informed with the latest AI trends, company updates, technical insights, and our transformative projects.
          </motion.p>
          <motion.div
            className="max-w-md mx-auto relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 text-gray-900 focus:border-teal-500 focus:outline-none text-lg transition-all shadow-sm"
              aria-label="Search blog posts"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-3/4">
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filter === category
                      ? 'bg-teal-500 text-white hover:bg-teal-600'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Filter by ${category}`}
                >
                  {category} ({categoryCounts[category]})
                </motion.button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredPosts.map((item, index) => (
                  <motion.article
                    key={item.link}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className={`relative h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-semibold">
                          {item.category}
                        </span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{item.desc}</p>
                      <Link
                        href={item.link}
                        className="text-teal-500 hover:text-teal-600 font-medium transition-colors flex items-center gap-1"
                        aria-label={`Read more about ${item.title}`}
                      >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
            {isLoading && (
              <div className="text-center mt-12">
                <motion.div
                  className="inline-block w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            )}
            <div ref={observerRef} className="h-10" />
          </div>
          <aside className="lg:w-1/4 lg:sticky lg:top-20 lg:self-start">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setFilter(category)}
                      className={`w-full text-left text-gray-600 hover:text-teal-600 transition-colors ${
                        filter === category ? 'font-semibold text-teal-600' : ''
                      }`}
                      aria-label={`Filter by ${category}`}
                    >
                      {category} ({categoryCounts[category]})
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                {recentPosts.map((post) => (
                  <li key={post.link}>
                    <Link
                      href={post.link}
                      className="flex items-start gap-3 group"
                      aria-label={`Read ${post.title}`}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={post.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 group-hover:text-teal-600 line-clamp-2">
                          {post.title}
                        </p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </aside>
        </div>
      </section>
      <section className="bg-gradient-to-br from-teal-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Stay Ahead with Absolute AI
          </motion.h2>
          <motion.p
            className="text-xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Subscribe to our newsletter for the latest AI insights, company updates, and project highlights.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg font-semibold"
              aria-label="Contact Us"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg font-semibold"
              aria-label="Explore Services"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}