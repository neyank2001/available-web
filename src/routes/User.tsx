import HowItWorks from "../components/HowItWorks";
import HeroSection from "../components/HeroSection";

const User = () => {
  return (
    <main>
      <HeroSection />

      <section id="how-it-works" className="benifits journey salon-journey">
        <HowItWorks />
      </section>

      <section id="features" className="customer-journey ">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Premium Features</h2>
            <p>
              Out feature set is designed to make your salon experience as
              smooth and enjoyable as possible.
            </p>
          </div>

          <div className="features-grid">
            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Real-Time Booking</h3>
              <p>
                Book your favorite salon services instantly—no calls, no
                waiting.
              </p>
            </div>

            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
              </div>
              <h3>Discover Nearbys</h3>
              <p>
                See the best salons near your location, ready to serve you.{" "}
              </p>
            </div>

            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3>Read Real Reviews</h3>
              <p>Check what other people say before you choose a salon.</p>
            </div>

            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3>Personalized Suggestions</h3>
              <p>
                We show you salons and services that match your style and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="benifits" className="benifits journey salon-journey">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Available benifits</h2>
            <p>
              Designed to help salons grow and connect with the right clients
            </p>
          </div>

          <div className="features-grid">
            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="feature-icon">
                <img
                  src="/alarm-turn-off-svgrepo-com.svg"
                  style={{
                    color: "#352961",
                  }}
                  width="35"
                  height="35"
                  alt=""
                />
              </div>
              <h3>No Wait Time</h3>
              <p>
                Say goodbye to waiting at salons—simply book your slot in
                advance and enjoy a hassle-free experience!
              </p>
            </div>

            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="feature-icon">
                <img
                  src="/check-circle-svgrepo-com.svg"
                  style={{
                    color: "#352961",
                  }}
                  width="35"
                  height="35"
                  alt=""
                />
              </div>
              <h3>Verified Salons</h3>
              <p>
                Choose from a curated list of salons that have been vetted for
                quality and authenticity.
              </p>
            </div>

            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="feature-icon">
                <img
                  src="/reload-svgrepo-com.svg"
                  style={{
                    color: "#352961",
                  }}
                  width="35"
                  height="35"
                  alt=""
                />
              </div>
              <h3>Easy Re-Booking</h3>
              <p>
                Enjoy a seamless experience with quick re-booking options for
                your future visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta">
        <div className="container md:flex justify-between md:w-[80%]!">
          <div className="cta-content text-start!" data-aos="fade-up">
            <h2>Ready to Transform Your Beauty Experience?</h2>
            <p>
              Join Available today and discover the perfect salon-client match.
            </p>
          </div>
          <div
            className="email-subscription mt-4! md:mt-0! w-full md:w-[500px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Contact us</h3>
            <form className="email-form flex flex-col">
              <input
                type="text"
                className="email-input"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email address"
                required
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                className="email-input"
                id=""
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
            <div className="mt-2!">
              <p className="text-xs font-bold">Or mail us on</p>
              <a
                className="text-white!"
                href="mailto:support@availablehour.com"
              >
                support@availablehour.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default User;
