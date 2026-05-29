import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { title: "Wedding", path: "wedding" },
  { title: "Pre Wedding", path: "prewedding" },
  { title: "Haldi", path: "haldi" },
  { title: "Mehendi", path: "mehendi" },
  { title: "Sangeet", path: "sangeet" },
  { title: "Birthday", path: "birthday" },
];

function MasterGallery() {
  const navigate = useNavigate();

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-[#f8f3ee] py-20 px-5 md:px-12 pt-24">
      <div className="max-w-7xl mx-auto mb-10">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-full bg-[#6f4e37] text-white hover:bg-[#4e3925] transition uppercase tracking-[2px] text-xs shadow-lg"
        >
          ← Back Home
        </button>
      </div>

      <h1 className="text-center font-['Cormorant_Garamond'] text-6xl text-[#4e3925] mb-16">
        Our Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <motion.div
            key={cat.path}
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/gallery/${cat.path}`);
            }}
            className="h-80 rounded-3xl overflow-hidden cursor-pointer relative shadow-xl bg-[#e0d8cf]"
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity hover:bg-black/20">
              <h2 className="text-white text-3xl font-semibold tracking-wider">
                {cat.title}
              </h2>
            </div>
            <p className="absolute bottom-4 left-4 text-white/70 text-xs">
              Click to view photos
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default MasterGallery;
