import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayush & Priya",
    text: "We are beyond thrilled with the beautiful photos captured on our wedding day. Every emotion was preserved perfectly.",
  },
  {
    name: "Rahul & Sneha",
    text: "Everframe made our special day unforgettable. The team was professional, creative, and incredibly supportive.",
  },
  {
    name: "Karan & Meera",
    text: "The pictures felt cinematic and timeless. Every frame told a story filled with love and emotions.",
  },
];

function Testimonials() {
  return (
    <section
      className="
        bg-[#f8f3ee]
        py-20
        px-5
        md:px-12
        overflow-hidden
      "
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-[5px] text-sm text-[#8b6545] mb-3">
          Testimonials
        </p>

        <h2
          className="
            text-4xl
            md:text-6xl
            text-[#4e3925]
            font-serif
          "
        >
          Words From Our Couples
        </h2>
      </div>

      {/* Cards */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          max-w-7xl
          mx-auto
        "
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="
              bg-white
              rounded-[30px]
              p-8
              shadow-xl
              relative
              group
              hover:-translate-y-2
              transition duration-500
            "
          >
            {/* Quote */}
            <div
              className="
                absolute
                top-5 right-6
                text-7xl
                text-[#d4a373]/20
                font-serif
              "
            >
              ”
            </div>

            {/* Text */}
            <p
              className="
                text-[#5b4633]
                leading-relaxed
                text-sm
                md:text-base
                relative z-10
              "
            >
              {item.text}
            </p>

            {/* Divider */}
            <div className="w-14 h-[2px] bg-[#8b6545] my-6"></div>

            {/* Name */}
            <h3
              className="
                text-lg
                font-semibold
                text-[#4e3925]
                tracking-wide
              "
            >
              {item.name}
            </h3>

            <p className="text-xs uppercase tracking-[3px] text-[#8b6545] mt-1">
              Happy Clients
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
