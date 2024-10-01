'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function NBFC() {
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
        <h1 className="text-4xl font-bold text-green-700">NBFCs & Citly</h1>
        <p className="text-lg mt-4">
          Citly partners with NBFCs to provide financial support to farmers and millers. By offering easy credit access, we reduce the need 
          for large working capital investments and support businesses to thrive.
        </p>
      </section>
    </main>
  );
}
