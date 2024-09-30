'use client';

import React, { useState } from 'react';

// Example subcategories for each category, including an "all" category with all items
const categories = {
    all: [
        { id: 1, title: 'Basmati Rice', description: 'Premium long-grain aromatic rice.', image: '/img/rice/basmati.jpg' },
        { id: 2, title: 'Sona Masoori', description: 'Light and aromatic rice, ideal for everyday use.', image: '/img/rice/sona-masoori.jpg' },
        { id: 3, title: 'Brown Rice', description: 'Healthy, fiber-rich rice option.', image: '/img/rice/brown-rice.jpg' },
        { id: 4, title: 'Parboiled Rice', description: 'Pre-cooked rice that retains its nutrients.', image: '/img/rice/parboiled.jpg' },
        { id: 5, title: 'Jasmine Rice', description: 'Fragrant and slightly sticky rice.', image: '/img/rice/jasmine.jpg' },
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
        { id: 1, title: 'Basmati Rice', description: 'Premium long-grain aromatic rice.', image: '/img/rice/basmati.jpg' },
        { id: 2, title: 'Sona Masoori', description: 'Light and aromatic rice, ideal for everyday use.', image: '/img/rice/sona-masoori.jpg' },
        { id: 3, title: 'Brown Rice', description: 'Healthy, fiber-rich rice option.', image: '/img/rice/brown-rice.jpg' },
        { id: 4, title: 'Parboiled Rice', description: 'Pre-cooked rice that retains its nutrients.', image: '/img/rice/parboiled.jpg' },
        { id: 5, title: 'Jasmine Rice', description: 'Fragrant and slightly sticky rice.', image: '/img/rice/jasmine.jpg' },
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

const About = () => {
    const [filter, setFilter] = useState('all');

    const filteredItems = categories[filter] || [];

    return (
        <div className="bg-secondary py-10 md:py-20">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <p className="text-2xl md:text-3xl lg:text-4xl text-primary text-center mb-6 md:mb-8">
                    Products at Mast Mart
                </p>
                <p className="text-md md:text-xl lg:text-2xl font-light text-primary text-center mb-8 md:mb-12">
                    Explore our wide range of agricultural products, including rice, cereals, spices, pulses, and vegetables.
                </p>

                {/* Filter Bar */}
                <div className="text-center mb-6 md:mb-9 text-primary">
                    <button
                        onClick={() => setFilter('all')}
                        className={`transition-colors mx-1 my-3 lg:my-0 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary transition-all duration-300 ease-in-out ${
                            filter === 'all' ? 'bg-primary text-black shadow-lg scale-105' : 'bg-transparent hover:bg-primary hover:text-black'
                        }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('rice')}
                        className={`transition-colors mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary transition-all duration-300 ease-in-out ${
                            filter === 'rice' ? 'bg-primary text-black shadow-lg scale-105' : 'bg-transparent hover:bg-primary hover:text-black'
                        }`}
                    >
                        Rice
                    </button>
                    <button
                        onClick={() => setFilter('cereals')}
                        className={`transition-colors mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary transition-all duration-300 ease-in-out ${
                            filter === 'cereals' ? 'bg-primary text-black shadow-lg scale-105' : 'bg-transparent hover:bg-primary hover:text-black'
                        }`}
                    >
                        Cereals
                    </button>
                    <button
                        onClick={() => setFilter('spices')}
                        className={`transition-colors mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary transition-all duration-300 ease-in-out ${
                            filter === 'spices' ? 'bg-primary text-black shadow-lg scale-105' : 'bg-transparent hover:bg-primary hover:text-black'
                        }`}
                    >
                        Spices
                    </button>
                    <button
                        onClick={() => setFilter('pulses')}
                        className={`transition-colors mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary transition-all duration-300 ease-in-out ${
                            filter === 'pulses' ? 'bg-primary text-black shadow-lg scale-105' : 'bg-transparent hover:bg-primary hover:text-black'
                        }`}
                    >
                        Pulses
                    </button>
                    <button
                        onClick={() => setFilter('vegetables')}
                        className={`transition-colors mx-1 my-3 md:my-0 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary transition-all duration-300 ease-in-out ${
                            filter === 'vegetables' ? 'bg-primary text-black shadow-lg scale-105' : 'bg-transparent hover:bg-primary hover:text-black'
                        }`}
                    >
                        Vegetables
                    </button>
                </div>
            </div>

            {/* Filtered Items */}
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative group bg-black border border-yellow-500 p-3 md:p-4 shadow-lg rounded-lg text-center transition-transform duration-300 hover:scale-105"
                        >
                            <div className="h-40 sm:h-48 md:h-56 bg-cover bg-center rounded-lg mb-3 md:mb-4" style={{ backgroundImage: `url(${item.image})` }}></div>
                            <h3 className="text-lg md:text-xl text-yellow-500 mb-2">{item.title}</h3>
                            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 ease-in-out">
                                <p className="text-white text-sm md:text-lg mx-4 md:mx-6">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
