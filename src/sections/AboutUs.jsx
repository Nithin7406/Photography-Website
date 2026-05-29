import { motion } from "framer-motion";

import photographerImage from "../assets/gallery/photographerImage.jpg";
import coupleImage from "../assets/gallery/IMG7.jpg";

function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#e7d6c7] py-20 md:py-32 px-5 sm:px-8 md:px-16"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-[#f7e8dc] opacity-40 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#d8b89c] opacity-30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
        {/* ABOUT US */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative group">
              {/* Border Frame */}
              <div className="absolute -inset-3 border border-[#7a5a3d] rounded-[30px] opacity-40"></div>

              <img
                src={photographerImage}
                alt="Photographer"
                className="w-full max-w-[320px] md:max-w-[380px] object-cover rounded-[28px] shadow-2xl transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <p className="uppercase tracking-[5px] text-sm text-[#7a5a3d] mb-4">
              About Us
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl text-[#4e3925] leading-tight mb-6">
              Capturing Love Stories <br />
              With Elegance & Emotion
            </h2>

            <p className="text-[#5f5248] text-sm sm:text-base leading-8 max-w-2xl">
              At Everframe, we believe photography is more than just images —
              it’s about preserving emotions, fleeting moments, and timeless
              memories. Every wedding, every smile, and every celebration is
              captured with cinematic artistry and heartfelt storytelling.
            </p>
          </div>
        </motion.div>

        {/* TESTIMONIAL */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
        >
          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative group">
              {/* Border Frame */}
              <div className="absolute -inset-3 border border-[#7a5a3d] rounded-[30px] opacity-40"></div>

              <img
                src={coupleImage}
                alt="Happy Couple"
                className="w-full max-w-[320px] md:max-w-[380px] object-cover rounded-[28px] shadow-2xl transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <p className="uppercase tracking-[5px] text-sm text-[#7a5a3d] mb-4">
              Testimonials
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl text-[#4e3925] leading-tight mb-6">
              Words From Our Couples
            </h2>

            <blockquote className="text-[#5f5248] text-sm sm:text-base leading-8 italic border-l-4 border-[#7a5a3d] pl-5 max-w-2xl mx-auto lg:mx-0">
              “We are beyond thrilled with the beautiful moments Everframe
              captured on our wedding day. Every photo feels emotional,
              cinematic, and timeless.”
            </blockquote>

            <p className="mt-5 text-sm text-[#7a5a3d] tracking-wide uppercase">
              — Ayush & Priya
            </p>
          </div>
        </motion.div>

        {/* PROMISE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[#f8f2ec]/80 backdrop-blur-md border border-white/30 rounded-[35px] px-6 sm:px-10 md:px-16 py-12 md:py-16 shadow-2xl text-center"
        >
          <p className="uppercase tracking-[5px] text-sm text-[#7a5a3d] mb-4">
            Our Promise
          </p>

          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl text-[#4e3925] mb-8 leading-tight">
            Every Frame Holds <br />A Beautiful Story
          </h2>

          <p className="max-w-4xl mx-auto text-[#5f5248] text-sm sm:text-base md:text-lg leading-8">
            Every click of our camera is a promise to preserve your most
            meaningful memories with authenticity, warmth, and artistry. We
            don’t just capture photos — we create timeless visual stories that
            you’ll cherish forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
