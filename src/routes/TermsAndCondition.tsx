import React from "react";

const TermsAndCondition: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg my-32">
      <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
      <p className="text-sm text-gray-600 mb-6">Last Updated: 14/08/2023</p>

      <div>
        <section className="py-4!">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the website{" "}
            <span className="font-medium">availablehour.com</span> (hereinafter
            referred to as "the Website"), you agree to comply with and be bound
            by these terms and conditions. If you do not agree to these terms
            and conditions, please refrain from using the Website.
          </p>
        </section>

        <section className="py-4!">
          <h2 className="text-xl font-semibold mb-2">2. Changes to Terms</h2>
          <p>
            The Website reserves the right to modify or revise these terms and
            conditions at any time. Your continued use of the Website following
            any such changes constitutes your acceptance of the new terms and
            conditions. It is your responsibility to regularly review these
            terms and conditions.
          </p>
        </section>

        <section className="py-4!">
          <h2 className="text-xl font-semibold mb-2">3. Privacy Policy</h2>
          <p>
            Your use of the Website is also governed by our{" "}
            <a href="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </a>
            . Please review the Privacy Policy to understand how we collect,
            use, and protect your personal information.
          </p>
        </section>

        <section className="py-4!">
          <h2 className="text-xl font-semibold mb-2">4. User Content</h2>
          <p>
            <span className="font-medium">a).</span> By submitting or posting
            any content on the Website, you grant availablehour.com a
            non-exclusive, royalty-free, perpetual, irrevocable, and fully
            sublicensable right to use, reproduce, modify, adapt, publish,
            translate, create derivative works from, distribute, and display
            such content throughout the world in any media.
          </p>
          <p className="mt-2">
            <span className="font-medium">b).</span> You represent and warrant
            that you own or otherwise control all rights to the content you
            post, and that the use of your content does not violate these terms
            and conditions and will not cause injury to any person or entity.
          </p>
        </section>

        <section className="py-4!">
          <h2 className="text-xl font-semibold mb-2">
            5. Intellectual Property
          </h2>
          <p>
            <span className="font-medium">a).</span> All content on the Website,
            including but not limited to text, graphics, logos, images, videos,
            and software, is the property of availablehour.com and is protected
            by intellectual property laws. You may not use, reproduce, or
            distribute any content from the Website without prior written
            permission from availablehour.com.
          </p>
        </section>

        <section className="py-4!">
          <h2 className="text-xl font-semibold mb-2">
            6. Limitation of Liability
          </h2>
          <p>
            <span className="font-medium">a).</span> The Website is provided on
            an "as-is" and "as available" basis. availablehour.com makes no
            warranties, express or implied, regarding the accuracy, reliability,
            or availability of the Website.
          </p>
          <p className="mt-2">
            <span className="font-medium">b).</span> In no event shall
            availablehour.com be liable for any direct, indirect, incidental,
            special, or consequential damages arising out of or in any way
            connected with your use of the Website.
          </p>
        </section>

        <section className="py-4!">
          <h2 className="text-xl font-semibold mb-2">7. Contact Information</h2>
          <p>
            If you have any questions or concerns about these terms and
            conditions, please contact us at{" "}
            <a
              href="mailto:contact@availablehour.com"
              className="text-blue-600 underline"
            >
              contact@availablehour.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndCondition;
