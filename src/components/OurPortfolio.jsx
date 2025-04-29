import img1 from "../assets/IMG1.jpg";
import img2 from "../assets/IMG2.jpg";
import img3 from "../assets/IMG3.jpg";
import img4 from "../assets/IMG4.jpg";
import img5 from "../assets/IMG5.jpg";
import img6 from "../assets/IMG6.jpg"; // New image imported

const portfolioItems = [
  { name: "Anant Ambani & Radhika Merchant", image: img1, shape: "portrait" },
  { name: "Saii Vishnu & Megha Akash", image: img2, shape: "landscape" },
  { name: "Siddharth & Aditi Rao Hydari", image: img3, shape: "portrait" },
  {
    name: "Kalidas Jayaram & Tarini Kalingarayar",
    image: img4,
    shape: "landscape",
  },
  { name: "Vignesh Shivan & Nayanthara", image: img5, shape: "portrait" },
  { name: "Jagat Desai & Amala Paul", image: img1, shape: "landscape" },
  { name: "Nikhil Sachdeva & Yarlaleeni", image: img2, shape: "portrait" },
  { name: "Antony Thatch & Keerthy Suresh", image: img3, shape: "landscape" },
  {
    name: "Naga Chaitanya & Sobhita Dhulipala",
    image: img4,
    shape: "portrait",
  },
  { name: "Praveen & Pragathi", image: img5, shape: "landscape" },
  { name: "Rajeev & Rukmini", image: img6, shape: "portrait" },
];

const OurPortfolio = () => (
  <section
    className="px-4 md:px-12 py-10 min-h-screen bg-[#f5e5d5] flex flex-col justify-center"
    style={{ fontFamily: "Raleway, sans-serif" }}
  >
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-black">Our Portfolio</h2>
      <p className="mt-2 text-gray-600 text-sm">
        Explore the stories of our beautiful clients, where every image speaks
        volumes.
      </p>
    </div>

    {/* GRID layout */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {portfolioItems.map((item, index) => (
        <div
          key={index}
          className={`relative overflow-hidden shadow-md transition-transform duration-200 hover:scale-105
            ${index === 0 ? "col-span-2 row-span-2" : ""}
            ${index === 3 ? "col-span-2" : ""}
            ${index === 5 ? "row-span-2" : ""}
          `}
        >
          {/* Image Container */}
          <div
            className={`w-full h-full ${
              item.shape === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay with Text */}
          <div className="absolute bottom-0 bg-black/50 text-white text-xs md:text-sm p-1 md:p-2 w-full text-center font-semibold">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OurPortfolio;
