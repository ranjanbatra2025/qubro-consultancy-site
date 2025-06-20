'use client';
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed z-50 w-full bg-white shadow-md">
      <div className="flex items-center w-full">
        {/* Logo positioned to the left */}
        <Link href="/" className="flex items-center gap-3 pl-4">
          <img
            src="https://ext.same-assets.com/2951873307/3089535793.jpeg"
            alt="Absolute AI Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-2xl font-bold text-gray-800">Absolute AI</span>
        </Link>

        {/* Container for hamburger and nav, aligned to the right */}
        <div className="flex-1 max-w-7xl mx-auto px-4 py-4 flex items-center justify-end">
          {/* Hamburger Menu for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className={`${isOpen ? "flex" : "hidden"} md:flex absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row items-center gap-6 py-6 md:py-0`}>
            {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors text-lg font-medium px-4 py-2 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}