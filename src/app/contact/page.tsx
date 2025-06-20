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
      {/* Logo Section */}
      <section className="w-full py-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.img
            src="/logos/absolute logo.jpeg"
            alt="Absolute AI Logo"
            className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-teal-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="max-w-md mx-auto bg-white rounded-xl py-8 px-6 shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Send Us a Message</h2>
            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none text-base transition-all duration-200 hover:bg-gray-100"
                  required
                  aria-label="Your Name"
                />
                <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none text-base transition-all duration-200 hover:bg-gray-100"
                  required
                  aria-label="Email Address"
                />
                <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none text-base min-h-[100px] transition-all duration-200 hover:bg-gray-100"
                  required
                  aria-label="Your Message"
                />
                <svg className="absolute right-2 top-4 w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={submitting}
                className={`w-full bg-gradient-to-r from-teal-500 to-teal-600 py-2 rounded-full text-lg font-semibold text-white hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                  submitting ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
                }`}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {status && (
              <motion.div
                className={`mt-4 text-center text-base ${
                  status.includes('Thank you') ? 'text-green-600' : 'text-red-600'
                }`}
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
      <section className="w-full py-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Connect With Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Follow us on social media for the latest updates on AI, data engineering, and innovation.
          </motion.p>
          <motion.div
            className="flex flex-row gap-6 justify-center items-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { href: 'https://instagram.com/AbsoluteAI', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png', alt: 'Instagram logo', label: 'Instagram' },
              { href: 'https://facebook.com/AbsoluteAI', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', alt: 'Facebook logo', label: 'Facebook' },
              { href: 'https://x.com/AbsoluteAI', src: 'https://upload.wikimedia.org/wikipedia/commons/6/60/X_logo_2023_%28white%29.png', alt: 'X logo', label: 'X' },
              { href: 'mailto:hello@AbsoluteAI.co', src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gmail_Icon_%282013-2020%29.svg', alt: 'Gmail logo', label: 'Email' },
              { href: 'https://linkedin.com/company/AbsoluteAI', src: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg', alt: 'LinkedIn logo', label: 'LinkedIn' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.label}`}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className="h-16 w-16 max-w-[64px] object-contain hover:opacity-90 transition duration-300"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Newsletter
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay in the loop. Get the latest insights on growth and transformation.
          </motion.p>
          <motion.div
            className="max-w-md mx-auto bg-white rounded-xl py-6 px-6 shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              ref={newsletterFormRef}
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={handleNewsletterSubmit}
              autoComplete="off"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none text-base transition-all duration-200 hover:bg-gray-100"
                  required
                  aria-label="Email Address for Newsletter"
                />
                <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={newsletterSubmitting}
                className={`bg-gradient-to-r from-teal-500 to-teal-600 py-2 px-5 rounded-full text-base font-semibold text-white hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                  newsletterSubmitting ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
                }`}
              >
                {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {newsletterStatus && (
              <motion.div
                className={`mt-4 text-center text-base ${
                  newsletterStatus.includes('Thank you') ? 'text-green-600' : 'text-red-600'
                }`}
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
      <section className="w-full py-8 bg-gradient-to-br from-teal-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div>
            Or email us:{' '}
            <a href="mailto:hello@AbsoluteAI.co" className="underline text-teal-300 hover:text-teal-400 transition">
              hello@AbsoluteAI.co
            </a>
          </div>
          <div className="mt-2 text-sm">Absolute AI, Inc. — Serving global clients</div>
        </div>
      </section>

      <style jsx>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }
        * {
          box-sizing: border-box;
        }
        .w-full {
          width: 100%;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}