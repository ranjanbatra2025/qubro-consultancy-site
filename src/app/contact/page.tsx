'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
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

  return (
    <div key="contact-page" className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden pt-16">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-full">
            <motion.img
              src="/images/hero1.png"
              alt="Contact AbsoluteAI"
              className="w-full h-full object-cover"
              style={{ minHeight: '100vh', objectPosition: 'center' }}
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-30">
              <motion.h1
                className="text-4xl sm:text-5xl font-extrabold text-white mb-16 tracking-tight"
                initial={{ y: 20, opacity: 0, letterSpacing: '-0.05em' }}
                animate={{ y: 0, opacity: 1, letterSpacing: '0em' }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Contact Absolute AI
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-100 max-w-3xl mt-4"
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
                  className="bg-teal-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="max-w-lg mx-auto bg-white rounded-2xl py-10 px-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Send Us a Message</h2>
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 text-gray-900 focus:border-teal-500 focus:outline-none text-lg transition-all"
                  required
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 text-gray-900 focus:border-teal-500 focus:outline-none text-lg transition-all"
                  required
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 text-gray-900 focus:border-teal-500 focus:outline-none text-lg min-h-[120px] transition-all"
                  required
                />
                <svg className="absolute right-3 top-5 w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={submitting}
                className={`w-full bg-teal-500 py-3 rounded-full text-xl font-semibold text-white hover:bg-teal-600 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg ${
                  submitting ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
                }`}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {status && (
              <motion.div
                className="mt-6 text-teal-600 text-center"
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Connect With Us
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
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
              { href: 'https://instagram.com/AbsoluteAI', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png', alt: 'Instagram logo' },
              { href: 'https://facebook.com/AbsoluteAI', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', alt: 'Facebook logo' },
              { href: 'https://x.com/AbsoluteAI', src: 'https://upload.wikimedia.org/wikipedia/commons/6/60/X_logo_2023_%28white%29.png', alt: 'X logo' },
              { href: 'mailto:hello@AbsoluteAI.co', src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gmail_Icon_%282013-2020%29.svg', alt: 'Gmail logo' },
              { href: 'https://linkedin.com/company/AbsoluteAI', src: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg', alt: 'LinkedIn logo' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className="h-12 max-w-[48px] hover:opacity-100 transition duration-300"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Newsletter
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay in the loop. Get the latest insights on growth and transformation.
          </motion.p>
          <motion.div
            className="max-w-md mx-auto bg-white rounded-2xl py-8 px-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 text-gray-900 focus:border-teal-500 focus:outline-none text-lg transition-all"
                  required
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={newsletterSubmitting}
                className={`bg-teal-500 py-3 px-6 rounded-full text-lg font-semibold text-white hover:bg-teal-600 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg ${
                  newsletterSubmitting ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
                }`}
              >
                {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {newsletterStatus && (
              <motion.div
                className="mt-6 text-teal-600 text-center"
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
      <section className="py-12 bg-gradient-to-br from-teal-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            Or email us:{' '}
            <a href="mailto:hello@AbsoluteAI.co" className="underline text-teal-300 hover:text-teal-400 transition">
              hello@AbsoluteAI.co
            </a>
          </div>
          <div className="mt-2">Absolute AI, Inc. — Serving global clients</div>
        </div>
      </section>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}