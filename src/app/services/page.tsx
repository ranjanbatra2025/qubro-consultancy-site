'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Services() {
  const heroContent = {
    image: '/images/hero5.png',
    text: 'Transforming Businesses with AI',
    description: 'Discover how AbsoluteAI Consulting’s expertise in AI, automation, and data solutions can drive innovation and growth for your business.',
  };

  return (
    <div key="services-page" className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden pt-16">
        <motion.div
          className="absolute inset-0 opacity-100 z-10"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <div className="relative w-full h-full">
            <motion.img
              src={heroContent.image}
              alt={heroContent.text}
              className="w-full h-full object-cover"
              style={{ minHeight: '100vh', objectPosition: 'center' }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <motion.h1
                className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {heroContent.text}
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-100 max-w-3xl mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {heroContent.description}
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link
                  href="/contact"
                  className="bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 text-center mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive AI services designed to transform your business operations and drive sustainable growth.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'generative-ai',
                title: 'Generative AI',
                desc: 'Harness the power of Generative AI to create dynamic content, personalize customer experiences, and automate complex workflows.',
                icon: 'https://ext.same-assets.com/2951873307/4107728250.svg',
                features: ['AI-powered content creation', 'Custom model development', 'Workflow automation'],
                value: 'Accelerate innovation and reduce costs with scalable AI solutions.',
                color: 'text-teal-600',
              },
              {
                id: 'agentic-systems',
                title: 'Agentic Systems',
                desc: 'Deploy intelligent, autonomous agents that optimize decision-making and streamline operations.',
                icon: 'https://ext.same-assets.com/2951873307/1913257418.svg',
                features: ['Autonomous decision-making', 'Process optimization', 'Real-time adaptability'],
                value: 'Boost efficiency and agility with intelligent automation.',
                color: 'text-teal-600',
              },
              {
                id: 'data-engineering',
                title: 'Data Engineering',
                desc: 'Build scalable data architectures and pipelines to power AI and analytics.',
                icon: 'https://ext.same-assets.com/2951873307/2281295613.svg',
                features: ['Scalable data pipelines', 'Cloud-native architectures', 'Real-time analytics'],
                value: 'Unlock data-driven decisions with robust infrastructure.',
                color: 'text-teal-600',
              },
              {
                id: 'digital-marketing',
                title: 'Digital Marketing',
                desc: 'Amplify your brand’s reach with data-driven digital marketing strategies.',
                icon: 'https://ext.same-assets.com/2951873307/2330954298.svg',
                features: ['AI-targeted ad campaigns', 'SEO and content strategy', 'Social media marketing'],
                value: 'Boost brand visibility and ROI with precision marketing.',
                color: 'text-teal-600',
              },
              {
                id: 'product-development',
                title: 'Product Development',
                desc: 'Transform ideas into market-ready products with our end-to-end development services.',
                icon: 'https://ext.same-assets.com/2951873307/1922649866.svg',
                features: ['Rapid prototyping', 'Agile development cycles', 'AI-driven product features'],
                value: 'Launch innovative products faster with seamless development.',
                color: 'text-teal-600',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                id={item.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:bg-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-16 h-16 transition-transform hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <ul className="text-gray-600 list-disc list-inside mb-4">
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
      <section className="bg-gradient-to-br from-teal-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Partner with Absolute AI Today
          </motion.h2>
          <motion.p
            className="text-xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let’s transform your business with cutting-edge AI, automation, and data solutions.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-teal-500 text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/work"
              className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View Our Work
            </Link>
          </motion.div>
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