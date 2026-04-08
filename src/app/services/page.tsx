'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Added import for Image component
import { motion } from 'framer-motion';
import StripeCheckoutButton from '../../components/StripeCheckoutButton';

export default function Services() {
  return (
    <div key="services-page" className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Logo Section */}
      {/* Services Grid */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 text-center mb-6 tracking-tight"
           
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                id: 'generative-ai',
                title: 'Generative AI',
                desc: 'Harness the power of Generative AI to create dynamic content, personalize customer experiences, and automate complex workflows.',
                icon: '/images/1.png',
                features: ['AI-powered content creation', 'Custom model development', 'Workflow automation'],
                value: 'Accelerate innovation and reduce costs with scalable AI solutions.',
                color: 'text-teal-600',
              },
              {
                id: 'agentic-systems',
                title: 'Agentic Systems',
                desc: 'Deploy intelligent, autonomous agents that optimize decision-making and streamline operations.',
                icon: '/images/2.png',
                features: ['Autonomous decision-making', 'Process optimization', 'Real-time adaptability'],
                value: 'Boost efficiency and agility with intelligent automation.',
                color: 'text-teal-600',
              },
              {
                id: 'data-engineering',
                title: 'Data Engineering',
                desc: 'Build scalable data architectures and pipelines to power AI and analytics.',
                icon: '/images/3.png',
                features: ['Scalable data pipelines', 'Cloud-native architectures', 'Real-time analytics'],
                value: 'Unlock data-driven decisions with robust infrastructure.',
                color: 'text-teal-600',
              },
              {
                id: 'digital-marketing',
                title: 'Digital Marketing',
                desc: 'Amplify your brand’s reach with data-driven digital marketing strategies.',
                icon: '/images/4.png',
                features: ['AI-targeted ad campaigns', 'SEO and content strategy', 'Social media marketing'],
                value: 'Boost brand visibility and ROI with precision marketing.',
                color: 'text-teal-600',
              },
              {
                id: 'product-development',
                title: 'Product Development',
                desc: 'Transform ideas into market-ready products with our end-to-end development services.',
                icon: '/images/5.png',
                features: ['Rapid prototyping', 'Agile development cycles', 'AI-driven product features'],
                value: 'Launch innovative products faster with seamless development.',
                color: 'text-teal-600',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                id={item.id}
                className="bg-white p-10 rounded-3xl shadow-xl hover:bg-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="flex justify-center mb-10 h-80 w-full items-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={500}
                    height={500}
                    quality={100}
                    className="h-full w-full transition-transform duration-500 hover:scale-110 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{item.title}</h3>
                <p className="text-lg text-gray-600 mb-6 text-center">{item.desc}</p>
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
      <section className="w-full bg-gradient-to-br from-teal-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-extrabold mb-6 tracking-tight"
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
            <StripeCheckoutButton
              planId="strategy-session"
              className="bg-slate-950 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full md:w-80 h-16"
            >
              Subscribe for Strategy Session
            </StripeCheckoutButton>
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

      <style>{`
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