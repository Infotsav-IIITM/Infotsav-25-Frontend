import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, MapPin, Users } from "lucide-react";
import { schedule } from "../constants/schedule";

const Schedule: React.FC = () => {
    const shouldReduceMotion = useReducedMotion();
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const getTypeColor = (type: string) => {
        switch (type) {
            case "keynote":
                return "neon-red";
            case "event":
                return "neon-cyan";
            case "break":
                return "neon-yellow";
            default:
                return "neon-purple";
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "keynote":
                return <Users size={16} />;
            case "event":
                return <Users size={16} />;
            case "break":
                return <Clock size={16} />;
            default:
                return <Clock size={16} />;
        }
    };

    return (
        <section id="schedule" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-stranger text-white mb-4">
                        <span
                            className="drop-shadow-neon-cyan"
                            style={{
                                textShadow: `
                  0 0 10px #00E5FF,
                  0 0 20px #00E5FF,
                  0 0 30px #00E5FF
                `,
                            }}>
                            TIME PORTAL
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto">
                        Navigate through the dimensions of time. Each moment
                        holds a new adventure in our carefully crafted timeline
                        of events.
                    </p>
                </motion.div>

                {/* Schedule Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-red via-neon-cyan to-neon-purple"></div>

                    {/* Scanner Line */}
                    <motion.div
                        className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-red rounded-full shadow-neon-red z-10"
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                      y: [
                                          0, 50, 100, 150, 200, 250, 300, 350,
                                          400,
                                      ],
                                  }
                        }
                        transition={{
                            repeat: Infinity,
                            duration: 8,
                            ease: "linear",
                        }}
                        style={{
                            boxShadow: "0 0 20px #FF1744, 0 0 40px #FF1744",
                        }}
                    />

                    {/* Schedule Items */}
                    <div className="space-y-8">
                        {schedule.map((item, index) => {
                            const colorClass = getTypeColor(item.type);
                            const isActive = activeItem === item.id;
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{
                                        opacity: 0,
                                        x: isLeft ? -50 : 50,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.6,
                                    }}
                                    className={`relative flex items-center ${
                                        isLeft
                                            ? "md:flex-row"
                                            : "md:flex-row-reverse"
                                    }`}
                                    onMouseEnter={() => setActiveItem(item.id)}
                                    onMouseLeave={() => setActiveItem(null)}>
                                    {/* Timeline Dot */}
                                    <div
                                        className={`
                    absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 
                    bg-${colorClass} rounded-full border-2 border-darker-gray z-20
                    shadow-${colorClass} transition-all duration-300
                    ${isActive ? "scale-150" : "scale-100"}
                  `}
                                    />

                                    {/* Content Card */}
                                    <motion.div
                                        className={`
                      ml-16 md:ml-0 ${isLeft ? "md:mr-8" : "md:ml-8"} 
                      ${isLeft ? "md:text-right" : "md:text-left"}
                      w-full md:w-96 p-6 rounded-lg border-2 
                      bg-dark-gray/80 backdrop-blur-sm transition-all duration-300
                      hover:shadow-${colorClass} cursor-pointer
                      ${
                          isActive
                              ? `border-${colorClass} shadow-${colorClass}`
                              : `border-${colorClass}/30`
                      }
                    `}
                                        whileHover={
                                            shouldReduceMotion
                                                ? {}
                                                : { scale: 1.02 }
                                        }
                                        style={{
                                            backgroundImage: `linear-gradient(135deg, rgba(10, 10, 10, 0.9), rgba(5, 5, 5, 0.95))`,
                                        }}>
                                        {/* Event Type Badge */}
                                        <div
                                            className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-${colorClass}/20 border border-${colorClass}/50 mb-3`}>
                                            <span
                                                className={`text-${colorClass}`}>
                                                {getTypeIcon(item.type)}
                                            </span>
                                            <span
                                                className={`text-xs font-mono text-${colorClass} uppercase`}>
                                                {item.type}
                                            </span>
                                        </div>

                                        {/* Time */}
                                        <div
                                            className={`text-2xl font-bold text-${colorClass} font-mono mb-2`}>
                                            {item.time}
                                        </div>

                                        {/* Event Name */}
                                        <h3 className="text-lg font-bold text-white mb-2 font-stranger">
                                            {item.event}
                                        </h3>

                                        {/* Venue */}
                                        <div className="flex items-center space-x-2 text-gray-400 font-mono text-sm">
                                            <MapPin size={12} />
                                            <span>{item.venue}</span>
                                        </div>

                                        {/* Hover Effect */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute inset-0 rounded-lg pointer-events-none"
                                                style={{
                                                    background: `linear-gradient(45deg, transparent, rgba(0, 229, 255, 0.1), transparent)`,
                                                }}
                                                animate={
                                                    shouldReduceMotion
                                                        ? {}
                                                        : {
                                                              backgroundPosition:
                                                                  [
                                                                      "0% 0%",
                                                                      "100% 100%",
                                                                  ],
                                                          }
                                                }
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 2,
                                                    ease: "linear",
                                                }}
                                            />
                                        )}
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center mt-16">
                    <motion.button
                        className="px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan font-mono font-bold rounded-lg hover:bg-neon-cyan hover:text-black transition-all duration-300"
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        DOWNLOAD FULL SCHEDULE
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Schedule;
