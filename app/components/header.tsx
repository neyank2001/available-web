'use client'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [ "About", "User App", "Partner App", "Contact"];

  return (
    <header className="sticky top-0 z-20 bg-primary shadow-sm py-4 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-3xl font-extrabold">
          <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Available
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-bg hover:text-accent transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-2xl text-background"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-background to-accent shadow-lg py-4 px-6">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="block py-2 text-text hover:text-secondary transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
