// Menu.tsx
import MenuItemCard from "./MenuItemCard";
import menuItems from "../data/menuItems";

export default function Menu() {
  return (
    <section id="menu">
      <div className="flex flex-col items-center justify-center gap-6 bg-[#1A1A1A] py-12">
        <h2 className="relative text-[#D4AF37] text-center font-sans text-sm font-normal leading-5 tracking-[1.4px] after:block after:bg-[#C8102E] after:h-[2px] after:w-[143px] after:mx-auto after:mt-1">
          SIGNATURE DISHES
        </h2>
        <h1 className="text-white text-center font-playfair text-[60px] font-medium leading-[60px]">
          Our Menu
        </h1>
        <p className="w-full max-w-[672px] text-[#99A1AF] text-center font-sans text-xl font-normal leading-7">
          Discover our selection of signature dishes, crafted with authentic flavors and the finest ingredients
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {menuItems.map((item) => (
            <MenuItemCard
              key={item.title}
              title={item.title}
              cn_title={item.cn_title}
              price={item.price}
              text={item.text}
              img={item.img}
            />
          ))}
        </div>

        <p className="text-[#99A1AF] text-center font-sans text-lg font-normal leading-7 mt-6">
          View our full menu with wines, desserts & seasonal specials
        </p>

        <button className="inline-flex items-center justify-center px-[38px] pt-[14.333px] pb-[17.667px] bg-[#C8102E] text-white text-center font-sans text-base font-medium leading-6 rounded-full mt-4">
          Download Full Menu
        </button>
      </div>
    </section>
  );
}