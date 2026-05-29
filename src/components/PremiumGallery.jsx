import { motion } from "framer-motion";

function Loader() {
  return (
    <div
      className="
        fixed inset-0 z-[9999]
        bg-[#f8f3ee]
        flex flex-col items-center justify-center
        overflow-hidden
      "
    >
      {/* Top Glow */}
      <div className="absolute w-[300px] h-[300px] bg-[#d4a373]/20 rounded-full blur-3xl"></div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 w-[500px] h-[500px] bg-[#8b6545]/10 rounded-full blur-3xl"></div>

      {/* Main Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [20, 0],
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Logo */}
        <motion.img
          src="/Logo3.png"
          alt="Everframe Logo"
          className="w-28 md:w-36 object-contain"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        />

        {/* Brand Name */}
        <h1
          className="
            mt-5
            text-3xl sm:text-4xl md:text-5xl
            tracking-[10px]
            uppercase
            text-[#4e3925]
            font-semibold
          "
        >
          Everframe
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-3
            text-xs sm:text-sm
            tracking-[6px]
            uppercase
            text-[#8b6545]
          "
        >
          Photography Studio
        </p>

        {/* Loading Bar */}
        <div className="mt-10 w-40 h-[2px] bg-[#d8c2af] overflow-hidden rounded-full">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{
              x: ["-100%", "250%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "linear",
            }}
            className="w-20 h-full bg-[#6f4e37]"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          className="mt-5 text-xs tracking-[4px] uppercase text-[#8b6545]"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          Loading Experience
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Loader;
