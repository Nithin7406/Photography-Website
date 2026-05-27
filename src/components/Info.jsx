import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Info = () => {
  return (
    <section className="bg-[#725339] py-6 font-raleway">
      <div className="bg-[#916947] text-white py-8 px-6 rounded-md max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <button className="border border-white px-6 py-2 text-sm font-semibold hover:bg-white hover:text-[#725339] transition rounded">
            Follow us @Everframe
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center text-sm mb-8 gap-6">
          {/* Contact */}
          <div className="text-center">
            <h4 className="font-semibold mb-2">Contact Us</h4>

            <a href="tel:+918861654544" className="hover:text-black transition">
              +91 8861654544
            </a>
          </div>

          {/* Social */}
          <div className="text-center">
            <h4 className="font-semibold mb-2">Social</h4>

            <div className="flex justify-center space-x-4 text-xl">
              <a
                href="https://www.facebook.com/profile.php?id=61566903152368"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:text-[#0866ff] cursor-pointer transition" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/praveen_kumar_j.m/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-[#fd2f71] cursor-pointer transition" />
              </a>

              <a
                href="https://wa.me/918861654544"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="hover:text-green-400 cursor-pointer transition" />
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="text-center">
            <h4 className="font-semibold mb-2">Email Us</h4>

            <a
              href="mailto:praveenkumar1122000jm@gmail.com"
              className="break-all hover:text-black transition"
            >
              praveenkumar1122000jm@gmail.com
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          {[
            "Home",
            "Greeting",
            "Our Profile",
            "About Us",
            "What We do",
            "Contact",
          ].map((item, index) => (
            <a
              href="#"
              key={index}
              className="hover:underline hover:text-[#ffecd9] transition"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="border-t border-gray-300 opacity-50 mx-8 mb-4"></div>

        <div className="text-center text-xs pb-2">
          © Copyright 2025 All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Info;
