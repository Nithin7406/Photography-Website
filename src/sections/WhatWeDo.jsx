import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Images
import weddingImg from "../assets/events/wedding/wedding-1.jpg";
import preWeddingImg from "../assets/events/prewedding/prewedding-1.jpg";
import haldiImg from "../assets/events/haldi/haldi-1.jpg";
import mehendiImg from "../assets/events/mehendi/mehendi-1.jpg";
import sangeetImg from "../assets/events/sangeet/sangeet-1.jpg";
import birthdayImg from "../assets/events/birthday/birthday-1.jpg";

const events = [
  { title: "Wedding", image: weddingImg, path: "wedding" },
  { title: "Pre Wedding", image: preWeddingImg, path: "prewedding" },
  { title: "Haldi", image: haldiImg, path: "haldi" },
  { title: "Mehendi", image: mehendiImg, path: "mehendi" },
  { title: "Sangeet", image: sangeetImg, path: "sangeet" },
  { title: "Birthday", image: birthdayImg, path: "birthday" },
];

function WhatWeDo() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const CARD_WIDTH = 320;

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
      behavior: "smooth",
    });
  };

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);

    const index = Math.round(el.scrollLeft / CARD_WIDTH);
    setActiveIndex(index);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState);
    updateScrollState();

    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f3ece5] py-20 md:py-32"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d8b89c] opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#e6c9aa] opacity-20 blur-3xl rounded-full"></div>

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
            What We Do
          </p>

          <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl text-[#4e3925] leading-tight">
            Crafting Stories <br />
            Through Every Frame
          </h2>

          <p className="mt-6 text-[#5f5248] text-sm sm:text-base leading-8 max-w-3xl mx-auto">
            From intimate ceremonies to grand celebrations, we transform your
            moments into timeless cinematic memories filled with elegance,
            emotion, and beauty.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full backdrop-blur-md shadow-lg items-center justify-center transition
              ${
                canScrollLeft
                  ? "bg-white/80 hover:scale-110"
                  : "bg-white/30 cursor-not-allowed"
              }`}
          >
            <ChevronLeft className="text-[#4e3925]" size={20} />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full backdrop-blur-md shadow-lg items-center justify-center transition
              ${
                canScrollRight
                  ? "bg-white/80 hover:scale-110"
                  : "bg-white/30 cursor-not-allowed"
              }`}
          >
            <ChevronRight className="text-[#4e3925]" size={20} />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="
              flex gap-6 overflow-x-auto
              scroll-smooth pb-4 px-2
              snap-x snap-mandatory
              scrollbar-hide
              cursor-grab active:cursor-grabbing
            "
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/gallery/${event.path}`)}
                className="
                  snap-start
                  group relative
                  min-w-[260px] sm:min-w-[300px] md:min-w-[320px]
                  h-[380px] sm:h-[420px]
                  rounded-3xl overflow-hidden cursor-pointer
                  shadow-xl
                "
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-5">
                  <p className="uppercase tracking-[3px] text-[#e6c9aa] text-[10px] mb-2">
                    Everframe Stories
                  </p>

                  <h3 className="font-['Cormorant_Garamond'] text-2xl text-white mb-3">
                    {event.title}
                  </h3>

                  <button className="px-5 py-2 rounded-full border border-white text-white text-[10px] uppercase tracking-[2px] hover:bg-white hover:text-[#4e3925] transition">
                    View Gallery
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {events.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-[#4e3925]" : "w-2 bg-[#cbb6a3]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
