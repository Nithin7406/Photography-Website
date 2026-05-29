import { motion } from "framer-motion";

import img1 from "../assets/gallery/Insta1.jpg";
import img2 from "../assets/gallery/Insta2.jpg";
import img3 from "../assets/gallery/Insta3.jpg";
import img4 from "../assets/gallery/Insta4.jpg";
import img5 from "../assets/gallery/Insta5.jpg";
import img6 from "../assets/gallery/Insta6.jpg";
import img7 from "../assets/gallery/Insta7.jpg";
import img8 from "../assets/gallery/Insta8.jpg";

const instagramImages = [img1, img2, img3, img4, img5, img6, img7, img8];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f6e8da] py-20 md:py-28"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#e2c7ac] opacity-30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#c49a6c] opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[5px] text-sm text-[#7a5a3d] mb-4">
            Social Presence
          </p>

          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl text-[#4e3925] leading-tight">
            Follow Our Journey <br />
            On Instagram
          </h2>
        </motion.div>

        {/* Instagram Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {instagramImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl group shadow-lg"
              >
                <img
                  src={img}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Instagram Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <a
              href="https://www.instagram.com/wecaptures_photography/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto bg-black/70 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm sm:text-base tracking-[2px] uppercase shadow-2xl hover:bg-[#7a5a3d] transition duration-300"
            >
              @wecaptures_photography
            </a>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-[#8b6545]/95 backdrop-blur-md rounded-[35px] px-6 sm:px-10 md:px-16 py-10 md:py-12 shadow-2xl border border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left Content */}
              <div className="text-center lg:text-left max-w-xl">
                <p className="uppercase tracking-[5px] text-xs sm:text-sm text-[#f3dfcd] mb-4">
                  Newsletter
                </p>

                <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl text-white leading-tight mb-5">
                  Stay Connected <br />
                  With Everframe
                </h2>

                <p className="text-[#f3dfcd] text-sm sm:text-base leading-7">
                  Be the first to know about our latest stories, wedding
                  highlights, exclusive offers, and cinematic photography
                  collections.
                </p>
              </div>

              {/* Form */}
              <form className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full flex-1 px-5 py-4 rounded-full bg-white text-black outline-none border border-transparent focus:border-[#d6b08b] transition duration-300"
                />

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#6f4e37] text-white uppercase tracking-[2px] text-sm hover:bg-[#4e3925] transition duration-300 shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
