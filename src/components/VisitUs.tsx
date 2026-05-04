const headingClass =
  "text-[#101828] font-playfair text-2xl font-medium leading-8";

const textClass = "text-[#364153] font-sans text-lg font-normal leading-7";

const openingHours =
  "text-[#C8102E] font-sans text-[18px] font-normal leading-[28px]";

export default function VisitUs() {
  return (
    <div className="flex flex-col items-center gap-12 py-24">
      {/* Header */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="relative text-[#C8102E] text-center font-sans text-sm tracking-[1.4px] after:block after:bg-[#D4AF37] after:h-[2px] after:w-[76.656px] after:mx-auto after:mt-1">
          FIND US
        </h2>

        <h1 className="text-[#101828] text-center font-playfair text-[60px] font-medium leading-[60px]">
          Visit Us
        </h1>

        <p className="text-[#4A5565] text-center font-sans text-xl leading-7">
          Located in the historic port of Leith, Edinburgh
        </p>
      </div>

      {/* Content */}
      <div className="flex gap-16 items-center justify-center">
        {/* Card */}
        <div className="flex flex-col w-[552px] p-8 gap-8 rounded-2xl border border-[#F3F4F6] bg-white shadow-lg">
          {/* Address */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#C8102E] flex-shrink-0" />
              <h2 className={headingClass}>Address</h2>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <p className={textClass}>45 Shore Street</p>
              <p className={textClass}>Leith, Edinburgh</p>
              <p className={textClass}>EH6 6QU</p>
              <p className={textClass}>Scotland</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="border-t-[0.667px] border-[#E5E7EB] pt-6 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#D4AF37] flex-shrink-0" />
              <h2 className={headingClass}>Opening Hours</h2>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex justify-between w-full">
                <p className={textClass}>Monday - Thursday</p>
                <p className={openingHours}>9:00 AM - 10:00 PM</p>
              </div>
              <div className="flex justify-between w-full">
                <p className={textClass}>Friday - Saturday</p>
                <p className={openingHours}>9:00 AM - 11:00 PM</p>
              </div>
              <div className="flex justify-between w-full">
                <p className={textClass}>Sunday</p>
                <p className={openingHours}>10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t-[0.667px] border-[#E5E7EB] pt-6 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#C8102E] flex-shrink-0" />
              <h2 className={headingClass}>Contact</h2>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <p className={textClass}>
                Phone: <span className={openingHours}>0131 55 0123</span>
              </p>
              <p className={textClass}>
                Email: <span className={openingHours}>hello@inspiration-leith.co.uk</span>
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-[530px] h-[530px]">
          <div className="absolute inset-0 rounded-2xl opacity-20 blur-[24px] bg-[linear-gradient(135deg,#C8102E_0%,#D4AF37_100%)]" />
          <img
            src="leith.jpg"
            alt="Leith, Edinburgh"
            className="relative w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}