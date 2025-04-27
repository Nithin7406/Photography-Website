import { useState } from "react";
import bgImage from "../assets/BgIMG.jpg";

function HeroWithNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative" style={{ fontFamily: "Raleway, sans-serif" }}>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-transparent z-50 bg-gradient-to-t from-black/0 via-black/50 to-black/90">
        <div className="font-bold text-xl text-white">HEARTSTRING</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#collections" className="hover:underline">
            Collections
          </a>
          <a href="#investment" className="hover:underline">
            Investment
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#blog" className="hover:underline">
            Blog
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full z-50 bg-black/50 shadow-md md:hidden flex flex-col items-center py-4 space-y-2 text-white">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#collections" className="hover:underline">
              Collections
            </a>
            <a href="#investment" className="hover:underline">
              Investment
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#blog" className="hover:underline">
              Blog
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] px-6 md:px-20 pt-32 bg-[#f6f0ea] flex flex-col justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          fontFamily: "Raleway, sans-serif",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 flex flex-col justify-end items-end text-white px-6 sm:px-10 md:px-16 pb-20 md:pb-28 text-right">
          <div className="z-10 max-w-2xl">
            <p className="text-3xl sm:text-4xl md:text-2xl font-semibold tracking-wider">
              INSPIRED BY PEOPLE
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mt-2 leading-tight">
              Celebrate Your Love Story In Style
            </h1>
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`mt-6 md:mt-8 px-6 md:px-8 py-3 text-base font-semibold transition-all duration-300 ease-in-out transform ${
                isHovered
                  ? "bg-[#5c492d] text-[#f3f3f3] shadow-lg scale-105"
                  : "bg-white text-[#5c492d]"
              }`}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroWithNavbar;
