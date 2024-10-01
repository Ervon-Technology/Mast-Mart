'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Retailers() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <main className="p-8 text-black overflow-hidden">
      <section ref={contentRef} className="text-center my-16">
        <h1 className="text-4xl font-bold text-green-700">Retailers & Citly</h1>
        <p className="text-lg mt-4">
          Citly connects retailers directly with farmers, eliminating the need for middlemen and ensuring better profits for both parties. 
          Citly provides high-quality agricultural products to retailers, allowing them to offer their customers the best prices.
        </p>
      </section>

      <section className="my-16 text-left">
        <h2 className="text-3xl font-bold text-green-700 mb-8">How Retailers Benefit</h2>
        <p className="text-lg">
          Retailers working with Citly enjoy fast, reliable product deliveries and access to fresh, high-quality agricultural goods sourced 
          directly from farmers. They also receive support with branding and marketing.
        </p>
      </section>
    </main>
  );
}
