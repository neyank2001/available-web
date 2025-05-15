import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

// Fallbacks for icons to ensure SSR safety
const SafeFaFacebook = FaFacebook || (() => <span>Facebook</span>);
const SafeFaInstagram = FaInstagram || (() => <span>Instagram</span>);
const SafeFaTwitter = FaTwitter || (() => <span>Twitter</span>);
const SafeFaEnvelope = FaEnvelope || (() => <span>Email</span>);
const SafeFaPhone = FaPhone || (() => <span>Phone</span>);
const SafeFaGlobe = FaGlobe || (() => <span>Website</span>);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#352961] to-[#774181] text-white pt-12  border-t border-[#e6b2c6]/30 animate-fade-in">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Brand Section */}
        <div>
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white to-[#e6b2c6] bg-clip-text text-transparent mb-4 inline-block"
          >
            Available
          </Link>
          <p className="text-base sm:text-lg text-white/80 mb-6 max-w-xs">
            Book your salon experience with ease, for style that shines.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              aria-label="Visit our Facebook page"
              className="text-[#e6b2c6] hover:text-white hover:scale-105 transition-transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SafeFaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/availableapp/?hl=en"
              aria-label="Visit our Instagram page"
              className="text-[#e6b2c6] hover:text-white hover:scale-105 transition-transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SafeFaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.twitter.com/"
              aria-label="Visit our Facebook page"
              className="text-[#e6b2c6] hover:text-white hover:scale-105 transition-transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SafeFaTwitter className="text-2xl" />
            </a>
          </div>
        
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-base sm:text-lg">
            {[
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms-and-conditions", label: "Terms & Conditions" },
              { to: "/contact", label: "Contact Us" },
              { to: "/about", label: "About" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  href={link.to}
                  className="text-white/80 hover:text-[#e6b2c6] hover:underline transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-base sm:text-lg">
            <li className="flex items-center gap-2">
              <SafeFaEnvelope className="text-[#e6b2c6]" />
              <a
                href="mailto:contact@availablehour.com"
                className="text-white/80 hover:text-[#e6b2c6] hover:underline transition duration-200"
              >
                contact@availablehour.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <SafeFaPhone className="text-[#e6b2c6]" />
              <a
                href="tel:+918529128696"
                className="text-white/80 hover:text-[#e6b2c6] hover:underline transition duration-200"
              >
                +91-8529128696
              </a>
            </li>
            <li className="flex items-center gap-2">
              <SafeFaGlobe className="text-[#e6b2c6]" />
              <a
                href="http://availablehour.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#e6b2c6] hover:underline transition duration-200"
              >
                availablehour.com
              </a>
            </li>
          </ul>
        </div>
      </div>
<div className="bg-primary">
          <p className="text-white/80 text-sm mt-6 py-2 text-center">© 2025 Available. All rights reserved.</p>

</div>
    </footer>
  );
}