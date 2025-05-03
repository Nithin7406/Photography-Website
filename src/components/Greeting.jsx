import welcomeImage from "../assets/welcome.jpeg"; // adjust path if needed

function AboutSection() {
  return (
    <section
      className="relative px-6 md:px-20 pt-8 pb-8 min-h-[50vh] flex items-center"
      style={{
        fontFamily: "Forum, sans-serif",
        backgroundImage: `
          radial-gradient(circle at right center, rgb(245 229 213 / 0%) 0%, rgb(245 229 213) 70%),
          url(${welcomeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "85% center", // Shift background image slightly right
        backgroundAttachment: "fixed",
      }}
    >
      {/* Content */}
      <div className="max-w-5xl mx-auto text-left relative z-10 px-4 lg:ml-40">
        {/* Title */}
        <div className="relative">
          <h1 className="text-6xl font-bold text-black">HEART</h1>
          <h2 className="absolute top-6 left-28 sm:left-36 font-semibold text-6xl font-light text-[#744f24]">
            STRING
          </h2>
          <p className="mt-4 text-sm tracking-widest font-semibold text-gray-700 uppercase">
            Wedding Photography
          </p>
        </div>

        {/* Description */}
        <div className="mt-6 text-black max-w-2xl font-semibold text-base leading-relaxed">
          <p>
            Welcome to our wedding website! We are thrilled to share our love
            story and wedding details with you. We hope this site will serve as
            a helpful resource as you join us in celebrating our special day.
          </p>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button
            type="button"
            className="mt-6 md:mt-8 px-6 md:px-8 py-3 text-base font-semibold bg-[#5c492d] text-white hover:bg-[#f3f3f3] hover:text-[#5c492d] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform"
          >
            EXPLORE WEDDINGS &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
