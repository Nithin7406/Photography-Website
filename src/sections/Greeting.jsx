import { motion } from "framer-motion";
import { Link } from "react-scroll";

import welcomeImage from "../assets/hero/welcome.jpeg";

function Greeting() {
  return (
    <section
      id="greeting"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover scale-105"
        style={{
          backgroundImage: `url(${welcomeImage})`,
          backgroundPosition: "72% center",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl"
        >
          {/* Small Label */}
          <p className="uppercase tracking-[6px] text-[#e6c9aa] text-xs sm:text-sm mb-6">
            Luxury Wedding Photography
          </p>

          {/* Main Heading */}
          <h1 className="font-['Cormorant_Garamond'] text-6xl sm:text-7xl md:text-8xl lg:text-[120px] leading-none text-white">
            EVER
          </h1>

          <h2 className="font-['Cormorant_Garamond'] text-6xl sm:text-7xl md:text-8xl lg:text-[120px] leading-none text-[#d4a373] ml-10 sm:ml-16 md:ml-24 -mt-2 md:-mt-4">
            FRAME
          </h2>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-[#d4a373] my-8"></div>

          {/* Description */}
          <p className="text-[#f5e8dc] text-sm sm:text-base md:text-lg leading-8 max-w-2xl font-light">
            We capture timeless wedding stories filled with emotion, elegance,
            and cinematic beauty — transforming your most precious moments into
            unforgettable visual memories.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            {/* Explore Button */}
            <Link to="portfolio" smooth={true} duration={700} offset={-70}>
              <button className="px-8 py-4 rounded-full bg-[#d4a373] text-white uppercase tracking-[3px] text-sm hover:bg-white hover:text-[#4e3925] transition duration-500 shadow-2xl">
                Explore Weddings
              </button>
            </Link>

            {/* Contact Button */}
            <Link to="contact" smooth={true} duration={700} offset={-70}>
              <button className="px-8 py-4 rounded-full border border-white text-white uppercase tracking-[3px] text-sm hover:bg-white hover:text-[#4e3925] transition duration-500">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none bg-gradient-to-t from-[#f5e5d5] via-[#f5ece2]/40 to-transparent" />{" "}
    </section>
  );
}

export default Greeting;
