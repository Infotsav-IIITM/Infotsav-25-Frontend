import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import BackgroundEffects from './BackgroundEffects';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-darker-gray relative overflow-x-hidden">
      <BackgroundEffects />
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;