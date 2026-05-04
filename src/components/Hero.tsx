export default function Hero() {
  return (
    <div
      className="relative flex flex-col items-center gap-6 min-h-[700px] justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/dim-sum.webp')" }}
    >
      {/* Optional: overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h2 className="text-[#D4AF37] font-sans text-sm font-normal leading-5 tracking-[1.4px] rounded-full border border-[#D4AF37] px-4 py-1">
          LEITH, EDINBURGH
        </h2>

        <h1 className="text-white font-playfair text-5xl md:text-8xl font-medium leading-none">
          Inspiration
        </h1>

        <h2 className="text-white font-notoserifsc text-[36px] font-normal leading-[40px] tracking-[7.2px]">
          靈感
        </h2>

        <p className="text-[#E5E7EB] font-sans text-2xl font-normal leading-8">
          Where culinary traditions meet contemporary innovation
          <br />
          Edinburgh
        </p>

        <div className="flex gap-4">
          <button className="inline-flex items-center justify-center px-9 py-4 bg-[#C8102E] rounded-full text-white">
            Explore Menu
          </button>
          <button className="inline-flex items-center justify-center px-9 py-4 border-2 border-[#D4AF37] rounded-full text-[#D4AF37]">
            Reserve Table
          </button>
        </div>
      </div>
    </div>
  );
}