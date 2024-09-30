'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const circleRef = useRef(null);
  const imgRefs = useRef([]);
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
        scrollTrigger: {
          trigger: circleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none', // Removed reverse action
        },
      }
    );

    // GSAP animation for the images
    imgRefs.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            toggleActions: 'play none none none', // Removed reverse action
          },
        }
      );
    });

    // No disappearing behavior on scroll out
  }, []);

  return (
    <main className="p-8 bg-black text-white overflow-hidden">
      {/* Introduction Section */}
      <section className="text-center my-16">
        <h1 className="text-4xl font-bold text-green-700">How Mast Mart Works</h1>
        <p className="text-lg mt-4">
          Our simple, effective process ensures fresh, quality products reach retailers from
          farmers quickly and affordably.
        </p>
      </section>

      {/* Central Process Section */}
      <section className="relative my-16 flex justify-center items-center h-screen">
        {/* Circular Center */}
        <div
          ref={circleRef}
          className="absolute w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center text-black font-bold text-xl z-10"
        >
          Citly
        </div>

        {/* Connective Lines (Using GSAP later) */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <svg className="absolute w-full h-full">
            <line
              x1="50%"
              y1="50%"
              x2="20%"
              y2="10%"
              stroke="gray"
              strokeWidth="2"
              className="origin-center"
            />
            <line
              x1="50%"
              y1="50%"
              x2="80%"
              y2="10%"
              stroke="gray"
              strokeWidth="2"
              className="origin-center"
            />
            <line
              x1="50%"
              y1="50%"
              x2="20%"
              y2="90%"
              stroke="gray"
              strokeWidth="2"
              className="origin-center"
            />
            <line
              x1="50%"
              y1="50%"
              x2="80%"
              y2="90%"
              stroke="gray"
              strokeWidth="2"
              className="origin-center"
            />
          </svg>
        </div>

        {/* Top Left - Mill */}
        <div
          ref={addToRefs}
          className="absolute top-10 left-10 w-60 h-40 bg-white shadow-lg flex items-center justify-center border z-20"
        >
          <p className="text-black font-semibold">Mill Image</p>
        </div>

        {/* Top Right - Farmer */}
        <div
          ref={addToRefs}
          className="absolute top-10 right-10 w-60 h-40 bg-white shadow-lg flex items-center justify-center border z-20"
        >
          <p className="text-black font-semibold">Farmer Image</p>
        </div>

        {/* Bottom Left - UDFC */}
        <div
          ref={addToRefs}
          className="absolute bottom-10 left-10 w-60 h-40 bg-white shadow-lg flex items-center justify-center border z-20"
        >
          <p className="text-black font-semibold">UDFC Image</p>
        </div>

        {/* Bottom Right - Retailer */}
        <div
          ref={addToRefs}
          className="absolute bottom-10 right-10 w-60 h-40 bg-white shadow-lg flex items-center justify-center border z-20"
        >
          <p className="text-black font-semibold">Retailer Image</p>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          Our Commitment to Retailers and Farmers
        </h2>
        <p className="text-lg">
          We strive to ensure that farmers receive fair prices and retailers get fresh products at
          competitive prices.
        </p>
      </section>
    </main>
  );
}
