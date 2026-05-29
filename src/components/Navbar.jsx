import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Gallery", to: "gallery" }, // updated
    { name: "Portfolio", to: "portfolio" },
    { name: "Services", to: "services" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
    { name: "Admin", to: "admin" }, // added
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-gradient-to-b from-black/80 via-black/40 to-transparent
        px-5 md:px-10 py-4
      "
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={700}
          className="flex items-center cursor-pointer"
        >
          <img
            src="/Logo3.png"
            alt="Everframe Logo"
            className="h-12 md:h-14 object-contain"
          />

          <h1
            className="
              text-white
              text-lg md:text-2xl
              tracking-[4px]
              uppercase
              ml-2
              font-semibold
            "
          >
            Everframe
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={700}
              offset={-80}
              className="
                text-white text-sm uppercase tracking-[3px]
                cursor-pointer hover:text-[#d4a373]
                transition duration-300
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`w-6 h-[2px] bg-white transition ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>

          <span
            className={`w-6 h-[2px] bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`w-6 h-[2px] bg-white transition ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-5 flex flex-col gap-5">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={700}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="
                text-white uppercase tracking-[3px]
                text-sm cursor-pointer
                hover:text-[#d4a373]
                transition duration-300
              "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
