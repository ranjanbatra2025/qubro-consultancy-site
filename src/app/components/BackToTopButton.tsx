'use client';

export default function BackToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="mt-6 px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full text-sm hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 glow"
    >
      Back to Top
    </button>
  );
}