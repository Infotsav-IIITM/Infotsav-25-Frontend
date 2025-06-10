import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";
import { events } from "../constants/events";

const Events: React.FC = () => {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "technical":
                return "neon-red";
            case "cultural":
                return "neon-magenta";
            case "workshop":
                return "neon-cyan";
            default:
                return "neon-purple";
        }
    };

    return (
        <section id="events" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-stranger text-white mb-4">
                        <span
                            className="drop-shadow-neon-red"
                            style={{
                                textShadow: `
                  0 0 10px #FF1744,
                  0 0 20px #FF1744,
                  0 0 30px #FF1744
                `,
                            }}>
                            PORTAL EVENTS
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto">
                        Step through dimensional rifts into extraordinary
                        experiences. Each event is a gateway to new worlds of
                        knowledge and excitement.
                    </p>
                </motion.div>

                {/* Events Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => {
                        const colorClass = getCategoryColor(event.category);

                        return (
                            <motion.div
                                key={event.id}
                                variants={cardVariants}
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                              scale: 1.05,
                                              rotateY: 5,
                                          }
                                }
                                className={`
                  relative bg-dark-gray/80 rounded-lg overflow-hidden border-2 border-${colorClass}/30
                  hover:border-${colorClass} transition-all duration-300 backdrop-blur-sm
                  hover:shadow-${colorClass} group cursor-pointer
                `}
                                style={{
                                    backgroundImage: `linear-gradient(135deg, rgba(10, 10, 10, 0.9), rgba(5, 5, 5, 0.95))`,
                                }}>
                                {/* Event Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        style={{
                                            filter: "grayscale(70%) contrast(1.2) brightness(0.8)",
                                        }}
                                    />
                                    <div
                                        className={`absolute inset-0 bg-${colorClass}/20 mix-blend-multiply`}
                                    />

                                    {/* Category Badge */}
                                    <div
                                        className={`absolute top-4 right-4 px-3 py-1 bg-${colorClass}/20 border border-${colorClass} rounded-full backdrop-blur-sm`}>
                                        <div className="flex items-center space-x-1">
                                            <Tag
                                                size={12}
                                                className={`text-${colorClass}`}
                                            />
                                            <span
                                                className={`text-xs font-mono text-${colorClass} uppercase`}>
                                                {event.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Content */}
                                <div className="p-6">
                                    <h3
                                        className={`text-xl font-bold text-${colorClass} mb-3 font-stranger group-hover:animate-pulse`}>
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm mb-4 font-mono leading-relaxed">
                                        {event.description}
                                    </p>

                                    {/* Event Details */}
                                    <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                                        <div className="flex items-center space-x-1">
                                            <Calendar size={12} />
                                            <span>
                                                {new Date(
                                                    event.date
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Clock size={12} />
                                            <span>{event.time}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Overlay Effect */}
                                <motion.div
                                    className={`absolute inset-0 bg-${colorClass}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    style={{
                                        background: `linear-gradient(45deg, transparent, rgba(255, 23, 68, 0.1), transparent)`,
                                    }}
                                />

                                {/* Scanline Effect */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(0deg, transparent 50%, rgba(0, 229, 255, 0.1) 50%)",
                                        backgroundSize: "100% 2px",
                                    }}
                                    animate={
                                        shouldReduceMotion
                                            ? {}
                                            : {
                                                  backgroundPosition: [
                                                      "0px 0px",
                                                      "0px 20px",
                                                  ],
                                              }
                                    }
                                    transition={{
                                        repeat: Infinity,
                                        duration: 0.5,
                                        ease: "linear",
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center mt-16">
                    <motion.button
                        className="px-8 py-4 bg-transparent border-2 border-neon-purple text-neon-purple font-mono font-bold rounded-lg hover:bg-neon-purple hover:text-black transition-all duration-300"
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        VIEW ALL EVENTS
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Events;
