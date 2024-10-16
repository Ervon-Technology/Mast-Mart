"use client"; // Mark as client-side component

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiAlignRight } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image"; // Import Next.js Image component
import MastMartLogo from "../../../public/img/home/MastMart.png"; // Assuming logo is in the public folder

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Detect scroll direction to hide or show the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop and Larger Screens Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out font-gt ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-[#045518] hidden lg:flex h-20`}
      >
        <div className="container max-w-screen-xl mx-auto flex justify-between px-4">
          <div className="w-32 h-10">
            <Image
              src={MastMartLogo}
              alt="Mast Mart Logo"
              width={128}
              height={40}       
              priority={true}
            />
          </div>
          <ul className="flex space-x-6 text-lg items-center">
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
              <Link href="/for-farmers" className="text-white">
                For Farmers
              </Link>
              <span className="absolute left-0 bottom-[-2px] w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/for-retailers" className="text-white">
                For Retailers
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
        className={`lg:hidden fixed top-0 left-0 w-full flex justify-between items-center px-4 py-3 z-50 transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-[#045518]`}
      >
        <div className="w-24 h-8">
          <Image
            src={MastMartLogo}
            alt="Mast Mart Logo"
            width={96}
            height={32}
            priority={true}
          />
        </div>
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
            <div className="w-24 h-8">
              <Image
                src={MastMartLogo}
                alt="Mast Mart Logo"
                width={96}
                height={32}
              />
            </div>
            <button
              className="text-black text-3xl font-bold"
              onClick={toggleMenu}
            >
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
              <Link
                href="/for-farmers"
                className="text-black"
                onClick={closeMenu}
              >
                For Farmers
              </Link>
            </li>
            <li className="py-3 w-full text-center">
              <Link
                href="/for-retailers"
                className="text-black"
                onClick={closeMenu}
              >
                For Retailers
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
