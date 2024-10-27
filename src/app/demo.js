"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronDown, Leaf, Truck, CreditCard } from "lucide-react";

export default function Home() {
  const videoSectionRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effect for background images
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "50%"]);

  const handleGetStartedClick = () => {
    window.scrollTo({
      top: videoSectionRef.current.offsetTop + videoSectionRef.current.clientHeight,
      behavior: "smooth",
    });
  };

  // Fade-in animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col overflow-x-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Video */}
      <section
        ref={videoSectionRef}
        className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover scale-105"
          src="/video/background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />

        <motion.div
          className="relative z-10 flex flex-col items-center text-center text-white space-y-8 px-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Connecting Farmers and<br />
            <span className="text-green-400">Retailers</span> for a Better Future
          </h1>
          <p className="text-xl lg:text-2xl font-medium max-w-3xl leading-relaxed text-gray-200">
            Let's bring together India's farmers and retailers, providing high-quality produce,
            reliable logistics, and easy access to credit.
          </p>
          <motion.button
            onClick={handleGetStartedClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-green-600 text-white font-semibold text-xl rounded-full shadow-lg hover:bg-green-500 transition-all duration-300 flex items-center gap-2"
          >
            Get Started
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 lg:px-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800">
            Why Choose <span className="text-green-600">Citly</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-12 h-12 text-green-600" />,
                title: "Direct from Farmers",
                description: "Connect with over 5,000 farmers directly, ensuring fair prices and quality produce"
              },
              {
                icon: <Truck className="w-12 h-12 text-green-600" />,
                title: "Reliable Logistics",
                description: "Timely deliveries and efficient supply chain management across India"
              },
              {
                icon: <CreditCard className="w-12 h-12 text-green-600" />,
                title: "Easy Credit Access",
                description: "Flexible financial solutions to help your business grow"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-green-50 relative overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-10"
        >
          <img
            src="/img/pattern-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-4 lg:px-16"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                Making a Real <span className="text-green-600">Impact</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Citly connects over 5,000 farmers directly with millers and retailers,
                creating partnerships that enhance profits and ensure fair earnings.
                With expert guidance, flexible procurement, and nationwide access,
                Citly offers competitive prices and reliable, timely deliveries.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "5000+", label: "Farmers" },
                  { number: "₹10Cr+", label: "Daily Transactions" },
                  { number: "98%", label: "Delivery Success" },
                  { number: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <img
                src="/img/home/carousal-1.jpg"
                alt="Impact"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">100% Growth</p>
                <p className="text-sm opacity-80">Year over Year</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-4 lg:px-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800">
            What Our <span className="text-green-600">Partners</span> Say
          </h2>
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            interval={5000}
            className="max-w-4xl mx-auto"
          >
            {[
              {
                quote: "Citly has transformed how we source our produce. The quality and reliability are unmatched.",
                author: "Rajesh Kumar",
                role: "Retailer, Mumbai"
              },
              {
                quote: "Finally, a platform that understands farmers' needs. The support and fair prices have made a real difference.",
                author: "Amit Patel",
                role: "Farmer, Gujarat"
              },
              {
                quote: "The technology and credit solutions have helped us scale our business significantly.",
                author: "Priya Singh",
                role: "Store Owner, Delhi"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-12 rounded-2xl mx-4">
                <p className="text-2xl text-gray-600 italic mb-8">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-xl text-gray-800">{testimonial.author}</p>
                  <p className="text-green-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-green-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/img/pattern-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 max-w-7xl mx-auto px-4 lg:px-16 text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
            Join thousands of farmers and retailers already benefiting from Citly's innovative platform.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-green-600 font-semibold text-xl rounded-full shadow-lg hover:bg-green-50 transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}