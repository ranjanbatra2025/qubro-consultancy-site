'use client';
import React from "react";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] py-24 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="w-full h-full bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-fuchsia-900/50 animate-[pulse_15s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 particle-bg" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.05' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='.1'/%3E%3Ccircle cx='200' cy='200' r='10' fill='%23ffffff' opacity='.3'/%3E%3Ccircle cx='600' cy='600' r='15' fill='%23ffffff' opacity='.2'/%3E%3Ccircle cx='400' cy='300' r='8' fill='%23ffffff' opacity='.25'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
          }}></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-400 mb-4 shadow-md animate-[fadeIn_1s_ease-out]">
          Expert craftspeople. At your service.
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-400 mb-6 animate-[fadeIn_1.2s_ease-out]">
          Our Services
        </h2>
        <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl px-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-fuchsia-300 hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.4s_ease-out]">
          Discover how Qubro Consulting’s expertise in AI, automation, and data solutions can drive innovation and growth for your business.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Generative AI */}
            <div className="p-8 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 animate-[fadeIn_0.8s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M6 12h2m8 0h2m-6-6v2m0 8v2m-4.24-4.24l1.42 1.42m4.24-4.24l-1.42 1.42m0 4.24l1.42-1.42m-4.24 0l-1.42-1.42" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-100 mb-4 text-shadow-none">Generative AI</h2>
              <p className="text-neutral-300 mb-6">
                Harness the power of Generative AI to create dynamic content, personalize customer experiences, and automate complex workflows. Our solutions include AI-driven content generation, synthetic data creation, and advanced model fine-tuning.
              </p>
              <ul className="text-neutral-400 list-disc list-inside mb-6">
                <li>AI-powered content creation</li>
                <li>Custom model development</li>
                <li>Workflow automation</li>
              </ul>
              <p className="text-blue-400 font-semibold">
                Value: Accelerate innovation and reduce costs with scalable AI solutions.
              </p>
            </div>
            {/* Agentic Systems */}
            <div className="p-8 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 animate-[fadeIn_0.9s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M8 8.5l1.5 1.5m6 0l1.5-1.5m-9 7l1.5-1.5m6 0l1.5 1.5 M6 12a6 6 0 0 0 3-5.196M15 6.804A6 6 0 0 0 18 12m0 0a6 6 0 0 0-3 5.196m-6 0A6 6 0 0 0 6 12" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-100 mb-4 text-shadow-none">Agentic Systems</h2>
              <p className="text-neutral-300 mb-6">
                Deploy intelligent, autonomous agents that optimize decision-making and streamline operations. Our Agentic Systems enable real-time adaptability and efficiency across industries like finance, healthcare, and logistics.
              </p>
              <ul className="text-neutral-400 list-disc list-inside mb-6">
                <li>Autonomous decision-making</li>
                <li>Process optimization</li>
                <li>Real-time adaptability</li>
              </ul>
              <p className="text-purple-400 font-semibold">
                Value: Boost efficiency and agility with intelligent automation.
              </p>
            </div>
            {/* Data Engineering */}
            <div className="p-8 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 animate-[fadeIn_1s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7v14m-7-7l2-2m0 4l-2-2m12-2l-2 2m0-4l2 2" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-100 mb-4 text-shadow-none">Data Engineering</h2>
              <p className="text-neutral-300 mb-6">
                Build scalable data architectures and pipelines to power AI and analytics. Our Data Engineering services include ETL pipelines, cloud-native solutions, and real-time data processing for actionable insights.
              </p>
              <ul className="text-neutral-400 list-disc list-inside mb-6">
                <li>Scalable data pipelines</li>
                <li>Cloud-native architectures</li>
                <li>Real-time analytics</li>
              </ul>
              <p className="text-fuchsia-400 font-semibold">
                Value: Unlock data-driven decisions with robust infrastructure.
              </p>
            </div>
            {/* Digital Marketing */}
            <div className="p-8 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.1s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l4-4 4 4m-4 12l4 4 4-4m-8-8h12m-2 4c1.5 0 2.5-1 2.5-2.5s-1-2.5-2.5-2.5m-5 0c-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-100 mb-4 text-shadow-none">Digital Marketing</h2>
              <p className="text-neutral-300 mb-6">
                Amplify your brand’s reach with data-driven digital marketing strategies. We offer AI-powered advertising, SEO optimization, and content marketing to engage audiences and drive conversions.
              </p>
              <ul className="text-neutral-400 list-disc list-inside mb-6">
                <li>AI-targeted ad campaigns</li>
                <li>SEO and content strategy</li>
                <li>Social media marketing</li>
              </ul>
              <p className="text-cyan-400 font-semibold">
                Value: Boost brand visibility and ROI with precision marketing.
              </p>
            </div>
            {/* Product Development */}
            <div className="p-8 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.2s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4l2 4h8l-2 4 2 4h-8l-2 4-2-4H4l2-4-2-4h8l2-4z M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-100 mb-4 text-shadow-none">Product Development</h2>
              <p className="text-neutral-300 mb-6">
                Transform ideas into market-ready products with our end-to-end development services. We specialize in rapid prototyping, agile development, and AI-integrated product solutions.
              </p>
              <ul className="text-neutral-400 list-disc list-inside mb-6">
                <li>Rapid prototyping</li>
                <li>Agile development cycles</li>
                <li>AI-driven product features</li>
              </ul>
              <p className="text-pink-400 font-semibold">
                Value: Launch innovative products faster with seamless development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-[fadeIn_1s_ease-out]">
            Partner with Qubro Today
          </h2>
          <p className="text-xl text-neutral-100 max-w-2xl mx-auto mb-10 animate-[fadeIn_1.2s_ease-out]">
            Let’s transform your business with cutting-edge AI, automation, and data solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-700 py-4 px-10 rounded-full text-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-[fadeIn_1.4s_ease-out]"
          >
            Contact Us
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
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