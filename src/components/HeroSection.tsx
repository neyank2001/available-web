import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-up" data-aos-delay="100">
            <h2>
              Your <span className="text-[#e6b2c6]">Style</span>, Your{" "}
              <span className="text-[#e6b2c6]">Salon</span>, Booked{" "}
              <span className="text-[#e6b2c6]">Instantly</span>!
            </h2>
            <p>India’s first Hyperlocal Salon Booking Platform</p>

            <div className="flex flex-col space-y-1 items-center justify-center mt-4!">
              <p className="text-xs! font-bold mb-3!">Get The app</p>
              <div className="flex gap-10">
                <figure className="flex flex-col items-center">
                  <img className="w-10 h-10" src="/playstore.svg" alt="" />
                  <figcaption>Playstore</figcaption>
                </figure>
                <figure className="flex flex-col items-center">
                  <img className="w-10 h-10" src="/appstore.svg" alt="" />
                  <figcaption>Appstore</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,202.7C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
