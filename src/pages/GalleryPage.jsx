import { useParams, useNavigate } from "react-router-dom";
import { useMemo } from "react";

import galleryData from "../data/galleryData";

function GalleryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  // safer access
  const gallery = useMemo(() => {
    return galleryData?.[category] || null;
  }, [category]);

  if (!gallery) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f3ee]">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[#4e3925]">
            Gallery Not Found
          </h1>

          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-3 rounded-full bg-[#6f4e37] text-white hover:bg-[#4e3925]"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f8f3ee] px-5 py-10 md:px-12 md:py-16">
      {/* Back Button (better UX than -1) */}
      <button
        onClick={() => navigate("/")}
        className="mb-10 px-6 py-3 rounded-full bg-[#6f4e37] text-white hover:bg-[#4e3925] transition"
      >
        ← Back
      </button>

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="uppercase tracking-[4px] text-sm text-[#7a5a3d] mb-3">
          Everframe Gallery
        </p>

        <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl text-[#4e3925]">
          {gallery.title}
        </h1>
      </div>

      {/* Gallery Grid (fixed responsiveness) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {Array.isArray(gallery.images) &&
          gallery.images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-xl group"
            >
              <img
                src={img}
                alt={`${gallery.title} ${index + 1}`}
                loading="lazy"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
          ))}
      </div>
    </section>
  );
}

export default GalleryPage;
