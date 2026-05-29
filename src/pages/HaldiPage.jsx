import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Haldi Images
import haldi1 from "../assets/events/haldi/haldi-1.jpg";
import haldi2 from "../assets/events/haldi/haldi-2.jpg";
import haldi3 from "../assets/events/haldi/haldi-3.jpg";
import haldi4 from "../assets/events/haldi/haldi-4.jpg";
import haldi5 from "../assets/events/haldi/haldi-5.jpg";
import haldi6 from "../assets/events/haldi/haldi-6.jpg";

const images = [haldi1, haldi2, haldi3, haldi4, haldi5, haldi6];

function HaldiPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#f8f3ee] overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[75vh] flex items-center justify-center">
        {/* Background Image */}
        <img
          src={haldi1}
          alt="Haldi"
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
          <p className="uppercase tracking-[5px] text-[#f7d774] text-sm mb-4">
            Everframe Celebrations
          </p>

          <h1 className="font-['Cormorant_Garamond'] text-6xl sm:text-7xl md:text-8xl text-white leading-none">
            Haldi
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-[#f5e8dc] text-sm sm:text-base leading-8">
            Vibrant turmeric rituals, candid laughter, and emotional moments —
            beautifully captured to preserve the warmth and joy of your Haldi
            celebration.
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
          <p className="uppercase tracking-[5px] text-sm text-[#c79a1b] mb-4">
            Haldi Gallery
          </p>

          <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl text-[#4e3925] leading-tight">
            Golden Moments <br />
            Filled With Joy
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
                alt={`Haldi ${index + 1}`}
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HaldiPage;
