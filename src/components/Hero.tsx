import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Calendar, MapPin } from "lucide-react";

const Hero: React.FC = () => {
    const shouldReduceMotion = useReducedMotion();
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        if (!shouldReduceMotion) {
            const interval = setInterval(() => {
                setGlitch(true);
                setTimeout(() => setGlitch(false), 200);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [shouldReduceMotion]);

    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const title = "INFOTSAV 2025";

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative pt-16">
            {/* Synthwave Grid Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `
              linear-gradient(to bottom, 
                rgba(233, 30, 99, 0.1) 0%, 
                rgba(156, 39, 176, 0.1) 30%, 
                rgba(10, 10, 10, 0.9) 70%, 
                rgba(5, 5, 5, 1) 100%
              )
            `,
                    }}
                />

                {/* Perspective Grid */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-96"
                    style={{
                        background: `
              linear-gradient(90deg, transparent 49%, rgba(255, 23, 68, 0.3) 50%, transparent 51%),
              linear-gradient(rgba(255, 23, 68, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px, 100% 15px",
                        transform: "perspective(500px) rotateX(45deg)",
                        transformOrigin: "bottom",
                    }}
                    animate={
                        shouldReduceMotion
                            ? {}
                            : {
                                  backgroundPosition: [
                                      "0px 0px, 0px 0px",
                                      "60px 0px, 0px 15px",
                                  ],
                              }
                    }
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                {/* Main Title */}
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-8">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-stranger mb-4">
                        {title.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className={`inline-block text-white drop-shadow-neon-red ${
                                    glitch ? "animate-glitch" : ""
                                } ${letter === " " ? "w-4" : ""}`}
                                style={{
                                    textShadow: `
                    0 0 10px #FF1744,
                    0 0 20px #FF1744,
                    0 0 30px #FF1744,
                    0 0 40px #FF1744
                  `,
                                }}>
                                {letter}
                            </motion.span>
                        ))}
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mb-8">
                    <p className="text-xl md:text-2xl text-neon-cyan font-mono mb-4">
                        ENTER THE UPSIDE DOWN
                    </p>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Step into a world where technology meets the
                        supernatural. Experience the ultimate tech fest with
                        mind-bending competitions, otherworldly workshops, and
                        encounters from another dimension.
                    </p>
                </motion.div>

                {/* Event Details */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
                    <div className="flex items-center space-x-2 text-neon-magenta">
                        <Calendar size={20} />
                        <span className="font-mono">To be announced</span>
                    </div>
                    <div className="flex items-center space-x-2 text-neon-purple">
                        <MapPin size={20} />
                        <span className="font-mono">ABV IIITM Campus</span>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                    <motion.button
                        className="px-8 py-4 bg-transparent border-2 border-neon-red text-neon-red font-mono font-bold rounded-lg hover:bg-neon-red hover:text-black transition-all duration-300 relative overflow-hidden group"
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <span className="relative z-10">REGISTER NOW</span>
                        <motion.div
                            className="absolute inset-0 bg-neon-red"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>

                    <motion.button
                        className="px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan font-mono font-bold rounded-lg hover:bg-neon-cyan hover:text-black transition-all duration-300"
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        VIEW EVENTS
                    </motion.button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="flex flex-col items-center">
                    <p className="text-gray-400 font-mono text-sm mb-2">
                        Scroll to explore
                    </p>
                    <motion.div
                        animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}>
                        <ArrowDown className="text-neon-cyan" size={24} />
                    </motion.div>
                </motion.div>
            </div>

            {/* VHS Scanline Effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(0deg, transparent 50%, rgba(0, 229, 255, 0.02) 50%)",
                    backgroundSize: "100% 4px",
                }}
                animate={
                    shouldReduceMotion
                        ? {}
                        : {
                              backgroundPosition: ["0px 0px", "0px 100px"],
                          }
                }
                transition={{
                    repeat: Infinity,
                    duration: 0.1,
                    ease: "linear",
                }}
            />
        </section>
    );
};

export default Hero;
