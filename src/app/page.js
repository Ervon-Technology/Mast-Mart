'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, PhoneCall, Mail, MapPin, BarChart2, Target, Users, Shield, TrendingUp, Download, Phone } from 'lucide-react';
import Image from 'next/image';
import CountUp from 'react-countup';

const RedesignedHomepage = () => {
  const handleGetStartedClick = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth',
    });
  };

  const statistics = [
    { number: '5000+', label: 'Farmers Connected' },
    { number: '₹50Cr+', label: 'Monthly GMV' },
    { number: '200+', label: 'Cities Covered' },
    { number: '98%', label: 'Customer Satisfaction' }
  ];

  const services = [
    {
      title: 'Market Intelligence',
      description: 'Real-time price updates and market trends to help you make informed decisions',
      icon: <BarChart2 className="w-12 h-12 text-[#045518]" />
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and standardization processes for all produce',
      icon: <Target className="w-12 h-12 text-[#045518]" />
    },
    {
      title: 'Community Support',
      description: 'Access to farming experts and community knowledge sharing',
      icon: <Users className="w-12 h-12 text-[#045518]" />
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-gray-100 font-inter">
      
      {/* Video Section */}
      <section className="relative h-screen bg-black">
        <video
          src="/video/background.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4">Welcome to Citly</h1>
          <p className="text-2xl mb-8">Connecting farmers and retailers with real-time insights</p>
          <button
            onClick={handleGetStartedClick}
            className="px-8 py-4 bg-[#045518] text-white font-semibold text-lg rounded-full hover:bg-green-700 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {statistics.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-lg shadow-lg">
                <h3 className="text-4xl font-bold text-[#045518] mb-2">{stat.number}</h3>
                <p className="text-xl text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-[#045518] text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#045518] mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-[#045518] text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-[#045518] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Register on Citly</h3>
              <p className="text-lg text-gray-600">Create your account and complete verification</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-24 h-24 bg-[#045518] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Browse & Order</h3>
              <p className="text-lg text-gray-600">Select from quality-verified produce</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-24 h-24 bg-[#045518] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Receive & Pay</h3>
              <p className="text-lg text-gray-600">Get doorstep delivery and flexible payment options</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Responsive flex layout */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Start off-screen
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
              transition={{ duration: 0.8 }} // Animation duration
              viewport={{ amount: 0.2 }} // Trigger animation when 20% of the component is visible
              className="order-2 md:order-1"
            >
              <img
                src="/img/home/farmers.jpg"
                alt="About"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Start off-screen from the left
              whileInView={{ opacity: 1, x: 0 }} // Fade in and move in from the left
              transition={{ duration: 0.8 }} // Animation duration
              viewport={{ amount: 0.2 }} // Trigger animation when 20% of the component is visible
              className="order-1 md:order-2 space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#045518]">
                Why Choose Citly
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                Citly connects over 5,000 farmers directly with millers and retailers, creating partnerships that enhance profits and ensure fair earnings. With expert guidance, flexible procurement, and nationwide access, Citly offers competitive prices and reliable, timely deliveries.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#045518] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Responsive grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#045518] text-center mb-12">
            Our Key Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Empowering Farmers",
                description: "Support Indian farmers by purchasing directly from them, ensuring fair earnings and reducing reliance on intermediaries.",
                image: "/img/home/feature-1.png"
              },
              {
                title: "Technology-Driven",
                description: "Citly's advanced technology streamlines the supply chain for quicker deliveries and enhanced quality control.",
                image: "/img/home/feature-2.png"
              },
              {
                title: "Cost Savings",
                description: "Reduce storage expenses and intermediary costs, allowing you to achieve better profit margins.",
                image: "/img/home/feature-3.png"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }} // Initial state: invisible and moved down
                whileInView={{ opacity: 1, y: 0 }} // Animation state: visible and in place
                transition={{ duration: 0.6, delay: index * 0.2 }} // Animate with delay based on index
                viewport={{ once: false }} // Animation triggers every time the element comes into view
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  width={96}
                  height={96}
                  className="mb-6"
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#045518] mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Responsive grid with better spacing */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#045518] text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Citly has been a game-changer for our business. The quality of produce and reliable logistics have significantly improved our bottom line.",
              name: "Raj Sharma",
              role: "Retail Store Owner",
              image: "/img/home/man.png"
            },
            {
              quote: "Citly has helped us connect with a wider customer base and expand our reach. The technology-driven platform is a game-changer.",
              name: "Neha Gupta",
              role: "Farmer",
              image: "/img/home/girl.png"
            },
            {
              quote: "Citly's credit solutions have been a game-changer for our small business. We've been able to grow and expand with their support.",
              name: "Amit Patel",
              role: "Retail Store Owner",
              image: "/img/home/boy.png"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }} // Start from invisible and moved down
              whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in place
              transition={{ duration: 0.6, delay: index * 0.2 }} // Delay based on index for staggered animation
              viewport={{ once: false }} // Animation triggers every time the element comes into view
            >
              <p className="text-lg sm:text-xl italic mb-6 text-gray-700">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </section>

      {/* Small Business Section - Responsive grid layout */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Start off-screen
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
              transition={{ duration: 0.8 }} // Animation duration
              viewport={{ amount: 0.2 }} // Trigger animation when 20% of the component is visible
              className="order-1 md:order-1 space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#045518]">
                Helping Small Businesses Thrive
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                With Citly’s technology, you can enhance your store’s reach, building 
                a local brand that resonates with customers. Our Citly Card makes it 
                simple to access credit, allowing you to reduce your capital needs and 
                grow at your pace.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#045518] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }} // Start off-screen
              whileInView={{ opacity: 1, x: 0 }} // Fade in and move in from the right
              transition={{ duration: 0.8 }} // Animation duration
              viewport={{ amount: 0.2 }} // Trigger animation when 20% of the component is visible
              className="order-2 md:order-2"
            >
              <img
                src="/img/home/pic-1.png" // Update with your image path
                alt="Small Businesses"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive padding and text sizing */}
      <section className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-16">
        <div className="absolute inset-0 bg-[url('/img/home/pic-2.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Direct Access to Quality Produce
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-regular mb-8">
            Discover the freshness of locally sourced produce delivered right to your door.
          </p>
          <motion.button
            onClick={handleGetStartedClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#045518] text-white font-semibold text-lg sm:text-xl rounded-full shadow-lg hover:bg-green-700 transition duration-300"
            aria-label="Get Started with Citly"
            tabIndex={0} // Ensures the button can be focused
          >
            Start Now
          </motion.button>
        </motion.div>
      </section>

      {/* Retailers Section - Responsive grid layout */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Start off-screen
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
              transition={{ duration: 0.8 }} // Animation duration
              viewport={{ amount: 0.2 }} // Trigger animation when 20% of the component is visible
              className="order-2 md:order-1"
            >
              <img
                src="/img/home/pic-3.png"
                alt="Retailers"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Start off-screen from the left
              whileInView={{ opacity: 1, x: 0 }} // Fade in and move in from the left
              transition={{ duration: 0.8 }} // Animation duration
              viewport={{ amount: 0.2 }} // Trigger animation when 20% of the component is visible
              className="order-1 md:order-2 space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#045518]">
                Citly for Retailers
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                Retailers benefit from Citly’s nationwide sourcing network, ensuring 
                a constant supply of high-quality goods at competitive prices. We handle 
                every step of the supply chain, from harvest to delivery, so you can focus 
                on your business with peace of mind.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#045518] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
     
      {/* App Download Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-800 to-emerald-600 overflow-hidden">
      {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -rotate-45 -left-1/4 -top-1/4 w-96 h-96 bg-white rounded-full" />
          <div className="absolute rotate-45 -right-1/4 -bottom-1/4 w-96 h-96 bg-white rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Content */}
            <div className="lg:w-1/2 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Download className="w-6 h-6" />
                <span className="text-emerald-200 uppercase tracking-wider text-sm font-semibold">
                  Mobile App
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Take Your Business <br />
                <span className="text-emerald-200">Anywhere</span> With Our App
              </h2>

              <p className="text-lg text-emerald-50/90 mb-8 max-w-xl">
                Stay connected to your business 24/7. Monitor operations, track performance, 
                and make decisions on the go with our powerful mobile application.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* App Store Button */}
                <button className="flex items-center gap-3 bg-black/20 hover:bg-black/30 transition px-6 py-3 rounded-xl">
                  <img
                    src="/api/placeholder/40/40"
                    alt="Apple logo"
                    className="w-10 h-10"
                  />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </button>

                {/* Play Store Button */}
                <button className="flex items-center gap-3 bg-black/20 hover:bg-black/30 transition px-6 py-3 rounded-xl">
                  <img
                    src="/api/placeholder/40/40"
                    alt="Google Play logo"
                    className="w-10 h-10"
                  />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src="/api/placeholder/40/40"
                      alt={`User ${i}`}
                      className="w-10 h-10 rounded-full border-2 border-emerald-700"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-semibold">50k+ Downloads</div>
                  <div className="text-sm text-emerald-200">Join our growing community</div>
                </div>
              </div>
            </div>

            {/* App Preview */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                {/* Main Phone */}
                <div className="relative z-20 mx-auto max-w-sm">
                  <Phone className="w-full h-auto text-white/10 absolute inset-0" />
                  <img
                    src="/api/placeholder/320/640"
                    alt="App interface preview"
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                </div>
                
                {/* Background Phones */}
                <div className="absolute -left-12 top-12 w-64 h-auto opacity-20 -rotate-12">
                  <Phone className="w-full h-auto text-white" />
                </div>
                <div className="absolute -right-12 bottom-12 w-64 h-auto opacity-20 rotate-12">
                  <Phone className="w-full h-auto text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-[#045518] text-center mb-16">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <PhoneCall className="w-12 h-12 text-[#045518] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Call Us</h3>
              <p className="text-lg text-gray-600">+91 1800-123-4567</p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Mail className="w-12 h-12 text-[#045518] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Email Us</h3>
              <p className="text-lg text-gray-600">support@citly.com</p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MapPin className="w-12 h-12 text-[#045518] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
              <p className="text-lg text-gray-600">123 Tech Park, Bangalore</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#045518] mb-8">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">Subscribe to our newsletter for the latest updates and market insights.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full text-lg border-2 border-gray-200 focus:border-[#045518] focus:outline-none"
              />
              <button className="px-8 py-4 bg-[#045518] text-white font-semibold text-lg rounded-full hover:bg-green-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="flex flex-col items-center space-y-4" // Change to flex-col and items-center
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Shield className="w-12 h-12 text-[#045518]" />
              <div className="text-center"> {/* Added text-center for center alignment */}
                <h3 className="text-xl font-bold">Secure Payments</h3>
                <p className="text-gray-600">100% secure payment processing</p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TrendingUp className="w-12 h-12 text-[#045518]" />
              <div className="text-center">
                <h3 className="text-xl font-bold">Quality Assured</h3>
                <p className="text-gray-600">Stringent quality control measures</p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Download className="w-12 h-12 text-[#045518]" />
              <div className="text-center">
                <h3 className="text-xl font-bold">Easy Returns</h3>
                <p className="text-gray-600">Hassle-free return policy</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default RedesignedHomepage;
