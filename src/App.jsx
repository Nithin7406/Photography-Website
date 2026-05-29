import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";

import Greeting from "./sections/Greeting";
import OurPortfolio from "./sections/OurPortfolio";
import WhatWeDo from "./sections/WhatWeDo";
import AboutUs from "./sections/AboutUs";
import Contact from "./sections/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import Testimonials from "./components/Testimonials";
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
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Loader Screen
  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/gallery/:category" element={<GalleryPage />} />
      </Routes>

      <BackToTop />

      <FloatingWhatsapp />
    </BrowserRouter>
  );
}

export default App;
