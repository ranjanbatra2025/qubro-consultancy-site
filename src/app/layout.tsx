import "./globals.css";

export const metadata = {
  title: "Qubro Consulting",
  description: "Excellence in GenAI, Agentic Systems, and Data Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-950 text-white min-h-screen font-sans">
        <header className="w-full h-20 px-8 flex items-center justify-between border-b border-neutral-900 bg-neutral-950/90 backdrop-blur fixed z-30">
          <div className="flex items-center gap-4">
            {/* Placeholder Logo/Icon */}
            <span className="inline-block w-8 h-8 bg-gradient-to-br from-blue-600 via-purple-700 to-fuchsia-500 rounded-full"></span>
            <span className="text-2xl font-bold tracking-tight">Qubro Consulting</span>
          </div>
          <nav className="flex gap-8 text-lg font-medium">
            <a href="/" className="hover:text-blue-400 transition">
              Home
            </a>
            <a href="/about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="/services" className="hover:text-blue-400 transition">
              Services
            </a>
            <a href="/contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </nav>
        </header>
        <main className="pt-32 px-8 max-w-7xl mx-auto">
          {children}
        </main>
        <footer className="mt-20 py-8 text-center text-neutral-400 border-t border-neutral-900 space-y-2">
          <div>© 2025 Qubro Consulting · Excellence in GenAI, Agentic Systems, Data Engineering</div>
          <div className="space-x-6 mt-2 text-sm">
            <a href="/privacy" className="hover:text-blue-400 underline">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="hover:text-blue-400 underline">Terms of Service</a>
          </div>
        </footer>
      </body>
    </html>
  );
}