import HomePage from "./components/HomePage";
import OurPortfolio from "./components/OurPortfolio";
import AboutSection from "./components/AboutSection";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <HomePage />
      <AboutSection />
      <OurPortfolio />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
