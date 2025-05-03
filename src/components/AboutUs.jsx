import React from "react";
import photographerImage from "../assets/photographerImage.jpg";
import coupleImage from "../assets/IMG7.jpg";

function ImageLayout() {
  return (
    <section
      className="px-4 py-10 md:px-16 bg-[#e2d1c1] min-h-screen flex flex-col justify-center"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col space-y-14">
        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 relative">
          <div className="absolute right-0 top-0 w-48 h-48 bg-pink-100 rounded-full opacity-40 blur-2xl -z-10"></div>

          <div className="md:w-5/12 flex justify-center">
            <div className="p-2 bg-white rounded-lg shadow-lg border border-gray-200">
              <img
                src={photographerImage}
                alt="Photographer"
                className="w-full max-w-[250px] object-contain rounded-md"
              />
            </div>
          </div>

          <div className="md:w-7/12 flex flex-col justify-center">
            <h2 className="text-lg md:text-xl font-bold text-[#5c492d] mb-3 uppercase tracking-wide">
              About Us
            </h2>
            <p className="text-gray-800 text-sm leading-relaxed mb-5">
              At Heartstrings, we are dedicated to capturing life's most
              precious moments through the art of photography. Our mission is to
              provide timeless and high-quality photographic services that
              preserve memories for generations to come.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative">
          <div className="absolute left-0 bottom-0 w-48 h-48 bg-[#fff3ea] rounded-full opacity-40 blur-2xl -z-10"></div>

          <div className="md:w-5/12 flex justify-center">
            <div className="p-2 bg-white rounded-lg shadow-lg border border-gray-200">
              <img
                src={coupleImage}
                alt="Happy Couple"
                className="w-full max-w-[250px] object-contain rounded-md"
              />
            </div>
          </div>

          <div className="md:w-7/12 flex flex-col justify-center">
            <h2 className="text-lg md:text-xl font-bold text-[#5c492d] mb-3 uppercase tracking-wide">
              Words From Our Couples
            </h2>
            <blockquote className="text-gray-800 text-sm leading-relaxed mb-5 italic border-l-4 pl-4 border-[#5c492d]">
              "We are beyond thrilled with the beautiful photos [Photographer
              Name] captured on our wedding day. From the intimate moments to
              the grand celebrations, every shot was perfection."
            </blockquote>
            <p className="text-gray-600 text-xs italic">
              – Ayush & Priya (Fictional Names)
            </p>
          </div>
        </div>

        {/* NEW PROMISE SECTION */}
        <div className="bg-[#f9f5f1] p-8 rounded-xl shadow-inner">
          <h2 className="text-lg md:text-xl font-bold text-[#5c492d] mb-4 uppercase tracking-wide text-center">
            Our Promise
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">
            Every click of the shutter is a promise from us to you — to capture
            moments not just with precision, but with heart. We strive to create
            imagery that tells your story, filled with authenticity, warmth, and
            joy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImageLayout;
