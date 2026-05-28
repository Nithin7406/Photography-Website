import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaAngleDoubleUp,
} from "react-icons/fa";

const Info = () => {
  const [showTop, setShowTop] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-[#6f4e37] text-white font-raleway overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-12">
          {/* Main Container */}
          <div className="bg-[#8b6545] rounded-2xl md:rounded-3xl shadow-2xl px-5 sm:px-8 md:px-12 py-8 md:py-12">
            {/* Follow Button */}
            <div className="flex justify-center mb-10">
              <button className="border border-white px-5 sm:px-7 py-2.5 text-[11px] sm:text-xs md:text-sm tracking-[2px] uppercase font-semibold rounded-full hover:bg-white hover:text-[#6f4e37] transition duration-300">
                Follow Us @Everframe
              </button>
            </div>

            {/* Contact Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-6 text-center mb-10">
              {/* Contact */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 tracking-wide">
                  Contact Us
                </h4>

                <a
                  href="tel:+918861654544"
                  className="text-sm sm:text-base hover:text-[#f5d7bd] transition"
                >
                  +91 88616 54544
                </a>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4 tracking-wide">
                  Follow Us
                </h4>

                <div className="flex justify-center items-center gap-4 sm:gap-5">
                  <a
                    href="https://www.facebook.com/profile.php?id=61566903152368"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white flex items-center justify-center text-sm sm:text-base hover:bg-[#1877f2] hover:border-[#1877f2] transition duration-300"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://www.instagram.com/praveen_kumar_j.m/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white flex items-center justify-center text-sm sm:text-base hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 transition duration-300"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://wa.me/918861654544"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white flex items-center justify-center text-sm sm:text-base hover:bg-green-500 hover:border-green-500 transition duration-300"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2 md:col-span-1">
                <h4 className="text-base sm:text-lg font-semibold mb-3 tracking-wide">
                  Email Us
                </h4>

                <a
                  href="mailto:praveenkumar1122000jm@gmail.com"
                  className="text-xs sm:text-sm md:text-base break-all hover:text-[#f5d7bd] transition"
                >
                  praveenkumar1122000jm@gmail.com
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/20 mb-5"></div>

            {/* Copyright */}
            <div className="text-center text-[11px] sm:text-xs md:text-sm tracking-wide text-[#f1e4d8] leading-relaxed">
              © 2025 Everframe Photography Studio. <br className="sm:hidden" />
              All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Back To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 
        w-11 h-11 md:w-12 md:h-12 
        rounded-full bg-[#8b6545] text-white 
        shadow-xl flex items-center justify-center
        hover:bg-[#6f4e37] hover:scale-110
        transition-all duration-300 ${
          showTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Back to top"
      >
        <FaAngleDoubleUp className="text-lg" />
      </button>
    </>
  );
};

export default Info;
