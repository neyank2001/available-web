import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>
              Avail<span>able</span>
            </h3>
            <p>Connecting beauty professionals with their ideal clients.</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <figure className="flex flex-col items-center">
                <img className="w-6 h-6" src="/playstore.svg" alt="" />
                <figcaption className="text-xs">Playstore</figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img className="w-6 h-6" src="/appstore.svg" alt="" />
                <figcaption className="text-xs">Appstore</figcaption>
              </figure>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="/partner-with-us">Partner with us</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-condition">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/cancellation-refund">
                    Cancellation And Refunds
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:support@availablehour.com">
                    support@availablehour.com
                  </a>
                </li>
                <li>Jaipur, Rajasthan, India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Available. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
