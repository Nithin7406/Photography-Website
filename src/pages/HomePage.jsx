import { motion } from "framer-motion";
import { Link } from "react-scroll";

import bgImage from "../assets/hero/BgIMG.jpg";

function HomePage() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center sm:bg-center md:bg-center lg:bg-center -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "60% center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl"
        >
          {/* Small Heading */}
          <p className="uppercase tracking-[6px] text-[#e6c9aa] text-xs sm:text-sm mb-6">
            Inspired By Love & Emotions
          </p>

          {/* Main Heading */}
          <h1 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl lg:text-[110px] leading-none text-white">
            Celebrate
          </h1>

          <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl lg:text-[110px] leading-none text-[#d4a373] ml-6 sm:ml-12 md:ml-24 -mt-2 md:-mt-4">
            Your Love Story
          </h2>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-[#d4a373] my-8"></div>

          {/* Description */}
          <p className="max-w-2xl text-[#f5e8dc] text-sm sm:text-base md:text-lg leading-7 md:leading-8 font-light">
            We craft cinematic wedding memories filled with elegance,
            authenticity, and timeless emotions — capturing every beautiful
            detail of your most precious moments.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            {/* Quote Button */}
            <Link to="contact" smooth={true} duration={700} offset={-70}>
              <button className="px-8 py-4 rounded-full bg-[#d4a373] text-white uppercase tracking-[3px] text-sm hover:bg-white hover:text-[#4e3925] transition duration-500 shadow-2xl">
                Get A Quote
              </button>
            </Link>

            {/* Portfolio Button */}
            <Link to="portfolio" smooth={true} duration={700} offset={-70}>
              <button className="px-8 py-4 rounded-full border border-white text-white uppercase tracking-[3px] text-sm hover:bg-white hover:text-[#4e3925] transition duration-500">
                Explore Portfolio
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center">
        {/* Line with subtle gradient */}
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/60 to-transparent" />

        {/* Animated dot with glow */}
        <motion.div
          animate={{
            y: [0, 14, 0],
            scale: [1, 1.15, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-3.5 h-3.5 rounded-full bg-[#d4a373] shadow-lg shadow-[#d4a373]/40"
        >
          {/* Glow effect */}
          <span className="absolute inset-0 rounded-full bg-[#d4a373] blur-md opacity-40" />
        </motion.div>
      </div>
    </section>
  );
}

export default HomePage;
