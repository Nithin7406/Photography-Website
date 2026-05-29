import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getImagesByCategory } from "../firebase/imageServices";

// Static fallbacks
import weddingImg from "../assets/events/wedding/wedding-1.jpg";
import preWeddingImg from "../assets/events/prewedding/prewedding-1.jpg";
import haldiImg from "../assets/events/haldi/haldi-1.jpg";
import mehendiImg from "../assets/events/mehendi/mehendi-1.jpg";
import sangeetImg from "../assets/events/sangeet/sangeet-1.jpg";
import birthdayImg from "../assets/events/birthday/birthday-1.jpg";

const defaultEvents = [
  { title: "Wedding", path: "wedding", image: weddingImg },
  { title: "Pre Wedding", path: "prewedding", image: preWeddingImg },
  { title: "Haldi", path: "haldi", image: haldiImg },
  { title: "Mehendi", path: "mehendi", image: mehendiImg },
  { title: "Sangeet", path: "sangeet", image: sangeetImg },
  { title: "Birthday", path: "birthday", image: birthdayImg },
];

function WhatWeDo() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [events, setEvents] = useState(defaultEvents);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const CARD_WIDTH = 320;

  useEffect(() => {
    const fetchCoverPhotos = async () => {
      const updatedEvents = await Promise.all(
        defaultEvents.map(async (ev) => {
          const images = await getImagesByCategory(ev.path);
          return images?.length > 0 ? { ...ev, image: images[0].url } : ev;
        })
      );
      setEvents(updatedEvents);
    };
    fetchCoverPhotos();
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
        behavior: "smooth",
      });
    }
  };

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    setActiveIndex(Math.round(el.scrollLeft / CARD_WIDTH));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f3ece5] py-20 md:py-32"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <motion.div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-sm text-[#7a5a3d] mb-4">
            What We Do
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl text-[#4e3925]">
            Crafting Stories
          </h2>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-md shadow-lg flex items-center justify-center bg-white/80 hover:scale-110 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-md shadow-lg flex items-center justify-center bg-white/80 hover:scale-110 transition"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-10 snap-x snap-mandatory scrollbar-hide"
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/gallery/${event.path}`)}
                className="snap-start group relative min-w-[300px] h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-xl"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-2xl font-['Cormorant_Garamond']">
                    {event.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
