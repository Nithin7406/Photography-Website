import { useState } from "react";

function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="px-6 md:px-20 pt-8 pb-8 min-h-[50vh] bg-[#f5e5d5] flex flex-col justify-center"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto text-left">
        <div className="relative">
          <h2 className="text-6xl font-bold text-black">HEART</h2>
          <h3 className="absolute top-6 left-28 sm:left-36 font-semibold text-6xl font-light text-[#d1b796]">
            STRING
          </h3>
          <div className="mt-4">
            <p className="text-sm tracking-widest text-gray-700 uppercase">
              Wedding Photography
            </p>
          </div>
        </div>

        <div className="mt-6 text-gray-700 max-w-2xl text-base leading-relaxed">
          <p>
            Welcome to our wedding website! We are thrilled to share our love
            story and wedding details with you. We hope this site will serve as
            a helpful resource as you join us in celebrating our special day.
          </p>
        </div>

        <div className="mt-6">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`mt-6 md:mt-8 px-6 md:px-8 py-3 text-base font-semibold transition-all duration-300 ease-in-out transform ${
              isHovered
                ? "bg-[#f3f3f3] text-[#5c492d] shadow-lg scale-105"
                : "bg-[#5c492d] text-white"
            }`}
          >
            EXPLORE WEDDINGS &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
