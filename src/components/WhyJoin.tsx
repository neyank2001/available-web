import React from "react";
import Card from "./Card"; // Assuming Card is in the same directory

const WhyJoinUs: React.FC = () => {
  const features = [
    {
      title: "Grow Your Client Base",
      description:
        "Get discovered by new customers looking for salons in your area.",
      icon: "/client-heart.svg",
    },
    {
      title: "Easy Appointment Management",
      description:
        "Manage bookings, cancellations, and schedules seamlessly in one place.",
      icon: "/booking-calendar.svg",
    },
    {
      title: "Boost Revenue",
      description:
        "Maximize your earning potential with targeted promotions and visibility.",
      icon: "/revenue.svg",
    },
  ];

  return (
    <section id="why-join-us">
      <div className="container mx-auto px-4">
        <div className="section-header" data-aos="fade-up">
          <h2>Why Should You Join Available</h2>
          <p>
            Discover how our platform can help grow your salon and simplify your
            day-to-day tasks.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
