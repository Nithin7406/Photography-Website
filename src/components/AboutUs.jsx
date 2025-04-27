import React from "react";
import photographerImage from "../assets/photographerImage.jpg";
import coupleImage from "../assets/IMG7.jpg";

function ImageLayout() {
  return (
    <section
      className="px-4 py-10 md:px-16 bg-[#e2d1c1] min-h-screen flex flex-col justify-center"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-5/12 flex justify-center">
            <img
              src={photographerImage}
              alt="Photographer"
              className="w-full max-w-[250px] object-contain rounded-lg shadow-md"
            />
          </div>

          <div className="md:w-7/12 flex flex-col justify-center">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
              About Us
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-5">
              At Heartstrings, we are dedicated to capturing life's most
              precious moments through the art of photography. Our mission is to
              provide timeless and high-quality photographic services that
              preserve memories for generations to come.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-5/12 flex justify-center">
            <img
              src={coupleImage}
              alt="Happy Couple"
              className="w-full max-w-[250px] object-contain rounded-lg shadow-md"
            />
          </div>

          <div className="md:w-7/12 flex flex-col justify-center">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
              Words From Our Couples
            </h2>
            <blockquote className="text-gray-700 text-sm leading-relaxed mb-5">
              "We are beyond thrilled with the beautiful photos [Photographer
              Name] captured on our wedding day. From the intimate moments to
              the grand celebrations, every shot was perfection."
            </blockquote>
            <p className="text-gray-600 text-xs italic">
              - Ayush & Priya (Fictional Names)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageLayout;
