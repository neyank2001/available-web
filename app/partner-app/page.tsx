import { FaGooglePlay, FaApple } from "react-icons/fa";

const PartnerApp = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Title Block */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 leading-tight">
            Empower Your Salon with the Available: Partner App
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Streamline operations, track performance, and boost visibility with
            our Partner App, available on iOS and Android. Take control of your
            salon business like never before.
          </p>
        </div>

        {/* App Features */}
        {/* Left Column: Features as Blocks */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center md:mx-10">
          <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-text-primary mb-4">
              Real-Time Booking
            </h4>
            <p className="text-lg text-text-muted">
              Manage your appointments seamlessly with real-time updates and
              notifications.
            </p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-text-primary mb-4">
              Performance Analytics
            </h4>
            <p className="text-lg text-text-muted">
              Track salon performance with detailed reports, helping you make
              data-driven decisions.
            </p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-text-primary mb-4">
              Enhanced Visibility
            </h4>
            <p className="text-lg text-text-muted">
              Increase your salon&apos;s exposure to new customers, making it easier
              for them to find you.
            </p>
          </div>

          <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-text-primary mb-4">
              Customizable Services
            </h4>
            <p className="text-lg text-text-muted">
              Easily list and manage your services, adjusting to meet customer
              demand and preferences.
            </p>
          </div>
        </div>

        {/* Download Options */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-text-primary mb-4">
            Download the App
          </h3>
          <p className="text-lg text-text-muted mb-8">
            Get started with the Partner App today and start growing your salon
            business.
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="https://play.google.com/store/apps"
              className="bg-primary text-white flex items-center px-6 py-3 rounded-full font-semibold shadow hover:bg-secondary transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlay className="text-2xl mr-3" />
              Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              className="bg-primary text-white flex items-center px-6 py-3 rounded-full font-semibold shadow hover:bg-secondary transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaApple className="text-2xl mr-3" />
              App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerApp;
