import img2 from "../assets/IMG3.jpg";
import img1 from "../assets/IMG2.jpg";
import img3 from "../assets/IMG4.jpg";
import img4 from "../assets/IMG5.jpg";

const portfolioItems = [
  { name: "Anant Ambani & Radhika Merchant", image: img1 },
  { name: "Saii Vishnu & Megha Akash", image: img2 },
  { name: "Siddharth & Aditi Rao Hydari", image: img3 },
  { name: "Kalidas Jayaram & Tarini Kalingarayar", image: img4 },
  { name: "Vignesh Shivan & Nayanthara", image: img1 },
  { name: "Jagat Desai & Amala Paul", image: img2 },
  { name: "Nikhil Sachdeva & Yarlaleeni", image: img3 },
  { name: "Antony Thatch & Keerthy Suresh", image: img4 },
  { name: "Naga Chaitanya & Sobhita Dhulipala", image: img1 },
];

const OurPortfolio = () => (
  <section
    className="px-6 md:px-20 py-16 min-h-screen bg-[#f5e5d5] flex flex-col justify-center"
    style={{ fontFamily: "Raleway, sans-serif" }}
  >
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-black">Our Portfolio</h2>
      <p className="mt-4 text-gray-600 text-base">
        Explore the stories of our beautiful clients, where every image speaks
        volumes.
      </p>
    </div>

    {/* Masonry layout */}
    <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-3">
      {portfolioItems.map((item, index) => (
        <div
          key={index}
          className="break-inside-avoid mb-4 flex flex-col items-center"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-[400px] h-auto shadow-md  transition-transform duration-300 ease-in-out hover:scale-105 mx-auto"
          />
          <h4 className="mt-2 text-center text-[16px] font-semibold text-black leading-tight">
            {item.name}
          </h4>
        </div>
      ))}
    </div>
  </section>
);

export default OurPortfolio;
