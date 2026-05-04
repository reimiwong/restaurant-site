export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* Top gradient border */}
      <div
        className="w-full h-1"
        style={{
          background:
            "linear-gradient(90deg, #C8102E 0%, #CC3830 7.14%, #CF5132 14.29%, #D26633 21.43%, #D47935 28.57%, #D58C36 35.71%, #D59E36 42.86%, #D4AF37 50%, #D59E36 57.14%, #D58C36 64.29%, #D47935 71.43%, #D26633 78.57%, #CF5132 85.71%, #CC3830 92.86%, #C8102E 100%)",
        }}
      />

      {/* Footer content */}
      <div className="px-4 sm:px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-[1200px] mx-auto">
          
          {/* Column 1: Logo & Description */}
          <div className="w-full">
            <div className="flex items-center gap-3 mb-4">
              <a
                href="#header"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C8102E] text-white"
              >
                <p className="text-xs font-normal leading-4 font-['Noto_Serif_SC']">靈</p>
              </a>
              <div className="flex flex-col">
                <h1 className="text-2xl font-medium font-playfair">Inspiration</h1>
                <h2 className="text-[#D4AF37] text-[12px] font-normal font-notoserifsc">
                  靈感中餐廳
                </h2>
              </div>
            </div>
            <p className="text-[#99A1AF] text-base leading-6 mb-2">
              Authentic Chinese cuisine in the heart of Leith, Edinburgh. Where tradition meets innovation.
            </p>
            <p className="text-[#6A7282] text-sm leading-5">
              45 Shore Street, Leith, Edinburgh EH6 6QU
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-full flex md:justify-center">
            <div className="flex flex-col items-start md:mx-auto">
              <p className="text-[#D4AF37] text-lg font-medium mb-4">Quick Links</p>
              <ul className="flex flex-col gap-2">
                <li><a href="#about-us" className="hover:text-[#D4AF37]">About Us</a></li>
                <li><a href="#menu" className="hover:text-[#D4AF37]">Our Menu</a></li>
                <li><a href="#location" className="hover:text-[#D4AF37]">Location</a></li>
                <li><a href="#reserve" className="hover:text-[#D4AF37]">Reservation</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Connect & Contact */}
          <div className="w-full flex md:justify-center">
            <div className="flex flex-col items-start md:mx-auto">
              <p className="text-[#D4AF37] text-lg font-medium mb-4">Connect</p>
              <ul className="flex flex-col gap-2">
                <li><a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">Instagram</a></li>
                <li><a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">Facebook</a></li>
                <li><a href="https://www.tripadvisor.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">Trip Advisor</a></li>
              </ul>

              <div className="mt-4">
                <p className="text-[#6A7282] text-sm leading-5">Call us:</p>
                <p className="text-[#C8102E] text-base leading-6">0131 555 0123</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-[#6A7282] pt-4">
          <p className="text-[#6A7282] text-center text-sm leading-5">
            © 2026 Inspiration Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}