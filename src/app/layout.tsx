import "./globals.css";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Link from "next/link";

// Load the Inter font with next/font/google
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap", // Ensures font swapping to prevent CLS
});

// Dynamically import Header to ensure it's client-side only
const Header = dynamic(() => import("./Header"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950 text-white min-h-screen font-sans`}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-24 px-4 md:px-8 max-w-8xl mx-auto relative">
          <div className="absolute inset-0 -z-10 opacity-20 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-fuchsia-900/50 animate-gradient-flow"></div>
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-20 py-12 text-center text-neutral-400 border-t-gradient bg-neutral-950/70 backdrop-blur-lg animate-fade-in">
          <div className="max-w-7xl mx-auto px-4">
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mb-8">
              {[
                { name: "Twitter", href: "https://twitter.com", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { name: "LinkedIn", href: "https://linkedin.com", icon: "M16 8a6 6 0 00-6 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7H0v-7a6 6 0 016-6h10zm-1 0h-3V4a2 2 0 00-4 0v4H5" },
                { name: "GitHub", href: "https://github.com", icon: "M12 2a10 10 0 00-3.16 19.5c.5.1.66-.22.66-.5v-1.7c-2.72.6-3.3-1.32-3.3-1.32-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.63-1.35-2.2-.25-4.5-1.1-4.5-4.9 0-1.08.4-1.97 1-2.66-.1-.25-.5-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85 0 1.7.12 2.5.36 1.9-1.3 2.75-1.02 2.75-1.02.6 1.38.2 2.4.1 2.66.6.7 1 1.58 1 2.66 0 3.8-2.3 4.65-4.5 4.9.35.3.66.9.66 1.8v2.7c0 .28.16.6.66.5A10 10 0 0012 2z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
              <div className="flex justify-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-full bg-neutral-800/50 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-fuchsia-500 rounded-full text-white font-semibold ripple glow">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Footer Links and Copyright */}
            <div className="space-y-4">
              <div>© 2025 Qubro Consulting · Excellence in GenAI, Agentic Systems, Data Engineering</div>
              <div className="space-x-6 text-sm">
                <Link href="/privacy" className="hover:text-blue-400 underline">
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link href="/terms" className="hover:text-blue-400 underline">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-6 px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full text-sm hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 glow"
            >
              Back to Top
            </button>
          </div>
        </footer>
      </body>
    </html>
  );
}