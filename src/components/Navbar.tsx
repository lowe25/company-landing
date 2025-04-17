import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative w-full bg-[#1a2c5c]">
        <div className="max-width h-[105px] px-[15px] flex items-center justify-between relative z-50 max-md:h-[80px]">
          <a href="#">
            <img
              className="w-[110px] h-[80px] max-md:w-[80px] max-md:h-[60px]"
              src="./src/assets/img/emman-cctv-logo.jpg"
              alt="Emman CCTV Logo"
            />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-6 h-6 flex flex-col justify-center items-center relative z-50"
            aria-label="Toggle Menu"
          >
            <span
              className={`absolute w-6 h-[2px] bg-[#ffff] transition-all duration-300 ease-in-out ${
                menuOpen ? "rotate-45 top-1/2" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-[#ffff] transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-[#ffff] transition-all duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 top-1/2" : "translate-y-2"
              }`}
            />
          </button>

          <nav
            className={`md:static md:block absolute top-[80px] left-0 w-full bg-[#1a2c5c] md:w-full transition-all duration-300 ease-in-out ${
              menuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
            }`}
          >
            <ul className="flex flex-col md:flex-row gap-[15px] text-[#ffff] p-6 md:p-0 md:items-center md:justify-end">
              <li>
                <a className="text-[1.8rem] hover:text-[#f3ff00]" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-[1.8rem] hover:text-[#f3ff00]" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="text-[1.8rem] hover:text-[#f3ff00]" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
