'use client';

export default function BackToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className=" items-center justify-center mt-4 gap-4 bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-[250px] h-14 text-center"
    >
      Back to Top
    </button>
  );
}