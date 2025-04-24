function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh]"
      style={{ backgroundImage: `url('/hero.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Celebrate Your Love Story In Style
        </h1>
        <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-full">
          Get a Quote
        </button>
      </div>
    </section>
  );
}
export default HeroSection;
