const Footer = () => {
  return (
    <>
      <footer className="bg-[#1a2c5c] p-[30px] max-md:p-[20px]">
        <div className="max-width flex items-baseline flex-col">
          {/*<div className="flex gap-[30px] flex-wrap max-md:flex-col max-md:gap-[15px]">
            <div className="flex flex-col gap-[5px]">
              <span className="text-[1.5rem] text-[#ffff]">Email:</span>
              <a
                className="text-[2.4rem] text-[#ffff] max-md:text-[20px]"
                href="mailto: contact@gmail.com"
              >
                contact@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-[5px]">
              <span className="text-[1.5rem] text-[#ffff]">Contact Us:</span>
              <a
                className="text-[2.4rem] text-[#ffff] max-md:text-[20px]"
                href="tel: 0926-503-6640"
              >
                0926-503-6640
              </a>
            </div>

            <div className="flex flex-col gap-[5px]">
              <span className="text-[1.5rem] text-[#ffff]">Socials:</span>
              <div className="flex gap-[10px]">
                <a
                  className="text-[2.4rem] text-[#ffff]"
                  href="https://www.facebook.com/EmmanCCTV/"
                  target="_blank"
                >
                  <img
                    className="w-[30px] h-[30px]"
                    src="./src/assets/img/footer/facebook.png"
                    alt="Facebook Logo"
                  />
                </a>
                <a
                  className="text-[2.4rem] text-[#ffff]"
                  href="mailto: contact@gmail.com"
                >
                  <img
                    className="w-[30px] h-[30px]"
                    src="./src/assets/img/footer/gmail.png"
                    alt="Gmail Logo"
                  />
                </a>
              </div>
            </div>
          </div>*/}

          <div className="w-full flex items-center justify-between mt-[20px] border-t-1 border-[#ffff] max-md:flex-col">
            <span className="block mt-[20px] text-[1.6rem] text-[#ffff] text-center">
              Copyright © Emman Computer and CCTV Installation Services.
            </span>
            <ul className="flex gap-[15px] mt-[20px] max-md:mt-[10px]">
              <li>
                <a
                  className="text-[1.6rem] text-[#ffff] hover:text-[#f3ff00] max-md:text-[16px]"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-[1.6rem] text-[#ffff] hover:text-[#f3ff00] max-md:text-[16px]"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-[1.6rem] text-[#ffff] hover:text-[#f3ff00] max-md:text-[16px]"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
