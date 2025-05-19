'use client';
import React from "react";

export default function AboutPage() {
  return (
    <div key="about-page">
      {/* Header Section with Image */}
      <section className="relative min-h-[90vh] bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute inset-0 particle-bg" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.05' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='.1'/%3E%3Ccircle cx='200' cy='200' r='10' fill='%23ffffff' opacity='.3'/%3E%3Ccircle cx='600' cy='600' r='15' fill='%23ffffff' opacity='.2'/%3E%3Ccircle cx='400' cy='300' r='8' fill='%23ffffff' opacity='.25'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
          }}></div>
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-[#0ed2f7] mb-6 animate-[fadeIn_0.5s_ease-out_glowPulse_2s_ease-in-out_infinite] shadow-glow will-change-transform">
              A global team of teams, powered by AI.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl animate-[fadeIn_0.7s_ease-out] text-shadow-header">
              We unite human expertise with advanced AI capabilities to create extraordinary client outcomes. Our teams leverage artificial intelligence to amplify their craft, while maintaining the human-centered design that defines both our digital experiences and our culture.
            </p>
          </div>
        </div>
      </section>

      {/* Qubro Consultancy at a Glance Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0ed2f7] mb-16 animate-[fadeIn_0.5s_ease-out_glowPulse_2s_ease-in-out_infinite] shadow-glow will-change-transform">
            Qubro Consultancy at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center animate-[fadeIn_0.7s_ease-out]">
              <svg className="w-10 h-10 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-4xl font-bold text-blue-400">2025</p>
              <p className="text-neutral-300 mt-2 text-shadow">Founded at the dawn of AI</p>
            </div>
            <div className="flex flex-col items-center text-center animate-[fadeIn_0.8s_ease-out]">
              <svg className="w-10 h-10 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-4xl font-bold text-purple-400">NA</p>
              <p className="text-neutral-300 mt-2 text-shadow">
                Digital experts{" "}
                <a href="/careers" className="text-blue-300 hover:text-blue-200 animate-[fadeIn_0.8s_ease-out_subtleGlow_2.5s_ease-in-out_infinite] subtle-glow">Join the team</a>
              </p>
            </div>
            <div className="flex flex-col items-center text-center animate-[fadeIn_0.9s_ease-out]">
              <svg className="w-10 h-10 text-fuchsia-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-4xl font-bold text-fuchsia-400">5+</p>
              <p className="text-neutral-300 mt-2 text-shadow">
                Industry-leading client NPS{" "}
                <a href="/clients" className="text-blue-300 hover:text-blue-200 animate-[fadeIn_0.9s_ease-out_subtleGlow_2.5s_ease-in-out_infinite] subtle-glow">See our clients</a>
              </p>
            </div>
            <div className="flex flex-col items-center text-center animate-[fadeIn_1s_ease-out]">
              <svg className="w-10 h-10 text-cyan-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              </svg>
              <p className="text-4xl font-bold text-cyan-400">3</p>
              <p className="text-neutral-300 mt-2 text-shadow">
                Global studios{" "}
                <a href="/locations" className="text-blue-300 hover:text-blue-200 animate-[fadeIn_1s_ease-out_subtleGlow_2.5s_ease-in-out_infinite] subtle-glow">View our locations</a>
              </p>
            </div>
            <div className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1 animate-[fadeIn_1.1s_ease-out]">
              <svg className="w-10 h-10 text-pink-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-4xl font-bold text-pink-400">5+</p>
              <p className="text-neutral-300 mt-2 text-shadow">
                Projects successfully delivered{" "}
                <a href="/work" className="text-blue-300 hover:text-blue-200 animate-[fadeIn_1.1s_ease-out_subtleGlow_2.5s_ease-in-out_infinite] subtle-glow">Explore our work</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Long-Term Partners Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0ed2f7] mb-16 animate-[fadeIn_0.5s_ease-out_glowPulse_2s_ease-in-out_infinite] shadow-glow will-change-transform">
            Trusted Long-Term Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: "/images/seo-harbour.webp", alt: "SEO Harbour logo" },
              { src: "/images/launchpal-ai.png", alt: "LaunchPal AI logo" },
            ].map((partner, index) => (
              <div key={index} className="flex justify-center animate-[fadeIn_0.7s_ease-out]">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-16 animate-[logoGlowPulse_2s_ease-in-out_infinite] shadow-glow-logo hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas to Outcome Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0ed2f7] mb-6 animate-[fadeIn_0.5s_ease-out_glowPulse_2s_ease-in-out_infinite] shadow-glow will-change-transform">
                Accelerating Time to Value
              </h2>
              <p className="text-xl text-neutral-200 mb-6 animate-[fadeIn_0.7s_ease-out] text-shadow">
                When it comes to building software, quality and speed matter. Because let's face it — software can't impact the bottom line if it's not in customers' hands.
              </p>
              <p className="text-xl text-neutral-200 mb-6 animate-[fadeIn_0.8s_ease-out] text-shadow">
                Qubro's small, elite teams ship products faster, period. We minimize the time from ideas to outcomes — without sacrificing quality. And we do it in a way that puts partnership first.
              </p>
              <p className="text-xl text-neutral-200 mb-6 animate-[fadeIn_0.9s_ease-out] text-shadow">
                Speed is quantifiable, and as such, we measure the productivity and delivery of our teams across every partner and every project.
              </p>
              <p className="text-xl text-neutral-200 mb-8 animate-[fadeIn_1s_ease-out] text-shadow">
                It's a big part of what makes us different. And we're proud of the results.
              </p>
              <a
                href="/work"
                className="inline-block text-blue-300 font-semibold hover:text-blue-200 animate-[fadeIn_1.1s_ease-out_subtleGlow_2.5s_ease-in-out_infinite] subtle-glow"
              >
                Check out our work
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl animate-[fadeIn_0.7s_ease-out]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                  alt="Qubro team working on a project"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 space-y-8">
            <blockquote className="border-l-4 border-blue-400 pl-6 italic text-neutral-200 animate-[fadeIn_1.2s_ease-out] text-shadow">
              "There were 3 people each on iOS and Android, but it felt like there were 2x as many people based on their deliverables."
              <p className="mt-2 text-neutral-400 text-shadow">— Product Owner, Leading North American Bank</p>
            </blockquote>
            <blockquote className="border-l-4 border-blue-400 pl-6 italic text-neutral-200 animate-[fadeIn_1.3s_ease-out] text-shadow">
              "Extremely impressive that we were able to get so many value-add features out the door on time. It’s clear we made the right choice in partners."
              <p className="mt-2 text-neutral-400 text-shadow">— CEO, CEATI International</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Continued Impact Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0ed2f7] mb-8 animate-[fadeIn_0.5s_ease-out_glowPulse_2s_ease-in-out_infinite] shadow-glow will-change-transform">
            And we continue to help our clients build even stronger teams.
          </h2>
          <blockquote className="max-w-2xl mx-auto italic text-neutral-200 animate-[fadeIn_0.7s_ease-out] text-shadow">
            "Qubro’s AI-driven solutions have revolutionized our workflows, enabling us to scale faster than ever before."
            <p className="mt-4 text-neutral-400 text-shadow">— John Smith, VP of Innovation, IBM</p>
          </blockquote>
        </div>
      </section>

      {/* Partner Certifications Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0ed2f7] mb-16 animate-[fadeIn_0.5s_ease-out_glowPulse_2s_ease-in-out_infinite] shadow-glow will-change-transform">
            Partner Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: "/images/seo-harbour.webp", alt: "SEO Harbour Partner" },
              { src: "/images/launchpal-ai.png", alt: "LaunchPal AI Partner" },
            ].map((cert, index) => (
              <div key={index} className="flex justify-center animate-[fadeIn_0.7s_ease-out]">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-16 animate-[logoGlowPulse_2s_ease-in-out_infinite] shadow-glow-logo hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0ed2f7] mb-12 animate-[fadeIn_0.5s_ease-out_glowPulse_2s_ease-in-out_infinite] shadow-glow will-change-transform">
            Our Leadership
          </h2>
          {/* Executive Leadership */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-center text-[#0ed2f7] mb-8 animate-[fadeIn_0.7s_ease-out_glowPulse_2s_ease-in-out_infinite] shadow-glow will-change-transform">
              Executive Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_0.8s_ease-out]">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-700"></div>
                <h4 className="text-2xl font-semibold text-[#0ed2f7] shadow-glow animate-[fadeIn_0.8s_ease-out_glowPulse_2s_ease-in-out_infinite] will-change-transform">NA</h4>
                <p className="text-neutral-400 mb-2 text-shadow">Chief AI Strategist</p>
                <p className="text-neutral-300 text-shadow">
                  With over 15 years in AI research, Alex leads our GenAI and Agentic Systems initiatives, driving innovation for global clients.
                </p>
              </div>
              <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_0.9s_ease-out]">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-700"></div>
                <h4 className="text-2xl font-semibold text-[#0ed2f7] shadow-glow animate-[fadeIn_0.9s_ease-out_glowPulse_2s_ease-in-out_infinite] will-change-transform">NA</h4>
                <p className="text-neutral-400 mb-2 text-shadow">Head of Data Engineering</p>
                <p className="text-neutral-300 text-shadow">
                  Sarah architects scalable data solutions, with a track record of transforming enterprise data strategies.
                </p>
              </div>
            </div>
          </div>
          {/* Service Line Leadership */}
          <div>
            <h3 className="text-3xl font-semibold text-center text-[#0ed2f7] mb-8 animate-[fadeIn_1s_ease-out_glowPulse_2s_ease-in-out_infinite] shadow-glow will-change-transform">
              Service Line Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.1s_ease-out]">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-700"></div>
                <h4 className="text-2xl font-semibold text-[#0ed2f7] shadow-glow animate-[fadeIn_1.1s_ease-out_glowPulse_2s_ease-in-out_infinite] will-change-transform">NA</h4>
                <p className="text-neutral-400 mb-2 text-shadow">Director of Digital Marketing</p>
                <p className="text-neutral-300 text-shadow">
                  Michael drives data-driven marketing strategies, enhancing client ROI with AI-powered campaigns.
                </p>
              </div>
              <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.2s_ease-out]">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-700"></div>
                <h4 className="text-2xl font-semibold text-[#0ed2f7] shadow-glow animate-[fadeIn_1.2s_ease-out_glowPulse_2s_ease-in-out_infinite] will-change-transform">NA</h4>
                <p className="text-neutral-400 mb-2 text-shadow">Lead Product Developer</p>
                <p className="text-neutral-300 text-shadow">
                  Emily oversees agile product development, delivering innovative solutions at speed.
                </p>
              </div>
              <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.3s_ease-out]">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-700"></div>
                <h4 className="text-2xl font-semibold text-[#0ed2f7] shadow-glow animate-[fadeIn_1.3s_ease-out_glowPulse_2s_ease-in-out_infinite] will-change-transform">NA</h4>
                <p className="text-neutral-400 mb-2 text-shadow">Head of Design</p>
                <p className="text-neutral-300 text-shadow">
                  Raj champions human-centered design, ensuring our digital experiences are intuitive and impactful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0ed2f7] mb-6 animate-[fadeIn_0.5s_ease-out_glowPulse_2s_ease-in-out_infinite] shadow-glow will-change-transform">
            Partner with Qubro Today
          </h2>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-10 animate-[fadeIn_0.7s_ease-out] text-shadow">
            Let’s transform your business with cutting-edge AI and data solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500 text-white py-3 px-8 rounded-full text-xl font-semibold shadow hover:scale-105 hover:shadow-lg hover:text-white transition-all duration-200 animate-[fadeIn_0.9s_ease-out]"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 8px rgba(14, 210, 247, 0.6), 0 0 12px rgba(14, 210, 247, 0.4); }
          50% { text-shadow: 0 0 12px rgba(14, 210, 247, 0.8), 0 0 16px rgba(14, 210, 247, 0.6); }
        }
        @keyframes subtleGlow {
          0%, 100% { text-shadow: 0 0 4px rgba(147, 197, 253, 0.5), 0 0 8px rgba(147, 197, 253, 0.3); }
          50% { text-shadow: 0 0 6px rgba(147, 197, 253, 0.7), 0 0 10px rgba(147, 197, 253, 0.4); }
        }
        @keyframes logoGlowPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(14, 210, 247, 0.6), 0 0 12px rgba(14, 210, 247, 0.4); }
          50% { box-shadow: 0 0 12px rgba(14, 210, 247, 0.8), 0 0 16px rgba(14, 210, 247, 0.6); }
        }
        .shadow-glow {
          text-shadow: 0 0 8px rgba(14, 210, 247, 0.6), 0 0 12px rgba(14, 210, 247, 0.4);
        }
        .subtle-glow {
          text-shadow: 0 0 4px rgba(147, 197, 253, 0.5), 0 0 8px rgba(147, 197, 253, 0.3);
        }
        .shadow-glow-logo {
          box-shadow: 0 0 8px rgba(14, 210, 247, 0.6), 0 0 12px rgba(14, 210, 247, 0.4);
        }
        .text-shadow {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }
        .text-shadow-header {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
        }
        .particle-bg {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .will-change-transform {
          will-change: opacity, transform, text-shadow, box-shadow;
        }
      `}</style>
    </div>
  );
}