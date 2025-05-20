'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const slides = [
    {
      image: "/images/genai-applications.png",
      text: "Empowering the Future with Generative AI",
      link: "/services#generative-ai",
    },
    {
      image: "/images/ai-chatbots.png",
      text: "Conversational Excellence with AI Chatbots",
      link: "/services#ai-chatbots",
    },
    {
      image: "/images/agentic-ai.png",
      text: "Innovate with Agentic AI Systems",
      link: "/services#agentic-ai",
    },
    {
      image: "/images/data-science.png",
      text: "Unlock Insights with Data Science",
      link: "/services#data-science",
    },
  ];
  const testimonials = [
    {
      quote: "Qubro transformed our data infrastructure, enabling real-time AI-driven insights that doubled our operational efficiency.",
      author: "Jane Doe, CTO, TechStartup",
    },
    {
      quote: "Their AI agents have streamlined our operations, saving us countless hours and resources.",
      author: "Mark Wilson, COO, FinCorp",
    },
    {
      quote: "Working with Qubro was a game-changer—our digital marketing ROI has never been higher.",
      author: "Emily Chen, CMO, BrandX",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => {
      clearInterval(slideInterval);
      clearInterval(testimonialInterval);
    };
  }, [slides.length, testimonials.length]);

  return (
    <>
      {/* Hero Section with Image Carousel */}
      <section className="relative min-h-[90vh] bg-neutral-950 overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute inset-0 particle-bg" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.05' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='.1'/%3E%3Ccircle cx='200' cy='200' r='10' fill='%23ffffff' opacity='.3'/%3E%3Ccircle cx='600' cy='600' r='15' fill='%23ffffff' opacity='.2'/%3E%3Ccircle cx='400' cy='300' r='8' fill='%23ffffff' opacity='.25'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
          }}></div>
        </div>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative flex flex-col items-center justify-center h-full text-center px-4 z-20">
                <h1 className="text-5xl md:text-7xl font-bold text-white bg-[#7B68EE] px-2 py-1 inline-block mb-6 animate-[fadeIn_1s_ease-out] text-shadow shadow-glow">
                  {slide.text}
                </h1>
                <p className="text-xl md:text-2xl text-white max-w-3xl animate-[fadeIn_1.2s_ease-out] text-shadow">
                  Qubro Consulting empowers startups and enterprises to harness the transformative power of Generative AI, Agentic Systems, and advanced Data Engineering.
                </p>
                <div className="mt-8 flex gap-4">
                  <Link
                    href={slide.link}
                    className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500 text-white py-3 px-8 rounded-full text-xl font-semibold shadow hover:scale-105 hover:shadow-lg hover:text-white transition-all duration-200 animate-[fadeIn_1.4s_ease-out] z-30"
                  >
                    Explore This Service
                  </Link>
                  <Link
                    href="/about"
                    className="inline-block border border-white text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-white hover:text-purple-700 transition-all duration-200 animate-[fadeIn_1.6s_ease-out] z-30"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white bg-[#7B68EE] px-2 py-1 inline-block mb-16 animate-[fadeIn_1s_ease-out] shadow-glow">
            What We Do
          </h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold text-white bg-[#7B68EE] px-2 py-1 inline-block mb-6 animate-[fadeIn_1.2s_ease-out] shadow-glow">
                Qubro Consulting elevates the customer experience for the world’s most-admired brands.
              </h3>
              <p className="text-xl text-neutral-200 mb-8 animate-[fadeIn_1.4s_ease-out]">
                We design and deploy digital products and AI agents that drive customer engagement and a more efficient enterprise.
              </p>
            </div>
            <div className="lg:w-1/2">
              <ul className="space-y-4">
                {[
                  {
                    name: "Agentic AI Applications",
                    icon: "M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M8 8.5l1.5 1.5m6 0l1.5-1.5m-9 7l1.5-1.5m6 0l1.5 1.5 M6 12a6 6 0 0 0 3-5.196M15 6.804A6 6 0 0 0 18 12m0 0a6 6 0 0 0-3 5.196m-6 0A6 6 0 0 0 6 12",
                    link: "/services#agentic-ai",
                  },
                  {
                    name: "Generative AI Applications",
                    icon: "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M6 12h2m8 0h2m-6-6v2m0 8v2m-4.24-4.24l1.42 1.42m4.24-4.24l-1.42 1.42m0 4.24l1.42-1.42m-4.24 0l-1.42-1.42",
                    link: "/services#generative-ai",
                  },
                  {
                    name: "AI Chatbots/RAG Systems",
                    icon: "M4 8h16M4 8l4-4m0 8l-4-4m4 4v8m4-8h8m-4-4v8m0-4h-4",
                    link: "/services#ai-chatbots",
                  },
                  {
                    name: "Data Science",
                    icon: "M21 21l-5-5m-2 0a7 7 0 1 0-7-7 7 7 0 0 0 7 7zm-7-3h3m-3-3h6",
                    link: "/services#data-science",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="p-4 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-110 transition-transform duration-300 group animate-[fadeIn_1.6s_ease-out] cursor-pointer"
                    onClick={() => window.location.href = item.link}
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                      <span className="text-xl font-semibold text-blue-400 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-fuchsia-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {item.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Ticker */}
      <section className="py-16 bg-neutral-950 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white bg-[#7B68EE] px-2 py-1 inline-block mb-12 animate-[fadeIn_1s_ease-out] shadow-glow">
            Companies We’ve Worked With
          </h2>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                { src: "/images/seo-harbour.webp", alt: "SEO Harbour logo" },
                { src: "/images/launchpal-ai.png", alt: "LaunchPal AI logo" },
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 mx-8 animate-[logoGlowPulse_2s_ease-in-out_infinite] shadow-glow-logo hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              ))}
              {[
                { src: "/images/seo-harbour.webp", alt: "SEO Harbour logo" },
                { src: "/launchpal-ai.png", alt: "LaunchPal AI logo" },
              ].map((logo, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 mx-8 animate-[logoGlowPulse_2s_ease-in-out_infinite] shadow-glow-logo hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid (Our Expertise) */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white bg-[#7B68EE] px-2 py-1 inline-block mb-16 animate-[fadeIn_1s_ease-out] shadow-glow">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.2s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M8 8.5l1.5 1.5m6 0l1.5-1.5m-9 7l1.5-1.5m6 0l1.5 1.5 M6 12a6 6 0 0 0 3-5.196M15 6.804A6 6 0 0 0 18 12m0 0a6 6 0 0 0-3 5.196m-6 0A6 6 0 0 0 6 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white bg-[#7B68EE] px-2 py-1 inline-block mb-4 shadow-glow">Agentic AI</h3>
              <p className="text-neutral-300 mb-4">
                Deploy intelligent agents that autonomously make decisions, optimize processes, and drive efficiency across your operations.
              </p>
              <a href="/services#agentic-ai" className="text-purple-400 font-semibold hover:underline">Learn More</a>
            </div>
            <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.4s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M6 12h2m8 0h2m-6-6v2m0 8v2m-4.24-4.24l1.42 1.42m4.24-4.24l-1.42 1.42m0 4.24l1.42-1.42m-4.24 0l-1.42-1.42" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white bg-[#7B68EE] px-2 py-1 inline-block mb-4 shadow-glow">Generative AI</h3>
              <p className="text-neutral-300 mb-4">
                Leverage cutting-edge GenAI to create innovative content, automate workflows, and enhance customer experiences with tailored solutions.
              </p>
              <a href="/services#generative-ai" className="text-blue-400 font-semibold hover:underline">Learn More</a>
            </div>
            <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.6s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7v14m-7-7l2-2m0 4l-2-2m12-2l-2 2m0-4l2 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white bg-[#7B68EE] px-2 py-1 inline-block mb-4 shadow-glow">Data Engineering</h3>
              <p className="text-neutral-300 mb-4">
                Build robust data pipelines and architectures to unlock actionable insights and power AI-driven decision-making.
              </p>
              <a href="/services#data-engineering" className="text-fuchsia-400 font-semibold hover:underline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-fuchsia-900/50 animate-[pulse_15s_ease-in-out_infinite]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white bg-[#7B68EE] px-2 py-1 inline-block mb-12 animate-[fadeIn_1s_ease-out] shadow-glow">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-[fadeIn_1.2s_ease-out]">
              <p className="text-5xl font-bold text-blue-400 animate-[countUp_2s_ease-out] inline-block">5+</p>
              <p className="text-neutral-300 mt-2">AI Projects Delivered</p>
            </div>
            <div className="animate-[fadeIn_1.4s_ease-out]">
              <p className="text-5xl font-bold text-purple-400 animate-[countUp_2s_ease-out] inline-block">3+</p>
              <p className="text-neutral-300 mt-2">Industries Served</p>
            </div>
            <div className="animate-[fadeIn_1.6s_ease-out]">
              <p className="text-5xl font-bold text-fuchsia-400 animate-[countUp_2s_ease-out] inline-block">100%</p>
              <p className="text-neutral-300 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white bg-[#7B68EE] px-2 py-1 inline-block mb-16 animate-[fadeIn_1s_ease-out] shadow-glow">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-xl group animate-[fadeIn_1.2s_ease-out]">
              <img
                src="/images/ai-chatbots.png"
                alt="AI-Driven Customer Support"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white bg-[#7B68EE] px-1 py-0.5 inline-block mb-2 text-shadow shadow-glow">
                  AI-Driven Customer Support
                </h3>
                <p className="text-neutral-300 text-shadow">Deployed a GenAI chatbot for a retail giant, improving response times by 70%.</p>
                <a href="/work#project1" className="mt-4 text-blue-400 font-semibold hover:underline">View Project</a>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl group animate-[fadeIn_1.4s_ease-out]">
              <img
                src="/images/data-science.png"
                alt="Data Pipeline Optimization"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white bg-[#7B68EE] px-1 py-0.5 inline-block mb-2 text-shadow shadow-glow">
                  Data Pipeline Optimization
                </h3>
                <p className="text-neutral-300 text-shadow">Built a scalable data pipeline for a fintech firm, reducing processing time by 50%.</p>
                <a href="/work#project2" className="mt-4 text-blue-400 font-semibold hover:underline">View Project</a>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl group animate-[fadeIn_1.6s_ease-out]">
              <img
                src="/images/agentic-ai.png"
                alt="Agentic Workflow Automation"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white bg-[#7B68EE] px-1 py-0.5 inline-block mb-2 text-shadow shadow-glow">
                  Agentic Workflow Automation
                </h3>
                <p className="text-neutral-300 text-shadow">Implemented autonomous agents for a logistics company, boosting efficiency by 40%.</p>
                <a href="/work#project3" className="mt-4 text-blue-400 font-semibold hover:underline">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/data-science.png')",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white bg-[#7B68EE] px-2 py-1 inline-block mb-16 animate-[fadeIn_1s_ease-out] shadow-glow">
            What Our Clients Say
          </h2>
          <div className="flex flex-col items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`max-w-2xl text-center transition-opacity duration-1000 ${
                  index === currentTestimonial ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                <p className="text-xl text-neutral-200 italic animate-[fadeIn_1.2s_ease-out]">
                  "{testimonial.quote}"
                </p>
                <p className="mt-4 text-neutral-400 font-semibold animate-[fadeIn_1.4s_ease-out]">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white bg-[#7B68EE] px-2 py-1 inline-block mb-6 animate-[fadeIn_1s_ease-out] shadow-glow">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-10 animate-[fadeIn_1.2s_ease-out]">
            Partner with Qubro Consulting to unlock the full potential of AI and data engineering.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500 text-white py-3 px-8 rounded-full text-xl font-semibold shadow hover:scale-105 hover:shadow-lg hover:text-white transition-all duration-200 animate-[fadeIn_1.4s_ease-out]"
            >
              Get in Touch
            </a>
            <a
              href="/work"
              className="inline-block bg-transparent border border-white text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-white hover:text-purple-700 transition-all duration-200 animate-[fadeIn_1.6s_ease-out]"
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
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes countUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes logoGlowPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(14, 210, 247, 0.6), 0 0 12px rgba(14, 210, 247, 0.4); }
          50% { box-shadow: 0 0 12px rgba(14, 210, 247, 0.8), 0 0 16px rgba(14, 210, 247, 0.6); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .particle-bg {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        .shadow-glow {
          text-shadow: 0 0 8px rgba(14, 210, 247, 0.6), 0 0 12px rgba(14, 210, 247, 0.4);
        }
        .shadow-glow-logo {
          box-shadow: 0 0 8px rgba(14, 210, 247, 0.6), 0 0 12px rgba(14, 210, 247, 0.4);
        }
      `}</style>
    </>
  );
}