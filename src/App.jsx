import HomePage from "./components/HomePage";
import Greeting from "./components/Greeting";
import OurPortfolio from "./components/OurPortfolio";
// import WhatWeDo from "./components/WhatWeDo";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans">
      <HomePage />
      <Greeting />
      <OurPortfolio />
      {/* <WhatWeDo /> */}
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;
