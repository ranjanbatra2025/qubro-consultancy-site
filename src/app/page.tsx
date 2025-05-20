'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

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
      quote: 'Qubro’s AI solutions doubled our efficiency with real-time insights.',
      author: 'Jane Doe, CTO, TechStartup',
    },
    {
      quote: 'Their AI agents streamlined our workflows, saving countless hours.',
      author: 'Mark Wilson, COO, FinCorp',
    },
    {
      quote: 'Qubro transformed our marketing ROI with cutting-edge AI.',
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
    }, 6000);
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => {
      clearInterval(slideInterval);
      clearInterval(testimonialInterval);
    };
  }, [slides.length, testimonials.length]);

  const navLinks = ['Home', 'Services', 'About', 'Contact'];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-midnight/95 backdrop-blur-md z-50 shadow-glow">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center text-xl md:text-2xl font-bold text-white font-manrope relative group hover:bg-gradient-to-r hover:from-teal-custom hover:via-purple-light hover:to-purple-deep hover:text-transparent hover:bg-clip-text transition-all duration-300">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="url(#grad)" strokeWidth="2"/>
              <path d="M8 16 Q12 8 16 16" stroke="url(#grad)" strokeWidth="2"/>
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#59c173'}}/>
                  <stop offset="50%" style={{stopColor: '#a17fe0'}}/>
                  <stop offset="100%" style={{stopColor: '#5d26c1'}}/>
                </linearGradient>
              </defs>
            </svg>
            Qubro Consultancy
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white relative group hover:bg-gradient-to-r hover:from-teal-custom hover:via-purple-light hover:to-purple-deep hover:text-transparent hover:bg-clip-text transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isNavOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        {isNavOpen && (
          <div className="md:hidden bg-midnight/95 px-4 py-6">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block text-white py-2 relative group hover:bg-gradient-to-r hover:from-teal-custom hover:via-purple-light hover:to-purple-deep hover:text-transparent hover:bg-clip-text transition-all duration-300"
                onClick={() => setIsNavOpen(false)}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section with Full-Size Image Carousel */}
      <section className="relative h-screen bg-midnight overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10 particle-bg animate-float"></div>
        <AnimatePresence>
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: index === currentSlide ? 1 : 0, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-full h-full">
                <motion.img
                  src={slide.image}
                  alt={slide.text}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '100vh', objectPosition: 'center' }}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/60"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-30">
                  <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-white font-manrope mb-16 shadow-glow"
                    initial={{ y: 20, opacity: 0, letterSpacing: '-0.05em' }}
                    animate={{ y: 0, opacity: 1, letterSpacing: '0em' }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <span className="highlight-outline">{slide.text}</span>
                  </motion.h1>
                  <motion.p
                    className="text-xl md:text-2xl text-blue-violet max-w-3xl mt-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <span className="highlight-outline">Qubro Consulting drives innovation with AI and data solutions.</span>
                  </motion.p>
                  <motion.div
                    className="mt-8 flex gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <Link
                      href={slide.link}
                      className="relative inline-block bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-pulse transition-all duration-300 ripple"
                    >
                      Explore This Service
                    </Link>
                    <Link
                      href="/about"
                      className="relative inline-block bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-pulse transition-all duration-300 ripple"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* What We Do Section */}
      <section className="py-32 bg-midnight relative">
        <div className="absolute inset-0 -z-10 opacity-10 particle-bg animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center text-white font-manrope mb-16 shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Expertise
          </motion.h2>
          <div className="flex flex-col lg:flex-row gap-12 mt-16">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold text-white font-manrope mb-6 shadow-glow">
                Elevating Brands with AI
              </h3>
              <p className="text-xl text-blue-violet">
                We craft AI-driven solutions to boost engagement and efficiency.
              </p>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ul className="space-y-4">
                {[
                  {
                    name: 'Agentic AI Applications',
                    icon: 'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M8 8.5l1.5 1.5m6 0l1.5-1.5m-9 7l1.5-1.5m6 0l1.5 1.5',
                    link: '/services#agentic-ai',
                  },
                  {
                    name: 'Generative AI Applications',
                    icon: 'M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M6 12h2m8 0h2m-6-6v2m0 8v2',
                    link: '/services#generative-ai',
                  },
                  {
                    name: 'AI Chatbots/RAG Systems',
                    icon: 'M4 8h16M4 8l4-4m0 8l-4-4m4 4v8m4-8h8m-4-4v8m0-4h-4',
                    link: '/services#ai-chatbots',
                  },
                  {
                    name: 'Data Science',
                    icon: 'M21 21l-5-5m-2 0a7 7 0 1 0-7-7 7 7 0 0 0 7 7zm-7-3h3m-3-3h6',
                    link: '/services#data-science',
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="p-4 card-glass rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = item.link}
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-teal-custom"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                      <span className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-all duration-300">
                        {item.name}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Logos Ticker */}
      <section className="py-32 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10 particle-bg animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-white font-manrope mb-12 shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Trusted by Leading Brands
          </motion.h2>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-midnight to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-midnight to-transparent z-10"></div>
            <motion.div
              className="flex animate-marquee whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {logos.map((logo, index) => (
                <motion.img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 mx-8 animate-pulse-glow hover:grayscale-0 hover:opacity-100 transition duration-300"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                />
              ))}
              {logos.map((logo, index) => (
                <motion.img
                  key={`duplicate-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 mx-8 animate-pulse-glow hover:grayscale-0 hover:opacity-100 transition duration-300"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-32 bg-midnight relative">
        <div className="absolute inset-0 -z-10 opacity-10 particle-bg animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center text-white font-manrope mb-16 shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Agentic AI',
                desc: 'Autonomous agents for optimized processes.',
                icon: 'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M8 8.5l1.5 1.5m6 0l1.5-1.5m-9 7l1.5-1.5m6 0l1.5 1.5',
                link: '/services#agentic-ai',
                color: 'text-teal-custom',
              },
              {
                title: 'Generative AI',
                desc: 'Innovative content and workflow automation.',
                icon: 'M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M6 12h2m8 0h2m-6-6v2m0 8v2',
                link: '/services#generative-ai',
                color: 'text-purple-light',
              },
              {
                title: 'Data Engineering',
                desc: 'Robust pipelines for actionable insights.',
                icon: 'M5 12h14m-7-7v14m-7-7l2-2m0 4l-2-2m12-2l-2 2m0-4l2 2',
                link: '/services#data-engineering',
                color: 'text-purple-deep',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 card-glass rounded-lg hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              >
                <div className="flex justify-center mb-4">
                  <svg
                    className={`w-8 h-8 ${item.color}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white font-manrope mb-4 shadow-glow">{item.title}</h3>
                <p className="text-blue-violet mb-4">{item.desc}</p>
                <a
                  href={item.link}
                  className="relative inline-block bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep text-white py-2 px-4 rounded-full text-base font-semibold shadow-lg hover:scale-105 hover:shadow-pulse transition-all duration-300 ripple"
                >
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-32 bg-gradient-to-br from-midnight to-dark-blue relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10 particle-bg animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl font-bold text-white font-manrope mb-12 shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: '5+', label: 'AI Projects Delivered', color: 'text-white' },
              { value: '3+', label: 'Industries Served', color: 'text-white' },
              { value: '100%', label: 'Client Satisfaction', color: 'text-white' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <p className={`text-5xl font-bold ${item.color} animate-count-up`}>{item.value}</p>
                <p className="text-violet-400 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-32 bg-midnight relative">
        <div className="absolute inset-0 -z-10 opacity-10 particle-bg animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center text-white font-manrope mb-16 shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                image: '/images/hero1.png',
                title: 'AI-Driven Customer Support',
                desc: 'GenAI chatbot improving response times by 70%.',
                link: '/work#project1',
              },
              {
                image: '/images/hero2.png',
                title: 'Data Pipeline Optimization',
                desc: 'Scalable pipeline reducing processing time by 50%.',
                link: '/work#project2',
              },
              {
                image: '/images/hero3.png',
                title: 'Agentic Workflow Automation',
                desc: 'Autonomous agents boosting efficiency by 40%.',
                link: '/work#project3',
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg overflow-hidden card-glass group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold text-white font-manrope mb-2 shadow-glow">{project.title}</h3>
                  <p className="text-blue-violet">{project.desc}</p>
                  <a
                    href={project.link}
                    className="relative inline-block bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep text-white py-2 px-4 rounded-full text-base font-semibold shadow-lg hover:scale-105 hover:shadow-pulse transition-all duration-300 ripple mt-4"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="py-32 bg-midnight relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/testimonial-bg.jpg')" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center text-white font-manrope mb-16 shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Client Testimonials
          </motion.h2>
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`max-w-2xl text-center mx-auto transition-opacity duration-1000 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: index === currentTestimonial ? 1 : 0, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xl text-blue-violet italic font-manrope">"{testimonial.quote}"</p>
                <p className="mt-4 text-white/60 font-semibold">— {testimonial.author}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-midnight to-dark-blue relative">
        <div className="absolute inset-0 -z-10 opacity-10 particle-bg animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl font-bold text-white font-manrope mb-6 shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Business
          </motion.h2>
          <motion.p
            className="text-xl text-blue-violet max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Partner with Qubro to unlock AI-driven innovation.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="relative inline-block bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-pulse transition-all duration-300 ripple"
            >
              Get in Touch
            </a>
            <a
              href="/work"
              className="relative inline-block bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-pulse transition-all duration-300 ripple"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        @keyframes countUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(89, 193, 115, 0.4); }
          50% { box-shadow: 0 0 20px rgba(89, 193, 115, 0.6); }
        }
        @keyframes shadowPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(89, 193, 115, 0.5); }
          50% { box-shadow: 0 0 25px rgba(89, 193, 115, 0.8); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .particle-bg {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.05' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='.1'/%3E%3Ccircle cx='200' cy='200' r='10' fill='%23FFFFFF' opacity='.3'/%3E%3Ccircle cx='600' cy='600' r='15' fill='%23FFFFFF' opacity='.2'/%3E%3Ccircle cx='400' cy='300' r='8' fill='%23FFFFFF' opacity='.25'/%3E%3C/svg%3E");
          background-size: cover;
        }
        .shadow-glow {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 15px rgba(89, 193, 115, 0.4);
        }
        .card-glass {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .shadow-pulse {
          animation: shadowPulse 1.5s ease-in-out infinite;
        }
        .ripple::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        .ripple:active::after {
          width: 300px;
          height: 300px;
        }
        .highlight-outline {
          -webkit-text-stroke: 0.5px white;
          text-stroke: 0.5px white;
          paint-order: stroke fill;
        }
      `}</style>
    </>
  );
};

export default Home;