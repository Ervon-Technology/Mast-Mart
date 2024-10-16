"use client";
import { useRef } from "react";
import { motion } from "framer-motion"; // Framer Motion for animations
import { Carousel } from "react-responsive-carousel";
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
          <h1 className="text-5xl lg:text-7xl font-martel-bold leading-tight mb-4">
            Connecting Farmers and <br /> Retailers for a Better Future
          </h1>
          <p className="text-lg lg:text-2xl font-martel-demibold max-w-3xl leading-relaxed mb-8">
            Let&apos;s bring together India&apos;s farmers and retailers,
            providing high-quality produce, reliable logistics, and easy access
            to credit.
          </p>
          <motion.button
            onClick={handleGetStartedClick}
            whileHover={{ scale: 1.1 }}
            className="px-8 py-3 bg-[#045518] text-white font-semibold text-xl rounded-full shadow-lg hover:bg-green-700 transition duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* Two-column Section */}
      <section className="py-16 bg-gray-100 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10 px-4 lg:px-16">
        {/* Left side: Text content */}
        <motion.div
          className="lg:w-1/2 bg-white p-10  shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-martel-bold mb-6">Why Choose Us</h2>
          <p className="text-lg lg:text-xl font-martel-demibold leading-relaxed">
            Citly connects over 5,000 farmers directly with millers and
            retailers, creating partnerships that enhance profits and ensure
            fair earnings. With expert guidance, flexible procurement, and
            nationwide access, Citly offers competitive prices and reliable,
            timely deliveries.
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
            src="/path-to-your-image/tractor-image.jpg"
            alt="Farm Machinery"
            className="w-full h-auto max-w-md  shadow-lg"
          />
        </motion.div>
      </section>

      {/* Carousel Section */}
      <section className="py-10 px-8 lg:px-16 bg-white">
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-8 lg:space-y-0 bg-gray-200 p-10  shadow-lg w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column: Text */}
          <div className="lg:w-1/2 space-y-8">
            <h3 className="text-3xl lg:text-4xl font-martel-bold">Empowering Farmers</h3>
            <p className="text-lg lg:text-xl font-martel-demibold leading-relaxed">
              Support Indian farmers by purchasing directly from them, ensuring
              fair earnings and reducing reliance on intermediaries.
            </p>
            <h3 className="text-3xl lg:text-4xl font-martel-bold">
              Technology-Driven Solution
            </h3>
            <p className="text-lg lg:text-xl font-martel-demibold leading-relaxed">
              Citly’s advanced technology streamlines the supply chain for
              quicker deliveries and enhanced quality control.
            </p>
            <h3 className="text-3xl lg:text-4xl font-martel-bold">Cost Savings</h3>
            <p className="text-lg lg:text-xl font-martel-demibold leading-relaxed">
              Reduce storage expenses and intermediary costs, allowing you to
              achieve better profit margins.
            </p>
          </div>

          {/* Right Column: Carousel */}
          <div className="lg:w-1/2 w-full overflow-hidden">
            <Carousel
              autoPlay
              infiniteLoop
              showIndicators={true}
              showThumbs={false}
              showStatus={false}
              className="w-full h-[400px] transition-all duration-300"
            >
              <div className="h-full">
                <img
                  className="w-full h-[400px] object-cover"
                  src="/img/home/carousal-1.jpg"
                  alt="Empowering Farmers"
                />
              </div>
              <div className="h-full">
                <img
                  className="w-full h-[400px] object-cover"
                  src="/img/home/carousal-2.jpg"
                  alt="Technology-Driven Solution"
                />
              </div>
              <div className="h-full">
                <img
                  className="w-full h-[400px] object-cover"
                  src="/img/home/carousal-3.png"
                  alt="Cost Savings"
                />
              </div>
            </Carousel>
          </div>
        </motion.div>
      </section>

      {/* New Section: Helping Small Businesses Thrive */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-16 bg-white overflow-hidden">
        {/* Left Column: Text */}
        <motion.div
          className="lg:w-4/6 bg-[#045518] text-white p-10  shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-martel-bold mb-6">
            Helping Small Businesses Thrive
          </h2>
          <p className="text-lg lg:text-xl font-martel-demibold leading-relaxed">
            With Citly’s technology, you can enhance your store’s reach, building
            a local brand that resonates with customers. Our Citly Card makes it
            simple to access credit, allowing you to reduce your capital needs
            and grow at your pace.
          </p>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="lg:w-2/6 mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/img/home/pic-1.png"
            alt="Helping Small Businesses Thrive"
            className="w-full h-auto  shadow-lg"
          />
        </motion.div>
      </section>
      {/* New Section: Direct Access to Quality Produce */}
      <section className="relative flex items-center justify-center  py-48 mx-16  bg-cover bg-center">
  {/* Background Image */}
  <img
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/img/home/pic-2.jpg"
    alt="Quality Produce Background"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Text Content */}
  <motion.div
    className="relative z-10 text-center text-white max-w-4xl px-6 lg:px-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl lg:text-6xl font-martel-bold">
      Direct Access to Quality Produce
    </h2>
    <p className="text-lg lg:text-2xl font-martel-demibold mt-4">
      Citly brings you closer to the source by connecting with farmers across India. Receive the best quality crops directly at your store.
    </p>
  </motion.div>
</section>

<section className="relative flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-16 bg-white overflow-hidden">
        {/* Left Column: Text */}
        <motion.div
          className="lg:w-4/6 bg-[#045518] text-white p-10  shadow-lg order-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-martel-bold mb-6">
            Helping Small Businesses Thrive
          </h2>
          <p className="text-lg lg:text-xl font-martel-demibold leading-relaxed order-2">
            With Citly’s technology, you can enhance your store’s reach, building
            a local brand that resonates with customers. Our Citly Card makes it
            simple to access credit, allowing you to reduce your capital needs
            and grow at your pace.
          </p>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="lg:w-2/6 mt-10 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/img/home/pic-3.png"
            alt="Helping Small Businesses Thrive"
            className="w-full h-auto  shadow-lg"
          />
        </motion.div>
      </section>

    </div>
  );
}
