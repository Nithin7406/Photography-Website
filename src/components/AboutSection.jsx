import { useState } from "react";

function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative px-6 md:px-20 pt-8 pb-8 min-h-[50vh] flex items-center bg-[#f5e5d5]"
      style={{
        fontFamily: "Forum, sans-serif",
        backgroundImage: "url('src/assets/welcome.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#f5e5d5] via-[#f5e5d5] to-[#f5e5d5] opacity-100"
        style={{
          background:
            "linear-gradient(to right, rgb(245, 229, 213) 50%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0.05) 0%)",
        }}
      ></div>

      <div className="max-w-5xl mx-auto text-left relative z-10 px-4 lg:ml-40">
        <div className="relative">
          <h2 className="text-6xl font-bold text-black">HEART</h2>
          <h3 className="absolute top-6 left-28 sm:left-36 font-semibold text-6xl font-light text-[#744f24]">
            STRING
          </h3>
          <div className="mt-4">
            <p className="text-sm tracking-widest font-semibold text-gray-700 uppercase">
              Wedding Photography
            </p>
          </div>
        </div>

        <div className="mt-6 text-black max-w-2xl font-semibold text-base leading-relaxed">
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
