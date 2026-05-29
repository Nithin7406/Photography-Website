import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="
        fixed inset-0 z-[9999]
        bg-[#f8f3ee]
        flex flex-col items-center justify-center
      "
    >
      {/* Logo */}
      <motion.img
        src="/Logo.PNG"
        alt="WE CAPTURES Logo"
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="
          w-32 md:w-40
          object-contain
          drop-shadow-lg
        "
      />

      {/* Brand */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
        className="
          mt-6
          text-3xl md:text-5xl
          tracking-[12px]
          uppercase
          text-[#4e3925]
          font-light
        "
      >
        WE CAPTURES
      </motion.h1>

      {/* Elegant Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
    mt-4
    h-[1px]
    w-[220px]
    origin-center
    bg-gradient-to-r
    from-transparent
    via-[#b18b68]
    to-transparent
    rounded-full
  "
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
        }}
        className="
          mt-4
          text-xs
          tracking-[7px]
          uppercase
          text-[#8b6545]
        "
      >
        Photography Studio
      </motion.p>

      {/* Loading Line */}
      <div className="mt-10 w-44 h-[2px] bg-[#d8c2af] overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "220%" }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="w-24 h-full bg-[#6f4e37] rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default Loader;
