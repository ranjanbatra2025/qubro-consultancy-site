'use client';
import React, { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      text: "Empowering the Future with AI",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-b4f3c35d2f86?q=80&w=2070&auto=format&fit=crop",
      text: "Transforming Data into Insights",
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      text: "Innovate with Intelligent Agents",
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
      text: "Driving Growth Through Strategy",
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
      <section className="relative min-h-[90vh] bg-neutral-950 overflow-hidden">
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
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-[fadeIn_1s_ease-out]">
                  {slide.text}
                </h1>
                <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl animate-[fadeIn_1.2s_ease-out]">
                  Qubro Consulting empowers startups and enterprises to harness the transformative power of Generative AI, Agentic Systems, and advanced Data Engineering.
                </p>
                <div className="mt-8 flex gap-4">
                  <a
                    href="/services"
                    className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500 text-white py-3 px-8 rounded-full text-xl font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200 animate-[fadeIn_1.4s_ease-out]"
                  >
                    Explore Our Services
                  </a>
                  <a
                    href="/about"
                    className="inline-block border border-white text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-white hover:text-purple-700 transition-all duration-200 animate-[fadeIn_1.6s_ease-out]"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-[fadeIn_1s_ease-out]">
            What We Do
          </h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-[fadeIn_1.2s_ease-out]">
                Qubro Consulting elevates the customer experience for the world’s most-admired brands.
              </h3>
              <p className="text-xl text-neutral-200 mb-8 animate-[fadeIn_1.4s_ease-out]">
                We design and deploy digital products and AI agents that drive customer engagement and a more efficient enterprise.
              </p>
            </div>
            <div className="lg:w-1/2">
              <ul className="space-y-4">
                {[
                  { name: "Digital Strategy", icon: "M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-6.364l1.414 1.414M5.636 18.364l-1.414 1.414m0-12.728l1.414-1.414M18.364 18.364l-1.414-1.414" },
                  { name: "Data & AI Solutions", icon: "M4 7v10h16V7M4 7l8-4 8 4M4 7H3m17 0h1m-9 8v4" },
                  { name: "Design & Creative", icon: "M9.75 17L9 20l-4 1 1-4L9.75 17zM15.25 17l3.75-1-1-4-3.75 1zM12 13l-4-4 4-4 4 4-4 4z" },
                  { name: "Product Development", icon: "M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z" },
                  { name: "Digital Marketing", icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 01-6 0V5a3 3 0 016 0v8z" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="p-4 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 group animate-[fadeIn_1.6s_ease-out]"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 animate-[fadeIn_1s_ease-out]">
            Companies We’ve Worked With
          </h2>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                { src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Google_2015_logo.svg", alt: "Google logo" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon logo" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/IBM_logo.svg", alt: "IBM logo" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft logo" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Adobe_logo.svg", alt: "Adobe logo" },
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 mx-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              ))}
              {[
                { src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Google_2015_logo.svg", alt: "Google logo" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon logo" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/IBM_logo.svg", alt: "IBM logo" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft logo" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Adobe_logo.svg", alt: "Adobe logo" },
              ].map((logo, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 mx-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid (Our Expertise) */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-[fadeIn_1s_ease-out]">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.2s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.364l-.707-.707m12.728 12.728l-.707.707M3 21l1.5-1.5m-.793-7.5h1.586m7.5-7.5V3m4.243 5.757l.707-.707M12 17v4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Generative AI</h3>
              <p className="text-neutral-300 mb-4">
                Leverage cutting-edge GenAI to create innovative content, automate workflows, and enhance customer experiences with tailored solutions.
              </p>
              <a href="/services#generative-ai" className="text-blue-400 font-semibold hover:underline">Learn More</a>
            </div>
            <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.4s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4m-12-4l-4-4 4-4m-2 8h16" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Agentic Systems</h3>
              <p className="text-neutral-300 mb-4">
                Deploy intelligent agents that autonomously make decisions, optimize processes, and drive efficiency across your operations.
              </p>
              <a href="/services#agentic-systems" className="text-purple-400 font-semibold hover:underline">Learn More</a>
            </div>
            <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.6s_ease-out]">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10h16V7M4 7l8-4 8 4M4 7H3m17 0h1m-9 8v4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-fuchsia-400 mb-4">Data Engineering</h3>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-[fadeIn_1s_ease-out]">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-[fadeIn_1.2s_ease-out]">
              <p className="text-5xl font-bold text-blue-400 animate-[countUp_2s_ease-out] inline-block">50+</p>
              <p className="text-neutral-300 mt-2">AI Projects Delivered</p>
            </div>
            <div className="animate-[fadeIn_1.4s_ease-out]">
              <p className="text-5xl font-bold text-purple-400 animate-[countUp_2s_ease-out] inline-block">10+</p>
              <p className="text-neutral-300 mt-2">Industries Served</p>
            </div>
            <div className="animate-[fadeIn_1.6s_ease-out]">
              <p className="text-5xl font-bold text-fuchsia-400 animate-[countUp_2s_ease-out] inline-block">95%</p>
              <p className="text-neutral-300 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-[fadeIn_1s_ease-out]">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-xl group animate-[fadeIn_1.2s_ease-out]">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="AI-Driven Customer Support"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">AI-Driven Customer Support</h3>
                <p className="text-neutral-300">Deployed a GenAI chatbot for a retail giant, improving response times by 70%.</p>
                <a href="/work#project1" className="mt-4 text-blue-400 font-semibold hover:underline">View Project</a>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl group animate-[fadeIn_1.4s_ease-out]">
              <img
                src="https://images.unsplash.com/photo-1551288049-b4f3c35d2f86?q=80&w=2070&auto=format&fit=crop"
                alt="Data Pipeline Optimization"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Data Pipeline Optimization</h3>
                <p className="text-neutral-300">Built a scalable data pipeline for a fintech firm, reducing processing time by 50%.</p>
                <a href="/work#project2" className="mt-4 text-blue-400 font-semibold hover:underline">View Project</a>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl group animate-[fadeIn_1.6s_ease-out]">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                alt="Agentic Workflow Automation"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Agentic Workflow Automation</h3>
                <p className="text-neutral-300">Implemented autonomous agents for a logistics company, boosting efficiency by 40%.</p>
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
              backgroundImage: "url('https://images.unsplash.com/photo-1551288049-b4f3c35d2f86?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-[fadeIn_1s_ease-out]">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-[fadeIn_1s_ease-out]">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-10 animate-[fadeIn_1.2s_ease-out]">
            Partner with Qubro Consulting to unlock the full potential of AI and data engineering.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 px-8 rounded-full text-xl font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200 animate-[fadeIn_1.4s_ease-out]"
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
      `}</style>
    </>
  );
}