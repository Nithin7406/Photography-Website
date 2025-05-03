import Navbar from "./Navbar";
import { useState } from "react";
import bgImage from "../assets/BgIMG.jpg";

function HeroWithNavbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative bg-cover bg-center min-h-[100vh] px-4 md:px-20 pt-40 bg-[#f6f0ea] text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        fontFamily: "Raleway, sans-serif",
        backgroundSize: "cover",
        backgroundPosition: "70% center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 z-0"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-end items-end text-right pb-28 mt-45 md:mt-45 h-full">
        <div className="max-w-2xl">
          <p className="text-2xl tracking-wider">INSPIRED BY PEOPLE</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mt-2 leading-tight">
            Celebrate Your Love Story In Style
          </h1>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`mt-6 md:mt-8 px-6 md:px-8 py-3 text-base font-semibold transition-all duration-300 transform ${
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
  );
}

export default HeroWithNavbar;
