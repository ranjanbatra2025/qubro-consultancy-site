'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  console.log(currentTestimonial);
  const testimonials = [
    {
      quote: "Absolute AI’s solutions doubled our efficiency with real-time insights.",
      author: 'Jane Doe, CTO, TechStartup',
    },
    {
      quote: "Their AI agents streamlined our workflows, saving countless hours.",
      author: 'Mark Wilson, COO, FinCorp',
    },
    {
      quote: "Absolute AI transformed our marketing ROI with cutting-edge AI.",
      author: 'Emily Chen, CMO, BrandX',
    },
  ];

  const logos = [
    { src: '/logos/logo.webp', alt: 'SEO Harbour' },
    { src: '/logos/logo2.webp', alt: 'LaunchPal AI' },
    { src: '/logos/azorus.png', alt: 'Azorus' },
    { src: '/logos/overhaulconsulting.png', alt: 'Overhaul Consulting' },
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <header id="home" className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logos/absolute logo.jpeg"
            alt="Absolute AI Logo"
            width={324}
            height={324}
            className="w-34 h-34 mb-6 rounded-[10px] object-contain shadow-xl border border-gray-200"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Absolute AI: Transforming Businesses With AI
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Expert AI consulting and development to unlock efficiency, innovation, and growth.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Pioneering AI for Your Success
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Absolute AI, based in Halifax, NS, specializes in helping organizations and startups leverage Artificial Intelligence for enhanced efficiency, process optimization, cost reduction, and business diversification.
          </motion.p>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We analyze your current processes, identify opportunities for improvement, and manage the deployment of tailored AI solutions—from simple process enhancements to building a fully autonomous agentic workforce.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Our expertise spans multiple industries, empowering businesses to stay ahead in the fast-evolving digital landscape with transformative AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-5">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'AI Expertise',
                desc: 'Cutting-edge AI solutions tailored to your needs.',
                icon: 'https://ext.same-assets.com/2951873307/2178531131.svg',
              },
              {
                title: 'Product Development',
                desc: 'Years of experience in developing products.',
                icon: 'https://ext.same-assets.com/2951873307/2160258571.svg',
              },
              {
                title: 'Client-Centric',
                desc: 'Solutions designed for your unique challenges.',
                icon: 'https://ext.same-assets.com/2951873307/1629899335.svg',
              },
              {
                title: 'Proven Results',
                desc: 'Delivering tangible improvements.',
                icon: 'https://ext.same-assets.com/2951873307/2636204017.svg',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:bg-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64} // 16 * 4
                  height={64} // 16 * 4
                  quality={90}
                  className="w-16 h-16 mx-auto mb-4 transition-transform hover:scale-110 object-contain"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 text-center mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our AI Expertise & Solutions
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive AI services designed to transform your business operations and drive sustainable growth.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Driven Efficiency',
                desc: 'Streamline operations with intelligent automation.',
                icon: 'https://ext.same-assets.com/2951873307/4107728250.svg',
                link: '/services#ai-efficiency',
              },
              {
                title: 'Venture Studio',
                desc: 'Patnering to Launch your startup.',
                icon: 'https://ext.same-assets.com/2951873307/2281295613.svg',
                link: '/services#process-refinement',
              },
              {
                title: 'AI Digital Marketing',
                desc: 'Implement smart marketing tools.',
                icon: 'https://ext.same-assets.com/2951873307/2330954298.svg',
                link: '/services#digital-marketing',
              },
              {
                title: 'AI for Diversification',
                desc: 'Explore new opportunities with AI insights.',
                icon: 'https://ext.same-assets.com/2951873307/3005584452.svg',
                link: '/services#diversification',
              },
              {
                title: 'AI Product Development',
                desc: 'End-to-end AI solution implementation.',
                icon: 'https://ext.same-assets.com/2951873307/1922649866.svg',
                link: '/services#product-development',
              },
              {
                title: 'Agentic Workforce',
                desc: 'Develop autonomous AI agents.',
                icon: 'https://ext.same-assets.com/2951873307/1913257418.svg',
                link: '/services#agentic-workforce',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white px-8 pt-8 pb-4 rounded-2xl shadow-lg hover:bg-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Link href={item.link} className="flex flex-col flex-grow">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={64}
                    height={64}
                    quality={90}
                    className="w-16 h-16 mb-6 transition-transform hover:scale-110 object-contain mx-auto"
                  />
                  <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-center flex-grow">{item.desc}</p>
                  <span
                    className="text-teal-500 block text-center hover:text-teal-600 font-medium transition-colors"
                  >
                    Learn More →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos Ticker */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Trusted by Leading Brands
          </motion.h2>
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-400 to-transparent z-10" />
            <motion.div className="flex whitespace-nowrap">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="mx-20"
                  whileHover={{ scale: 1.15 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={80}
                    quality={90}
                    className="h-20 w-auto transition-transform hover:scale-110 object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: '5+', label: 'AI Projects Delivered' },
              { value: '3+', label: 'Industries Served' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg hover:bg-teal-50 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <p className="text-5xl font-extrabold text-teal-600">{item.value}</p>
                <p className="text-gray-600 mt-2 text-lg">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Insights & Company Updates Section */}
      {/* <section id="blog" className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              AI Insights & Company Updates
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Stay updated with the latest trends in artificial intelligence, industry insights, and news from Absolute AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
            <article className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <span>AI Trends</span>
                  <span>•</span>
                  <span>January 15, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  The Future of Agentic AI in Business Operations
                </h3>
                <p className="text-slate-600 mb-4">
                  Explore how autonomous AI agents are revolutionizing business processes and decision-making across industries...
                </p>
                <Link href="/blog" className="text-teal-600 hover:text-teal-700 font-medium">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <span>Company News</span>
                  <span>•</span>
                  <span>January 10, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  Absolute AI Expands Services to Maritime Industries
                </h3>
                <p className="text-slate-600 mb-4">
                  We’re excited to announce our expansion into maritime AI solutions, helping Halifax’s shipping industry optimize operations...
                </p>
                <Link href="/blog" className="text-teal-600 hover:text-teal-700 font-medium">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <span>Technology</span>
                  <span>•</span>
                  <span>January 5, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  Building Intelligent Automation: A Step-by-Step Guide
                </h3>
                <p className="text-slate-600 mb-4">
                  Learn the essential steps to implement AI-driven automation in your business processes for maximum efficiency...
                </p>
                <Link href="/blog" className="text-teal-600 hover:text-teal-700 font-medium">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <span>Case Study</span>
                  <span>•</span>
                  <span>December 28, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  How AI Reduced Operational Costs by 40% for Local Startup
                </h3>
                <p className="text-slate-600 mb-4">
                  A deep dive into our recent project that helped a Halifax tech startup streamline operations and cut costs significantly...
                </p>
                <Link href="/blog" className="text-teal-600 hover:text-teal-700 font-medium">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <span>Education</span>
                  <span>•</span>
                  <span>December 20, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  AI Ethics in Business: A Comprehensive Framework
                </h3>
                <p className="text-slate-600 mb-4">
                  Understanding the ethical considerations when implementing AI solutions and building responsible AI systems...
                </p>
                <Link href="/blog" className="text-teal-600 hover:text-teal-700 font-medium">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <span>Industry Report</span>
                  <span>•</span>
                  <span>December 15, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  2025 AI Predictions: What’s Next for Business Intelligence
                </h3>
                <p className="text-slate-600 mb-4">
                  Our annual report on emerging AI trends and predictions for how they’ll shape business intelligence in 2025...
                </p>
                <Link href="/blog" className="text-teal-600 hover:text-teal-700 font-medium">
                  Read More →
                </Link>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-900 transition-colors">
              View All Posts
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Testimonial Slider */}
      {/* <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Client Testimonials
          </motion.h2>
          <div className="relative">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`max-w-3xl text-center mx-auto transition-opacity duration-1000 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: index === currentTestimonial ? 1 : 0, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-xl text-gray-600 italic">{`"${testimonial.quote}"`}</p>
                  <p className="mt-4 text-gray-500 font-semibold">— {testimonial.author}</p>
                </motion.div>
              ))}
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonial ? 'bg-teal-500' : 'bg-gray-300'
                  } hover:bg-teal-400 transition-colors`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-teal-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let’s discuss how Absolute AI can tailor intelligent solutions for your unique challenges.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="tel:9027199908"
              className="flex items-center justify-center gap-4 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full md:w-80 h-16 text-center"
              aria-label="Call Absolute AI"
            >
              <Image
                src="https://ext.same-assets.com/2951873307/1972640405.svg"
                alt="Phone"
                width={24}
                height={24}
                quality={90}
                className="w-6 h-6 object-contain filter invert brightness-0"
              />
              <div className="text-left">
                <div>902 719 9908</div>
              </div>
            </a>
            <a
              href="mailto:info@absoluteai.ca"
              className="flex items-center justify-center gap-4 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full md:w-80 h-16 text-center"
              aria-label="Email Absolute AI"
            >
              <Image
                src="https://ext.same-assets.com/2951873307/963509930.svg"
                alt="Email"
                width={24}
                height={24}
                quality={90}
                className="w-6 h-6 object-contain filter invert brightness-0"
              />
              <div className="text-left">
                <div>info@absoluteai.ca</div>
              </div>
            </a>
            <a
              href="mailto:info@absoluteai.ca?subject=Free Consultation Request"
              className="flex items-center justify-center gap-4 bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-[250px] h-14 text-center"
              aria-label="Schedule a Free Consultation"
            >
              <Image
                src="https://ext.same-assets.com/2951873307/806547137.svg"
                alt="Schedule"
                width={24}
                height={24}
                quality={90}
                className="w-6 h-6 object-contain filter invert brightness-0"
              />
              <span className="font-semibold whitespace-nowrap">Schedule a Free Consultation</span>
            </a>

          </motion.div>
        </div>
      </section>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}