'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  TrendingUp, 
  Truck, 
  ShieldCheck, 
  BarChart4, 
  Clock, 
  Users,
  Building2,
  Boxes,
  HandshakeIcon,
  HeartHandshake,
  Clock4,
  BarChart2,
  ShoppingBag,
  Percent
} from 'lucide-react';

const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);
  const duration = 2;

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}</span>;
};

export default function Retailers() {
  const benefits = [
    {
      icon: <Store className="w-6 h-6 text-yellow-600" />,
      title: "Premium Products",
      description: "Access to exclusive, high-quality fresh produce from our network of verified farmers"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-600" />,
      title: "Cost Efficiency",
      description: "Save up to 30% on procurement costs through our direct sourcing model"
    },
    {
      icon: <Truck className="w-6 h-6 text-yellow-600" />,
      title: "Smart Logistics",
      description: "Advanced route optimization and temperature-controlled delivery fleet"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-yellow-600" />,
      title: "Quality Assured",
      description: "Multi-point quality checks and blockchain-based traceability"
    }
  ];

  const testimonials = [
    {
      name: "Radhika Iyer",
      role: "Owner, Urban Bazar",
      content: "The analytics dashboard has been a game-changer for our inventory management. We've reduced waste by 40%.",
      image: "/img/for-retailers/girl.png"
    },
    {
      name: "Amit Sharma",
      role: "Store Manager, Fresh Mart",
      content: "Partnering with Citly has transformed our produce section. Our customers love the quality, and our margins have improved significantly.",
      image: "/img/for-retailers/boy.png"
    },
    {
      name: "Rajesh Kumar",
      role: "Procurement Head, Mega Mart",
      content: "The dedicated support team and efficient delivery system have made our operations seamless.",
      image: "/img/for-retailers/boy.png"
    }
  ];
  

  const features = [
    {
      icon: <Building2 className="w-8 h-8 text-yellow-600" />,
      title: "Store Management",
      description: "Comprehensive tools for inventory, staff, and operations management"
    },
    {
      icon: <Boxes className="w-8 h-8 text-yellow-600" />,
      title: "Inventory Control",
      description: "Real-time tracking and automated reordering system"
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-yellow-600" />,
      title: "Loyalty Programs",
      description: "Built-in customer retention tools and analytics"
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
  className="relative h-[80vh] flex items-center bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/img/for-retailers/background.jpg')" }}
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Content */}
  <div className="relative container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl text-white"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Elevate Your Retail Business
      </h1>
      <p className="text-xl mb-8 text-gray-100">
        Join our network of 1000+ successful retailers. Get access to premium
        products, smart logistics, and cutting-edge retail management tools.
      </p>
      <div className="flex gap-4">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2">
          Partner With Us
          <Store className="w-5 h-5" />
        </button>
        <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium">
          Watch Demo
        </button>
      </div>
    </motion.div>
  </div>
</section>


      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-yellow-50"
        {...fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-yellow-800"><CountUp end={30} />%</h3>
              <p className="text-gray-600">Average Cost Reduction</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-yellow-800"><CountUp end={1000} />+</h3>
              <p className="text-gray-600">Retail Partners</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-yellow-800"><CountUp end={24} />hr</h3>
              <p className="text-gray-600">Delivery Time</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-yellow-800"><CountUp end={99} />%</h3>
              <p className="text-gray-600">Partner Satisfaction</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Grid */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          {...fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Leading Retailers Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our network of successful retailers and transform your business with our 
            comprehensive solutions designed specifically for modern retail operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-yellow-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container mx-auto px-4"
          {...fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Powerful Tools for Modern Retailers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Partners Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from retailers who have transformed their businesses with our solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl mb-8 text-yellow-100">
              Join our network of successful retailers and get access to premium products, 
              smart logistics, and cutting-edge retail management tools.
            </p>
            <button className="bg-white text-yellow-900 px-8 py-3 rounded-lg font-medium hover:bg-yellow-100 transition-colors">
              Schedule a Demo
            </button>
          </motion.div>
        </div>
      </section>


      {/* Trust Indicators */}
<section className="py-24 container mx-auto px-4">
  <motion.div 
    className="bg-yellow-50 p-8 md:p-12 rounded-2xl"
    {...fadeIn}
  >
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <img
          src="/img/for-retailers/retailer.jpg"
          alt="Retail partner success"
          className="rounded-xl w-full"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6">Our Commitment to Your Success</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h3 className="font-semibold">Quality Guarantee</h3>
              <p className="text-gray-600">Every product meets our strict quality standards</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Truck className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h3 className="font-semibold">Reliable Delivery</h3>
              <p className="text-gray-600">On-time delivery with real-time tracking</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h3 className="font-semibold">Growth Support</h3>
              <p className="text-gray-600">Dedicated team to help scale your business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</section>

    </div>
  );
}
