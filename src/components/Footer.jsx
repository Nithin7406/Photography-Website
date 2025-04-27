import { FaPinterestP, FaFacebookF, FaInstagram } from "react-icons/fa";
import img1 from "../assets/Insta1.jpg";
import img2 from "../assets/Insta2.jpg";
import img3 from "../assets/Insta3.jpg";
import img4 from "../assets/Insta4.jpg";
import img5 from "../assets/Insta5.jpg";
import img6 from "../assets/Insta6.jpg";
import img7 from "../assets/Insta7.jpg";
import img8 from "../assets/Insta8.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#f5e5d5] pt-10 font-raleway">
      {/* Follow me on Instagram Section */}
      <div className="text-center mb-10">
        <h2 className="text-lg font-semibold uppercase mb-6">
          Follow Me On Instagram
        </h2>

        <div className="relative">
          {/* Images Row */}
          <div className="flex flex-wrap justify-center">
            {[img1, img2, img3, img4, img5, img6, img7, img8].map(
              (img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Instagram post ${index + 1}`}
                  className="h-32 object-cover hover:scale-105 transition-transform duration-300"
                  style={{ width: "auto", maxWidth: "100%", flex: "1 1 auto" }}
                />
              )
            )}
          </div>

          {/* Centered Instagram ID */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 text-white text-base bg-black/70 shadow-md sm:text-lg font-sans px-4 py-2 rounded-md">
              <a
                href="https://www.instagram.com/wecaptures_photography/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @wecaptures_photography
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col items-center mb-10 px-4">
        <div className="bg-[#5c4428] w-full max-w-2xl py-6 px-6 rounded-md text-white flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="uppercase text-sm font-bold">Newsletter</h3>
            <p className="text-xs mt-2">
              Be the first one to know about discounts, offers.
            </p>
          </div>
          <form className="flex w-full sm:w-auto items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b88e56] transition-all"
            />
            <button
              type="submit"
              className="bg-[#b88e56] text-white px-6 py-3 hover:bg-[#9c7a42] transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Follow Us Button */}
      <div className="text-center mb-10">
        <button className="border border-black px-5 py-2 text-sm hover:bg-black hover:text-white transition">
          Follow us @Everframe
        </button>
      </div>

      {/* Contact + Social + Email Section */}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-24 space-y-6 md:space-y-0 text-sm mb-8">
        <div className="text-center">
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p>+91 9876543210</p>
        </div>

        <div className="text-center">
          <h4 className="font-semibold mb-2">Social</h4>
          <div className="flex justify-center space-x-4 text-xl">
            <FaPinterestP className="hover:text-[#b88e56] cursor-pointer" />
            <FaFacebookF className="hover:text-[#b88e56] cursor-pointer" />
            <FaInstagram className="hover:text-[#b88e56] cursor-pointer" />
          </div>
        </div>

        <div className="text-center">
          <h4 className="font-semibold mb-2">Email Us</h4>
          <p>contact@everframe.com</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 text-sm mb-6">
        {["Home", "Portfolio", "Services", "About", "Blog"].map(
          (item, index) => (
            <a href="#" key={index} className="hover:underline">
              {item}
            </a>
          )
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mx-8 mb-4"></div>

      {/* Copyright */}
      <div className="text-center text-xs pb-4">
        © Copyright 2025 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
