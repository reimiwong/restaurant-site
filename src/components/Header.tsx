import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // shrink after 20px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="header"
      className={`fixed top-0 left-0 w-full z-50 bg-[#F9FAFB] transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div
        className={`flex items-center justify-between max-w-screen-3xl mx-auto transition-all duration-300 ${
          scrolled ? "h-16 px-4 sm:px-6 lg:px-16" : "h-20 px-4 sm:px-6 lg:px-20"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            className={`flex items-center justify-center rounded-full bg-[#C8102E] text-white transition-all duration-300 ${
              scrolled ? "w-8 h-8" : "w-10 h-10"
            }`}
          >
            靈
          </a>
          <div className="flex flex-col">
            <a
              href="/"
              className={`font-normal leading-7 transition-all duration-300 ${
                scrolled ? "text-xl" : "text-2xl"
              }`}
              style={{ fontFamily: "var(--default-font-family)" }}
            >
              Inspiration
            </a>
            <p
              className={`text-[#6A7282] transition-all duration-300 ${
                scrolled ? "text-xs" : "text-sm"
              }`}
            >
              靈感
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-[#364153] text-base">
            About
          </a>
          <a href="#" className="text-[#364153] text-base">
            Menu
          </a>
          <a href="#" className="text-[#364153] text-base">
            Location
          </a>
          <a
            href="#reserve"
            className="bg-[#C8102E] text-white text-base rounded-full px-4 py-2 hover:bg-red-700 active:scale-95 transition-all duration-150"
          >
            Reserve
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-start gap-4 px-4 pb-4 bg-[#F9FAFB] shadow-md">
          <a href="#" className="text-[#364153] text-base">
            About
          </a>
          <a href="#" className="text-[#364153] text-base">
            Menu
          </a>
          <a href="#" className="text-[#364153] text-base">
            Location
          </a>
          <a
            href="#reserve"
            className="bg-[#C8102E] text-white text-base rounded-full px-4 py-2 hover:bg-red-700 active:scale-95 transition-all duration-150"
          >
            Reserve
          </a>
        </div>
      )}
    </section>
  );
}