import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
      window.scrollTo(0, 0);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(
          () =>
            document
              .getElementById(item.to)
              ?.scrollIntoView({ behavior: "smooth" }),
          100
        );
      } else {
        document
          .getElementById(item.to)
          ?.scrollIntoView({ behavior: "smooth" });
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
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        />

        {/* Desktop Menu */}
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
          className="md:hidden flex flex-col gap-1.5 z-[60] relative"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white block"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-white block"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white block"
          />
        </button>
      </div>

      {/* Professional Animated Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05, color: "#d4a373" }}
                onClick={() => handleNav(item)}
                className="text-white uppercase tracking-[4px] text-2xl font-light"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setMenuOpen(false);
                navigate("/admin");
              }}
              className="mt-4 px-8 py-3 border border-[#d4a373] text-[#d4a373] uppercase tracking-[2px] text-sm rounded-full"
            >
              Admin Access
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
