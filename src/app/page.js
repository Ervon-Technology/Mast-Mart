'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const HomePage = () => {
  const router = useRouter();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 1 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  };

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <motion.div
      className="relative h-screen w-screen overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full w-full">
        
        {/* Center Logo */}
        <div className="absolute opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/img/citly.png" 
            alt="Citly Logo" 
            className="w-96 h-auto"
          />
        </div>

        {/* Top Left - Retailer */}
        <motion.div
          className="absolute top-8 left-8 cursor-pointer"
          variants={itemVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => handleNavigate('/retailers')}
        >
          <div className="relative w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
            <img 
              src="/img/Retailers.jpeg" 
              alt="Retailer"
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold text-white">Retailer</span>
            </div>
          </div>
        </motion.div>

        {/* Top Right - Farmer */}
        <motion.div
          className="absolute top-8 right-8 cursor-pointer"
          variants={itemVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => handleNavigate('/farmers')}
        >
          <div className="relative w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
            <img 
              src="/img/Farmers.jpg" 
              alt="Farmer"
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold text-white">Farmer</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Left - SME */}
        <motion.div
          className="absolute bottom-8 left-8 cursor-pointer"
          variants={itemVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => handleNavigate('/sme')}
        >
          <div className="relative w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
            <img 
              src="/img/SME.jpeg" 
              alt="SME"
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold text-white">SME</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Right - NBFC */}
        <motion.div
          className="absolute bottom-8 right-8 cursor-pointer"
          variants={itemVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => handleNavigate('/nbfc')}
        >
          <div className="relative w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
            <img 
              src="/img/NBFC.jpeg" 
              alt="NBFC"
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold text-white">NBFC</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
