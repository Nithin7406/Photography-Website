import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import MasterGallery from "./pages/MasterGallery"; // New page
import AdminLogin from "./pages/AdminLogin";
import AdminUpload from "./pages/AdminUpload";

import Greeting from "./sections/Greeting";
import OurPortfolio from "./sections/OurPortfolio";
import WhatWeDo from "./sections/WhatWeDo";
import AboutUs from "./sections/AboutUs";
import Contact from "./sections/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import Loader from "./components/Loader";

function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HomePage />
        <Greeting />
        <OurPortfolio />
        <WhatWeDo />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Hub Gallery */}
        <Route path="/gallery" element={<MasterGallery />} />
        {/* Specific Category Gallery */}
        <Route path="/gallery/:category" element={<GalleryPage />} />
        <Route path="/admin" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
        <Route
          path="/admin/upload"
          element={
            isAdmin ? (
              <AdminUpload setIsAdmin={setIsAdmin} />
            ) : (
              <AdminLogin setIsAdmin={setIsAdmin} />
            )
          }
        />
      </Routes>
      <FloatingActions />
    </BrowserRouter>
  );
}

export default App;
