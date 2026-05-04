export default function AboutUs() {
  return (
   <section
  id="about-us"
  className="bg-[#F9FAFB] flex items-center justify-center py-12 sm:py-16 lg:py-24"
>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Text */}
        <div className="flex flex-col gap-6 lg:w-1/2 max-w-md items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-1">
            <h1 className="text-[#C8102E] font-sans text-sm font-normal leading-5 tracking-[1.4px]">
              ABOUT US
            </h1>
            <div className="bg-[#D4AF37] w-20 h-0.5"></div>
          </div>

          <h2 className="text-[#101828] font-playfair text-3xl sm:text-4xl lg:text-5xl font-medium leading-snug lg:leading-[60px]">
            Our Story
          </h2>

          <p className="text-[#364153] font-sans text-base sm:text-lg leading-relaxed">
            Welcome to Inspiration, where traditional Chinese culinary artistry
            meets modern Edinburgh. Located in the vibrant heart of Leith, we
            bring you an authentic dining experience that honors centuries-old
            recipes while embracing contemporary presentation.
          </p>

          <p className="text-[#364153] font-sans text-base sm:text-lg leading-relaxed">
            Our chefs source the finest local ingredients and combine them with
            traditional Chinese spices and techniques to create dishes that tell
            a story. Every meal is a journey through the diverse regions of
            China, crafted with passion and served with pride.
          </p>

          <p className="border-l-4 border-[#C8102E] pl-4 text-[#1E2939] font-playfair text-lg sm:text-xl italic leading-7">
            "Inspiration is not just our name—it's our promise to deliver an
            extraordinary culinary experience with every visit."
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-1/2 max-w-lg">
          <div className="absolute inset-0 rounded-2xl bg-red-500 opacity-10 blur-2xl"></div>
          <img
            src="/inspiration.jpg"
            className="relative w-full h-auto rounded-2xl object-cover"
            alt="Inspiration"
          />
        </div>
      </div>
    </section>
  );
}