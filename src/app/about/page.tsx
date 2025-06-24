'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutPage() {
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
      text: 'AbsoluteAI’s AI-driven solutions have revolutionized our workflows, enabling us to scale faster than ever before.',
      author: 'John Smith, VP of Innovation, IBM',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div key="about-page" className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Logo Section */}
      <section className="w-full py-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/logos/absolute logo.jpeg"
              alt="Absolute AI Logo"
              width={224} // Doubled for retina displays (28 * 8)
              height={224} // Doubled for retina displays (28 * 8)
              quality={90} // Higher quality for sharper rendering
              className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-teal-200 shadow-lg hover:shadow-xl transition-shadow duration-300 object-contain"
              priority // For above-the-fold image
            />
          </motion.div>
        </div>
      </section>

      {/* AbsoluteAI at a Glance */}
      <section className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <motion.h2
      className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Absolute AI at a Glance
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
      {[
        {
          icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
          value: '2025',
          label: 'Founded at the dawn of AI',
          color: 'text-teal-600',
          link: null,
        },
        {
          icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2m0-2h10a5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
          value: '5',
          label: 'AI & Web Experts',
          color: 'text-teal-600',
          link: '/careers',
          linkText: 'Join the team',
        },
        {
          icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          value: '5+',
          label: 'Industry-leading client NPS',
          color: 'text-teal-600',
          link: '/clients',
          linkText: 'See our clients',
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg hover:bg-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <svg className={`w-10 h-10 ${item.color} mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
          </svg>
          <p className={`text-4xl font-bold ${item.color}`}>{item.value}</p>
          <p className="text-gray-600 mt-2">
            {item.label}{' '}
            {item.link && (
              <Link href={item.link} className="text-teal-600 font-semibold hover:text-teal-700">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight"
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
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={128} // Doubled for better quality (16 * 8)
                  height={128} // Doubled for better quality (16 * 8)
                  quality={90} // Higher quality
                  className="h-16 w-auto hover:opacity-100 transition duration-300 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight"
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
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={128} // Doubled for better quality (16 * 8)
                  height={128} // Doubled for better quality (16 * 8)
                  quality={90} // Higher quality
                  className="h-16 w-auto hover:opacity-100 transition duration-300 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas to Outcome */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <motion.h2
                className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Accelerating Time to Value
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                When it comes to building software, quality and speed matter. Because let’s face it — software can’t impact the bottom line if it’s not in customers’ hands.
              </motion.p>
              <motion.p
                className="text-xl text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                AbsoluteAI’s small, elite teams ship products faster, period. We minimize the time from ideas to outcomes — without sacrificing quality.
              </motion.p>
              <motion.p
                className="text-xl text-gray-600 mb-8"
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
                <Link href="/work" className="text-teal-600 font-semibold hover:text-teal-700">
                  Check out our work
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="lg:w-1/2 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="AbsoluteAI team working on a project"
                width={672}
                height={384}
                className="w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Continued Impact */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight"
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
                className={`max-w-2xl mx-auto italic text-gray-600 transition-opacity duration-1000 ${
                  index === currentQuote ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: index === currentQuote ? 1 : 0, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
              >
                {`"${quote.text}"`}
                <p className="mt-4 text-gray-900 font-semibold">— {quote.author}</p>
              </motion.blockquote>
            ))}
          </AnimatePresence>
        </div>
      </section> */}

      {/* Leadership Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight"
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
                className="bg-white p-6 rounded-2xl shadow-lg hover:bg-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={leader.img}
                  alt={leader.name}
                  width={256} // Doubled for better quality (32 * 8)
                  height={256} // Doubled for better quality (32 * 8)
                  quality={90} // Higher quality
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-teal-600 font-semibold mb-4">{leader.title}</p>
                <p className="text-gray-600">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-teal-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Partner with Absolute AI Today
          </motion.h2>
          <motion.p
            className="text-xl mb-2 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let’s transform your business with cutting-edge AI, automation, and data solutions.
          </motion.p>
          {/* <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-teal-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/work"
              className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View Our Work
            </Link>
          </motion.div> */}
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