'use client'
import React, { useEffect } from "react";
import Aos from "aos";
import { FaApple, FaCheckCircle, FaGooglePlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function DownloadApp() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);

  const partnerSlides = [
    {
      src: "/assets/realtime-booking.svg",
      caption: "Manage Bookings",
    },
    {
      src: "/assets/performance-overview.svg",
      caption: "Track Performance",
    },
    {
      src: "/assets/growth-enhance.svg",
      caption: "Enhance Visibility",
    },
  ];

  const userSlides = [
    {
      src: "/assets/findnearby-salons.svg",
      caption: "Browse Salons",
    },
    {
      src: "/assets/instant-booking.svg",
      caption: "Book Instantly",
    },
    {
      src: "/assets/salon-reviews.svg",
      caption: "Salon Reviews",
    },
  ];

  return (
    <>
      {/* Partner App Section */}
      <section
        id="partner-app"
        className="relative bg-background py-16 sm:py-24"
      >
        <svg
          className="absolute top-0 left-0 w-full h-16 text-primary"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,0 C600,100 840,0 1440,100 L1440,0 H0 Z"
          />
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
              Partner App: Empower Your Salon
            </h2>
            <p className="text-base sm:text-lg text-text/80 mb-6 max-w-lg">
              Streamline operations, track performance, and boost visibility
              with our Partner App, available on iOS and Android.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3 flex-wrap">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300"
                >
                  <FaGooglePlay className="text-lg sm:text-xl" />
                  Google Play
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300"
                >
                  <FaApple className="text-lg sm:text-xl" />
                  App Store
                </a>
              </div>
              <a
                href="#features"
                className="inline-block text-secondary hover:underline text-base font-medium transition duration-200"
              >
                Explore Features
              </a>
            </div>
            <ul className="mt-6 space-y-2 text-sm sm:text-base text-text/80">
              {[
                "Real-Time Booking",
                "Performance Analytics",
                "Enhanced Visibility",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2"
                  data-aos="fade-up"
                  data-aos-delay={200 + i * 50}
                >
                  <FaCheckCircle className="text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="max-w-xs sm:max-w-sm mx-auto">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                loop
                spaceBetween={30}
              >
                {partnerSlides.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative">
                      <Image
                        width={10}
            height={10}
                        src={item.src}
                        alt={`Partner app mockup ${i + 1}`}
                        className="w-full transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-primary/80 text-white text-xs sm:text-sm font-medium py-1.5 px-3 rounded-md text-center">
                        {item.caption}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section
        id="user-app"
        className="relative bg-primary text-white py-16 sm:py-24"
      >
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5 text-accent"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle cx="10" cy="20" r="1" fill="currentColor" />
          <circle cx="80" cy="30" r="1" fill="currentColor" />
          <circle cx="50" cy="70" r="1" fill="currentColor" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-accent">
              User App: Book with Ease
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-6 max-w-lg">
              Find top salons, book appointments instantly, and manage your
              schedule with our User App, available on iOS and Android.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3 flex-wrap">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300"
                >
                  <FaGooglePlay className="text-lg sm:text-xl" />
                  Google Play
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300"
                >
                  <FaApple className="text-lg sm:text-xl" />
                  App Store
                </a>
              </div>
              <a
                href="#features"
                className="inline-block text-white hover:underline text-base font-medium transition duration-200"
              >
                See How It Works
              </a>
            </div>
            <ul className="mt-6 space-y-2 text-sm sm:text-base text-white/80">
              {["Find Nearby Salons", "Instant Booking", "Write Reviews"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2"
                    data-aos="fade-up"
                    data-aos-delay={200 + i * 50}
                  >
                    <FaCheckCircle className="text-accent" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="max-w-xs sm:max-w-sm mx-auto">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                loop
                spaceBetween={30}
              >
                {userSlides.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative">
                      <Image
                        width={10}
            height={10}
                        src={item.src}
                        alt={`User app mockup ${i + 1}`}
                        className="w-full  transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-secondary text-white text-xs sm:text-sm font-medium py-1.5 px-3 rounded-md text-center">
                        {item.caption}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
