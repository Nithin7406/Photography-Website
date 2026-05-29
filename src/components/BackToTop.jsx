import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-5 md:right-8 z-50 transition-all duration-300 ${
        showButton
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          w-11 h-11 md:w-12 md:h-12
          rounded-full
          bg-black/60
          backdrop-blur-md
          border border-white/10
          flex items-center justify-center
          text-white
          hover:bg-black/80
          transition
        "
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
}

export default BackToTop;
