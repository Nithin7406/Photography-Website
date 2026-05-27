import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import weddingImage from "../assets/events/wedding.jpg";
import preWeddingImage from "../assets/events/prewedding.jpg";
import birthdayImage from "../assets/events/birthday.jpg";
import haldi from "../assets/events/haldi.jpg";
import Mehendi from "../assets/events/Mehendi.jpg";
import Sangeet from "../assets/events/Sangeet.jpg";

import { ChevronRight, ChevronLeft } from "lucide-react";

function WhatWeDo() {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  const handleScrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
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

  const getSlug = (title) => title.toLowerCase().trim().replace(/\s+/g, "-");

  const events = [
    { title: "Wedding", image: weddingImage },
    { title: "Pre-Wedding", image: preWeddingImage },
    { title: "Birthday", image: birthdayImage },
    { title: "Haldi", image: haldi },
    { title: "Mehendi", image: Mehendi },
    { title: "Birthday Party", image: birthdayImage },
    { title: "Sangeet", image: Sangeet },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-20 py-8 min-h-[60vh] bg-[#f5e5d5]">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
          What We Do
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-gray-700 uppercase">
          Wedding Photography & More
        </p>
      </div>

      <div className="relative mt-6 md:mt-8">
        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto flex gap-4 sm:gap-5 md:gap-6 scrollbar-hide scroll-smooth px-1"
        >
          {events.map((event, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/event/${getSlug(event.title)}`)}
              className="
                flex-shrink-0
                w-[200px] h-[260px]
                sm:w-[240px] sm:h-[300px]
                md:w-[260px] md:h-[320px]
                lg:w-[300px] lg:h-[350px]
                rounded-lg cursor-pointer
                bg-cover bg-center relative
                hover:scale-105 transition duration-300
              "
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="flex items-center justify-center h-full bg-black/50 rounded-lg">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-14 md:w-16 bg-gradient-to-r from-black/80 to-transparent flex items-center">
            <button
              onClick={handleScrollLeft}
              className="text-white p-1 sm:p-2"
            >
              <ChevronLeft
                size={28}
                className="sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
            </button>
          </div>
        )}

        {/* Right Button */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-14 md:w-16 bg-gradient-to-l from-black/80 to-transparent flex items-center justify-end">
            <button
              onClick={handleScrollRight}
              className="text-white p-1 sm:p-2"
            >
              <ChevronRight
                size={28}
                className="sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default WhatWeDo;
