
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: 'There were 3 people each on iOS and Android, but it felt like there were 2x as many people based on their deliverables.',
      author: 'Product Owner, Leading North American Bank',
    },
    {
      text: 'Extremely impressive that we were able to get so many value-add features out the door on time. It’s clear we made the right choice in partners.',
      author: 'CEO, CEATI International',
    },
    {
      text: 'Qubro’s AI-driven solutions have revolutionized our workflows, enabling us to scale faster than ever before.',
      author: 'John Smith, VP of Innovation, IBM',
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const navLinks = ['Home', 'Services', 'About', 'Contact'];

  return (
    <div key="about-page">
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

      {/* Header Section */}
      <section className="relative h-screen bg-midnight overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10 particle-bg animate-float"></div>
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-full">
            <motion.img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Qubro Team"
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
                A global team of teams, powered by AI.
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-blue-violet max-w-3xl mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                We unite human expertise with advanced AI capabilities to create extraordinary client outcomes.
              </motion.p>
              <motion.div
                className="mt-8 flex gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link
                  href="/contact"
                  className="relative inline-block bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-pulse transition-all duration-300 ripple backdrop-blur-sm"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="relative inline-block bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-pulse transition-all duration-300 ripple backdrop-blur-sm"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Qubro at a Glance */}
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
            Qubro Consultancy at a Glance
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
                value: '2025',
                label: 'Founded at the dawn of AI',
                color: 'text-teal-custom',
                link: null,
              },
              {
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                value: '10',
                label: 'Digital experts',
                color: 'text-purple-light',
                link: '/careers',
                linkText: 'Join the team',
              },
              {
                icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                value: '5+',
                label: 'Industry-leading client NPS',
                color: 'text-purple-deep',
                link: '/clients',
                linkText: 'See our clients',
              },
              {
                icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z',
                value: '3',
                label: 'Global studios',
                color: 'text-teal-custom',
                link: '/locations',
                linkText: 'View our locations',
              },
              {
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                value: '5+',
                label: 'Projects successfully delivered',
                color: 'text-purple-light',
                link: '/work',
                linkText: 'Explore our work',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center card-glass rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              >
                <svg className={`w-10 h-10 ${item.color} mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                </svg>
                <p className={`text-4xl font-bold ${item.color}`}>{item.value}</p>
                <p className="text-blue-violet mt-2">
                  {item.label}{' '}
                  {item.link && (
                    <Link href={item.link} className="text-teal-custom font-semibold hover:text-purple-light">
                      {item.linkText}
                    </Link>
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
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
            Trusted Long-Term Partners
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: '/logos/logo.webp', alt: 'SEO Harbour logo' },
              { src: '/logos/logo2.webp', alt: 'LaunchPal AI logo' },
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.1, rotateY: 10 }}
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-16 animate-pulse-glow hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Certifications */}
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
            Partner Certifications
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: '/logos/logo.webp', alt: 'AWS Partner logo' },
              { src: '/logos/logo2.webp', alt: 'Google Cloud Partner logo' },
              { src: '/images/microsoft-partner.png', alt: 'Microsoft Partner logo' },
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.1, rotateY: 10 }}
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-16 animate-pulse-glow hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas to Outcome */}
      <section className="py-32 bg-midnight relative">
        <div className="absolute inset-0 -z-10 opacity-10 particle-bg animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <motion.h2
                className="text-5xl font-bold text-white font-manrope mb-6 shadow-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Accelerating Time to Value
              </motion.h2>
              <motion.p
                className="text-xl text-blue-violet mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                When it comes to building software, quality and speed matter. Because let's face it — software can't impact the bottom line if it's not in customers' hands.
              </motion.p>
              <motion.p
                className="text-xl text-blue-violet mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Qubro's small, elite teams ship products faster, period. We minimize the time from ideas to outcomes — without sacrificing quality.
              </motion.p>
              <motion.p
                className="text-xl text-blue-violet mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Speed is quantifiable, and as such, we measure the productivity and delivery of our teams across every partner and every project.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link href="/work" className="text-teal-custom font-semibold hover:text-purple-light">
                  Check out our work
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="lg:w-1/2 rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="Qubro team working on a project"
                className="w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Continued Impact */}
      <section className="py-32 bg-midnight relative">
        <div className="absolute inset-0 -z-10 opacity-10 particle-bg animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold text-white font-manrope mb-8 shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            And we continue to help our clients build even stronger teams.
          </motion.h2>
          <AnimatePresence>
            {quotes.map((quote, index) => (
              <motion.blockquote
                key={index}
                className={`max-w-2xl mx-auto italic text-blue-violet transition-opacity duration-1000 ${
                  index === currentQuote ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: index === currentQuote ? 1 : 0, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
              >
                "{quote.text}"
                <p className="mt-4 text-white/60 font-semibold">— {quote.author}</p>
              </motion.blockquote>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Leadership Section */}
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
            Our Leadership
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: 'John Doe',
                title: 'CEO & Founder',
                desc: 'Visionary leader driving AI innovation with over 20 years in tech.',
                img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
              },
              {
                name: 'Jane Smith',
                title: 'CTO',
                desc: 'Expert in AI and data engineering, architecting scalable solutions.',
                img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop',
              },
              {
                name: 'Alex Brown',
                title: 'COO',
                desc: 'Streamlines operations to deliver projects with unmatched efficiency.',
                img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop',
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                className="card-glass rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              >
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-white font-manrope mb-2">{leader.name}</h3>
                <p className="text-teal-custom font-semibold mb-4">{leader.title}</p>
                <p className="text-blue-violet">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
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
            Partner with Qubro Today
          </motion.h2>
          <motion.p
            className="text-xl text-blue-violet max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let’s transform your business with cutting-edge AI, automation, and data solutions.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="relative inline-block bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-pulse transition-all duration-300 ripple backdrop-blur-sm"
            >
              Contact Us
            </Link>
            <Link
              href="/work"
              className="relative inline-block bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-pulse transition-all duration-300 ripple backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(89, 193, 115, 0.4); }
          50% { box-shadow: 0 0 20px rgba(89, 193, 115, 0.6); }
        }
        @keyframes shadowPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(89, 193, 115, 0.5); }
          50% { box-shadow: 0 0 25px rgba(89, 193, 115, 0.8); }
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
      `}</style>
    </div>
  );
}
