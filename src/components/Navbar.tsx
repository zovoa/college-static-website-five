import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../data/navItems';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-glass-gradient backdrop-blur-md shadow-glass py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center space-x-2"
          >
            <Leaf className="w-8 h-8 text-eco-green-500" />
            <span className="font-montserrat font-bold text-xl text-eco-green-700">EcoLearn</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-montserrat text-eco-green-800 hover:text-eco-green-600 transition-colors duration-300 text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Nav Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-eco-green-700 focus:outline-none"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-glass-gradient backdrop-blur-lg shadow-glass border-t border-eco-green-100/20"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 px-4 font-montserrat text-eco-green-800 hover:bg-eco-green-50/10 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;