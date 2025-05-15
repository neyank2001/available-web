// pages/terms.tsx
export default function TermsPage() {
  return (
    <section className="bg-[#F6F6F6] min-h-screen py-20 px-6 text-[#1B1F23]">
      <div className="max-w-5xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-lg border-l-4 border-[#000]">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#000]">
          Terms & Conditions
        </h1>
        <p className="text-gray-500 mb-10 text-sm">Last updated: May 11,  2025</p>

        <div className="space-y-10 text-base leading-relaxed text-[#3A3A3A]">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to <strong>Available</strong>. By downloading or using our app,
              you agree to follow these terms. If you disagree with any part, please
              do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Services Provided</h2>
            <p>
              Our app allows salon owners to list their services and customers to
              discover and book appointments conveniently.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Provide accurate booking information.</li>
              <li>Respect cancellation policies.</li>
              <li>Avoid misuse or fraudulent activity.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Salon Responsibilities</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Keep services and availability up-to-date.</li>
              <li>Honor confirmed bookings made through the app.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Account Suspension</h2>
            <p>
              We reserve the right to suspend or terminate accounts in case of misuse
              or violation of our terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Modifications</h2>
            <p>
              We may revise these terms at any time. Continued use after updates
              means you accept the changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
            <p>
              For questions, contact us at{" "}
              <a
                href="mailto:support@availablehour.com"
                className="text-[#213555] underline font-medium"
              >
                support@availablehour.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
