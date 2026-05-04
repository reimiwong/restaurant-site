export default function AboutUs() {
  return (
    <section id="about-us" className="bg-[#F9FAFB]">
      <div className="flex items-center justify-center gap-16 h-[700px]">
        <div className="flex flex-col gap-6 items-start justify-start w-[500px]">
          <div className="flex flex-col items-start">
            <h1 className="text-[#C8102E] font-sans text-sm font-normal leading-5 tracking-[1.4px]">
              ABOUT US
            </h1>
            <div className="bg-[#D4AF37] w-[76.656px] h-[2px] mt-1"></div>
          </div>
          <h2 className="text-[#101828] font-playfair text-5xl font-medium leading-[60px]">
            Our Story
          </h2>
          <p className="max-w-[544px] w-full text-[#364153] font-sans text-lg font-normal leading-[29px]">
            Welcome to Inspiration, where traditional Chinese culinary artistry
            meets modern Edinburgh. Located in the vibrant heart of Leith, we
            bring you an authentic dining experience that honors centuries-old
            recipes while embracing contemporary presentation.
          </p>

          <p className="max-w-[544px] w-full text-[#364153] font-sans text-lg font-normal leading-[29px]">
            Our chefs source the finest local ingredients and combine them with
            traditional Chinese spices and techniques to create dishes that tell
            a story. Every meal is a journey through the diverse regions of
            China, crafted with passion and served with pride.
          </p>
          <p className="border-l-4 border-[#C8102E] pl-4 text-[#1E2939] font-playfair text-xl italic font-normal leading-7">
            "Inspiration is not just our name—it's our promise to deliver an
            extraordinary culinary experience with every visit."
          </p>
        </div>
        <div className="relative w-[600px]">
        <div className="absolute inset-0 rounded-2xl bg-red-500 opacity-10 blur-2xl"></div>

<img
  src="/inspiration.jpg"
  className="relative w-full h-auto rounded-2xl"
  alt="Inspiration"
/>
        </div>
      </div>
    </section>
  );
}
