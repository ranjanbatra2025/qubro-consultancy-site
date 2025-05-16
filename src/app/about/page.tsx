'use client';
import React from "react";

export default function AboutPage() {
  return (
    <>
      {/* Header Section with Image */}
      <section className="relative min-h-[90vh] bg-neutral-950 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-[fadeIn_1s_ease-out]">
              A global team of teams, powered by AI.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl animate-[fadeIn_1.2s_ease-out]">
              We unite human expertise with advanced AI capabilities to create extraordinary client outcomes. Our teams leverage artificial intelligence to amplify their craft, while maintaining the human-centered design that defines both our digital experiences and our culture.
            </p>
          </div>
        </div>
      </section>

      {/* Qubro Consultancy at a Glance Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-[fadeIn_1s_ease-out]">
            Qubro Consultancy at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-4xl font-bold text-blue-400">2008</p>
              <p className="text-neutral-300 mt-2">Founded at the dawn of mobile</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-4xl font-bold text-purple-400">4,000+</p>
              <p className="text-neutral-300 mt-2">
                Digital experts{" "}
                <a href="/careers" className="text-blue-400 hover:underline">Join the team</a>
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-fuchsia-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-4xl font-bold text-fuchsia-400">70+</p>
              <p className="text-neutral-300 mt-2">
                Industry-leading client NPS{" "}
                <a href="/clients" className="text-blue-400 hover:underline">See our clients</a>
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-cyan-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              </svg>
              <p className="text-4xl font-bold text-cyan-400">18</p>
              <p className="text-neutral-300 mt-2">
                Global studios{" "}
                <a href="/locations" className="text-blue-400 hover:underline">View our locations</a>
              </p>
            </div>
            <div className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
              <svg className="w-10 h-10 text-pink-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-4xl font-bold text-pink-400">700+</p>
              <p className="text-neutral-300 mt-2">
                Projects successfully delivered{" "}
                <a href="/work" className="text-blue-400 hover:underline">Explore our work</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Long-Term Partners Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-[fadeIn_1s_ease-out]">
            Trusted Long-Term Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Google_2015_logo.svg", alt: "Google logo" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon logo" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/IBM_logo.svg", alt: "IBM logo" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft logo" },
            ].map((partner, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-12 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-[fadeIn_1s_ease-out]">
                Accelerating Time to Value
              </h2>
              <p className="text-xl text-neutral-200 mb-6 animate-[fadeIn_1.2s_ease-out]">
                When it comes to building software, quality and speed matter. Because let's face it — software can't impact the bottom line if it's not in customers' hands.
              </p>
              <p className="text-xl text-neutral-200 mb-6 animate-[fadeIn_1.4s_ease-out]">
                Qubro's small, elite teams ship products faster, period. We minimize the time from ideas to outcomes — without sacrificing quality. And we do it in a way that puts partnership first.
              </p>
              <p className="text-xl text-neutral-200 mb-6 animate-[fadeIn_1.6s_ease-out]">
                Speed is quantifiable, and as such, we measure the productivity and delivery of our teams across every partner and every project.
              </p>
              <p className="text-xl text-neutral-200 mb-8 animate-[fadeIn_1.8s_ease-out]">
                It's a big part of what makes us different. And we're proud of the results.
              </p>
              <a
                href="/work"
                className="inline-block text-blue-400 font-semibold hover:underline animate-[fadeIn_2s_ease-out]"
              >
                Check out our work
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                  alt="Qubro team working on a project"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 space-y-8">
            <blockquote className="border-l-4 border-blue-400 pl-6 italic text-neutral-200 animate-[fadeIn_2.2s_ease-out]">
              "There were 3 people each on iOS and Android, but it felt like there were 2x as many people based on their deliverables."
              <p className="mt-2 text-neutral-400">— Product Owner, Leading North American Bank</p>
            </blockquote>
            <blockquote className="border-l-4 border-blue-400 pl-6 italic text-neutral-200 animate-[fadeIn_2.4s_ease-out]">
              "Extremely impressive that we were able to get so many value-add features out the door on time. It’s clear we made the right choice in partners."
              <p className="mt-2 text-neutral-400">— CEO, CEATI International</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Continued Impact Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 animate-[fadeIn_1s_ease-out]">
            And we continue to help our clients build even stronger teams.
          </h2>
          <blockquote className="max-w-2xl mx-auto italic text-neutral-200 animate-[fadeIn_1.2s_ease-out]">
            "Qubro’s AI-driven solutions have revolutionized our workflows, enabling us to scale faster than ever before."
            <p className="mt-4 text-neutral-400">— John Smith, VP of Innovation, IBM</p>
          </blockquote>
        </div>
      </section>

      {/* Partner Certifications Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-[fadeIn_1s_ease-out]">
            Partner Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: "https://upload.wikimedia.org/wikipedia/commons/5/53/AWS_Logo.svg", alt: "AWS Partner" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google_Cloud_Logo.svg", alt: "Google Cloud Partner" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Microsoft_Azure_Logo.svg", alt: "Microsoft Azure Partner" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/ISO_9001_logo.svg", alt: "ISO 9001 Certified" },
            ].map((cert, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-12 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 animate-[fadeIn_1s_ease-out]">
            Our Leadership
          </h2>
          {/* Executive Leadership */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-center text-blue-400 mb-8 animate-[fadeIn_1.2s_ease-out]">
              Executive Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.4s_ease-out]">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-700"></div>
                <h4 className="text-2xl font-semibold text-white">Dr. Alex Carter</h4>
                <p className="text-neutral-400 mb-2">Chief AI Strategist</p>
                <p className="text-neutral-300">
                  With over 15 years in AI research, Alex leads our GenAI and Agentic Systems initiatives, driving innovation for global clients.
                </p>
              </div>
              <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_1.6s_ease-out]">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-700"></div>
                <h4 className="text-2xl font-semibold text-white">Sarah Lin</h4>
                <p className="text-neutral-400 mb-2">Head of Data Engineering</p>
                <p className="text-neutral-300">
                  Sarah architects scalable data solutions, with a track record of transforming enterprise data strategies.
                </p>
              </div>
            </div>
          </div>
          {/* Service Line Leadership */}
          <div>
            <h3 className="text-3xl font-semibold text-center text-blue-400 mb-8 animate-[fadeIn_1.8s_ease-out]">
              Service Line Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_2s_ease-out]">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-700"></div>
                <h4 className="text-2xl font-semibold text-white">Michael Zhang</h4>
                <p className="text-neutral-400 mb-2">Director of Digital Marketing</p>
                <p className="text-neutral-300">
                  Michael drives data-driven marketing strategies, enhancing client ROI with AI-powered campaigns.
                </p>
              </div>
              <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_2.2s_ease-out]">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-700"></div>
                <h4 className="text-2xl font-semibold text-white">Emily Davis</h4>
                <p className="text-neutral-400 mb-2">Lead Product Developer</p>
                <p className="text-neutral-300">
                  Emily oversees agile product development, delivering innovative solutions at speed.
                </p>
              </div>
              <div className="p-6 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 animate-[fadeIn_2.4s_ease-out]">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-700"></div>
                <h4 className="text-2xl font-semibold text-white">Raj Patel</h4>
                <p className="text-neutral-400 mb-2">Head of Design</p>
                <p className="text-neutral-300">
                  Raj champions human-centered design, ensuring our digital experiences are intuitive and impactful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Preserved from Original) */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-[fadeIn_1s_ease-out]">
            Partner with Qubro Today
          </h2>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-10 animate-[fadeIn_1.2s_ease-out]">
            Let’s transform your business with cutting-edge AI and data solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-700 py-3 px-8 rounded-full text-xl font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200 animate-[fadeIn_1.4s_ease-out]"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}