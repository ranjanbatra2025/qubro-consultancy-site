'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';



const logos = [
  { src: '/logos/logo.webp', alt: 'SEO Harbour' },
  { src: '/logos/logo2.webp', alt: 'LaunchPal AI' },
  { src: '/logos/azorus.png', alt: 'Azorus' },
  { src: '/logos/overhaulconsulting.png', alt: 'Overhaul Consulting' },
];

const services = [
  {
    title: 'AI-Driven Efficiency',
    desc: 'Streamline operations with intelligent automation.',
    icon: '/images/1.png',
    link: '/services#ai-efficiency',
  },
  {
    title: 'Venture Studio',
    desc: 'Partnering to Launch your startup.',
    icon: '/images/2.png',
    link: '/services#process-refinement',
  },
  {
    title: 'AI Digital Marketing',
    desc: 'Implement smart marketing tools.',
    icon: '/images/3.png',
    link: '/services#digital-marketing',
  },
  {
    title: 'AI for Diversification',
    desc: 'Explore new opportunities with AI insights.',
    icon: '/images/4.png',
    link: '/services#diversification',
  },
  {
    title: 'AI Product Development',
    desc: 'End-to-end AI solution implementation.',
    icon: '/images/5.png',
    link: '/services#product-development',
  },
  {
    title: 'Agentic Workforce',
    desc: 'Develop autonomous AI agents.',
    icon: '/images/6.png',
    link: '/services#agentic-workforce',
  },
];

export default function Home() {
  // Testimonial rotation removed (not used in current markup)

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header id="home" className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8 h-48 w-64 overflow-hidden rounded-xl bg-[#030310] shadow-2xl md:h-56 md:w-80">
            <Image
              src="/logos/absolute%20logo.jpeg"
              alt="Absolute AI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Absolute AI: Transforming Businesses With AI
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Expert AI consulting and development to unlock efficiency, innovation, and growth.
          </p>

          <div className="mt-12 md:mt-16">
            <h2 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
              Pioneering AI for Your Success
            </h2>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Absolute AI, based in Halifax, NS, specializes in helping organizations and startups leverage
              artificial intelligence for enhanced efficiency, process optimization, cost reduction, and business diversification.
            </p>
          </div>
        </div>
      </header>

      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our AI Expertise & Solutions
          </motion.h2>
          <motion.p
            className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive AI services designed to transform your business operations and drive sustainable growth.
          </motion.p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col rounded-2xl bg-white px-8 pb-4 pt-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-teal-50 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Link href={item.link} className="flex flex-grow flex-col">
                  <div className="mx-auto mb-8 flex h-72 w-full items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={500}
                      height={500}
                      quality={100}
                      className="h-full w-full object-contain transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mb-4 flex-grow text-center text-lg text-gray-600">{item.desc}</p>
                  <span className="mb-4 block text-center font-semibold text-teal-500 transition-colors hover:text-teal-600">
                    Learn More →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="mb-12 text-center text-4xl font-extrabold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Trusted by Leading Brands
          </motion.h2>
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-gray-50 to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-gray-100 to-transparent" />
            <motion.div className="flex whitespace-nowrap">
              {logos.map((logo) => (
                <motion.div key={logo.alt} className="mx-20" whileHover={{ scale: 1.15 }}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={80}
                    quality={90}
                    className="h-20 w-auto object-contain transition-transform hover:scale-110"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="mb-12 text-4xl font-extrabold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              { value: '5+', label: 'AI Projects Delivered' },
              { value: '3+', label: 'Industries Served' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-teal-50 hover:shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-5xl font-extrabold text-teal-600">{item.value}</p>
                <p className="mt-2 text-lg text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-br from-teal-800 to-gray-900 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="mb-6 text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="mx-auto mb-12 max-w-3xl text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let’s discuss how Absolute AI Consulting can tailor intelligent solutions for your unique challenges.
          </motion.p>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <Link
              href="/pricing"
              className="flex h-16 w-full items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-center text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:w-80"
            >
              View Subscription Pricing
            </Link>
            <a
              href="tel:9027199908"
              className="flex h-16 w-full items-center justify-center gap-4 rounded-full bg-orange-600 px-8 py-4 text-center transition-all duration-300 hover:scale-105 hover:bg-orange-700 hover:shadow-lg md:w-80"
              aria-label="Call Absolute AI Consulting"
            >
              <Image
                src="https://ext.same-assets.com/2951873307/1972640405.svg"
                alt="Phone"
                width={24}
                height={24}
                quality={90}
                className="h-6 w-6 object-contain brightness-0 invert"
              />
              <div className="text-left">
                <div>902 719 9908</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
