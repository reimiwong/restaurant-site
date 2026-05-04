const headingClass =
  "text-[#101828] font-playfair text-2xl font-medium leading-8";

const textClass = "text-[#364153] font-sans text-lg font-normal leading-7";

const openingHours =
  "text-[#C8102E] font-sans text-[18px] font-normal leading-[28px]";

export default function VisitUs() {
  return (
    <section id="location" className="bg-[#F9FAFB]">
      <div className="flex flex-col items-center gap-16 py-24">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center max-w-[700px]">
          <h2 className="relative text-[#C8102E] text-sm font-sans tracking-[1.4px] after:block after:bg-[#D4AF37] after:h-[2px] after:w-[76px] after:mx-auto after:mt-1">
            FIND US
          </h2>

          <h1 className="text-[#101828] font-playfair text-[56px] font-medium leading-[64px]">
            Visit Us
          </h1>

          <p className="text-[#4A5565] font-sans text-xl leading-7">
            Located in the historic port of Leith, Edinburgh
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-center w-full px-4 md:px-0">
          {/* Card */}
          <div className="flex flex-col w-full md:w-[552px] p-8 gap-8 rounded-3xl border border-[#E5E7EB] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            {/* Address */}
            <div className="flex flex-col gap-3">
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
                  Email:{" "}
                  <span className={openingHours}>
                    hello@inspiration-leith.co.uk
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-[530px] h-[530px] flex-shrink-0">
            <div className="absolute inset-0 rounded-3xl opacity-20 blur-[28px] bg-[linear-gradient(135deg,#C8102E_0%,#D4AF37_100%)]" />
            <img
              src="leith.jpg"
              alt="Leith, Edinburgh"
              className="relative w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}