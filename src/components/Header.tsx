export default function Navbar() {
  return (
    <div className="flex flex-col items-start w-full max-w-screen-3xl mx-auto px-80 h-20 ">
      <nav className="flex flex-col items-start self-stretch shrink-0 h-[84px] px-6 pt-5 pb-0">
        <div className="flex items-center justify-between h-11 pr-0 self-stretch shrink-0">
          <div className="flex items-center gap-3 w-[180px]">
            <a
              href="/"
              className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-[#C8102E] text-white"
            >
              <p className="text-white font-['Noto_Serif_SC'] text-xs font-normal leading-4">
                靈
              </p>
            </a>
            <div className="flex flex-col">
              <a
                href="/"
                className="text-[#0A0A0A] text-2xl font-normal leading-8"
                style={{ fontFamily: "var(--default-font-family)" }}
              >
                Inspiration
              </a>
              <p className="text-[#6A7282] font-['Noto_Serif_SC'] text-xs font-normal leading-4">
                靈感
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 h-10">
            <a
              href="#"
              className="text-[#364153] font-sans text-base font-normal leading-6"
            >
              About
            </a>
            <a
              href="#"
              className="text-[#364153] font-sans text-base font-normal leading-6"
            >
              Menu
            </a>
            <a
              href="#"
              className="text-[#364153] font-sans text-base font-normal leading-6"
            >
              Location
            </a>
            <a
              href="#"
              className="bg-[#C8102E] text-white text-base font-normal leading-6 rounded-full px-6 py-2 cursor-pointer hover:bg-red-700 active:scale-95 transition-all duration-150"
            >
              Reserve
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
