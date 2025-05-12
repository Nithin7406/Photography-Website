import React, { useRef, useEffect, useState } from "react";
import weddingImage from "../assets/events/wedding.jpg";
import preWeddingImage from "../assets/events/prewedding.jpg";
import birthdayImage from "../assets/events/birthday.jpg";
import haldi from "../assets/events/haldi.jpg";
import Mehendi from "../assets/events/Mehendi.jpg";
import Sangeet from "../assets/events/Sangeet.jpg";
import { ChevronRight, ChevronLeft } from "lucide-react";

function WhatWeDo() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  };

  const handleScrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 600, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -600, behavior: "smooth" });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const events = [
    { title: "Wedding", image: weddingImage },
    { title: "Pre-Wedding", image: preWeddingImage },
    { title: "Birthday", image: birthdayImage },
    { title: "Haldi", image: haldi },
    { title: "Mehendi", image: Mehendi },
    { title: "Birthday", image: birthdayImage },
    { title: "Sangeet", image: Sangeet },
  ];

  return (
    <section
      id="services"
      className="px-6 md:px-20 py-8 min-h-[60vh] bg-[#f5e5d5] text-white"
      style={{ fontFamily: "Forum, sans-serif" }}
    >
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
          What We Do
        </h1>
        <p className="text-sm tracking-wider font-semibold text-gray-700 uppercase">
          Wedding Photography & More
        </p>
      </div>

      <div className="relative mt-8">
        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-scroll flex space-x-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {events.map((event, idx) => (
            <div
              key={idx}
              className="min-w-[250px] w-[300px] bg-cover bg-center h-[350px] rounded-lg relative"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="flex items-center justify-center h-full bg-black/50 rounded-lg">
                <div className="text-center text-white p-4">
                  <h3 className="text-2xl font-semibold">{event.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Left Button */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/90 to-transparent z-20 flex items-center justify-start">
            <button
              onClick={handleScrollLeft}
              className="text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-black transition"
              title="Scroll Left"
            >
              <ChevronLeft size={40} />
            </button>
          </div>
        )}

        {/* Gradient Right Button */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/90 to-transparent z-20 flex items-center justify-end">
            <button
              onClick={handleScrollRight}
              className="text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-black transition"
              title="Scroll Right"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default WhatWeDo;
