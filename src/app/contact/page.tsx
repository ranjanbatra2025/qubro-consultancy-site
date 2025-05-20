
'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const newsletterFormRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    if (formData.get('_gotcha')) {
      setStatus('Submission blocked (spam detected).');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xyyqwyap', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('Thank you! Your message has been sent.');
        form.reset();
      } else {
        setStatus('Sorry, there was a problem sending your message. Please try again or email us directly.');
      }
    } catch (err) {
      setStatus('Sorry, there was a problem sending your message. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewsletterStatus(null);
    setNewsletterSubmitting(true);

    const form = newsletterFormRef.current;
    if (!form) return;

    const formData = new FormData(form);

    if (formData.get('_gotcha')) {
      setNewsletterStatus('Submission blocked (spam detected).');
      setNewsletterSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xyyqwyap', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setNewsletterStatus("Thank you! You're now subscribed to our newsletter.");
        form.reset();
      } else {
        setNewsletterStatus('Sorry, there was a problem subscribing. Please try again.');
      }
    } catch (err) {
      setNewsletterStatus('Sorry, there was a problem subscribing. Please try again.');
    } finally {
      setNewsletterSubmitting(false);
    }
  }

  const navLinks = ['Home', 'Services', 'About', 'Contact'];

  return (
    <div key="contact-page">
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
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-full">
            <motion.img
              src="/images/hero1.png"
              alt="Contact Qubro"
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
                Contact Qubro Consulting
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-blue-violet max-w-3xl mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Ready to accelerate your AI adoption or solve a pressing data challenge? Connect with our team today.
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
                  href="/about"
                  className="relative inline-block bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-pulse transition-all duration-300 ripple backdrop-blur-sm"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-midnight relative">
        <div className="absolute inset-0 -z-10 opacity-10 particle-bg animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="max-w-lg mx-auto bg-midnight/50 backdrop-blur-sm border border-midnight rounded-2xl py-10 px-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
          >
            <h2 className="text-3xl font-bold text-white font-manrope mb-6 text-center shadow-glow">Send Us a Message</h2>
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-midnight border border-midnight text-white focus:border-teal-custom focus:outline-none text-lg transition-all"
                  required
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-custom" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md bg-midnight border border-midnight text-white focus:border-teal-custom focus:outline-none text-lg transition-all"
                  required
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-custom" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-md bg-midnight border border-midnight text-white focus:border-teal-custom focus:outline-none text-lg min-h-[120px] transition-all"
                  required
                />
                <svg className="absolute right-3 top-5 w-5 h-5 text-teal-custom" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={submitting}
                className={`w-full bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep py-3 rounded-full text-xl font-semibold text-white shadow-lg transition-all ${
                  submitting ? 'cursor-not-allowed opacity-80' : 'hover:scale-[1.03] hover:shadow-pulse cursor-pointer'
                } backdrop-blur-sm`}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {status && (
              <motion.div
                className="mt-6 text-teal-custom text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {status}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-32 bg-midnight relative">
        <div className="absolute inset-0 -z-10 opacity-10 particle-bg animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl font-bold text-white font-manrope mb-6 shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Connect With Us
          </motion.h2>
          <motion.p
            className="text-xl text-blue-violet mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Follow us on social media for the latest updates on AI, data engineering, and innovation.
          </motion.p>
          <motion.div
            className="flex gap-8 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { href: 'https://instagram.com/qubro', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png', alt: 'Instagram logo' },
              { href: 'https://facebook.com/qubro', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', alt: 'Facebook logo' },
              { href: 'https://x.com/qubro', src: 'https://upload.wikimedia.org/wikipedia/commons/6/60/X_logo_2023_%28white%29.png', alt: 'X logo' },
              { href: 'mailto:hello@qubro.co', src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gmail_Icon_%282013-2020%29.svg', alt: 'Gmail logo' },
              { href: 'https://linkedin.com/company/qubro', src: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg', alt: 'LinkedIn logo' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotateY: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className="h-12 max-w-[48px] animate-pulse-glow hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-midnight relative">
        <div className="absolute inset-0 -z-10 opacity-10 particle-bg animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl font-bold text-white font-manrope mb-6 shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Newsletter
          </motion.h2>
          <motion.p
            className="text-xl text-blue-violet mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay in the loop. Get the latest insights on growth and transformation.
          </motion.p>
          <motion.div
            className="max-w-md mx-auto bg-midnight/50 backdrop-blur-sm border border-midnight rounded-2xl py-8 px-6 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
          >
            <form
              ref={newsletterFormRef}
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={handleNewsletterSubmit}
              autoComplete="off"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md bg-midnight border border-midnight text-white focus:border-teal-custom focus:outline-none text-lg transition-all"
                  required
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-custom" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={newsletterSubmitting}
                className={`bg-gradient-to-r from-teal-custom via-purple-light to-purple-deep py-3 px-6 rounded-full text-lg font-semibold text-white shadow-lg transition-all ${
                  newsletterSubmitting ? 'cursor-not-allowed opacity-80' : 'hover:scale-[1.03] hover:shadow-pulse cursor-pointer'
                } backdrop-blur-sm`}
              >
                {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {newsletterStatus && (
              <motion.div
                className="mt-6 text-teal-custom text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {newsletterStatus}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-12 bg-midnight relative">
        <div className="absolute inset-0 -z-10 opacity-10 particle-bg animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <div>
            Or email us:{' '}
            <a href="mailto:hello@qubro.co" className="underline text-teal-custom hover:text-purple-light transition">
              hello@qubro.co
            </a>
          </div>
          <div className="mt-2">Qubro Consulting, Inc. — Serving global clients</div>
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
