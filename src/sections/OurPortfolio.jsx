import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import weddingImg from "../assets/events/wedding/wedding-1.jpg";
import preWeddingImg from "../assets/events/prewedding/prewedding-1.jpg";
import haldiImg from "../assets/events/haldi/haldi-1.jpg";
import mehendiImg from "../assets/events/mehendi/mehendi-1.jpg";
import sangeetImg from "../assets/events/sangeet/sangeet-1.jpg";
import birthdayImg from "../assets/events/birthday/birthday-1.jpg";
import ourPortfolioImg from "../assets/hero/OurPortfolio.png";

const portfolioItems = [
  {
    title: "Wedding",
    image: weddingImg,
    path: "wedding",
  },
  {
    title: "Pre Wedding",
    image: preWeddingImg,
    path: "prewedding",
  },
  {
    title: "Haldi",
    image: haldiImg,
    path: "haldi",
  },
  {
    title: "Mehendi",
    image: mehendiImg,
    path: "mehendi",
  },
  {
    title: "Sangeet",
    image: sangeetImg,
    path: "sangeet",
  },
  {
    title: "Birthday",
    image: birthdayImg,
    path: "birthday",
  },
];

function OurPortfolio() {
  const navigate = useNavigate();

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#f5e5d5] py-20 md:py-32"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#e6c9aa] opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c49a6c] opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-sm text-[#7a5a3d] mb-4">
            Our Portfolio
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl text-[#4e3925] leading-tight">
            Timeless Stories <br />
            Captured Beautifully
          </h2>
          <p className="mt-6 text-[#5f5248] text-sm sm:text-base leading-8 max-w-3xl mx-auto">
            Explore the stories of our beautiful clients, where every image
            speaks volumes
          </p>
          <div
            className="w-full h-[40vh] sm:h-[55vh] md:h-[75vh] lg:h-screen bg-[#f5e5d5] bg-blend-multiply"
            style={{
              backgroundImage: `url(${ourPortfolioImg})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <p className="mt-6 text-[#5f5248] text-sm sm:text-base leading-8 max-w-3xl mx-auto">
            Explore our carefully crafted wedding stories, emotional moments,
            and cinematic memories — where every frame tells a beautiful story.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px] shadow-2xl cursor-pointer"
              onClick={() => navigate(`/gallery/${item.path}`)}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <p className="uppercase tracking-[4px] text-[#e6c9aa] text-xs mb-3">
                  Everframe Collection
                </p>

                <h3 className="font-['Cormorant_Garamond'] text-4xl text-white mb-5">
                  {item.title}
                </h3>

                <button className="px-6 py-3 rounded-full border border-white text-white text-xs uppercase tracking-[3px] hover:bg-white hover:text-[#4e3925] transition duration-500">
                  View Gallery
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPortfolio;
