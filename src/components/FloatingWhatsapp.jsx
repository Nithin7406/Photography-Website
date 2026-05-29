import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function FloatingSocial() {
  return (
    <div className="fixed bottom-20 right-5 md:right-8 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/918861654544"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="relative group"
      >
        <div className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-green-500 shadow-xl flex items-center justify-center hover:scale-110 hover:bg-green-600 transition-all duration-300">
          <FaWhatsapp className="text-white text-xl md:text-2xl" />
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/praveen_kumar_j.m/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="relative group"
      >
        <div className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
          <FaInstagram className="text-white text-xl md:text-2xl" />
        </div>
      </a>
    </div>
  );
}

export default FloatingSocial;
