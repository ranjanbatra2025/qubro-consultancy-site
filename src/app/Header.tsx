'use client';
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed z-50 w-full bg-neutral-950/70 backdrop-blur-lg border-b border-neutral-800/50">
      <div className="max-w-8xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Qubro
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`${isOpen ? "flex" : "hidden"} md:flex absolute md:static top-16 left-0 w-full md:w-auto bg-neutral-950/90 md:bg-transparent flex-col md:flex-row items-center gap-6 py-6 md:py-0`}>
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-neutral-300 hover:text-blue-400 text-lg font-medium transition-all duration-200 px-4 py-2 rounded-full hover:bg-neutral-800/50"
              onClick={() => setIsOpen(false)} // Close menu on link click (mobile)
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}