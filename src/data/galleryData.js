// Import your images (add as many as you have for each)
import wedding1 from "../assets/events/wedding/img1.jpg";
import wedding2 from "../assets/events/wedding/img2.jpg";

import preWedding1 from "../assets/events/prewedding/prewedding-1.jpg";

import haldi1 from "../assets/events/haldi/img1.jpg";

import mehendi1 from "../assets/events/mehendi/img1.jpg";

import sangeet1 from "../assets/events/sangeet/img1.jpg";

import birthday1 from "../assets/events/birthday/img1.jpg";

const galleryData = {
  wedding: {
    title: "Wedding",
    images: [wedding1, wedding2],
  },
  prewedding: {
    title: "Pre Wedding",
    images: [preWedding1],
  },
  haldi: {
    title: "Haldi",
    images: [haldi1],
  },
  mehendi: {
    title: "Mehendi",
    images: [mehendi1],
  },
  sangeet: {
    title: "Sangeet",
    images: [sangeet1],
  },
  birthday: {
    title: "Birthday",
    images: [birthday1],
  },
};

export default galleryData;
