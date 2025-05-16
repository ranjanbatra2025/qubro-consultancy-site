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
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.364l-.707-.707m12.728 12.728l-.707.707M3 21l1.5-1.5m-.793-7.5h1.586m7.5-7.5V3m4.243 5.757l.707-.707M12 17v4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-400 mb-4">Generative AI</h2>
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
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4m-12-4l-4-4 4-4m-2 8h16" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-purple-400 mb-4">Agentic Systems</h2>
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
                <svg className="w-10 h-10 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10h16V7M4 7l8-4 8 4M4 7H3m17 0h1m-9 8v4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">Data Engineering</h2>
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
                <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 01-6 0V5a3 3 0 016 0v8zM8 14H6m0 0H4m2 0v3a1 1 0 001 1h4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">Digital Marketing</h2>
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
                <svg className="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-4 1 1-4L9.75 17zM15.25 17l3.75-1-1-4-3.75 1zM12 13l-4-4 4-4 4 4-4 4z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-pink-400 mb-4">Product Development</h2>
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