'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const slides = [
    {
      image: '/images/hero1.png',
      text: 'Empowering with Generative AI',
      link: '/services#generative-ai',
    },
    {
      image: '/images/hero2.png',
      text: 'Excellence in AI Chatbots',
      link: '/services#ai-chatbots',
    },
    {
      image: '/images/hero3.png',
      text: 'Innovating Agentic AI Systems',
      link: '/services#agentic-ai',
    },
    {
      image: '/images/hero4.png',
      text: 'Insights via Data Science',
      link: '/services#data-science',
    },
  ];

  const testimonials = [
    {
      quote: 'Absolute AI’s solutions doubled our efficiency with real-time insights.',
      author: 'Jane Doe, CTO, TechStartup',
    },
    {
      quote: 'Their AI agents streamlined our workflows, saving countless hours.',
      author: 'Mark Wilson, COO, FinCorp',
    },
    {
      quote: 'Absolute AI transformed our marketing ROI with cutting-edge AI.',
      author: 'Emily Chen, CMO, BrandX',
    },
  ];

  const logos = [
    { src: '/logos/logo.webp', alt: 'Qubro Partner 1 logo' },
    { src: '/logos/logo2.webp', alt: 'Qubro Partner 2 logo' },
    { src: '/logos/logo.webp', alt: 'Qubro Partner 3 logo' },
    { src: '/logos/logo2.webp', alt: 'Qubro Partner 4 logo' },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => {
      clearInterval(slideInterval);
      clearInterval(testimonialInterval);
    };
  }, [slides.length, testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Hero Section with Carousel */}
      <section id="home" className="relative h-screen overflow-hidden">
        <AnimatePresence>
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: index === currentSlide ? 1 : 0, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
              <div className="relative w-full h-full">
                <motion.img
                  src={slide.image}
                  alt={slide.text}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '100vh', objectPosition: 'center' }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <motion.h1
                    className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    {slide.text}
                  </motion.h1>
                  <motion.p
                    className="text-xl sm:text-2xl text-gray-100 max-w-3xl mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Absolute AI drives innovation with cutting-edge AI and data solutions.
                  </motion.p>
                  <motion.div
                    className="flex gap-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    <Link
                      href={slide.link}
                      className="bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Explore This Service
                    </Link>
                    <Link
                      href="/about"
                      className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-1/2 transform meaningful-unique-classname-1 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-teal-500' : 'bg-gray-300'
              } hover:bg-teal-400 transition-colors`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
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
      <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-20">
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
                title: 'Strategic Focus',
                desc: 'Driving measurable business outcomes.',
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
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 mx-auto mb-4 transition-transform hover:scale-110"
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
                title: 'Process Refinement',
                desc: 'Optimize processes using AI analytics.',
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
                icon: '/images/diversification.svg',
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:bg-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 mx-auto mb-6 transition-transform hover:scale-110"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <Link
                  href={item.link}
                  className="text-teal-500 hover:text-teal-600 font-medium transition-colors"
                >
                  Learn More →
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
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              {logos.map((logo, index) => (
                <motion.img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 mx-10 transition-transform hover:scale-110"
                  whileHover={{ scale: 1.15 }}
                />
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

      {/* AI Insights & Company Updates Section with Featured Projects */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 text-center mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            AI Insights, Company Updates & Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay updated with the latest trends in artificial intelligence, industry insights, news, and projects from Absolute AI.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'The Future of Agentic AI in Business Operations',
                desc: 'Explore how autonomous AI agents are revolutionizing...',
                category: 'AI Trends',
                date: 'January 15, 2025',
                gradient: 'from-teal-500 to-blue-600',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Absolute AI Expands Services to Maritime Industries',
                desc: 'Announcing our expansion into maritime AI solutions...',
                category: 'Company News',
                date: 'January 10, 2025',
                gradient: 'from-teal-500 to-orange-600',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
              {
                title: 'Building Intelligent Automation',
                desc: 'Learn the steps to implement AI-driven automation...',
                category: 'Technology',
                date: 'January 5, 2025',
                gradient: 'from-purple-500 to-indigo-600',
                icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
              },
              {
                image: '/images/hero1.png',
                title: 'AI-Driven Customer Support',
                desc: 'GenAI chatbot improving response times by 70%.',
                category: 'Featured Project',
                date: 'December 20, 2024',
                gradient: 'from-green-500 to-teal-600',
                link: '/work#project1',
              },
              {
                image: '/images/hero2.png',
                title: 'Data Pipeline Optimization',
                desc: 'Scalable pipeline reducing processing time by 50%.',
                category: 'Featured Project',
                date: 'December 15, 2024',
                gradient: 'from-pink-500 to-rose-600',
                link: '/work#project2',
              },
              {
                image: '/images/hero3.png',
                title: 'Agentic Workflow Automation',
                desc: 'Autonomous agents boosting efficiency by 40%.',
                category: 'Featured Project',
                date: 'December 10, 2024',
                gradient: 'from-yellow-500 to-orange-600',
                link: '/work#project3',
              },
            ].map((item, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:bg-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  {item.image ? (
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <Link href={item.link || '/blog'} className="text-teal-500 hover:text-teal-600 font-medium transition-colors">
                    Learn More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              View All Posts
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
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
                  <p className="text-xl text-gray-600 italic">"{testimonial.quote}"</p>
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
      </section>

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
            Let's discuss how Absolute AI can tailor intelligent solutions for your unique challenges.
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
              className="flex items-center gap-4 bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              aria-label="Call Absolute AI"
            >
              <img
                src="https://ext.same-assets.com/2951873307/1972640405.svg"
                alt="Phone"
                className="w-6 h-6"
              />
              <div className="text-left">
                <div className="font-semibold">Call Us</div>
                <div>902 719 9908</div>
              </div>
            </a>
            <a
              href="mailto:info@absoluteai.ca"
              className="flex items-center gap-4 bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              aria-label="Email Absolute AI"
            >
              <img
                src="https://ext.same-assets.com/2951873307/963509930.svg"
                alt="Email"
                className="w-6 h-6"
              />
              <div className="text-left">
                <div className="font-semibold">Email Us</div>
                <div>info@absoluteai.ca</div>
              </div>
            </a>
            <a
              href="mailto:info@absoluteai.ca?subject=Free Consultation Request"
              className="flex items-center gap-4 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              aria-label="Schedule a Free Consultation"
            >
              <img
                src="https://ext.same-assets.com/2951873307/806547137.svg"
                alt="Schedule"
                className="w-6 h-6"
              />
              <span className="font-semibold">Schedule a Free Consultation</span>
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Home;