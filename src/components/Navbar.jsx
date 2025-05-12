import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu on click
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Greeting", id: "greeting" },
    { name: "Our Portfolio", id: "portfolio" },
    { name: "What We Do", id: "services" },
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all bg-gradient-to-t from-black/0 via-black/60 to-black/90 duration-300 px-4 sm:px-6 py-4 
        flex justify-between items-center 
        
      `}
    >
      <div className="font-bold text-xl text-white truncate max-w-[60vw] sm:max-w-none">
        HEARTSTRING
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-white">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScrollToSection(item.id)}
            className="hover:underline cursor-pointer bg-transparent border-none text-white"
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* Mobile Nav Toggle */}
      <div className="relative md:hidden">
        <button
          className="flex flex-col justify-center items-center w-8 h-8 relative group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`bg-white h-0.5 w-6 mb-1 rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 w-6 mb-1 rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 w-6 rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Nav Menu */}
        <div
          className={`absolute right-0 mt-2 w-44 bg-black/90 rounded-md shadow-lg py-2 flex flex-col items-start text-white z-50 transition-all duration-300 ease-in-out ${
            menuOpen
              ? "translate-x-0 opacity-100 visible"
              : "translate-x-20 opacity-0 invisible"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollToSection(item.id)}
              className="px-4 py-2 w-full text-left hover:bg-white hover:text-black cursor-pointer bg-transparent border-none"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
