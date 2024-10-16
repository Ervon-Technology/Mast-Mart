"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Contact() {
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);

  // GSAP animation on page load
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    )
    .fromTo(
      infoRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
      "-=1"
    )
    .fromTo(
      mapRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
      "-=1"
    );
  }, []);

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      {/* Contact Introduction */}
      <section className="text-center my-16">
        <h1 className="text-5xl font-bold text-green-700">Contact Mast Mart</h1>
        <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-600">
          Whether you&apos;re a retailer, farmer, or interested in partnering with us, we are always here to assist.
        </p>
      </section>

      {/* Contact Information and Form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start max-w-screen-xl mx-auto">
        {/* Contact Information */}
        <div
          ref={infoRef}
          className="bg-white p-8 shadow-xl rounded-lg space-y-6"
        >
          <h2 className="text-3xl font-bold text-green-700">Our Contact Details</h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="text-xl font-bold">Mysuru</h3>
              <p>hr@citly.in</p>
              <p>+91-9652737394</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Address</h3>
              <p>Shop No:- 213, 6th Cross APMC Yard Bandaypalya, Mysuru - 570 025</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          ref={formRef}
          className="bg-white p-8 shadow-xl rounded-lg"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition"
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition"
                type="email"
                id="email"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition"
                id="message"
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>
            <button
              className="bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition-all w-full"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="my-16" ref={mapRef}>
        <section className="my-16" ref={mapRef}>
          <iframe
            width="100%"
            height="500"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            className="border-2 shadow-lg rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.4603223221196!2d72.827660!3d19.136326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c4abfef9f9%3A0x4b4547d40eb0b0cf!2sStyroplast%20Trading%20Pvt%20Ltd%2C%20Remi%20Commercio%2C%20Office%20no%2C%20907%2C%20Off%20Link%20Rd%2C%20next%20to%20Yash%20Raj%20Studios%2C%20Andheri%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1666682828623!5m2!1sen!2sin&markers=color:red%7C19.136326,72.827660"
          ></iframe>
        </section>
      </section>
    </main>
  );
}
