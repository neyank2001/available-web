import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg my-32">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-600">Last updated: May 13, 2025</p>

      <p className="mb-6">
        This Privacy Policy describes Our policies and procedures on the
        collection, use, and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </p>

      <p className="mb-6">
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Interpretation and Definitions
      </h2>

      <h3 className="text-xl font-semibold mb-2">Interpretation</h3>
      <p className="mb-6">
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions...
      </p>

      <h3 className="text-xl font-semibold mb-2">Definitions</h3>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>
          <strong>Account</strong> means a unique account created for You to
          access our Service.
        </li>
        <li>
          <strong>Affiliate</strong> means an entity that controls, is
          controlled by or is under common control...
        </li>
        <li>
          <strong>Application</strong> refers to <em>Available</em>, the
          software provided by the Company.
        </li>
        <li>
          <strong>Company</strong> refers to Available, also called "We", "Us",
          or "Our".
        </li>
        <li>
          <strong>Cookies</strong> are small files placed on Your device
          containing details of browsing history.
        </li>
        <li>
          <strong>Country</strong> refers to: Rajasthan, India.
        </li>
        <li>
          <strong>Device</strong> means any device that can access the Service
          such as a computer or mobile phone.
        </li>
        <li>
          <strong>Personal Data</strong> is any information that relates to an
          identified or identifiable individual.
        </li>
        <li>
          <strong>Service</strong> refers to the Application, Website, or both.
        </li>
        <li>
          <strong>You</strong> means the individual accessing or using the
          Service.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Collecting and Using Your Personal Data
      </h2>

      <h3 className="text-xl font-semibold mb-2">Types of Data Collected</h3>
      <p className="mb-4 font-semibold">Personal Data</p>
      <p className="mb-6">
        While using Our Service, We may ask You to provide Us with certain
        personally identifiable information...
      </p>

      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>Email address</li>
        <li>First and last name</li>
        <li>Phone number</li>
        <li>Address, State, ZIP, City</li>
        <li>Usage Data</li>
      </ul>

      <p className="mb-4 font-semibold">Usage Data</p>
      <p className="mb-6">
        Usage Data is collected automatically when using the Service. It may
        include IP address, browser type, etc...
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Information Collected While Using the Application
      </h3>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>Location (with permission)</li>
        <li>Camera and photo library access</li>
      </ul>

      <p className="mb-6">
        This data may be uploaded or stored locally and is used to improve
        Service functionality.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Tracking Technologies and Cookies
      </h3>
      <p className="mb-6">
        We use Cookies and similar technologies for tracking, analytics, and
        user experience...
      </p>

      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>
          <strong>Necessary Cookies:</strong> Session cookies used for security
          and authentication.
        </li>
        <li>
          <strong>Acceptance Cookies:</strong> Persistent cookies for cookie
          policy acknowledgment.
        </li>
        <li>
          <strong>Functionality Cookies:</strong> Persistent cookies to remember
          preferences.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Use of Your Personal Data
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>To provide and maintain our Service</li>
        <li>To manage Your Account</li>
        <li>To perform a contract</li>
        <li>To contact You via email, SMS, push notifications</li>
        <li>To send You marketing offers (unless opted out)</li>
        <li>To manage requests and customer support</li>
        <li>For analytics, improvements, and business insights</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Sharing Your Personal Data</h3>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>With service providers</li>
        <li>During business transfers</li>
        <li>With affiliates and partners</li>
        <li>With other users (if shared publicly)</li>
        <li>With consent</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Retention and Deletion
      </h2>
      <p className="mb-6">
        We retain your data only as long as needed. You may request deletion of
        your data at any time, unless legally required to retain it.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Transfer and Security
      </h2>
      <p className="mb-6">
        Your data may be transferred across jurisdictions with appropriate
        safeguards in place. While we aim to protect your data, no method is
        100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Children’s Privacy</h2>
      <p className="mb-6">
        Our Service does not address anyone under the age of 13. We do not
        knowingly collect information from anyone under 13. If You are a parent
        or guardian and believe that Your child has provided Us with Personal
        Data, please contact Us.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, You can contact us
        at{" "}
        <a
          href="mailto:support@availablehour.com"
          className="text-blue-600 underline"
        >
          support@availablehour.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
