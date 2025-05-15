import { FaGooglePlay, FaApple } from "react-icons/fa";

const UserApp = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Title Block */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 leading-tight">
            Book with Ease using the Available App
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Find top salons, book appointments instantly, and manage your schedule with our User App, available on iOS and Android.
          </p>
        </div>

        {/* App Features */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center md:mx-10">
          <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-text-primary mb-4">
              Find Nearby Salons
            </h4>
            <p className="text-lg text-text-muted">
              Discover salons nearby and explore different categories to find the perfect fit for your needs.
            </p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-text-primary mb-4">
              Instant Booking
            </h4>
            <p className="text-lg text-text-muted">
              Check availability and instantly book your appointments at the most convenient times.
            </p>
          </div>
          <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-text-primary mb-4">
              Write Reviews
            </h4>
            <p className="text-lg text-text-muted">
              View ratings and real-time reviews from other users, and leave your own feedback to help others.
            </p>
          </div>

          <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-text-primary mb-4">
              Secure Payments & History Tracking
            </h4>
            <p className="text-lg text-text-muted">
              Make secure payments and easily track your booking history for future reference.
            </p>
          </div>
        </div>

        {/* Download Options */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-text-primary mb-4">
            Download the User App
          </h3>
          <p className="text-lg text-text-muted mb-8">
            Start booking your beauty services with ease today and enjoy the seamless experience with our User App.
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

export default UserApp;
