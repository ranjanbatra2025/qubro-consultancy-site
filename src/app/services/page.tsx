'use client';
import React from "react";

export default function Services() {
  return (
    <div key="services-page">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] py-24 bg-space-blue overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute inset-0 particle-bg" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.05' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='.1'/%3E%3Ccircle cx='200' cy='200' r='10' fill='%23F1F5F9' opacity='.3'/%3E%3Ccircle cx='600' cy='600' r='15' fill='%23F1F5F9' opacity='.2'/%3E%3Ccircle cx='400' cy='300' r='8' fill='%23F1F5F9' opacity='.25'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
          }}></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-bright px-2 py-1 inline-block mb-4 animate-[fadeIn_1s_ease-out] shadow-glow text-shadow">
          Expert craftspeople. At your service.
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-bright px-2 py-1 inline-block mb-6 animate-[fadeIn_1.2s_ease-out] shadow-glow text-shadow">
          Our Services
        </h2>
        <p className="text-xl md:text-2xl text-off-white max-w-3xl px-4 hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.4s_ease-out] text-shadow">
          Discover how Qubro Consulting’s expertise in AI, automation, and data solutions can drive innovation and growth for your business.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Generative AI */}
            <div className="p-8 bg-space-blue/50 backdrop-blur-md border border-navy-dark rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 animate-[fadeIn_0.8s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M6 12h2m8 0h2m-6-6v2m0 8v2m-4.24-4.24l1.42 1.42m4.24-4.24l-1.42 1.42m0 4.24l1.42-1.42m-4.24 0l-1.42-1.42" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-cyan-bright px-2 py-1 inline-block mb-4 text-center shadow-glow text-shadow">
                Generative AI
              </h2>
              <p className="text-off-white mb-6 text-shadow">
                Harness the power of Generative AI to create dynamic content, personalize customer experiences, and automate complex workflows. Our solutions include AI-driven content generation, synthetic data creation, and advanced model fine-tuning.
              </p>
              <ul className="text-neutral-400 list-disc list-inside mb-6 text-shadow">
                <li>AI-powered content creation</li>
                <li>Custom model development</li>
                <li>Workflow automation</li>
              </ul>
              <p className="text-teal-400 font-semibold text-shadow">
                Value: Accelerate innovation and reduce costs with scalable AI solutions.
              </p>
            </div>
            {/* Agentic Systems */}
            <div className="p-8 bg-space-blue/50 backdrop-blur-md border border-navy-dark rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 animate-[fadeIn_0.9s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M8 8.5l1.5 1.5m6 0l1.5-1.5m-9 7l1.5-1.5m6 0l1.5 1.5 M6 12a6 6 0 0 0 3-5.196M15 6.804A6 6 0 0 0 18 12m0 0a6 6 0 0 0-3 5.196m-6 0A6 6 0 0 0 6 12" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-cyan-bright px-2 py-1 inline-block mb-4 text-center shadow-glow text-shadow">
                Agentic Systems
              </h2>
              <p className="text-off-white mb-6 text-shadow">
                Deploy intelligent, autonomous agents that optimize decision-making and streamline operations. Our Agentic Systems enable real-time adaptability and efficiency across industries like finance, healthcare, and logistics.
              </p>
              <ul className="text-neutral-400 list-disc list-inside mb-6 text-shadow">
                <li>Autonomous decision-making</li>
                <li>Process optimization</li>
                <li>Real-time adaptability</li>
              </ul>
              <p className="text-violet-400 font-semibold text-shadow">
                Value: Boost efficiency and agility with intelligent automation.
              </p>
            </div>
            {/* Data Engineering */}
            <div className="p-8 bg-space-blue/50 backdrop-blur-md border border-navy-dark rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 animate-[fadeIn_1s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-coral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7v14m-7-7l2-2m0 4l-2-2m12-2l-2 2m0-4l2 2" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-cyan-bright px-2 py-1 inline-block mb-4 text-center shadow-glow text-shadow">
                Data Engineering
              </h2>
              <p className="text-off-white mb-6 text-shadow">
                Build scalable data architectures and pipelines to power AI and analytics. Our Data Engineering services include ETL pipelines, cloud-native solutions, and real-time data processing for actionable insights.
              </p>
              <ul className="text-neutral-400 list-disc list-inside mb-6 text-shadow">
                <li>Scalable data pipelines</li>
                <li>Cloud-native architectures</li>
                <li>Real-time analytics</li>
              </ul>
              <p className="text-coral-400 font-semibold text-shadow">
                Value: Unlock data-driven decisions with robust infrastructure.
              </p>
            </div>
            {/* Digital Marketing */}
            <div className="p-8 bg-space-blue/50 backdrop-blur-md border border-navy-dark rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.1s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-cyan-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l4-4 4 4m-4 12l4 4 4-4m-8-8h12m-2 4c1.5 0 2.5-1 2.5-2.5s-1-2.5-2.5-2.5m-5 0c-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-cyan-bright px-2 py-1 inline-block mb-4 text-center shadow-glow text-shadow">
                Digital Marketing
              </h2>
              <p className="text-off-white mb-6 text-shadow">
                Amplify your brand’s reach with data-driven digital marketing strategies. We offer AI-powered advertising, SEO optimization, and content marketing to engage audiences and drive conversions.
              </p>
              <ul className="text-neutral-400 list-disc list-inside mb-6 text-shadow">
                <li>AI-targeted ad campaigns</li>
                <li>SEO and content strategy</li>
                <li>Social media marketing</li>
              </ul>
              <p className="text-cyan-bright font-semibold text-shadow">
                Value: Boost brand visibility and ROI with precision marketing.
              </p>
            </div>
            {/* Product Development */}
            <div className="p-8 bg-space-blue/50 backdrop-blur-md border border-navy-dark rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.2s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4l2 4h8l-2 4 2 4h-8l-2 4-2-4H4l2-4-2-4h8l2-4z M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-cyan-bright px-2 py-1 inline-block mb-4 text-center shadow-glow text-shadow">
                Product Development
              </h2>
              <p className="text-off-white mb-6 text-shadow">
                Transform ideas into market-ready products with our end-to-end development services. We specialize in rapid prototyping, agile development, and AI-integrated product solutions.
              </p>
              <ul className="text-neutral-400 list-disc list-inside mb-6 text-shadow">
                <li>Rapid prototyping</li>
                <li>Agile development cycles</li>
                <li>AI-driven product features</li>
              </ul>
              <p className="text-teal-400 font-semibold text-shadow">
                Value: Launch innovative products faster with seamless development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-bright px-2 py-1 inline-block mb-6 animate-[fadeIn_1s_ease-out] shadow-glow text-shadow">
            Partner with Qubro Today
          </h2>
          <p className="text-xl text-off-white max-w-2xl mx-auto mb-10 animate-[fadeIn_1.2s_ease-out] text-shadow">
            Let’s transform your business with cutting-edge AI, automation, and data solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-teal-400 via-violet-400 to-coral-400 text-off-white py-3 px-8 rounded-full text-xl font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200 animate-[fadeIn_1.4s_ease-out]"
            >
              Contact Us
            </a>
            <a
              href="/work"
              className="inline-block border border-off-white text-off-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-off-white hover:text-space-blue transition-all duration-200 animate-[fadeIn_1.6s_ease-out]"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 8px rgba(34, 211, 238, 0.6), 0 0 12px rgba(34, 211, 238, 0.4); }
          50% { text-shadow: 0 0 12px rgba(34, 211, 238, 0.8), 0 0 16px rgba(34, 211, 238, 0.6); }
        }
        @keyframes logoGlowPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(34, 211, 238, 0.6), 0 0 12px rgba(34, 211, 238, 0.4); }
          50% { box-shadow: 0 0 12px rgba(34, 211, 238, 0.8), 0 0 16px rgba(34, 211, 238, 0.6); }
        }
        .shadow-glow {
          text-shadow: 0 0 8px rgba(241, 245, 249, 0.6), 0 0 12px rgba(241, 245, 249, 0.4);
        }
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        .particle-bg {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}