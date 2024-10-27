'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Package,
  Target,
  Briefcase,
  Search,
  Users,
  Truck,
  Leaf,
  Star,
  ArrowRight,
  Globe,
  Heart,
  Phone,
  ShieldCheck,
  HandshakeIcon,
  GlobeIcon,
  LightbulbIcon,
  ScaleIcon
} from 'lucide-react';
// Category data with example items for each category
const categories = {
  all: [
    { id: 1, title: 'Basmati Rice', description: 'Premium long-grain aromatic rice.', image: '/img/about/rice/basmati-rice.jpg' },
    { id: 2, title: 'Sona Masoori', description: 'Light and aromatic rice, ideal for everyday use.', image: '/img/about/rice/sona-masoori.jpg' },
    { id: 3, title: 'Brown Rice', description: 'Healthy, fiber-rich rice option.', image: '/img/about/rice/brown-rice.jpg' },
    { id: 4, title: 'Parboiled Rice', description: 'Pre-cooked rice that retains its nutrients.', image: '/img/about/rice/parboiled-rice.jpg' },
    { id: 5, title: 'Jasmine Rice', description: 'Fragrant and slightly sticky rice.', image: '/img/about/rice/jasmine-rice.jpg' },
    { id: 6, title: 'Wheat', description: 'Staple grain used to make flour.', image: '/img/cereals/wheat.jpg' },
    { id: 7, title: 'Barley', description: 'Rich in fiber, great for soups and stews.', image: '/img/cereals/barley.jpg' },
    { id: 8, title: 'Oats', description: 'Versatile grain, perfect for breakfast or baking.', image: '/img/cereals/oats.jpg' },
    { id: 9, title: 'Millet', description: 'Nutritious, gluten-free grain, ideal for porridges.', image: '/img/cereals/millet.jpg' },
    { id: 10, title: 'Quinoa', description: 'Protein-packed pseudo-cereal, great for salads.', image: '/img/cereals/quinoa.jpg' },
    { id: 11, title: 'Turmeric', description: 'Golden spice known for its anti-inflammatory properties.', image: '/img/spices/turmeric.jpg' },
    { id: 12, title: 'Cumin', description: 'Earthy spice used in curries and soups.', image: '/img/spices/cumin.jpg' },
    { id: 13, title: 'Coriander', description: 'Fresh and citrusy spice used in various cuisines.', image: '/img/spices/coriander.jpg' },
    { id: 14, title: 'Cardamom', description: 'Aromatic spice used in desserts and savory dishes.', image: '/img/spices/cardamom.jpg' },
    { id: 15, title: 'Chili Powder', description: 'Adds heat and flavor to dishes.', image: '/img/spices/chili-powder.jpg' },
    { id: 16, title: 'Red Lentils', description: 'Quick-cooking lentils, ideal for soups.', image: '/img/pulses/red-lentils.jpg' },
    { id: 17, title: 'Green Gram (Moong)', description: 'Nutritious pulse rich in protein.', image: '/img/pulses/moong.jpg' },
    { id: 18, title: 'Chickpeas', description: 'Versatile pulse, great for curries and hummus.', image: '/img/pulses/chickpeas.jpg' },
    { id: 19, title: 'Black Gram (Urad)', description: 'Key ingredient in dal and dosa batter.', image: '/img/pulses/urad.jpg' },
    { id: 20, title: 'Pigeon Peas (Toor Dal)', description: 'Popular in Indian dals and soups.', image: '/img/pulses/toor-dal.jpg' },
    { id: 21, title: 'Carrots', description: 'Rich in beta-carotene and ideal for salads and cooking.', image: '/img/vegetables/carrots.jpg' },
    { id: 22, title: 'Potatoes', description: 'Staple vegetable used in a variety of dishes.', image: '/img/vegetables/potatoes.jpg' },
    { id: 23, title: 'Tomatoes', description: 'Versatile vegetable used in sauces and salads.', image: '/img/vegetables/tomatoes.jpg' },
    { id: 24, title: 'Spinach', description: 'Leafy green rich in iron and antioxidants.', image: '/img/vegetables/spinach.jpg' },
    { id: 25, title: 'Bell Peppers', description: 'Crunchy and colorful, great for stir-fries and salads.', image: '/img/vegetables/bell-peppers.jpg' },
  ],
  rice: [
    { id: 1, title: 'Basmati Rice', description: 'Premium long-grain aromatic rice.', image: '/img/about/rice/basmati-rice.jpg' },
    { id: 2, title: 'Sona Masoori', description: 'Light and aromatic rice, ideal for everyday use.', image: '/img/about/rice/sona-masoori.jpg' },
    { id: 3, title: 'Brown Rice', description: 'Healthy, fiber-rich rice option.', image: '/img/about/rice/brown-rice.jpg' },
    { id: 4, title: 'Parboiled Rice', description: 'Pre-cooked rice that retains its nutrients.', image: '/img/about/rice/parboiled-rice.jpg' },
    { id: 5, title: 'Jasmine Rice', description: 'Fragrant and slightly sticky rice.', image: '/img/about/rice/jasmine-rice.jpg' },
  ],
  cereals: [
    { id: 6, title: 'Wheat', description: 'Staple grain used to make flour.', image: '/img/cereals/wheat.jpg' },
    { id: 7, title: 'Barley', description: 'Rich in fiber, great for soups and stews.', image: '/img/cereals/barley.jpg' },
    { id: 8, title: 'Oats', description: 'Versatile grain, perfect for breakfast or baking.', image: '/img/cereals/oats.jpg' },
    { id: 9, title: 'Millet', description: 'Nutritious, gluten-free grain, ideal for porridges.', image: '/img/cereals/millet.jpg' },
    { id: 10, title: 'Quinoa', description: 'Protein-packed pseudo-cereal, great for salads.', image: '/img/cereals/quinoa.jpg' },
  ],
  spices: [
    { id: 11, title: 'Turmeric', description: 'Golden spice known for its anti-inflammatory properties.', image: '/img/spices/turmeric.jpg' },
    { id: 12, title: 'Cumin', description: 'Earthy spice used in curries and soups.', image: '/img/spices/cumin.jpg' },
    { id: 13, title: 'Coriander', description: 'Fresh and citrusy spice used in various cuisines.', image: '/img/spices/coriander.jpg' },
    { id: 14, title: 'Cardamom', description: 'Aromatic spice used in desserts and savory dishes.', image: '/img/spices/cardamom.jpg' },
    { id: 15, title: 'Chili Powder', description: 'Adds heat and flavor to dishes.', image: '/img/spices/chili-powder.jpg' },
  ],
  pulses: [
    { id: 16, title: 'Red Lentils', description: 'Quick-cooking lentils, ideal for soups.', image: '/img/pulses/red-lentils.jpg' },
    { id: 17, title: 'Green Gram (Moong)', description: 'Nutritious pulse rich in protein.', image: '/img/pulses/moong.jpg' },
    { id: 18, title: 'Chickpeas', description: 'Versatile pulse, great for curries and hummus.', image: '/img/pulses/chickpeas.jpg' },
    { id: 19, title: 'Black Gram (Urad)', description: 'Key ingredient in dal and dosa batter.', image: '/img/pulses/urad.jpg' },
    { id: 20, title: 'Pigeon Peas (Toor Dal)', description: 'Popular in Indian dals and soups.', image: '/img/pulses/toor-dal.jpg' },
  ],
  vegetables: [
    { id: 21, title: 'Carrots', description: 'Rich in beta-carotene and ideal for salads and cooking.', image: '/img/vegetables/carrots.jpg' },
    { id: 22, title: 'Potatoes', description: 'Staple vegetable used in a variety of dishes.', image: '/img/vegetables/potatoes.jpg' },
    { id: 23, title: 'Tomatoes', description: 'Versatile vegetable used in sauces and salads.', image: '/img/vegetables/tomatoes.jpg' },
    { id: 24, title: 'Spinach', description: 'Leafy green rich in iron and antioxidants.', image: '/img/vegetables/spinach.jpg' },
    { id: 25, title: 'Bell Peppers', description: 'Crunchy and colorful, great for stir-fries and salads.', image: '/img/vegetables/bell-peppers.jpg' },
  ],
};

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Farmer Partner",
    content: "Working with Mast Mart has transformed my farming business. Their fair pricing and direct market access have improved my income significantly.",
    image: "/api/placeholder/50/50"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Regular Customer",
    content: "The quality of products from Mast Mart is consistently excellent. I appreciate knowing that my purchase supports local farmers.",
    image: "/api/placeholder/50/50"
  },
  {
    id: 3,
    name: "Mohammed Ali",
    role: "Retail Partner",
    content: "Their efficient supply chain and quality products have helped our store maintain happy customers and healthy profits.",
    image: "/api/placeholder/50/50"
  }
];

const companyValues = [
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "Transparency",
    description: "We maintain complete transparency in our operations, pricing, and supply chain, ensuring trust among all stakeholders."
  },
  {
    icon: <Leaf className="w-12 h-12" />,
    title: "Sustainability",
    description: "We promote sustainable farming practices and environmentally conscious operations throughout our supply chain."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Community First",
    description: "We prioritize the well-being of our farming communities and work towards their economic empowerment."
  },
  {
    icon: <Star className="w-12 h-12" />,
    title: "Quality Excellence",
    description: "We maintain rigorous quality standards across our product range, ensuring the best value for our customers."
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Innovation",
    description: "We continuously innovate our processes and technology to improve efficiency and create better outcomes."
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Fair Partnership",
    description: "We believe in equitable partnerships that benefit all stakeholders in our ecosystem."
  }
];

const impactMetrics = [
  { id: 1, metric: "10,000+", description: "Farmer Partners" },
  { id: 2, metric: "50,000+", description: "Happy Customers" },
  { id: 3, metric: "100+", description: "Cities Served" },
  { id: 4, metric: "95%", description: "Customer Satisfaction" }
];

const AboutPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredItems = categories[selectedCategory].filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-green-800 to-green-600">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-7xl font-bold mb-6">Mast Mart</h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto">
            A Citly subsidiary revolutionizing Indian agriculture through sustainable partnerships,
            transparent supply chains, and quality products direct from farmers to consumers.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all transform hover:scale-105">
              Explore Products
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-green-700 transition-all transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">About Mast Mart</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At Mast Mart, we're more than just a marketplace - we're a movement towards 
              sustainable agriculture and fair trade. As a proud subsidiary of Citly, we leverage 
              cutting-edge technology and deep market insights to create meaningful connections 
              between farmers and consumers, ensuring quality products at fair prices while 
              supporting agricultural communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section className="py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Our Purpose</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming Indian agriculture through innovation, partnership, and sustainable practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-green-600 mb-6">
                <Target className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower Indian farmers by creating direct market access and fair partnerships. 
                We work to eliminate inefficiencies in the agricultural supply chain, ensure fair 
                prices for farmers, and deliver quality products to consumers. Through technology 
                and innovation, we're building a more sustainable and profitable future for Indian agriculture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-green-600 mb-6">
                <Star className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To create a thriving agricultural ecosystem where farmers prosper, consumers receive 
                premium products at fair prices, and sustainable practices become the norm. We envision 
                a future where technology bridges gaps between rural producers and urban consumers, 
                creating value for all stakeholders in the agricultural supply chain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-green-600 mb-6">
                <Heart className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-gray-600">
                We take a holistic approach to agricultural commerce, focusing on three key areas: 
                farmer empowerment through fair partnerships and technical support, supply chain 
                optimization using technology and data analytics, and quality assurance through 
                rigorous standards and monitoring. This integrated approach ensures sustainable 
                growth for all stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our actions and decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-green-50 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="text-green-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
              >
                <h3 className="text-4xl font-bold text-green-600 mb-2">{metric.metric}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Our Products</h2>
            <p className="text-xl text-gray-600">Discover our range of premium agricultural products</p>
          </motion.div>

          {/* Search and Categories */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-green-600 font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">What People Say</h2>
            <p className="text-xl text-gray-600">Hear from our partners and customers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of our mission to transform Indian agriculture. Whether you're a farmer, retailer, or consumer, we'd love to partner with you.
            </p>
            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all transform hover:scale-105">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;