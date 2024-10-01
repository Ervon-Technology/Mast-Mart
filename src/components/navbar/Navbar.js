"use client"; // Mark as client-side component

import { useState, useEffect } from "react";
import Link from "next/link"; // Import Next.js Link component
import { FiAlignRight } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll and set navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop and Larger Screens Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out font-gt ${
          scrolled
            ? "bg-green-600/70 backdrop-blur-md border-b border-gray-400"
            : "bg-green-700 border-b border-gray-400"
        } hidden lg:flex h-20`}
      >
        <div className="container max-w-screen-xl mx-auto flex justify-between items-center px-8">
          <div className="text-lg font-bold text-white">Mast Mart</div>
          <ul className="flex space-x-8 text-lg items-center">
            <li className="relative group">
              <Link href="/" className="text-white">
                Home
              </Link>
              <span className="absolute left-0 bottom-[-2px] w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/about" className="text-white">
                About Us
              </Link>
              <span className="absolute left-0 bottom-[-2px] w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/how-it-works" className="text-white">
                How It Works
              </Link>
              <span className="absolute left-0 bottom-[-2px] w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/contact" className="text-white">
                Contact Us
              </Link>
              <span className="absolute left-0 bottom-[-2px] w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile and Tablet Navbar */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-green-600/70 backdrop-blur-md border-b border-gray-400"
            : "bg-green-600 border-b border-gray-400"
        }`}
      >
        <div className="text-lg font-bold text-white">Mast Mart</div>
        {!menuOpen && (
          <button onClick={toggleMenu}>
            <FiAlignRight className="w-8 h-8 text-white" />
          </button>
        )}
      </div>

      {/* Offcanvas Navbar for Mobile */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out lg:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white h-full shadow-lg transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
            <div className="text-lg font-bold text-green-600">Mast Mart</div>
            <button className="text-black text-3xl font-bold" onClick={toggleMenu}>
              &#10005; {/* Close button */}
            </button>
          </div>

          <ul className="flex flex-col justify-center items-center space-y-8 mt-24 font-bold">
            <li className="py-3 w-full text-center">
              <Link href="/" className="text-black" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="py-3 w-full text-center">
              <Link href="/about" className="text-black" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="py-3 w-full text-center">
              <Link href="/how-it-works" className="text-black" onClick={closeMenu}>
                How It Works
              </Link>
            </li>
            <li className="py-3 w-full text-center">
              <Link href="/contact" className="text-black" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="flex justify-center space-x-4 py-12 mt-auto">
            <a href="#" className="text-black">
              <AiOutlineLinkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-black">
              <AiOutlineInstagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
