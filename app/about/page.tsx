import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-background to-accent-light overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: 'url("/assets/salon-bg.jpg")' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center mb-16">
        {/* Title Block */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-text-primary mb-4 leading-tight">
          About{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Available
          </span>
        </h2>
        <p className="text-base sm:text-lg text-text-muted max-w-3xl mx-auto mb-8">
          At Available, we’re empowering beauty and confidence by connecting
          customers with top salons and providing salon owners with powerful
          tools to grow their businesses. Based in Rajasthan, India, we’re
          transforming the salon booking experience nationwide.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="#user-app"
            className="bg-accent text-text-primary px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-secondary hover:text-white transition-all"
          >
            For Customers
          </a>
          <a
            href="#partner-app"
            className="bg-primary text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-secondary transition-all"
          >
            For Salon Owners
          </a>
        </div>
      </div>

      {/* Our Mission */}
      {/* <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-text-primary mb-6">Our Mission</h3>
        <div className="max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-text-muted mb-6 leading-relaxed">
            Our mission is to revolutionize the salon booking experience by connecting customers with local salons in a seamless and efficient way. We believe in empowering both customers and salon owners by providing easy-to-use tools that bring beauty and confidence to every individual.
          </p>
        </div>
      </div> */}

      {/* Our Impact Section */}
      {/* <div className="grid md:grid-cols-2 gap-12 items-center px-4 sm:px-6 mb-16">
        <div>
          <h3 className="text-3xl font-bold text-text-primary mb-4">Our Impact</h3>
          <p className="text-base sm:text-lg text-text-muted mb-6 leading-relaxed">
            From our roots in Rajasthan, we’re proud to support local salons and empower communities across India. Our platform has helped thousands of customers find their perfect salon experience and enabled salon owners to thrive in a digital world. We're building a stronger, more connected beauty ecosystem for all.
          </p>
          <Link
            to="/contact-us"
            className="text-secondary hover:text-primary hover:underline transition"
          >
            Learn More
          </Link>
        </div>
        <div>
          <img
            src="/assets/salon-impact.svg"
            alt="Salon team"
            className="w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div> */}

      {/* Dynamic Salon Services */}
      {/* <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-text-primary mb-6">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-xl mb-4"
              />
              <h4 className="text-xl font-semibold text-text-primary mb-2">{service.title}</h4>
              <p className="text-base text-text-muted mb-4">{service.description}</p>
              <Link to={service.link} className="text-primary hover:text-secondary hover:underline transition">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-text-primary mb-6">
          Join Us Today
        </h3>
        <p className="text-base sm:text-lg text-text-muted mb-6 max-w-3xl mx-auto">
          Whether you&apos;re a customer looking for the perfect salon experience or
          a salon owner wanting to expand your reach, Available is the platform
          for you. Join our growing community today!
        </p>
        <Link
          href="/contact-us"
          className="bg-primary text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-secondary transition-all"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
