'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import StripeCheckoutButton from '../../components/StripeCheckoutButton';

interface FormData {
  name?: string;
  email: string;
  message?: string;
}

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const newsletterFormRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const data: FormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    // Honeypot spam check
    if (formData.get('_gotcha')) {
      setStatus('Submission blocked (spam detected).');
      setSubmitting(false);
      return;
    }

    // Client-side validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setStatus('Please enter a valid email address.');
      setSubmitting(false);
      return;
    }
    if (!data.message?.trim()) {
      setStatus('Please enter a message.');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Thank you for your interest. Team Absolute AI Consulting will contact you soon.');
        form.reset();
      } else {
        setStatus(result.message || 'Sorry, there was a problem sending your message. Please try again or email us directly.');
      }
    } catch (error) {
      setStatus('Sorry, there was a problem sending your message. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus(null);
    setNewsletterSubmitting(true);

    const form = newsletterFormRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const data: FormData = {
      email: formData.get('email') as string,
    };

    // Honeypot spam check
    if (formData.get('_gotcha')) {
      setNewsletterStatus('Submission blocked (spam detected).');
      setNewsletterSubmitting(false);
      return;
    }

    // Client-side validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setNewsletterStatus('Please enter a valid email address.');
      setNewsletterSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setNewsletterStatus("Thank you! You're now subscribed to our newsletter.");
        form.reset();
      } else {
        setNewsletterStatus(result.message || 'Sorry, there was a problem subscribing. Please try again.');
      }
    } catch (error) {
      setNewsletterStatus('Sorry, there was a problem subscribing. Please try again.');
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <div className="contact-page min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Contact Form Section */}
      <section className="w-full py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-md mx-auto bg-white rounded-xl py-8 px-6 shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Send Us a Message</h2>
            <form
              ref={formRef}
              className="space-y-4"
              onSubmit={handleSubmit}
              autoComplete="on"
            >
              <label className="block relative">
                Your name:
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm"
                  required
                  aria-label="Your Name"
                />
                <svg
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 2 0 00-7 7h14a7 2 0 00-7-7z"
                  />
                </svg>
              </label>
              <label className="block relative">
                Your email:
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm"
                  required
                  aria-label="Email Address"
                />
                <svg
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                  />
                </svg>
              </label>
              <label className="block relative">
                Your message:
                <textarea
                  name="message"
                  placeholder="How can we assist you?"
                  className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm min-h-[100px]"
                  required
                  aria-label="Your Message"
                />
                <svg
                  className="absolute right-2 top-4 w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </label>
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={submitting}
                className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 py-2 rounded-full text-lg font-semibold text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                  submitting ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
                }`}
                aria-label={submitting ? 'Sending message' : 'Send message'}
              >
                {submitting ? 'Sending...' : 'Send'}
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
                role="alert"
              >
                {status}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="w-full py-3">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Connect With Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Follow us on social media for the latest updates on AI, data engineering, and innovation.
          </motion.p>
          <div className="mb-8 flex justify-center">
            <StripeCheckoutButton
              planId="strategy-session"
              className="rounded-full bg-slate-950 px-8 py-4 text-white hover:bg-slate-800 transition-all duration-300"
            >
              Subscribe for a Strategy Session
            </StripeCheckoutButton>
          </div>
          <motion.div
            className="flex flex-row gap-6 justify-center items-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { href: '', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png', alt: 'Instagram logo', label: 'Instagram' },
              { href: 'https://www.facebook.com/profile.php?id=61577701083787', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', alt: 'Facebook logo', label: 'Facebook' },
              { href: 'https://x.com/AbsoluteAICDN', src: 'https://abs.twimg.com/favicons/twitter.3.ico', alt: 'X logo', label: 'X' },
              { href: 'mailto:hello@absoluteaiconsulting.com', src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gmail_Icon_%282013-2020%29.svg', alt: 'Email logo', label: 'Email' },
              { href: 'https://www.linkedin.com/company/absolute-ai-consulting/about/?viewAsMember=true', src: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg', alt: 'LinkedIn logo', label: 'LinkedIn' },
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
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={64}
                  height={64}
                  quality={90}
                  className="h-16 w-16 max-w-[64px] object-contain hover:opacity-90 transition-colors duration-300"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Newsletter
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay informed with the latest insights on AI and innovation.
          </motion.p>
          <motion.div
            className="max-w-md mx-auto bg-white rounded-xl py-6 px-6 shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form
              ref={newsletterFormRef}
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={handleNewsletterSubmit}
              autoComplete="on"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full md:max-w-xl px-4 py-3 rounded-full min-h-[48px] text-gray-800 bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none shadow-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={newsletterSubmitting}
                  className={`mt-4 w-full sm:w-[250px] py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-base font-semibold text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                    newsletterSubmitting ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
                  }`}
                  aria-label={newsletterSubmitting ? 'Subscribing' : 'Subscribe'}
                >
                  {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            </form>
            {newsletterStatus && (
              <motion.div
                className={`mt-4 text-center text-base ${
                  newsletterStatus.includes('Thank you') ? 'text-green-600' : 'text-red-600'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                role="alert"
              >
                {newsletterStatus}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="w-full py-8 bg-gradient-to-br from-teal-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Contact Absolute AI Consulting
          </motion.h2>
          <div>
            Email us:{' '}
            <a
              href="mailto:hello@absoluteaiconsulting.com"
              className="underline text-blue-300 hover:text-blue-400 transition"
              aria-label="Email Absolute AI Consulting"
            >
              hello@absoluteaiconsulting.com
            </a>
          </div>
          <div className="mt-2 text-sm">Absolute AI Consulting, Inc. — Serving global clients</div>
        </div>
      </section>

      <style>{`
        .contact-page {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }
        .contact-page * {
          box-sizing: border-box;
        }
        .w-full {
          width: 100%;
        }
        .shadow-3xl {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}