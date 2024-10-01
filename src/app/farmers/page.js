'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Farmers() {
  const contentRef = useRef(null);

  useEffect(() => {
    // GSAP animation for content
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
        <h1 className="text-4xl font-bold text-green-700">Farmers & Citly Collaboration</h1>
        <p className="text-lg mt-4">
          Citly has partnered with over 5000 farmers across India, helping them adopt modern agricultural practices
          and grow the highest quality crops despite natural challenges.
        </p>
        <p className="text-lg mt-4">
          Through constant supervision, Citly experts guide farmers on effective agricultural techniques and support 
          them to grow healthy crops while mitigating weather fluctuations. This guarantees the best products for millers.
        </p>
      </section>

      {/* Additional Information */}
      <section className="my-16 text-left">
        <h2 className="text-3xl font-bold text-green-700 mb-8">How Citly Helps Farmers</h2>
        <p className="text-lg">
          Citly educates farmers about pest control, soil management, and advanced agricultural technology. We ensure 
          that the quality of crops is maintained by providing direct supervision and support.
        </p>
        <p className="text-lg mt-4">
          Citly also removes the middlemen in the procurement process, ensuring that farmers receive better profits 
          by connecting them directly to retailers and millers. This increases transparency and reduces wastage.
        </p>
      </section>
    </main>
  );
}
