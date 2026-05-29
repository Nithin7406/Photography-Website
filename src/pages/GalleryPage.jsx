import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getImagesByCategory } from "../firebase/imageServices";

function GalleryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventImages = async () => {
      setLoading(true);
      try {
        const fetchedImages = await getImagesByCategory(category);
        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEventImages();
  }, [category]);

  return (
    <section className="min-h-screen bg-[#f8f3ee] px-5 py-10 md:px-12 md:py-16 pt-24">
      {/* Intelligent Back Button */}
      <div className="max-w-7xl mx-auto mb-10">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-full bg-[#6f4e37] text-white hover:bg-[#4e3925] transition uppercase tracking-[2px] text-xs shadow-lg"
        >
          ← Back
        </button>
      </div>
      <div className="text-center mb-14">
        <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl text-[#4e3925] capitalize">
          {category?.replace("-", " ")}
        </h1>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64 text-[#8b6545] animate-pulse">
          Loading amazing moments...
        </div>
      ) : images.length === 0 ? (
        <div className="text-center text-[#8b6545]">
          No images uploaded for this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
            >
              <img
                src={img.url}
                alt={`${category} event`}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default GalleryPage;
