import { useState } from "react";

const partySizes = [
  { value: "1", label: "1 person" },
  { value: "2", label: "2 people" },
  { value: "3", label: "3 people" },
  { value: "4", label: "4 people" },
  { value: "5", label: "5 people" },
  { value: "6", label: "6 people" },
  { value: "7", label: "7 people" },
];

export default function ReserveYourTable() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    partySize: "2",
    requests: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const inputStyle =
    "w-full h-[60px] px-3 sm:px-6 rounded-2xl border-2 border-white/30 bg-white/10 text-white font-sans text-base font-normal outline-none";

  const textareaStyle =
    "w-full h-[132px] px-3 sm:px-6 py-4 rounded-2xl border-2 border-white/30 bg-white/10 text-white font-sans text-base font-normal outline-none resize-none";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <section id="reserve">
      <div className="bg-[linear-gradient(135deg,#C8102E,#8B0A1E)] text-white py-16 sm:py-24 flex flex-col items-center text-center gap-6 px-4">
        <p className="text-[#D4AF37] text-sm tracking-[1.4px]">RESERVATIONS</p>
        <h1 className="font-playfair text-[50px] sm:text-[60px] leading-[50px] sm:leading-[60px]">
          Reserve Your Table
        </h1>
        <p className="text-white/90 text-lg sm:text-xl leading-6 sm:leading-7 max-w-[480px] mx-auto">
          Experience the finest Chinese cuisine in Edinburgh. Book your table today.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md mx-auto"
        >
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className={inputStyle}
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={inputStyle}
          />
          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className={inputStyle}
          />

          {/* Date + Time */}
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="w-full sm:w-1/2 h-[60px] px-3 sm:px-4 rounded-2xl border-2 border-white/30 bg-white/10 text-white/50"
            />
            <input
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              className="w-full sm:w-1/2 h-[60px] px-3 sm:px-4 rounded-2xl border-2 border-white/30 bg-white/10 text-white/50"
            />
          </div>

          {/* Custom Dropdown */}
          <div className="relative w-full">
            <button
              type="button"
              className="w-full h-[60px] px-3 sm:px-6 rounded-2xl border-2 border-white/30 bg-white/10 text-white/50 font-sans text-base font-normal flex justify-between items-center outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {partySizes.find((p) => p.value === form.partySize)?.label}
              <span>▾</span>
            </button>

            {dropdownOpen && (
              <ul className="absolute top-full mt-2 w-full max-h-60 overflow-y-auto rounded-2xl border-2 border-white/30 bg-[#8B0A1E] text-white z-50">
                {partySizes.map((p) => (
                  <li
                    key={p.value}
                    onClick={() => {
                      setForm({ ...form, partySize: p.value });
                      setDropdownOpen(false);
                    }}
                    className="px-6 py-4 hover:bg-white/20 cursor-pointer"
                  >
                    {p.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <textarea
            name="requests"
            placeholder="Special requests (Optional)"
            value={form.requests}
            onChange={handleChange}
            className={textareaStyle}
          />

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-[#D4AF37] text-black font-medium shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)]"
          >
            Request Reservation
          </button>
        </form>

        <p className="text-white/80 text-center text-base sm:text-lg leading-7 sm:leading-8 max-w-[480px] mx-auto mt-6 px-2 sm:px-0">
          For same-day reservations or groups larger than 8, please call us directly at{" "}
          <span className="text-[#D4AF37]">0131 555 0123</span>
        </p>
      </div>
    </section>
  );
}