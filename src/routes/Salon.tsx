import SalonFAQ from "../components/SalonFaq";
import WhyJoinUs from "../components/WhyJoin";

const Salon = () => {
  return (
    <main>
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text" data-aos="fade-up" data-aos-delay="100">
              <h2>Connect with Clients Who Need Your Services</h2>
              <p>
                Discover a smarter way to connect with your ideal clients.
                Available helps salons attract the right customers, grow their
                business, and build lasting relationships.
              </p>
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

      <section className="benifits journey salon-journey">
        <WhyJoinUs />
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Premium Features</h2>
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
              <h3>Smart Matching</h3>
              <p>
                Our intelligent algorithm helps salons connect with ideal
                clients based on their style, services, and preferences.
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
              <h3>Premium Profiles</h3>
              <p>
                Create a visually appealing, personalized profile to showcase
                your salon's unique offerings and attract your target audience.
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
              <h3>Verified Reviews</h3>
              <p>
                Build credibility and trust by displaying authentic client
                reviews that highlight your salon's quality and exceptional
                service.
              </p>
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
              <h3>Client Insights</h3>
              <p>
                Gain valuable data on client preferences and behavior to
                continually improve your services and offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="journey customer-journey">
        <SalonFAQ />
      </section>
    </main>
  );
};

export default Salon;
