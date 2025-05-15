"use client";
import { useState, useEffect } from "react";
import React, { ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleInputChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (validateForm()) {
    const { name, email, message } = formData;
    setLoading(true);

    const toastId = toast.loading("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success("Email sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send email.", { id: toastId });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", { id: toastId });
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }
};


  return (
    <div className="font-sans bg-background text-text">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-6 text-center bg-gradient-to-br from-primary to-secondary min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
          width={10}
          height={10}
            src="/assets/contact-bg.jpg"
            alt="Contact background"
            className="w-full h-full object-cover filter grayscale opacity-50"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-secondary/70 backdrop-blur-md"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-white">
            Have questions or feedback? Reach out to us, and we’ll respond
            promptly.
          </p>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className="bg-gradient-to-br from-background/10 to-primary/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  aria-required="true"
                  aria-describedby="name-error"
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-error mt-1">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  aria-required="true"
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-error mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="mt-1 w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  aria-required="true"
                  aria-describedby="message-error"
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="text-sm text-error mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
  disabled={loading}
  className={`w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300
    ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gradient-to-r hover:from-secondary hover:to-primary"}`}
>
  {loading ? "Sending..." : "Send"}
</button>

            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8" data-aos="fade-left">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-text" />
                <div>
                  <h4 className="text-lg font-medium text-text">Email</h4>
                  <p className="text-text">
                    <a
                      href="mailto:support@available.app"
                      className="hover:text-primary"
                    >
                      support@available.app
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="text-2xl text-text" />
                <div>
                  <h4 className="text-lg font-medium text-text">Phone</h4>
                  <p className="text-text">
                    <a href="tel:+1234567890" className="hover:text-primary">
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl text-text" />
                <div>
                  <h4 className="text-lg font-medium text-text">Address</h4>
                  <p className="text-text">
                    123 Salon St, Suite 100
                    <br />
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
            {/* Map */}
            <div
              className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-white/20"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.4360167245!2d75.62573958925047!3d26.88542139428822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1747050937971!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-primary/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
