'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation'; // Import useRouter

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter(); // Initialize useRouter

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
  };

  // Navigation items
  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg transition-shadow duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 focus:outline-none">
            <Image
              src="https://ext.same-assets.com/2951873307/3089535793.jpeg"
              alt="Absolute AI Logo"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
              priority
            />
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              Absolute AI
            </span>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`);
              return (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`relative text-lg font-medium transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm ${
                    isActive
                      ? 'text-2xl font-bold text-gray-900 tracking-tight'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : ''
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="md:hidden bg-white border-t border-gray-200"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col items-center gap-4 py-6">
                {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => {
                  const isActive = pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`);
                  return (
                    <span
                      key={item}
                      onClick={() => {
                        router.push(item === 'Home' ? '/' : `/${item.toLowerCase()}`);
                        setIsOpen(false);
                      }}
                      className={`cursor-pointer text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm ${
                        isActive
                          ? 'text-2xl font-bold text-gray-900'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                      role="link"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          router.push(item === 'Home' ? '/' : `/${item.toLowerCase()}`);
                          setIsOpen(false);
                        }
                      }}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}