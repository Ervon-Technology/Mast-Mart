'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link'; // Import Link for navigation
import { gsap } from 'gsap';

export default function HowItWorks() {
  const circleRef = useRef(null);
  const imgRefs = useRef([]);
  const newContentRef = useRef(null);
  imgRefs.current = [];

  // Add images to the array of refs
  const addToRefs = (el) => {
    if (el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el);
    }
  };

  useEffect(() => {
    // GSAP animation for the center circle
    gsap.fromTo(
      circleRef.current,
      { scale: 0 },
      {
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.75)',
      }
    );

    // GSAP animation for the rectangular divs (spreading out from center)
    gsap.fromTo(
      imgRefs.current,
      { opacity: 0, scale: 0.5 }, // Start from the center with scale effect
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.2, // Stagger delay for smooth animation
      }
    );

    // GSAP animation for new content
    gsap.fromTo(
      newContentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5, // Starts after the image animation
      }
    );
  }, []);

  return (
    <main className="p-8 text-black overflow-hidden">
      {/* Introduction Section */}
      <section className="text-center my-16">
        <h1 className="text-4xl font-bold text-green-700">How Mast Mart Works</h1>
        <p className="text-lg mt-4">
          Our simple, effective process ensures fresh, quality products reach retailers from farmers quickly and affordably.
        </p>
      </section>

      {/* Central Process Section */}
      <section className="relative my-16 flex justify-center items-center h-[80vh]">
        {/* Circular Center */}
        <div
          ref={circleRef}
          className="absolute w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center text-black font-bold text-xl z-20"
        >
          Citly
        </div>

        {/* Top Left - Mill */}
        <Link href="/mills">
          <div
            ref={addToRefs}
            className="absolute top-0 left-20 w-96 h-60 bg-white shadow-lg flex items-center justify-center border z-10 cursor-pointer group"
            style={{ backgroundImage: 'url(/img/how-it-works/mill.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 ease-in-out flex items-center justify-center">
              <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mill</p>
            </div>
          </div>
        </Link>

        {/* Top Right - Farmer */}
        <Link href="/farmers">
          <div
            ref={addToRefs}
            className="absolute top-0 right-20 w-96 h-60 bg-white shadow-lg flex items-center justify-center border z-10 cursor-pointer group"
            style={{ backgroundImage: 'url(/img/how-it-works/farmer.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 ease-in-out flex items-center justify-center">
              <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Farmer</p>
            </div>
          </div>
        </Link>

        {/* Bottom Left - UDFC */}
        <Link href="/nbfc">
          <div
            ref={addToRefs}
            className="absolute bottom-0 left-20 w-96 h-60 bg-white shadow-lg flex items-center justify-center border z-10 cursor-pointer group"
            style={{ backgroundImage: 'url(/img/how-it-works/udfc.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 ease-in-out flex items-center justify-center">
              <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">NBFC</p>
            </div>
          </div>
        </Link>

        {/* Bottom Right - Retailer */}
        <Link href="/retailers">
          <div
            ref={addToRefs}
            className="absolute bottom-0 right-20 w-96 h-60 bg-white shadow-lg flex items-center justify-center border z-10 cursor-pointer group"
            style={{ backgroundImage: 'url(/img/how-it-works/retailer.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 ease-in-out flex items-center justify-center">
              <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Retailer</p>
            </div>
          </div>
        </Link>
      </section>

      {/* New Section: Citly Process & Benefits */}
      <section ref={newContentRef} className="my-16 text-left">
        <h2 className="text-3xl font-bold text-green-700 mb-8">The Citly Process & Benefits</h2>
        <p className="text-lg mb-4">
          Citly is bridging the gap between farmers and retailers by eliminating middlemen and streamlining the entire agricultural process.
          This innovative approach helps retailers get the freshest products at competitive prices while ensuring farmers receive fair
          compensation for their efforts.
        </p>
        <h3 className="text-2xl font-semibold text-green-600 mb-4">1. Direct Sourcing from Farmers</h3>
        <p className="text-lg mb-4">
          Citly has partnered with over 5000 farmers across India, encouraging them to use advanced farming techniques to produce the
          highest quality crops. This partnership ensures that millers and retailers receive top-quality raw materials at affordable rates.
        </p>

        <h3 className="text-2xl font-semibold text-green-600 mb-4">2. Elimination of Middlemen</h3>
        <p className="text-lg mb-4">
          By cutting out the middlemen, Citly ensures that both farmers and retailers benefit from increased profit margins. Farmers
          receive a better price for their produce, and retailers can sell products at competitive rates.
        </p>

        <h3 className="text-2xl font-semibold text-green-600 mb-4">3. Timely Delivery and Logistics</h3>
        <p className="text-lg mb-4">
          Citly takes full responsibility for logistics, ensuring that all deliveries from farms to mills and retailers are made on time. This
          reduces wastage and ensures product freshness, boosting profitability for retailers.
        </p>

        <h3 className="text-2xl font-semibold text-green-600 mb-4">4. Support for SMEs</h3>
        <p className="text-lg">
          Citly provides essential support to small and medium enterprises (SMEs) by offering financing options, logistical assistance,
          and brand promotion. SMEs can thrive without the burden of heavy upfront costs or dealing with complex supply chains.
        </p>
      </section>

      {/* Commitment Section */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Our Commitment to Retailers and Farmers</h2>
        <p className="text-lg">
          We strive to ensure that farmers receive fair prices and retailers get fresh products at competitive prices.
        </p>
      </section>
    </main>
  );
}
