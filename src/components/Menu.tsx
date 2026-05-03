import MenuItemCard from "./MenuItemCard";

const menuItems = [
  {
    title: "Sweet & Sour Chicken",
    cn_title: "糖醋鸡",
    price: "£12.99",
    text: "Crispy chicken with tangy sauce.",
    img: "dumplings.jpg",
  },
  {
    title: "Kung Pao Chicken",
    cn_title: "宫保鸡丁",
    price: "£13.50",
    text: "Spicy stir-fry with peanuts.",
    img: "dumplings.jpg",
  },
  {
    title: "Beef Noodles",
    cn_title: "牛肉面",
    price: "£11.00",
    text: "Rich broth with tender beef.",
    img: "dumplings.jpg",
  },
  {
    title: "Handmade Dumplings",
    cn_title: "手工餃子",
    price: "£8.50",
    text: "Delicate dumplings filled with pork and chive, served with black vinegar",
    img: "dumplings.jpg",
  },
    {
    title: "Dan Dan Noodles",
    cn_title: "擔擔麵",
    price: "£11.00",
    text: "Spicy Sichuan noodles with minced pork, peanuts, and scallions",
    img: "dumplings.jpg",
  },
     {
    title: "Mapo Tofu",
    cn_title: "麻婆豆腐",
    price: "£10.50",
    text: "Silken tofu in a spicy, aromatic sauce with fermented black beans",
    img: "dumplings.jpg",
  }
];

export default function Menu() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-[#1A1A1A] min-h-[700px] py-12">
      <h2 className="text-[#D4AF37] text-center font-sans text-sm font-normal leading-5 tracking-[1.4px]">
        Signature Dishes
      </h2>
      <h1 className="text-white text-center font-playfair text-[60px] font-medium leading-[60px]">
        Our Menu
      </h1>
      <p className="w-[672px] shrink-0 text-[#99A1AF] text-center font-sans text-xl font-normal leading-7">
        Discover our selection of signature dishes, crafted with authentic
        flavors and the finest ingredients
      </p>

      <div className="grid grid-cols-3 gap-6">
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
      <p className="text-[#99A1AF] text-center font-sans text-lg font-normal leading-7">
        View our full menu with wines, desserts & seasonal specials
      </p>
      <button className="inline-flex items-center justify-center px-[38px] pt-[14.333px] pb-[17.667px] bg-[#C8102E] text-white text-center font-sans text-base font-medium leading-6 rounded-full">
        Download Full Menu
      </button>
    </div>
  );
}
