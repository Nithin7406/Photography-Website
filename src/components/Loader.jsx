import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed inset-0 z-[9999]
        bg-[#f8f3ee]
        flex flex-col items-center justify-center
      "
    >
      {/* Logo */}
      <motion.img
        src="/Logo3.png"
        alt="Everframe Logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-28 md:w-36 object-contain"
      />

      {/* Brand */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="
          mt-5
          text-3xl md:text-5xl
          tracking-[10px]
          uppercase
          text-[#4e3925]
          font-semibold
        "
      >
        Everframe
      </motion.h1>

      {/* Subtitle */}
      <p className="mt-3 text-xs tracking-[6px] uppercase text-[#8b6545]">
        Photography Studio
      </p>

      {/* Loading Line */}
      <div className="mt-8 w-40 h-[2px] bg-[#d8c2af] overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="w-20 h-full bg-[#6f4e37]"
        />
      </div>
    </motion.div>
  );
}

export default Loader;
