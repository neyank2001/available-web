const SalonFAQ = () => {
  const faqs = [
    {
      question: "How do I register my salon?",
      answer:
        "Simply download the Available Partner App, Create an account, and complete your business profile. Once submitted, we’ll verify and approve your salon listing within 24 hours.",
    },
    {
      question: "Can I manage bookings directly from the app?",
      answer:
        "Yes! You can accept, reschedule, or cancel appointments in real-time right from your app dashboard.",
    },
    {
      question: "How do customers find my salon?",
      answer:
        "Customers nearby can discover your salon through location-based search, category filters, and top-rated listings—all within the app.",
    },
    {
      question: "Can I run offers or discounts through the app?",
      answer:
        "This feature is coming soon! We’re working on allowing salons to create and manage promotional offers directly within the app. Stay tuned for updates!",
    },
    {
      question: "Do I need a separate system to manage my staff?",
      answer:
        "Currently, staff management isn't available in the app. However, it's on our roadmap to let you manage staff schedules, assign services, and more—all from one platform in future updates.",
    },
    {
      question: "Is payment handled through the app?",
      answer:
        "Yes. Customers can pay online using UPI, cards, or wallets. You'll receive instant payment confirmation in the app.",
    },
    {
      question: "Can I see my salon's performance?",
      answer:
        "Yes! The app provides a full analytics dashboard with booking stats, revenue reports, and customer feedback insights.",
    },
  ];

  return (
    <section id="salon-faq">
      <div className="container mx-auto px-4">
        <div className="section-header" data-aos="fade-up">
          <h2> Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b pb-4"
              data-aos="fade-up"
              data-aos-delay={100 * idx}
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalonFAQ;
