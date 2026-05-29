import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Mehendi Images
import mehendi1 from "../assets/events/mehendi/mehendi-1.jpg";
import mehendi2 from "../assets/events/mehendi/mehendi-2.jpg";
import mehendi3 from "../assets/events/mehendi/mehendi-3.jpg";
import mehendi4 from "../assets/events/mehendi/mehendi-4.jpg";
import mehendi5 from "../assets/events/mehendi/mehendi-5.jpg";
import mehendi6 from "../assets/events/mehendi/mehendi-6.jpg";

const images = [mehendi1, mehendi2, mehendi3, mehendi4, mehendi5, mehendi6];

function MehendiPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#f8f3ee] overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[75vh] flex items-center justify-center">
        {/* Background Image */}
        <img
          src={mehendi1}
          alt="Mehendi"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-5"
        >
          <p className="uppercase tracking-[5px] text-[#d9b26f] text-sm mb-4">
            Everframe Celebrations
          </p>

          <h1 className="font-['Cormorant_Garamond'] text-6xl sm:text-7xl md:text-8xl text-white leading-none">
            Mehendi
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-[#f5e8dc] text-sm sm:text-base leading-8">
            Beautiful henna artistry, joyful celebrations, and unforgettable
            moments — captured with elegance and timeless storytelling.
          </p>
        </motion.div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 px-5 py-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-[#4e3925] transition duration-300"
        >
          ← Back
        </button>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-sm text-[#b88438] mb-4">
            Mehendi Gallery
          </p>

          <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl text-[#4e3925] leading-tight">
            Elegant Patterns <br />
            Beautiful Memories
          </h2>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[28px] shadow-2xl break-inside-avoid group"
            >
              <img
                src={img}
                alt={`Mehendi ${index + 1}`}
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MehendiPage;
