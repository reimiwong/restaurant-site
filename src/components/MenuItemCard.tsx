// MenuItemCard.tsx
type MenuItemCardProps = {
  title: string;
  cn_title: string;
  price: string;
  text: string;
  img: string;
};

export default function MenuItemCard({ title, cn_title, price, text, img }: MenuItemCardProps) {
  return (
    <div className="w-[90vw] sm:w-full max-w-[405px] bg-black rounded-3xl sm:rounded-lg overflow-hidden mx-auto
                    shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Image */}
      <div className="w-full aspect-[405/256] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-t-3xl sm:rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row justify-between p-6 gap-4 sm:gap-0">
        <div className="flex-1">
          <h3 className="text-white font-playfair text-xl font-medium leading-7">{title}</h3>
          <h4 className="text-[#D4AF37] font-notoserifsc text-sm font-normal leading-5 mt-1">
            {cn_title}
          </h4>
          <p className="text-[#99A1AF] font-sans text-sm font-normal leading-[22.75px] mt-4">
            {text}
          </p>
        </div>
        <p className="text-[#D4AF37] font-sans text-xl font-normal leading-7 flex-shrink-0 mt-4 sm:mt-0">
          {price}
        </p>
      </div>
    </div>
  );
}