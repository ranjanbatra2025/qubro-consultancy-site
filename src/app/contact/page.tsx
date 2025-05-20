'use client';
import React, { useState, useRef } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const newsletterFormRef = useRef<HTMLFormElement>(null);

  // Style for headings: white text, purple background
  const headingTextStyle = {
    color: 'white',
    backgroundColor: '#7B68EE', // purple
    padding: '0.2em 0.4em',    // padding around the text
    borderRadius: '4px',       // optional: rounded corners
    display: 'inline-block',   // ensure background wraps text and allows centering
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    if (formData.get("_gotcha")) {
      setStatus("Submission blocked (spam detected).");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xyyqwyap", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Thank you! Your message has been sent.");
        form.reset();
      } else {
        setStatus("Sorry, there was a problem sending your message. Please try again or email us directly.");
      }
    } catch (err) {
      setStatus("Sorry, there was a problem sending your message. Please try again or email us directly.");
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

    if (formData.get("_gotcha")) {
      setNewsletterStatus("Submission blocked (spam detected).");
      setNewsletterSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xyyqwyap", { // Assuming same endpoint for newsletter
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setNewsletterStatus("Thank you! You're now subscribed to our newsletter.");
        form.reset();
      } else {
        setNewsletterStatus("Sorry, there was a problem subscribing. Please try again.");
      }
    } catch (err) {
      setNewsletterStatus("Sorry, there was a problem subscribing. Please try again.");
    } finally {
      setNewsletterSubmitting(false);
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[60vh] py-24 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-fuchsia-900/50 animate-[pulse_15s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 particle-bg" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.05' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='.1'/%3E%3Ccircle cx='200' cy='200' r='10' fill='%23ffffff' opacity='.3'/%3E%3Ccircle cx='600' cy='600' r='15' fill='%23ffffff' opacity='.2'/%3E%3Ccircle cx='400' cy='300' r='8' fill='%23ffffff' opacity='.25'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
          }}></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-[fadeIn_1s_ease-out]">
          {/* Removed: bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-400 */}
          <span style={headingTextStyle}>Contact Qubro Consulting</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl px-4 animate-[fadeIn_1.2s_ease-out]">
          Ready to accelerate your AI adoption or solve a pressing data challenge? Connect with our team today.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-lg mx-auto bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-2xl py-10 px-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {/* Removed: text-white */}
              <span style={headingTextStyle}>Send Us a Message</span>
            </h2>
            <form
              ref={formRef}
              className="space-y-6"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:border-blue-400 focus:outline-none text-lg transition-all"
                  required
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:border-blue-400 focus:outline-none text-lg transition-all"
                  required
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path>
                </svg>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:border-blue-400 focus:outline-none text-lg min-h-[120px] transition-all"
                  required
                />
                <svg className="absolute right-3 top-5 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
              </div>
              <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={submitting}
                className={`w-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 py-3 rounded-full text-xl font-semibold shadow-lg text-white transition-all ${
                  submitting
                    ? "cursor-not-allowed opacity-80"
                    : "hover:scale-[1.03] hover:shadow-xl cursor-pointer"
                }`}
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            {status && (
              <div className="mt-6 text-green-400 text-center animate-[fadeIn_0.5s_ease-out]">{status}</div>
            )}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-[fadeIn_1s_ease-out]">
            {/* Removed: text-white */}
            <span style={headingTextStyle}>Connect With Us</span>
          </h2>
          <p className="text-xl text-neutral-200 mb-12 max-w-3xl mx-auto animate-[fadeIn_1.2s_ease-out]">
            Follow us on social media for the latest updates on AI, data engineering, and innovation.
          </p>
          <div className="flex gap-8 justify-center flex-wrap">
            <a href="https://instagram.com/qubro" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram logo"
                className="h-12 max-w-[48px] grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
              />
            </a>
            <a href="https://facebook.com/qubro" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook logo"
                className="h-12 max-w-[48px] grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
              />
            </a>
            <a href="https://x.com/qubro" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/60/X_logo_2023_%28white%29.png" // White X logo for dark backgrounds
                alt="X logo"
                className="h-12 max-w-[48px] grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
              />
            </a>
            <a href="mailto:hello@qubro.co" className="hover:scale-110 transition-transform duration-300">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Gmail_Icon_%282013-2020%29.svg"
                alt="Gmail logo"
                className="h-12 max-w-[48px] grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
              />
            </a>
            <a href="https://linkedin.com/company/qubro" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="LinkedIn logo"
                className="h-12 max-w-[48px] grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-[fadeIn_1s_ease-out]">
            {/* Removed: text-white */}
            <span style={headingTextStyle}>Newsletter</span>
          </h2>
          <p className="text-xl text-neutral-200 mb-12 max-w-3xl mx-auto animate-[fadeIn_1.2s_ease-out]">
            Stay in the loop. Get the latest insights on growth and transformation.
          </p>
          <div className="max-w-md mx-auto bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-2xl py-8 px-6 shadow-xl">
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
                  className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:border-blue-400 focus:outline-none text-lg transition-all"
                  required
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path>
                </svg>
              </div>
              <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={newsletterSubmitting}
                className={`bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 py-3 px-6 rounded-full text-lg font-semibold shadow-lg text-white transition-all ${
                  newsletterSubmitting
                    ? "cursor-not-allowed opacity-80"
                    : "hover:scale-[1.03] hover:shadow-xl cursor-pointer"
                }`}
              >
                {newsletterSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {newsletterStatus && (
              <div className="mt-6 text-green-400 text-center animate-[fadeIn_0.5s_ease-out]">{newsletterStatus}</div>
            )}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 text-center text-neutral-400">
          <div>
            Or email us:{" "}
            <a href="mailto:hello@qubro.co" className="underline hover:text-blue-400 transition">
              hello@qubro.co
            </a>
          </div>
          <div className="mt-2">Qubro Consulting, Inc. — Serving global clients</div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .particle-bg {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </>
  );
}