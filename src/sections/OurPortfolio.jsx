import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ourPortfolioImg from "../assets/hero/OurPortfolio.png";

function OurPortfolio() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo(0, 0); // Reset scroll before navigation
    navigate("/gallery");
  };

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#f5e5d5]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#e6c9aa] opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c49a6c] opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-sm text-[#7a5a3d] mb-4">
            Our Portfolio
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl text-[#4e3925] leading-tight">
            Timeless Stories <br /> Captured Beautifully
          </h2>
          <p className="mt-6 text-[#5f5248] text-sm sm:text-base leading-8 max-w-3xl mx-auto">
            Explore the beautiful stories of our clients through carefully
            crafted wedding moments, emotional memories, and cinematic frames.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={handleNavigate}
            className="w-full h-[40vh] sm:h-[55vh] md:h-[75vh] lg:h-screen bg-[#f5e5d5] bg-blend-multiply cursor-pointer mt-10"
            style={{
              backgroundImage: `url(${ourPortfolioImg})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default OurPortfolio;
