import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, Info, Users, Store, MessageCircle, Compass } from 'lucide-react';

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Home className="w-6 h-6" />, label: 'Home', href: '/' },
    { icon: <Info className="w-6 h-6" />, label: 'About', href: '/about' },
    { icon: <Users className="w-6 h-6" />, label: 'Farmers', href: '/farmers' },
    { icon: <Store className="w-6 h-6" />, label: 'Retailers', href: '/retailers' },
    { icon: <MessageCircle className="w-6 h-6" />, label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Mast Mart Logo - Top Left Corner */}
      <div className="fixed top-4 left-8 z-50">
        <img src="/img/home/mastmart.png" alt="Mast Mart Logo" className="w-32 h-auto" />
      </div>

      {/* Floating Navbar - Top Right Corner */}
      <div className="fixed top-8 right-8 z-50 flex flex-col items-end space-y-2">
        {/* Main Floating Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-4 py-3 rounded-full bg-[#045518] text-white shadow-lg focus:outline-none hover:bg-green-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Compass className="w-6 h-6 mr-2" />
          <span className="font-medium">Explore Now</span>
        </motion.button>

        {/* Navigation Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-end space-y-3 mt-4"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center w-full max-w-xs space-x-3 bg-white rounded-lg shadow-lg px-4 py-3 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 transition-all"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-emerald-50 rounded-full">
                    {item.icon}
                  </div>
                  <span className="text-base font-medium">{item.label}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingNavbar;
