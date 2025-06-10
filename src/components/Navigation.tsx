import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#events', label: 'Events' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-darker-gray/90 backdrop-blur-sm border-b border-neon-red/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="h-8 w-8 text-neon-red drop-shadow-neon-red" />
            <span className="text-xl font-bold text-neon-red font-stranger drop-shadow-neon-red">
              INFOTSAV
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-neon-cyan transition-colors duration-300 font-mono relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-cyan transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-gray/50 backdrop-blur-sm">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-white hover:text-neon-cyan transition-colors font-mono"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;