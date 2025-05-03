import "./style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <section className="h-screen w-full flex-center bg-[url(/src/assets/img/sections/mv-bg.jpg)] bg-cover bg-no-repeat bg-center">
          <div className="max-width">
            <div className="text-[#ffff] px-[20px]" data-aos="fade-up">
              <h1 className="text-[5rem] max-md:text-[30px]">
                Emman Computer and CCTV Services
              </h1>
              <span className="block mt-[10px] text-[1.6rem]">
                Your Trusted Partner in IT Solutions and Security Systems
                Reliable computer repairs, smart CCTV installations, and expert
                tech support <br />— all in one place.
              </span>
            </div>
          </div>
        </section>

        <section
          className="pt-[60px] pl-[3%] pr-[3%] flex-center flex-col bg-[#1a2c5c] px-[30px] max-md:py-[30px]"
          id="about"
        >
          <div className="max-width" >
            <div className="flex-center gap-[15px] max-md:flex-col">
              <div className="w-[100%] text-[#ffff]" data-aos="fade-right">
                <h1 className="text-[4rem] max-md:text-[30px]">About Us</h1>
                <p className="text-[1.6rem] leading-[1.6] max-md:text-[14px] max-md:mt-[5px]">
                  Founded with a passion for technology and service, Emman
                  Computer and CCTV has grown into a trusted provider of IT and
                  security solutions. We specialize in computer and laptop
                  repair, CCTV installation, file recovery, and network setup
                  including LAN, structured cabling, P2P, and wireless
                  configurations. Our expertise also extends to biometric and
                  door lock access systems, solar panel installation, and web
                  programming—making us a one-stop shop for both residential and
                  commercial tech needs. With a commitment to quality,
                  reliability, and customer satisfaction, we’ve proudly served
                  clients across the Philippines since 2015.
                </p>
              </div>
              <div
                data-aos="fade-left"
                className="rounded-4xl h-[500px] w-[100%] max-w-[600px] bg-[url(/src/assets/img/sections/about-img.jpg)] bg-cover bg-no-repeat bg-center"
              ></div>
            </div>

            <div className="mt-[30px]" data-aos="fade-right">
              <h2 className="text-[2.4rem] text-[#ffff]">Clients Served:</h2>
              <div className="mt-[20px]">
                <Splide
                  options={{
                    type: "loop",
                    autoplay: true,
                    perPage: 3,
                    gap: "1rem",
                    pagination: false,
                    breakpoints: {
                      768: {
                        perPage: 1,
                      },
                    },
                  }}
                  hasTrack={false}
                  aria-label=""
                >
                  <SplideTrack>
                    <SplideSlide>
                      <img
                        className="splide-img"
                        src="./src/assets/img/sections/client-1.jpg"
                        alt="Image 1"
                      />
                    </SplideSlide>
                    <SplideSlide>
                      <img
                        className="splide-img"
                        src="./src/assets/img/sections/client-2.jpg"
                        alt="Image 1"
                      />
                    </SplideSlide>
                    <SplideSlide>
                      <img
                        className="splide-img"
                        src="./src/assets/img/sections/client-3.jpg"
                        alt="Image 1"
                      />
                    </SplideSlide>
                    <SplideSlide>
                      <img
                        className="splide-img"
                        src="./src/assets/img/sections/client-4.jpg"
                        alt="Image 1"
                      />
                    </SplideSlide>
                    <SplideSlide>
                      <img
                        className="splide-img"
                        src="./src/assets/img/sections/client-5.jpg"
                        alt="Image 1"
                      />
                    </SplideSlide>
                    <SplideSlide>
                      <img
                        className="splide-img"
                        src="./src/assets/img/sections/client-6.jpg"
                        alt="Image 1"
                      />
                    </SplideSlide>
                  </SplideTrack>

                  <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev text-white">
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="splide__arrow splide__arrow--next text-white">
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </Splide>
              </div>
            </div>
          </div>
        </section>

        <section
          className="pt-[60px] pl-[3%] pr-[3%] bg-[#1a2c5c] max-md:py-[30px]"
          id="services"  
        >
          <div className="max-width">
            <h1 className="block text-center text-[4rem] text-[#ffff] max-md:text-[30px]">
              Services
            </h1>
            <div className="mt-[30px] text-[#ffff] flex flex-wrap justify-center gap-10 max-md:gap-2" >
              <div className="services-blk">
                <p>
                  <i className="fas fa-desktop text-[4rem] w-[4rem] h-[4rem] flex items-center justify-center"></i>
                </p>
                <span className="block text-[1.6rem] max-md:text-[14px]">
                  Computer/Laptop Repair
                </span>
              </div>

              <div className="services-blk">
                <p>
                  <i className="fas fa-database text-[4rem] w-[4rem] h-[4rem] flex items-center justify-center"></i>
                </p>
                <span className="block text-[1.6rem] max-md:text-[14px]">
                  Data Recovery
                </span>
              </div>

              <div className="services-blk">
                <p>
                  <i className="fas fa-video text-[4rem] w-[4rem] h-[4rem] flex items-center justify-center"></i>
                </p>
                <span className="block text-[1.6rem] max-md:text-[14px]">
                  CCTV Installation and Repair
                </span>
              </div>

              <div className="services-blk">
                <p>
                  <i className="fas fa-fingerprint text-[4rem] w-[4rem] h-[4rem] flex items-center justify-center"></i>
                </p>
                <span className="block text-[1.6rem] max-md:text-[14px]">
                  Biometric Installation
                </span>
              </div>

              <div className="services-blk">
                <p>
                  <i className="fas fa-network-wired text-[4rem] w-[4rem] h-[4rem] flex items-center justify-center"></i>
                </p>
                <span className="block text-[1.6rem] max-md:text-[14px]">
                  Network and LAN Installation
                </span>
              </div>

              <div className="services-blk">
                <p>
                  <i className="fas fa-laptop-code text-[4rem] w-[4rem] h-[4rem] flex items-center justify-center"></i>
                </p>
                <span className="block text-[1.6rem] max-md:text-[14px]">
                  Computer and Web Programming
                </span>
              </div>

              <div className="services-blk">
                <p>
                  <i className="fas fa-project-diagram text-[4rem] w-[4rem] h-[4rem] flex items-center justify-center"></i>
                </p>
                <span className="block text-[1.6rem] max-md:text-[14px]">
                  Structured Cabling
                </span>
              </div>

              <div className="services-blk">
                <p>
                  <i className="fas fa-wifi text-[4rem] w-[4rem] h-[4rem] flex items-center justify-center"></i>
                </p>
                <span className="block text-[1.6rem] max-md:text-[14px]">
                  WiFi Access Point Setup
                </span>
              </div>

              <div className="services-blk">
                <p>
                  <i className="fas fa-solar-panel text-[4rem] w-[4rem] h-[4rem] flex items-center justify-center"></i>
                </p>
                <span className="block text-[1.6rem] max-md:text-[14px]">
                  Solar Panel Installation
                </span>
              </div>

              <div className="services-blk">
                <p>
                  <i className="fas fa-door-closed text-[4rem] w-[4rem] h-[4rem] flex items-center justify-center"></i>
                </p>
                <span className="block text-[1.6rem] max-md:text-[14px]">
                  Door Lock Access System
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="pt-[60px] pl-[3%] pr-[3%] flex-center flex-col bg-[#1a2c5c]"
          id="contact"
        >
          <div className="max-width">
            <h1 className="block text-center text-[4rem] text-[#ffff] max-md:text-[30px]">
              Contact
            </h1>
            <div className="mt-[30px] flex flex-wrap gap-[20px] w-full max-md:flex-col-reverse">
              <div className="flex-1 ">
                <div className="flex flex-col gap-1 mb-[20px]">
                  <span className="text-[2.4rem] text-[#ffff] font-bold">
                    Contact No.
                  </span>
                  <span className="text-[1.6rem] text-[#ffff]">
                    0926-503-6640
                  </span>
                </div>

                <div className="flex flex-col gap-1 mb-[20px]">
                  <span className="text-[2.4rem] text-[#ffff] font-bold">
                    Address
                  </span>
                  <span className="text-[1.6rem] text-[#ffff]">
                    022 Sitio Kanluran, Brgy. Palaypalay , Jalajala, Philippines
                  </span>
                </div>

                <div className="flex flex-col gap-1 mb-[20px]">
                  <span className="text-[2.4rem] text-[#ffff] font-bold">
                    Email
                  </span>
                  <span className="text-[1.6rem] text-[#ffff]">
                    contact@gmail.com
                  </span>
                </div>
                <iframe
                  className="contact-map"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7732.492796773103!2d121.3132128428948!3d14.297111293826742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s022%20Sitio%20Kanluran%2C%20Brgy.%20Palaypalay%201990%20Jalajala%2C%20Philippines!5e0!3m2!1sen!2sph!4v1745250286342!5m2!1sen!2sph"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex-1 flex justify-between flex-col gap-10">
                <div>
                  <span className="textbox-label">First Name: *</span>
                  <div>
                    <input
                      className="textbox"
                      type="text"
                      name="fname"
                      placeholder="First Name"
                    />
                  </div>
                </div>

                <div>
                  <span className="textbox-label">Last Name: *</span>
                  <div>
                    <input
                      className="textbox"
                      type="text"
                      name="fname"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div>
                  <span className="textbox-label">Contact: *</span>
                  <div>
                    <input
                      className="textbox"
                      type="tel"
                      name="contact"
                      placeholder="Contact Number"
                    />
                  </div>
                </div>

                <div>
                  <span className="textbox-label">Email: *</span>
                  <div>
                    <input
                      className="textbox"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div>
                  <span className="textbox-label">Services Interested: *</span>
                  <div>
                    <select className="cmb-box" name="services">
                      <option className="text-[#000]" value="CCTV Services">
                        CCTV Services
                      </option>
                      <option className="text-[#000]" value="Computer Repair">
                        Computer Repair
                      </option>
                      <option
                        className="text-[#000]"
                        value="Computer Programming"
                      >
                        Computer Programming
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <span className="textbox-label">Message:</span>
                  <div>
                    <textarea className="textarea" name="message"></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <a className="button" href="#">
                    Send
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
