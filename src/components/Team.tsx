import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { User, Star, Briefcase } from "lucide-react";
import { teamMembers } from "../constants/team";

const Team: React.FC = () => {
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
        hidden: { opacity: 0, rotateY: -90 },
        visible: {
            opacity: 1,
            rotateY: 0,
            transition: { duration: 0.8 },
        },
    };

    const getRoleColor = (role: string) => {
        const colors = [
            "neon-red",
            "neon-cyan",
            "neon-magenta",
            "neon-purple",
            "neon-yellow",
            "neon-orange",
        ];
        const hash = role
            .split("")
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return colors[hash % colors.length];
    };

    return (
        <section id="team" className="py-20 relative">
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
                            className="drop-shadow-neon-purple"
                            style={{
                                textShadow: `
                  0 0 10px #9C27B0,
                  0 0 20px #9C27B0,
                  0 0 30px #9C27B0
                `,
                            }}>
                            PARTY MEMBERS
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto">
                        Meet the brave adventurers who dare to venture into the
                        unknown. Each member brings unique abilities to navigate
                        the Upside Down of technology.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => {
                        const colorClass = getRoleColor(member.role);

                        return (
                            <motion.div
                                key={member.id}
                                variants={cardVariants}
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                              scale: 1.05,
                                              rotateY: 5,
                                              rotateX: 5,
                                          }
                                }
                                className={`
                  relative bg-dark-gray/80 rounded-lg overflow-hidden border-2 border-${colorClass}/30
                  hover:border-${colorClass} transition-all duration-300 backdrop-blur-sm
                  hover:shadow-${colorClass} group cursor-pointer
                `}
                                style={{
                                    backgroundImage: `linear-gradient(135deg, rgba(10, 10, 10, 0.9), rgba(5, 5, 5, 0.95))`,
                                    transformStyle: "preserve-3d",
                                }}>
                                {/* Character Sheet Header */}
                                <div
                                    className={`bg-${colorClass}/20 p-4 border-b border-${colorClass}/30`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <User
                                                className={`text-${colorClass}`}
                                                size={16}
                                            />
                                            <span
                                                className={`text-${colorClass} font-mono text-sm uppercase`}>
                                                Character Sheet
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Star
                                                className={`text-${colorClass}`}
                                                size={12}
                                            />
                                            <span
                                                className={`text-${colorClass} font-mono text-sm`}>
                                                LVL {member.level}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Character Portrait */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        style={{
                                            filter: "grayscale(40%) contrast(1.3) brightness(0.9) sepia(10%)",
                                        }}
                                    />

                                    {/* Level Badge */}
                                    <div
                                        className={`absolute top-4 right-4 px-3 py-1 bg-${colorClass}/20 border border-${colorClass} rounded-full backdrop-blur-sm`}>
                                        <span
                                            className={`text-${colorClass} font-mono text-sm font-bold`}>
                                            {member.level}
                                        </span>
                                    </div>

                                    {/* VHS Effect */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background:
                                                "linear-gradient(0deg, transparent 50%, rgba(0, 229, 255, 0.1) 50%)",
                                            backgroundSize: "100% 3px",
                                        }}
                                        animate={
                                            shouldReduceMotion
                                                ? {}
                                                : {
                                                      backgroundPosition: [
                                                          "0px 0px",
                                                          "0px 30px",
                                                      ],
                                                  }
                                        }
                                        transition={{
                                            repeat: Infinity,
                                            duration: 0.3,
                                            ease: "linear",
                                        }}
                                    />
                                </div>

                                {/* Character Info */}
                                <div className="p-6">
                                    {/* Name */}
                                    <h3
                                        className={`text-xl font-bold text-${colorClass} mb-2 font-stranger group-hover:animate-pulse`}>
                                        {member.name}
                                    </h3>

                                    {/* Class/Role */}
                                    <div className="flex items-center space-x-2 mb-3">
                                        <Briefcase
                                            className={`text-${colorClass}`}
                                            size={14}
                                        />
                                        <span
                                            className={`text-${colorClass} font-mono text-sm uppercase`}>
                                            {member.role}
                                        </span>
                                    </div>

                                    {/* Department */}
                                    <p className="text-gray-400 font-mono text-sm mb-4">
                                        School of {member.department}
                                    </p>

                                    {/* Skills */}
                                    <div className="mb-4">
                                        <h4 className="text-white font-mono text-sm mb-2 uppercase">
                                            Abilities:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {member.skills.map(
                                                (skill, index) => (
                                                    <span
                                                        key={index}
                                                        className={`px-2 py-1 text-xs font-mono bg-${colorClass}/20 text-${colorClass} border border-${colorClass}/30 rounded`}>
                                                        {skill}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Experience Bar */}
                                    <div className="mb-2">
                                        <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
                                            <span>Experience</span>
                                            <span>{member.level}/100</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-${colorClass} rounded-full`}
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${member.level}%`,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 1,
                                                    delay: 0.5,
                                                }}
                                                style={{
                                                    boxShadow: `0 0 10px ${
                                                        colorClass ===
                                                        "neon-red"
                                                            ? "#FF1744"
                                                            : colorClass ===
                                                              "neon-cyan"
                                                            ? "#00E5FF"
                                                            : colorClass ===
                                                              "neon-magenta"
                                                            ? "#E91E63"
                                                            : colorClass ===
                                                              "neon-purple"
                                                            ? "#9C27B0"
                                                            : colorClass ===
                                                              "neon-yellow"
                                                            ? "#FFD600"
                                                            : "#FF6D00"
                                                    }`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <motion.div
                                    className={`absolute inset-0 bg-${colorClass}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                                    style={{
                                        background: `linear-gradient(45deg, transparent, rgba(156, 39, 176, 0.1), transparent)`,
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Team CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center mt-16">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white font-stranger mb-4">
                            Join Our Party
                        </h3>
                        <p className="text-gray-300 font-mono mb-8">
                            Ready to level up and become part of our
                            interdimensional team? We're always looking for
                            brave souls to join our quest.
                        </p>
                        <motion.button
                            className="px-8 py-4 bg-transparent border-2 border-neon-purple text-neon-purple font-mono font-bold rounded-lg hover:bg-neon-purple hover:text-black transition-all duration-300"
                            whileHover={
                                shouldReduceMotion ? {} : { scale: 1.05 }
                            }
                            whileTap={{ scale: 0.95 }}>
                            APPLY TO JOIN
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
