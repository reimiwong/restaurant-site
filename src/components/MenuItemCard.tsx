type MenuItemCardProps = {
  title: string;
  cn_title: string;
  price: string;
  text: string;
  img: string;
};

export default function MenuItemCard({
  title,
  cn_title,
  price,
  text,
  img,
}: MenuItemCardProps) {
  return (
 <div className="w-[405px] bg-black rounded-lg overflow-hidden">
  <img
    src={img}
    alt={title}
    className="w-full h-[256px] object-cover"
  />

  <div className="flex justify-between items-start p-6">
    <div>
      <h3 className="text-white font-playfair text-xl font-medium leading-7">
        {title}
      </h3>

      <h4 className="text-[#D4AF37] font-notoserifsc text-sm font-normal leading-5">
        {cn_title}
      </h4>

      <p className="text-[#99A1AF] font-sans text-sm font-normal leading-[22.75px] mt-4">
        {text}
      </p>
    </div>

    <p className="text-[#D4AF37] font-sans text-xl font-normal leading-7">
      {price}
    </p>
  </div>
</div>
  );
}
