const Contact = () => {
  return (
    <div>
      <section className="mt-24">
        <div className="container mx-auto px-4">
          <div className="section-header" data-aos="fade-up">
            <h2>Contact us</h2>
            <p>
              Need help? Reach out to us for assistance, technical issues, or
              any other inquiries.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="cta">
        <div className="container md:flex justify-between md:w-[80%]!">
          <div
            className="cta-content text-start! md:w-[50%]!"
            data-aos="fade-up"
          >
            <h2>Have a query? Let us help you out</h2>
            <p>
              Our support team is ready to answer your questions and ensure you
              get the most out of Available.
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
    </div>
  );
};

export default Contact;
