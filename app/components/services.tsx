import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[var(--color-bg)] text-[var(--color-text)] py-20 sm:py-28 px-4 sm:px-6"
    >
       
       
      <div className="max-w-7xl mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Our <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-[color:var(--color-text)/80]">
          AvailableHour is designed to make beauty service booking easier for customers and more profitable for salon owners. Whether you want to book a haircut or grow your salon business, we’ve got you covered.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12" data-aos="fade-up">
        {/* Customer Services Card */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            For Customers
          </h3>
          <ul className="space-y-4 text-left">
            {[
              "Discover salons nearby & by category",
              "Check availability & book appointments",
              "View ratings & real-time reviews",
              "Secure payments & history tracking",
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 text-accent" />
                <span className="text-[color:var(--color-text)/90]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Salon Partner Services Card */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
            For Salon Partners
          </h3>
          <ul className="space-y-4 text-left">
            {[
              "List your salon & showcase services",
              "Manage bookings with calendar sync",
              "Track performance with in-app analytics",
              "Attract new customers with promotions",
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 text-[var(--color-secondary)]" />
                <span className="text-[color:var(--color-text)/90]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
