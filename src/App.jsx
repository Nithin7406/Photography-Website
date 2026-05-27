import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Greeting from "./components/Greeting";
import OurPortfolio from "./components/OurPortfolio";
import WhatWeDo from "./components/WhatWeDo";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

import EventGallery from "./components/EventGallery";

function Home() {
  return (
    <>
      <HomePage />
      <Greeting />
      <OurPortfolio />
      <WhatWeDo />
      <AboutUs />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:name" element={<EventGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
