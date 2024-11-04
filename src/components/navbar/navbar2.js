import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home,
  Info,
  Users,
  Store,
  MessageCircle,
  Menu,
  X,
} from 'lucide-react';

const CircularNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', href: '/' },
    { icon: <Info className="w-5 h-5" />, label: 'About', href: '/about' },
    { icon: <Users className="w-5 h-5" />, label: 'Farmers', href: '/farmers' },
    { icon: <Store className="w-5 h-5" />, label: 'Retailers', href: '/retailers' },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed right-8 z-50 transition-all duration-300 ease-in-out ${
      showNavbar ? 'translate-y-8' : '-translate-y-24'
    }`}>
      {/* Logo */}
      <div className="absolute -left-24 top-2">
        <img
          src="/img/home/mastmart.png"
          alt="Mast Mart Logo"
          className="w-20 h-8 object-contain"
        />
      </div>

      {/* Main Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="w-16 h-16 rounded-full bg-[#045518] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Circular Navigation Items */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute top-8 right-8">
            {menuItems.map((item, index) => {
              const angle = (index * (360 / menuItems.length) - 90) * (Math.PI / 180);
              const radius = 120; // Distance from center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={item.label}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{ 
                    scale: 1,
                    x: x,
                    y: y,
                    transition: { 
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: index * 0.1 
                    }
                  }}
                  exit={{ 
                    scale: 0,
                    x: 0,
                    y: 0,
                    transition: { 
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: (menuItems.length - index) * 0.1 
                    }
                  }}
                  className="absolute -top-8 -right-8"
                >
                  <div className="relative group">
                    <a
                      href={item.href}
                      className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-[#045518] hover:bg-[#045518] hover:text-white transition-colors duration-300"
                    >
                      {item.icon}
                    </a>
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-[#045518] text-white px-3 py-1 rounded text-sm">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CircularNavbar;