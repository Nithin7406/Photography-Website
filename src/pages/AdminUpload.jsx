import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Make sure this points to your new master file!
import {
  uploadImage,
  getImagesByCategory,
  deleteImage,
} from "../firebase/imageServices";

// 1. ADDED { setIsAdmin } AS A PROP HERE
function AdminUpload({ setIsAdmin }) {
  const [file, setFile] = useState(null);
  const [event, setEvent] = useState("wedding");
  const [loading, setLoading] = useState(false);

  // New state variables for the gallery
  const [galleryImages, setGalleryImages] = useState([]);
  const [fetching, setFetching] = useState(false);

  const navigate = useNavigate();

  const events = [
    "wedding",
    "prewedding",
    "birthday",
    "haldi",
    "mehendi",
    "sangeet",
  ];

  // Automatically fetch images whenever the selected category changes
  useEffect(() => {
    fetchGallery();
  }, [event]);

  const fetchGallery = async () => {
    setFetching(true);
    const images = await getImagesByCategory(event);
    setGalleryImages(images);
    setFetching(false);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image");
      return;
    }

    try {
      setLoading(true);
      await uploadImage(file, event);
      alert("Image Uploaded Successfully!");
      setFile(null);

      // Instantly refresh the gallery to show the new upload
      fetchGallery();
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (docId, imageUrl) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );
    if (!confirmDelete) return;

    const success = await deleteImage(docId, imageUrl);
    if (success) {
      // Instantly remove the image from the screen without reloading the page
      setGalleryImages((prev) => prev.filter((img) => img.id !== docId));
    } else {
      alert("Failed to delete image.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");

    // 2. ADDED THIS LINE TO SECURELY LOCK THE APP
    setIsAdmin(false);

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f8f3ee] px-5 py-10 md:px-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-5xl uppercase tracking-[8px] text-[#4e3925] font-semibold">
            Admin Dashboard
          </h1>
          <p className="text-[#8b6545] mt-2 tracking-[3px] uppercase text-sm">
            WE CAPTURES
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-[#4e3925] hover:bg-[#6f4e37] text-white px-5 py-3 rounded-xl uppercase tracking-[2px] transition duration-300 text-sm md:text-base"
        >
          Logout
        </button>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN: Upload Card */}
        <div className="lg:col-span-1 h-fit bg-white rounded-3xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-[#4e3925] mb-6">
            Upload Image
          </h2>

          {/* Event Select */}
          <div className="mb-5">
            <label className="block mb-2 text-sm uppercase tracking-[2px] text-[#8b6545]">
              Select Event
            </label>
            <select
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              className="w-full border border-[#d8c2af] rounded-xl p-3 outline-none focus:border-[#b18b68] bg-white"
            >
              {events.map((ev) => (
                <option key={ev} value={ev}>
                  {ev}
                </option>
              ))}
            </select>
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block mb-2 text-sm uppercase tracking-[2px] text-[#8b6545]">
              Choose Image
            </label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full border border-[#d8c2af] rounded-xl p-3 file:mr-4 file:px-4 file:py-2 file:border-0 file:rounded-lg file:bg-[#4e3925] file:text-white file:cursor-pointer text-sm"
            />
          </div>

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full bg-[#4e3925] hover:bg-[#6f4e37] disabled:opacity-50 text-white py-4 rounded-xl uppercase tracking-[3px] transition duration-300 text-sm md:text-base shadow-lg"
          >
            {loading ? "Uploading..." : "Upload Image"}
          </button>
        </div>

        {/* RIGHT COLUMN: Gallery Management */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[#4e3925] capitalize">
              {event} Gallery
            </h2>
            <span className="bg-white text-[#8b6545] px-4 py-1 rounded-full text-xs uppercase tracking-[2px] shadow-sm border border-[#d8c2af]">
              {galleryImages.length} Items
            </span>
          </div>

          {/* Loading State */}
          {fetching ? (
            <div className="flex justify-center items-center h-64 bg-white/50 rounded-3xl border border-[#d8c2af] border-dashed">
              <p className="text-[#8b6545] uppercase tracking-[3px] animate-pulse">
                Loading gallery...
              </p>
            </div>
          ) : galleryImages.length === 0 ? (
            <div className="flex justify-center items-center h-64 bg-white/50 rounded-3xl border border-[#d8c2af] border-dashed">
              <p className="text-[#8b6545] text-sm uppercase tracking-[2px]">
                No images found in this category.
              </p>
            </div>
          ) : (
            /* Image Grid */
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="relative group rounded-2xl overflow-hidden shadow-md bg-white"
                >
                  <img
                    src={img.url}
                    alt={img.category}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Hover Overlay with Delete Button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <button
                      onClick={() => handleDelete(img.id, img.url)}
                      className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-xs uppercase tracking-[2px] shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminUpload;
