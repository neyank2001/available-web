import Card from "./Card";

const HowItWorks = () => {
  return (
    <section className="container">
      <div className="container mx-auto px-4">
        <div className="section-header" data-aos="fade-up">
          <h2>How it works</h2>
          <p>
            Find salons, pick services, and book instantly — it's that simple.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <Card
            title="Browse Salons"
            description=" Explore top-rated salons near you, view services, ratings, and
              offers instantly."
            icon="/store.svg"
          />

          <Card
            title="Book Instantly"
            description="Choose your preferred service, pick a time slot, and confirm your
              appointment in seconds."
            icon="/calendar.svg"
          />
          <Card
            title="Enjoy Your Service"
            description="Visit the salon at your scheduled time, skip the wait, and
              experience premium service."
            icon="/enjoy-face.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
