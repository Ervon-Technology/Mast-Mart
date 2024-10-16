'use client';

import React, { useState } from 'react';

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

const AboutPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    return (
        <div className="bg-white py-10 px-4 mt-20">
          <div className="text-center mb-10">
            <h2 className="text-6xl font-bold mb-4 font-martel-bold">Our Products</h2>
            <p className="text-2xl font-martel-demibold">Explore a variety of high-quality agricultural products.</p>
          </div>
    
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-lg text-white ${selectedCategory === 'all' ? 'bg-green-700' : 'bg-gray-500'}`}
            >
              All
            </button>
            <button
              onClick={() => handleCategoryChange('rice')}
              className={`px-4 py-2 rounded-lg text-white ${selectedCategory === 'rice' ? 'bg-green-700' : 'bg-gray-500'}`}
            >
              Rice
            </button>
            <button
              onClick={() => handleCategoryChange('cereals')}
              className={`px-4 py-2 rounded-lg text-white ${selectedCategory === 'cereals' ? 'bg-green-700' : 'bg-gray-500'}`}
            >
              Cereals
            </button>
            <button
              onClick={() => handleCategoryChange('spices')}
              className={`px-4 py-2 rounded-lg text-white ${selectedCategory === 'spices' ? 'bg-green-700' : 'bg-gray-500'}`}
            >
              Spices
            </button>
            <button
              onClick={() => handleCategoryChange('pulses')}
              className={`px-4 py-2 rounded-lg text-white ${selectedCategory === 'pulses' ? 'bg-green-700' : 'bg-gray-500'}`}
            >
              Pulses
            </button>
            <button
              onClick={() => handleCategoryChange('vegetables')}
              className={`px-4 py-2 rounded-lg text-white ${selectedCategory === 'vegetables' ? 'bg-green-700' : 'bg-gray-500'}`}
            >
              Vegetables
            </button>
          </div>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories[selectedCategory].map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out"
              >
                <img
                  className="h-60 w-full object-cover rounded-lg mb-4"
                  src={item.image}
                  alt={item.title}
                />
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default AboutPage;
