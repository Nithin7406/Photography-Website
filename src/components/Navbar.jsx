import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "home", type: "scroll" },
    { name: "Gallery", to: "/gallery", type: "route" },
    { name: "Portfolio", to: "portfolio", type: "scroll" },
    { name: "Services", to: "services", type: "scroll" },
    { name: "About", to: "about", type: "scroll" },
    { name: "Contact", to: "contact", type: "scroll" },
  ];

  const handleNav = (item) => {
    setMenuOpen(false);
    if (item.type === "route") {
      navigate(item.to);
    } else {
      // If we aren't on home, navigate home first then scroll
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(
          () =>
            document
              .getElementById(item.to)
              ?.scrollIntoView({ behavior: "smooth" }),
          100
        );
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent px-5 md:px-10 py-4">
      <div className="flex items-center justify-between">
        <img
          src="/Logo3.png"
          alt="Logo"
          className="h-12 md:h-17 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNav(item)}
              className="text-white text-sm uppercase tracking-[3px] hover:text-[#d4a373] transition"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => navigate("/admin")}
            className="text-white text-sm uppercase tracking-[3px] hover:text-[#d4a373]"
          >
            Admin
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`w-6 h-[2px] bg-white transition ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all ${
          menuOpen
            ? "max-h-96 opacity-100 mt-5"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-5 flex flex-col gap-5">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNav(item)}
              className="text-white uppercase tracking-[3px] text-sm text-left"
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
