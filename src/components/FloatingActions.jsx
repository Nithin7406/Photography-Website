import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { ChevronUp } from "lucide-react";

function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the whole stack after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-5 md:right-8 z-50 flex flex-col gap-3 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Phone Call */}
      <a
        href="tel:+918861654544"
        aria-label="Call Us"
        className="relative group"
      >
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-blue-500 shadow-xl flex items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all duration-300">
          <FaPhoneAlt className="text-white text-lg md:text-xl" />
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918861654544"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="relative group"
      >
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-green-500 shadow-xl flex items-center justify-center hover:scale-110 hover:bg-green-600 transition-all duration-300">
          <FaWhatsapp className="text-white text-xl md:text-2xl" />
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/wecaptures_photography/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="relative group"
      >
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
          <FaInstagram className="text-white text-xl md:text-2xl" />
        </div>
      </a>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          w-11 h-11 md:w-12 md:h-12
          rounded-full
          bg-black/60
          backdrop-blur-md
          border border-white/10
          flex items-center justify-center
          text-white
          hover:bg-black/80
          hover:scale-110
          transition-all duration-300
          shadow-xl
        "
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
}

export default FloatingActions;
