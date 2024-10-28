'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  Sun, 
  Cloud, 
  Shield, 
  Leaf, 
  Scale, 
  TrendingUp, 
  Users, 
  Calendar,
  Truck,
  Warehouse,
  BarChart4,
  Clock,
  CreditCard,
  HeartHandshake,
  Smartphone,
  Heart
} from 'lucide-react';

// Counter Component (same as before)
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

export default function Farmers() {
  const seasonalTips = [
    {
      icon: <Sun className="w-6 h-6 text-amber-500" />,
      title: "Spring Planning",
      description: "Optimal planting schedules and soil preparation guides."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "Weather Insights",
      description: "Real-time weather forecasts and irrigation planning."
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: "Crop Management",
      description: "Best practices for crop rotation and maintenance."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Sustainable Farming",
      description: "Eco-friendly farming techniques and certifications."
    }
  ];

  const marketFeatures = [
    {
      icon: <Scale className="w-8 h-8 text-green-600" />,
      title: "Fair Pricing",
      description: "Get the best market rates for your produce with our transparent pricing system."
    },
    {
      icon: <Warehouse className="w-8 h-8 text-green-600" />,
      title: "Storage Solutions",
      description: "Access to modern storage facilities to maintain produce freshness."
    },
    {
      icon: <BarChart4 className="w-8 h-8 text-green-600" />,
      title: "Market Analysis",
      description: "Expert guidance on market demand and pricing trends."
    }
  ];

  const citlyBenefits = [
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Time Is Money",
      description: "Get the best quality products at the right time through our cutting-edge technology and perfect distribution network."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Easy Credit Facilities",
      description: "Access Citly Card for easy credit and reduced working capital needs."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-green-600" />,
      title: "Direct Connection",
      description: "No middlemen involved - connect directly with retailers for better profits."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      title: "Advanced Technology",
      description: "Access to state-of-the-art technology for better farming and market access."
    }
  ];

  const socialImpact = [
    {
      icon: <Heart className="w-6 h-6 text-green-600" />,
      title: "Supporting Farmers",
      description: "Help thousands of farmers by eliminating middlemen and ensuring fair prices."
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: "Reducing Food Waste",
      description: "Better storage and distribution systems help minimize food wastage."
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Community Growth",
      description: "Creating a sustainable ecosystem that benefits both farmers and retailers."
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
      <section className="relative h-[80vh] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/for-farmers/background.jpg')" }}>
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
        Connect Directly with Retailers
      </h1>
      <p className="text-xl mb-8 text-gray-100">
        Join Citly&apos;s network of 5000+ farmers and access modern farming tools, expert guidance, and direct market connections.
      </p>
      <div className="flex gap-4">
        <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2">
          Join Network
          <Leaf className="w-5 h-5" />
        </button>
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium">
          Learn More
        </button>
      </div>
    </motion.div>
  </div>
</section>


      {/* Impact Stats */}
      <motion.section 
        className="py-16 bg-green-50"
        {...fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-800"><CountUp end={5000} />+</h3>
              <p className="text-gray-600">Partner Farmers</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-800"><CountUp end={80} />km</h3>
              <p className="text-gray-600">Warehouse Coverage</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-800"><CountUp end={40} />%</h3>
              <p className="text-gray-600">Higher Profits</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-800"><CountUp end={24} />hr</h3>
              <p className="text-gray-600">Support Response</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Citly Benefits */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          {...fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Citly Advantage</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the benefits of joining India&apos;s most innovative agricultural network.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {citlyBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Comparison */}
      <section className="py-20 bg-green-50">
        <motion.div 
          className="container mx-auto px-4"
          {...fadeIn}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simplified Supply Chain</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the efficiency of our streamlined process compared to traditional methods.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-sm md:w-1/2">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Traditional Process</h3>
              <div className="flex flex-col gap-2">
                <div className="bg-red-50 p-3 rounded">Farmer</div>
                <div className="text-center">↓</div>
                <div className="bg-red-50 p-3 rounded">Multiple Middlemen</div>
                <div className="text-center">↓</div>
                <div className="bg-red-50 p-3 rounded">Multiple Mandis</div>
                <div className="text-center">↓</div>
                <div className="bg-red-50 p-3 rounded">Retailer</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm md:w-1/2">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Citly Process</h3>
              <div className="flex flex-col gap-2">
                <div className="bg-green-50 p-3 rounded">Farmer</div>
                <div className="text-center">↓</div>
                <div className="bg-green-50 p-3 rounded">Citly</div>
                <div className="text-center">↓</div>
                <div className="bg-green-50 p-3 rounded">Retailer</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Social Impact */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          {...fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Creating Positive Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us in building a better future for Indian agriculture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {socialImpact.map((impact, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {impact.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
              <p className="text-gray-600">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-900 text-white py-20">
        <motion.div 
          className="container mx-auto px-4 text-center"
          {...fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Farming Business?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of successful farmers who are growing their future with Citly.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-green-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 flex items-center gap-2">
              Join Now
              <Leaf className="w-5 h-5" />
            </button>
            <button className="border border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-900">
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>


      {/* Trust Section */}
      <section className="py-24 container mx-auto px-4">
        <motion.div className="bg-green-50 p-8 md:p-12 rounded-2xl" {...fadeIn}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="/img/for-farmers/farmer.jpg"
                alt="Trusted by farmers"
                className="rounded-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-inter-bold">Trusted by Farmers Nationwide</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold font-inter-bold">Quality Assurance</h3>
                    <p className="text-gray-600 font-inter-regular">We uphold rigorous quality standards throughout the supply chain.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold font-inter-bold">Expert Guidance</h3>
                    <p className="text-gray-600 font-inter-regular">Access to agricultural experts for ongoing support and advice.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold font-inter-bold">Reliable Logistics</h3>
                    <p className="text-gray-600 font-inter-regular">Efficient logistics solutions to ensure timely deliveries.</p>
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
