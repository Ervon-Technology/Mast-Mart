"use client";
import { useRef } from "react";
import { motion } from "framer-motion"; // Framer Motion for animations
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const videoSectionRef = useRef(null);

  const handleGetStartedClick = () => {
    window.scrollTo({
      top: videoSectionRef.current.clientHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Video Section */}
      <section
        ref={videoSectionRef}
        className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video/background.mp4"
          autoPlay
          loop
          muted
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Overlay */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center text-white space-y-6 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-inter-bold leading-tight mb-4">
            Connecting Retailers <br /> <span className="text-green-700">Farmers</span> and for a Better Future
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl font-inter-regular max-w-3xl leading-relaxed mb-8">
            Let&apos;s bring together India&apos;s farmers and retailers,
            providing high-quality produce, reliable logistics, and easy access
            to credit.
          </p>
          <motion.button
            onClick={handleGetStartedClick}
            whileHover={{ scale: 1.1 }}
            className="px-8 py-3 bg-[#045518] text-white font-semibold text-lg sm:text-xl rounded-full shadow-lg hover:bg-green-700 transition duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* Two-column Section */}
      <section className="py-16 bg-gray-100 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10 px-4 lg:px-16">
        {/* Left side: Text content */}
        <motion.div
          className="lg:w-1/2 bg-white p-6 sm:p-10 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-inter-bold mb-6">Why Choose Us</h2>
          <p className="text-lg lg:text-xl font-inter-regular leading-relaxed mb-4">
            Citly connects over 5,000 farmers directly with millers and retailers, creating partnerships that enhance profits and ensure fair earnings. With expert guidance, flexible procurement, and nationwide access, Citly offers competitive prices and reliable, timely deliveries.
          </p>
          <p className="text-lg lg:text-xl font-inter-regular leading-relaxed">
            Join our growing network to make a difference in the agricultural landscape of India!
          </p>
        </motion.div>

        {/* Right side: Image and logo */}
        <motion.div
          className="lg:w-1/2 relative flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/img/home/farm-machinery.png"
            alt="Farm Machinery"
            className="w-full h-auto max-w-md shadow-lg"
          />
        </motion.div>
      </section>

      {/* Carousel Section */}
      <section className="py-10 px-4 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-8 lg:space-y-0 bg-white p-8 sm:p-10 rounded-lg shadow-xl"
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Column: Text */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-4xl font-inter-bold text-green-800 transition duration-300 hover:text-green-600">
            Empowering Farmers
          </h3>
          <p className="text-lg font-inter-regular leading-relaxed text-gray-700">
            Support Indian farmers by purchasing directly from them, ensuring fair earnings and reducing reliance on intermediaries.
          </p>

          <h3 className="text-4xl font-inter-bold text-green-800 transition duration-300 hover:text-green-600">
            Technology-Driven Solution
          </h3>
          <p className="text-lg font-inter-regular leading-relaxed text-gray-700">
            Citly’s advanced technology streamlines the supply chain for quicker deliveries and enhanced quality control.
          </p>

          <h3 className="text-4xl font-inter-bold text-green-800 transition duration-300 hover:text-green-600">
            Cost Savings
          </h3>
          <p className="text-lg font-inter-regular leading-relaxed text-gray-700">
            Reduce storage expenses and intermediary costs, allowing you to achieve better profit margins.
          </p>
        </div>

        {/* Right Column: Carousel */}
        <div className="lg:w-1/2 w-full overflow-hidden rounded-lg shadow-lg">
          <Carousel
            autoPlay
            infiniteLoop
            showIndicators={true}
            showThumbs={false}
            showStatus={false}
            className="transition-all duration-300"
            emulateTouch={true} // Enables touch for mobile
            swipeable={true} // Enables swipe gestures
          >
            <div className="h-[400px] md:h-[500px]">
              <img
                className="w-full h-full object-cover"
                src="/img/home/carousal-1.jpg"
                alt="Empowering Farmers"
              />
            </div>
            <div className="h-[400px] md:h-[500px]">
              <img
                className="w-full h-full object-cover"
                src="/img/home/carousal-2.jpg"
                alt="Technology-Driven Solution"
              />
            </div>
            <div className="h-[400px] md:h-[500px]">
              <img
                className="w-full h-full object-cover"
                src="/img/home/carousal-3.png"
                alt="Cost Savings"
              />
            </div>
          </Carousel>
        </div>
      </motion.div>
      </section>

      {/* New Section: Helping Small Businesses Thrive */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between py-16 px-4 lg:px-16 bg-white rounded-lg overflow-hidden">
      {/* Left Column: Image */}
      <motion.div
        className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:order-2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/img/home/pic-1.png"
          alt="Helping Small Businesses Thrive"
          className="w-full max-w-md h-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
        />
      </motion.div>

      {/* Right Column: Text */}
      <motion.div
        className="lg:w-1/2 bg-gradient-to-l from-[#045518] to-[#1b7a24] text-white p-8 sm:p-10 lg:p-12 rounded-lg shadow-lg flex flex-col justify-center space-y-6 lg:order-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-4xl font-inter-bold mb-2">
          Helping Small Businesses Thrive
        </h2>
        <p className="text-lg lg:text-xl font-inter-regular leading-relaxed">
          With Citly’s technology, you can enhance your store’s reach, building a local brand that resonates with customers. Our Citly Card makes it simple to access credit, allowing you to reduce your capital needs and grow at your own pace.
        </p>
        <p className="text-lg lg:text-xl font-inter-regular leading-relaxed">
          Our platform offers valuable insights and analytics to help you make informed decisions about your business strategy. This means more targeted marketing, better inventory management, and increased customer engagement.
        </p>

        {/* Call to Action Button */}
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-[#045518] font-semibold py-3 px-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </section>

      {/* New Section: Direct Access to Quality Produce */}
      <section className="relative flex items-center justify-center py-48 mx-4 lg:mx-16 bg-cover bg-center">
        {/* Background Image */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/img/home/pic-2.jpg"
          alt="Direct Access to Quality Produce"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Text Overlay */}
        <motion.div
          className="relative z-10 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter-bold mb-6">
            Direct Access to Quality Produce
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-inter-regular mb-8">
            Discover the freshness of locally sourced produce delivered right to your door.
          </p>
          <motion.button
            className="px-8 py-3 bg-[#045518] text-white font-semibold text-lg sm:text-xl rounded-full shadow-lg hover:bg-green-700 transition duration-300"
            onClick={handleGetStartedClick}
          >
            Start Now
          </motion.button>
        </motion.div>
      </section>

      {/* New Section: Citly for retailers */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between py-16 px-4 lg:px-16 bg-white rounded-lg  overflow-hidden">
      {/* Left Column: Image */}
      <motion.div
        className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/img/home/pic-3.png"
          alt="Helping Small Businesses Thrive"
          className="w-full max-w-md h-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
        />
      </motion.div>

      {/* Right Column: Text */}
      <motion.div
        className="lg:w-1/2 bg-gradient-to-r from-[#045518] to-[#1b7a24] text-white p-8 sm:p-10 lg:p-12 rounded-lg shadow-lg flex flex-col justify-center space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-4xl font-inter-bold mb-2">
          Helping Small Businesses Thrive
        </h2>
        <p className="text-lg lg:text-xl font-inter-regular leading-relaxed">
          With Citly’s technology, you can enhance your store’s reach, building a local brand that resonates with customers. Our Citly Card makes it simple to access credit, allowing you to reduce your capital needs and grow at your own pace.
        </p>
        <p className="text-lg lg:text-xl font-inter-regular leading-relaxed">
          Our platform offers valuable insights and analytics to help you make informed decisions about your business strategy. This means more targeted marketing, better inventory management, and increased customer engagement.
        </p>

        {/* Call to Action Button */}
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-[#045518] font-semibold py-3 px-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </section>
    </div>
  );
}