import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Wedding Images
import wedding1 from "../assets/events/wedding/wedding-1.jpg";
import wedding2 from "../assets/events/wedding/wedding-2.jpg";
import wedding3 from "../assets/events/wedding/wedding-3.jpg";
import wedding4 from "../assets/events/wedding/wedding-4.jpg";
import wedding5 from "../assets/events/wedding/wedding-5.jpg";
import wedding6 from "../assets/events/wedding/wedding-6.jpg";

const images = [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6];

function WeddingPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#f8f3ee] overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[75vh] flex items-center justify-center">
        {/* Background Image */}
        <img
          src={wedding1}
          alt="Wedding"
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
          <p className="uppercase tracking-[5px] text-[#e6c9aa] text-sm mb-4">
            Everframe Weddings
          </p>

          <h1 className="font-['Cormorant_Garamond'] text-6xl sm:text-7xl md:text-8xl text-white leading-none">
            Wedding
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-[#f5e8dc] text-sm sm:text-base leading-8">
            Elegant moments, emotional vows, and timeless celebrations —
            beautifully captured to preserve your forever memories with
            cinematic storytelling.
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
          <p className="uppercase tracking-[5px] text-sm text-[#7a5a3d] mb-4">
            Wedding Gallery
          </p>

          <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl text-[#4e3925] leading-tight">
            Timeless Wedding <br />
            Memories
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
                alt={`Wedding ${index + 1}`}
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WeddingPage;
