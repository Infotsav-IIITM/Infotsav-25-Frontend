import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Eye, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: '1',
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      alt: 'Coding Competition',
      title: 'Code Warriors Battle'
    },
    {
      id: '2',
      src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      alt: 'Tech Workshop',
      title: 'Neural Network Workshop'
    },
    {
      id: '3',
      src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
      alt: 'Dance Performance',
      title: 'Interdimensional Dance-off'
    },
    {
      id: '4',
      src: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      alt: 'AI Presentation',
      title: 'AI Ethics Symposium'
    },
    {
      id: '5',
      src: 'https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg',
      alt: 'Music Concert',
      title: 'Synthwave Soundscape'
    },
    {
      id: '6',
      src: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      alt: 'Robotics Demo',
      title: 'Robotic Uprising Demo'
    },
    {
      id: '7',
      src: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg',
      alt: 'Student Collaboration',
      title: 'Mind Meld Hackathon'
    },
    {
      id: '8',
      src: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg',
      alt: 'Award Ceremony',
      title: 'Dimension Champions'
    },
    {
      id: '9',
      src: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg',
      alt: 'Tech Exhibition',
      title: 'Portal Technology Expo'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="gallery" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-stranger text-white mb-4">
            <span
              className="drop-shadow-neon-magenta"
              style={{
                textShadow: `
                  0 0 10px #E91E63,
                  0 0 20px #E91E63,
                  0 0 30px #E91E63
                `,
              }}
            >
              MEMORY FRAGMENTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto">
            Echoes from past dimensions. Witness the extraordinary moments that 
            transcended reality and created unforgettable experiences.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { 
                scale: 1.05,
                rotateZ: [-1, 1, -1][index % 3],
              }}
              className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-neon-magenta/30 hover:border-neon-magenta transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{
                    filter: 'grayscale(60%) contrast(1.3) brightness(0.7) sepia(20%) hue-rotate(280deg)',
                  }}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-darker-gray via-transparent to-transparent opacity-60" />
              
              {/* VHS Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `
                    linear-gradient(0deg, transparent 50%, rgba(233, 30, 99, 0.1) 50%),
                    linear-gradient(90deg, transparent 50%, rgba(0, 229, 255, 0.05) 50%)
                  `,
                  backgroundSize: '100% 4px, 4px 100%',
                }}
                animate={shouldReduceMotion ? {} : {
                  backgroundPosition: ['0px 0px, 0px 0px', '0px 8px, 8px 0px'],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.2,
                  ease: 'linear',
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-darker-gray to-transparent">
                <h3 className="text-white font-stranger text-lg mb-1 group-hover:text-neon-magenta transition-colors">
                  {image.title}
                </h3>
                <p className="text-gray-400 font-mono text-sm">
                  {image.alt}
                </p>
              </div>

              {/* View Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2 bg-neon-magenta/20 rounded-full border border-neon-magenta backdrop-blur-sm">
                  <Eye size={16} className="text-neon-magenta" />
                </div>
              </div>

              {/* Glitch Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                animate={shouldReduceMotion ? {} : {
                  opacity: [0, 0.3, 0],
                  x: [0, -2, 2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  times: [0, 0.1, 0.2, 1],
                }}
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(255, 23, 68, 0.1), transparent)',
                  mixBlendMode: 'screen',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg border-2 border-neon-magenta"
                style={{
                  filter: 'grayscale(60%) contrast(1.3) brightness(0.7) sepia(20%) hue-rotate(280deg)',
                }}
              />
              <button
                className="absolute top-4 right-4 p-2 bg-neon-red/20 rounded-full border border-neon-red text-neon-red hover:bg-neon-red hover:text-black transition-all duration-300"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-neon-magenta text-neon-magenta font-mono font-bold rounded-lg hover:bg-neon-magenta hover:text-black transition-all duration-300"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL MEMORIES
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;