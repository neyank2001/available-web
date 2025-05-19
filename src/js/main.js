// Initialize AOS animation library
document.addEventListener("DOMContentLoaded", function () {
  // Header scroll effect
  const header = document.querySelector(".header");
  const scrollThreshold = 50;

  function toggleHeaderClass() {
    if (window.scrollY > scrollThreshold) {
      header?.classList?.add("scrolled");
    } else {
      header?.classList?.remove("scrolled");
    }
  }

  // Call on load
  toggleHeaderClass();

  // Add scroll event listener
  window.addEventListener("scroll", toggleHeaderClass);

  // Mobile menu toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navLinks.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  }

  // Close mobile menu when clicking on a link
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (menuToggle.classList.contains("active")) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  });

  // Active navigation based on scroll position
  const sections = document.querySelectorAll("section[id]");

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav-links a[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".nav-links a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation);
});
