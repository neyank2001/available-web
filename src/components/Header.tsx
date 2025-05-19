import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  useEffect(() => {
    const header = document.querySelector(".header") as HTMLElement;
    const menuToggle = document.querySelector(
      ".mobile-menu-toggle"
    ) as HTMLElement;
    const navLinks = document.querySelector(".nav-links") as HTMLElement;
    const navItems = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section[id]");

    const scrollThreshold = 50;

    const toggleHeaderClass = () => {
      if (window.scrollY > scrollThreshold) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };

    const handleMenuToggle = () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    };

    const closeMenu = () => {
      if (menuToggle.classList.contains("active")) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    };

    const highlightNavigation = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section?.clientHeight;
        const sectionTop = section?.clientHeight - 100;
        const sectionId = section.getAttribute("id");
        const link = document.querySelector(
          `.nav-links a[href*="${sectionId}"]`
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link?.classList.add("active");
        } else {
          link?.classList.remove("active");
        }
      });
    };

    // Init on load
    toggleHeaderClass();
    highlightNavigation();

    // Add listeners
    window.addEventListener("scroll", toggleHeaderClass);
    window.addEventListener("scroll", highlightNavigation);
    menuToggle?.addEventListener("click", handleMenuToggle);
    navItems.forEach((item) => item.addEventListener("click", closeMenu));

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", toggleHeaderClass);
      window.removeEventListener("scroll", highlightNavigation);
      menuToggle?.removeEventListener("click", handleMenuToggle);
      navItems.forEach((item) => item.removeEventListener("click", closeMenu));
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo">
            <h1>
              Avail<span>able</span>
            </h1>
          </div>
          <nav className="main-nav">
            <button className="mobile-menu-toggle" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className="nav-links">
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/partner-with-us">
                  Partner with us
                </Link>
              </li>
              <li>
                <Link className="link" to="/about-us">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
