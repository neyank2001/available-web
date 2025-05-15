import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-background-light to-accent-light overflow-hidden"
    >
      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title Block */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-text-primary mb-4 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Available
            </span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-3xl mx-auto">
            At Available, we’re empowering beauty and confidence by connecting
            customers with top salons and providing salon owners with powerful
            tools to grow their businesses. Based in Rajasthan, India, we’re
            transforming the salon booking experience nationwide.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="#user-app"
              className="bg-accent text-text-primary px-6 sm:px-8 py-3 rounded-full font-semibold shadow hover:bg-secondary hover:text-white transition-all "
            >
              For Customers
            </a>
            <a
              href="#partner-app"
              className="bg-primary text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow hover:bg-secondary transition-all"
            >
              For Salon Owners
            </a>
          </div>
        </div>

        {/* Impact Block */}
        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-aos="fade-up"
        >
          <div>
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Our Impact
            </h3>
            <p className="text-base sm:text-lg text-text-muted mb-6 leading-relaxed">
              From our roots in Rajasthan, we’re proud to support local salons
              and empower communities across India. Our platform has helped
              thousands of customers find their perfect salon experience and
              enabled salon owners to thrive in a digital world.
            </p>
            <Link
              href="/contact-us"
              className="text-secondary hover:text-primary hover:underline transition"
            >
              Learn More
            </Link>
          </div>
          <div>
            <Image
            width={10}
            height={10}
              src="/assets/Barber-bro.svg"
              alt="Salon team"
              className="w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    
  );
}
