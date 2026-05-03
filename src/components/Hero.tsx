export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-6 bg-[#1A1A1A] min-h-[700px] justify-center">
   <h2 className="text-[#D4AF37] text-center font-sans text-sm font-normal leading-5 tracking-[1.4px] rounded-full border border-[#D4AF37] px-4 py-1 height-60">
  LEITH, EDINBURGH
</h2>
      <h1 className="text-white text-center font-playfair text-5xl md:text-8xl font-medium leading-none">
  Inspiration
</h1>
      <h2 className="text-white text-center font-notoserifsc text-[36px] font-normal leading-[40px] tracking-[7.2px]">
  靈感
</h2>
  <p className="text-[#E5E7EB] text-center font-sans text-2xl font-normal leading-8">
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
  );
}
