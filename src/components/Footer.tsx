export default function Footer() {
  return (
    <div className="flex flex-col w-full relative">
      {/* Top gradient border */}
      <div
        className="w-full h-[4px]"
        style={{
          background:
            "linear-gradient(90deg, #C8102E 0%, #CC3830 7.14%, #CF5132 14.29%, #D26633 21.43%, #D47935 28.57%, #D58C36 35.71%, #D59E36 42.86%, #D4AF37 50%, #D59E36 57.14%, #D58C36 64.29%, #D47935 71.43%, #D26633 78.57%, #CF5132 85.71%, #CC3830 92.86%, #C8102E 100%)",
        }}
      />

      {/* Footer content */}
      <div className="flex flex-col w-full bg-black">
        <div className="flex flex-row justify-between gap-16 w-[80%] mx-auto py-16">
          {/* Logo & description */}
          <div className="flex flex-col gap-2 items-start text-left">
            <div className="flex flex-row gap-3 items-center">
              <a
                href="/"
                className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-[#C8102E] text-white"
              >
                <p className="text-white font-['Noto_Serif_SC'] text-xs font-normal leading-4">
                  靈
                </p>
              </a>
              <div className="flex flex-col items-start">
                <h1 className="text-white font-playfair text-2xl font-medium leading-8">
                  Inspiration
                </h1>
                <h2 className="text-[#D4AF37] font-notoserifsc text-[12px] font-normal leading-4">
                  靈感中餐廳
                </h2>
              </div>
            </div>
            <p className="text-[#99A1AF] font-sans text-base font-normal leading-6 mt-2 max-w-[448px] break-words">
              Authentic Chinese cuisine in the heart of Leith, Edinburgh. Where
              tradition meets innovation.
            </p>
            <p className="text-[#6A7282] font-sans text-sm font-normal leading-5">
              45 Shore Street, Leith, Edinburgh EH6 6QU
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <ul className="flex flex-col gap-1">
              <p className="text-[#D4AF37] font-inter text-[18px] font-medium leading-[28px]">
                Quick Links
              </p>
              <li>
                <a href="/about-us" className="text-white hover:text-[#D4AF37]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/menu" className="text-white hover:text-[#D4AF37]">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="/location" className="text-white hover:text-[#D4AF37]">
                  Location
                </a>
              </li>
              <li>
                <a
                  href="/reservation"
                  className="text-white hover:text-[#D4AF37]"
                >
                  Reservation
                </a>
              </li>
            </ul>
          </nav>

          {/* Connect & Contact */}
          <div>
            <nav aria-label="Connect">
              <ul className="flex flex-col gap-1">
                <p className="text-[#D4AF37] font-inter text-[18px] font-medium leading-[28px]">
                  Connect
                </p>
                <li>
                  <a
                    href="https://www.instagram.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#D4AF37]"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#D4AF37]"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tripadvisor.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#D4AF37]"
                  >
                    Trip Advisor
                  </a>
                </li>
              </ul>
            </nav>

            <div className="mt-4">
              <p className="text-[#6A7282] font-inter text-sm font-normal leading-5">
                Call us:
              </p>
              <p className="text-[#C8102E] font-inter text-base font-normal leading-6">
                0131 555 0123
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="w-[85%] border-t border-[#6A7282] mx-auto">
          <p className="text-[#6A7282] text-center font-sans text-base font-normal leading-6 pt-4 pb-10">
            © 2026 Inspiration Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
