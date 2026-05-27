import { useParams, useNavigate } from "react-router-dom";

import weddingImage from "../assets/events/wedding.jpg";
import preWeddingImage from "../assets/events/prewedding.jpg";
import birthdayImage from "../assets/events/birthday.jpg";
import haldi from "../assets/events/haldi.jpg";
import Mehendi from "../assets/events/Mehendi.jpg";
import Sangeet from "../assets/events/Sangeet.jpg";

function EventGallery() {
  const { name } = useParams();
  const navigate = useNavigate(); // 👈 added

  const eventData = {
    wedding: {
      title: "Wedding",
      images: [weddingImage],
    },
    "pre-wedding": {
      title: "Pre-Wedding",
      images: [preWeddingImage],
    },
    birthday: {
      title: "Birthday",
      images: [birthdayImage],
    },
    "birthday-party": {
      title: "Birthday Party",
      images: [birthdayImage],
    },
    haldi: {
      title: "Haldi",
      images: [haldi],
    },
    mehendi: {
      title: "Mehendi",
      images: [Mehendi],
    },
    sangeet: {
      title: "Sangeet",
      images: [Sangeet],
    },
  };

  const event = eventData[name];

  if (!event) {
    return <h1 className="p-10">Event Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-[#f5e5d5] p-10">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="group mb-6 flex items-center gap-2 px-5 py-2.5 
  bg-black text-white rounded-full 
  shadow-md hover:shadow-xl 
  hover:bg-gray-700 
  transition-all duration-300"
      >
        <span className="transform group-hover:-translate-x-1 transition duration-300">
          ←
        </span>
        <span className="font-medium tracking-wide">Back</span>
      </button>

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-8">{event.title} Gallery</h1>

      {/* GALLERY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {event.images.map((img, i) => (
          <img key={i} src={img} className="rounded-lg shadow-lg  " />
        ))}
      </div>
    </div>
  );
}

export default EventGallery;
