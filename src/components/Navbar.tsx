import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#1a2c5c]" : "bg-transparent"
      }`}
    >
      <div className="max-width h-[80px] px-[15px] flex items-center justify-between max-md:h-[80px]">
        <a href="#">
          <img
            className="w-[110px] h-[80px] max-md:w-[80px] max-md:h-[60px]"
            src="/company-landing/assets/img/common/emman-cctv-logo.jpg"
            alt="Emman CCTV Logo"
          />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-6 h-6 flex flex-col justify-center items-center relative z-50"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 top-1/2" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 top-1/2" : "translate-y-2"
            }`}
          />
        </button>

        <nav
          className={`md:static md:block absolute top-[80px] left-0 w-full md:w-full transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto bg-[#1a2c5c]"
              : "opacity-0 -translate-y-2 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-[15px] text-white p-6 md:p-0 md:items-center md:justify-end">
            <li>
              <a className="text-[1.8rem] hover:text-[#f3ff00]" href="#about">
                About
              </a>
            </li>
            <li>
              <a
                className="text-[1.8rem] hover:text-[#f3ff00]"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a className="text-[1.8rem] hover:text-[#f3ff00]" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
