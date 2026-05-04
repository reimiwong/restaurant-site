export default function Hero() {
  return (
    <div
      className="relative flex flex-col justify-center min-h-screen max-h-[900px] bg-cover bg-center"
      style={{ backgroundImage: "url('/dim-sum.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-0 py-12 sm:py-16 lg:py-20 gap-4 sm:gap-6">
        {/* Location tag */}
        <h2 className="text-[#D4AF37] font-sans text-xs sm:text-sm font-normal leading-5 tracking-[1.4px] rounded-full border border-[#D4AF37] px-3 py-1">
          LEITH, EDINBURGH
        </h2>

        {/* Main heading */}
        <h1 className="text-white font-playfair text-4xl sm:text-6xl md:text-8xl font-medium leading-tight">
          Inspiration
        </h1>

        {/* Chinese subtitle */}
        <h2 className="text-white font-notoserifsc text-3xl sm:text-4xl md:text-[36px] font-normal leading-[40px] tracking-[5px] sm:tracking-[7px]">
          靈感
        </h2>

        {/* Paragraph */}
        <p className="text-[#E5E7EB] font-sans text-lg sm:text-2xl font-normal leading-7 sm:leading-8 max-w-[90vw] sm:max-w-[600px]">
          Where culinary traditions meet contemporary innovation in Edinburgh
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="inline-flex items-center justify-center px-9 py-4 bg-[#C8102E] rounded-full text-white hover:bg-red-700 transition">
            Explore Menu
          </button>
          <button className="inline-flex items-center justify-center px-9 py-4 border-2 border-[#D4AF37] rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/10 transition">
            Reserve Table
          </button>
        </div>
      </div>
    </div>
  );
}