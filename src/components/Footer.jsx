import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#6f4e37] text-white font-raleway overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-10 md:py-14">
        {/* Main Card */}
        <div className="bg-[#8b6545] rounded-[30px] shadow-2xl px-6 sm:px-10 md:px-14 py-10 md:py-14">
          {/* Follow Button */}
          <div className="flex justify-center mb-12">
            <button
              className="
                border border-white/40
                px-6 sm:px-8
                py-3
                rounded-full
                uppercase
                tracking-[3px]
                text-[11px] sm:text-xs
                font-semibold
                hover:bg-white
                hover:text-[#6f4e37]
                transition-all duration-300
              "
            >
              Follow Us @Everframe
            </button>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8 text-center">
            {/* Contact */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 tracking-wide">
                Contact Us
              </h3>

              <a
                href="tel:+918861654544"
                className="text-sm sm:text-base hover:text-[#f5d7bd] transition duration-300"
              >
                +91 88616 54544
              </a>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-5 tracking-wide">
                Follow Us
              </h3>

              <div className="flex items-center justify-center gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61566903152368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11 md:w-12 md:h-12
                    rounded-full
                    border border-white/30
                    flex items-center justify-center
                    hover:bg-[#1877f2]
                    hover:border-[#1877f2]
                    hover:scale-110
                    transition-all duration-300
                  "
                >
                  <FaFacebookF className="text-sm md:text-base" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/wecaptures_photography/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11 md:w-12 md:h-12
                    rounded-full
                    border border-white/30
                    flex items-center justify-center
                    hover:bg-gradient-to-r
                    hover:from-pink-500
                    hover:to-yellow-500
                    hover:scale-110
                    transition-all duration-300
                  "
                >
                  <FaInstagram className="text-sm md:text-base" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918861654544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11 md:w-12 md:h-12
                    rounded-full
                    border border-white/30
                    flex items-center justify-center
                    hover:bg-green-500
                    hover:border-green-500
                    hover:scale-110
                    transition-all duration-300
                  "
                >
                  <FaWhatsapp className="text-sm md:text-base" />
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg md:text-xl font-semibold mb-4 tracking-wide">
                Email Us
              </h3>

              <a
                href="mailto:wecaptures103@gmail.com"
                className="
                  text-xs sm:text-sm md:text-base
                  break-all
                  hover:text-[#f5d7bd]
                  transition duration-300
                "
              >
                wecaptures103@gmail.com
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-10"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs sm:text-sm tracking-[2px] text-[#f3e4d8] uppercase">
              © 2025 Everframe Photography Studio
            </p>

            <p className="text-[10px] sm:text-xs text-[#e8d5c4] mt-2">
              Crafted with passion & timeless storytelling.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
