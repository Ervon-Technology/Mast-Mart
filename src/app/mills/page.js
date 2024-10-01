'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Mills() {
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
        <h1 className="text-4xl font-bold text-green-700">Mills & Citly Partnership</h1>
        <p className="text-lg mt-4">
          Citly supports millers by procuring the best-quality crops from its vast network of farmers. This ensures that 
          millers get access to superior raw materials and can produce top-tier products.
        </p>
        <p className="text-lg mt-4">
          Our team assists millers by providing timely delivery and logistics support, ensuring that their production is 
          uninterrupted and that they receive the exact amount of raw materials needed for each batch.
        </p>
      </section>
    </main>
  );
}
