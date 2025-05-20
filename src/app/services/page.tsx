'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Services() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const heroContent = {
    image: '/images/hero5.png',
    text: 'Transforming Businesses with AI',
    description: 'Discover how Qubro Consulting’s expertise in AI, automation, and data solutions can drive innovation and growth for your business.',
  };

  const navLinks = ['Home', 'Services', 'About', 'Contact'];

  return (
    <div key="services-page">
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

      {/* Hero Section */}
      <section className="relative h-screen bg-midnight overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10 particle-bg animate-float"></div>
        <motion.div
          className="absolute inset-0 opacity-100 z-10"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-full">
            <motion.img
              src={heroContent.image}
              alt={heroContent.text}
              className="w-full h-full object-cover"
              style={{ minHeight: '100vh', objectPosition: 'center' }}
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-30">
              <motion.h1
                className="text-2xl sm:text-3xl font-semibold text-white font-manrope mb-4 shadow-glow uppercase"
                initial={{ y: 20, opacity: 0, letterSpacing: '-0.05em' }}
                animate={{ y: 0, opacity: 1, letterSpacing: '0em' }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="highlight-outline">{heroContent.text}</span>
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-blue-violet max-w-3xl mt-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="highlight-outline">{heroContent.description}</span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
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
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                id: 'generative-ai',
                title: 'Generative AI',
                desc: 'Harness the power of Generative AI to create dynamic content, personalize customer experiences, and automate complex workflows.',
                icon: 'M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M6 12h2m8 0h2m-6-6v2m0 8v2m-4.24-4.24l1.42 1.42m4.24-4.24l-1.42 1.42m0 4.24l1.42-1.42m-4.24 0l-1.42-1.42',
                features: ['AI-powered content creation', 'Custom model development', 'Workflow automation'],
                value: 'Accelerate innovation and reduce costs with scalable AI solutions.',
                color: 'text-teal-custom',
              },
              {
                id: 'agentic-systems',
                title: 'Agentic Systems',
                desc: 'Deploy intelligent, autonomous agents that optimize decision-making and streamline operations.',
                icon: 'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M8 8.5l1.5 1.5m6 0l1.5-1.5m-9 7l1.5-1.5m6 0l1.5 1.5',
                features: ['Autonomous decision-making', 'Process optimization', 'Real-time adaptability'],
                value: 'Boost efficiency and agility with intelligent automation.',
                color: 'text-purple-light',
              },
              {
                id: 'data-engineering',
                title: 'Data Engineering',
                desc: 'Build scalable data architectures and pipelines to power AI and analytics.',
                icon: 'M5 12h14m-7-7v14m-7-7l2-2m0 4l-2-2m12-2l-2 2m0-4l2 2',
                features: ['Scalable data pipelines', 'Cloud-native architectures', 'Real-time analytics'],
                value: 'Unlock data-driven decisions with robust infrastructure.',
                color: 'text-purple-deep',
              },
              {
                id: 'digital-marketing',
                title: 'Digital Marketing',
                desc: 'Amplify your brand’s reach with data-driven digital marketing strategies.',
                icon: 'M3 8l4-4 4 4m-4 12l4 4 4-4m-8-8h12m-2 4c1.5 0 2.5-1 2.5-2.5s-1-2.5-2.5-2.5m-5 0c-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5',
                features: ['AI-targeted ad campaigns', 'SEO and content strategy', 'Social media marketing'],
                value: 'Boost brand visibility and ROI with precision marketing.',
                color: 'text-teal-custom',
              },
              {
                id: 'product-development',
                title: 'Product Development',
                desc: 'Transform ideas into market-ready products with our end-to-end development services.',
                icon: 'M12 4l2 4h8l-2 4 2 4h-8l-2 4-2-4H4l2-4-2-4h8l2-4z M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0',
                features: ['Rapid prototyping', 'Agile development cycles', 'AI-driven product features'],
                value: 'Launch innovative products faster with seamless development.',
                color: 'text-purple-light',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                id={item.id}
                className="p-8 card-glass rounded-lg hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              >
                <div className="flex justify-center mb-4">
                  <svg
                    className={`w-10 h-10 ${item.color}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white font-manrope mb-4 shadow-glow">{item.title}</h3>
                <p className="text-blue-violet mb-6">{item.desc}</p>
                <ul className="text-neutral-400 list-disc list-inside mb-6">
                  {item.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <p className={`font-semibold ${item.color}`}>{item.value}</p>
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
    </div>
  );
}