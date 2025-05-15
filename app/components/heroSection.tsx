import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative text-text min-h-[80vh] py-24 sm:py-32 flex items-center justify-center bg-background overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          width={10}
          height={10}
          src="/assets/salon1.jpg"
          alt="Salon background"
          className="w-full h-full object-cover brightness-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#cfcdd4aa] via-[#e3b5ebaa] to-[#e6b2c688] backdrop-blur-sm mix-blend-overlay"></div>
      </div>

      {/* Foreground content */}
      <div
        className="relative z-10 max-w-3xl text-center px-6"
        data-aos="fade-up"
      >
        <div className="bg-white/30 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-background mb-6">
            Effortless Salon Bookings with{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Available
            </span>
          </h1>

          <p className="text-base sm:text-lg text-background/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Browse top-rated salons, book your favorite services, and enjoy a
            seamless scheduling experience — all in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#partner-app">
              <button className="px-6 sm:px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:brightness-110 transition-all">
                For Salon Owners
              </button>
            </a>
            <a href="#user-app">
              <button className="px-6 sm:px-8 py-3 rounded-full font-semibold bg-white text-primary border border-primary shadow-md hover:bg-primary hover:text-white transition-all">
                For Customers
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
