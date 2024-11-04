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

const HorizontalNavbar = () => {
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
    <div className="fixed w-full z-50">
      {/* Main Navigation Bar */}
      <div className={`w-full transition-all duration-300 ease-in-out ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {/* Top Bar with Logo and Menu Button */}
        <div className="bg-[#045518] px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="w-24">
            <img
              src="/img/home/mastmart.png"
              alt="Mast Mart Logo"
              className="w-full h-8 object-contain"
            />
          </div>

          {/* Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="w-12 h-12 rounded-full bg-white text-[#045518] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Expandable Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: 'auto', 
                opacity: 1,
                transition: { 
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: { 
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }
              }}
              className="bg-white shadow-lg overflow-hidden"
            >
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ 
                        x: 0, 
                        opacity: 1,
                        transition: { 
                          delay: index * 0.1,
                          duration: 0.3
                        }
                      }}
                      exit={{ 
                        x: -20, 
                        opacity: 0,
                        transition: { 
                          delay: (menuItems.length - index) * 0.1,
                          duration: 0.3
                        }
                      }}
                    >
                      <a
                        href={item.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                      >
                        <span className="w-8 h-8 rounded-full bg-[#045518] text-white flex items-center justify-center">
                          {item.icon}
                        </span>
                        <span className="text-gray-800 font-medium">{item.label}</span>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HorizontalNavbar;