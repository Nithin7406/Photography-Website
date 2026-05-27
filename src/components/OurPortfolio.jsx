import ourPortfolioImg from "../assets/OurPortfolio.png";

const OurPortfolio = () => (
  <section
    id="portfolio"
    className="bg-[#f5e5d5]"
    style={{ fontFamily: "Raleway, sans-serif" }}
  >
    {/* Header Section */}
    <div className="text-center px-4 py-8 md:py-10">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
        Our Portfolio
      </h2>

      <p className="mt-3 text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        Explore the stories of our beautiful clients, where every image speaks
        volumes.
      </p>
    </div>

    <div
      className="w-full h-[40vh] sm:h-[55vh] md:h-[75vh] lg:h-screen bg-[#f5e5d5] bg-blend-multiply"
      style={{
        backgroundImage: `url(${ourPortfolioImg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  </section>
);

export default OurPortfolio;
