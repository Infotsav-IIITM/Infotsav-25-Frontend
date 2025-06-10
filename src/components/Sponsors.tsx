import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { sponsors } from "../constants/sponsors";

const Sponsors: React.FC = () => {
    const shouldReduceMotion = useReducedMotion();

    const getTierColor = (tier: string) => {
        switch (tier) {
            case "title":
                return "neon-red";
            case "gold":
                return "neon-yellow";
            case "silver":
                return "neon-cyan";
            case "bronze":
                return "neon-orange";
            default:
                return "neon-purple";
        }
    };

    const getTierSize = (tier: string) => {
        switch (tier) {
            case "title":
                return "h-32 w-48";
            case "gold":
                return "h-24 w-36";
            case "silver":
                return "h-20 w-32";
            case "bronze":
                return "h-16 w-28";
            default:
                return "h-16 w-28";
        }
    };

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const groupedSponsors = sponsors.reduce((acc, sponsor) => {
        if (!acc[sponsor.tier]) {
            acc[sponsor.tier] = [];
        }
        acc[sponsor.tier].push(sponsor);
        return acc;
    }, {} as Record<string, typeof sponsors>);

    const tierOrder = ["title", "gold", "silver", "bronze"];

    return (
        <section id="sponsors" className="py-20 relative">
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
                            className="drop-shadow-neon-yellow"
                            style={{
                                textShadow: `
                  0 0 10px #FFD600,
                  0 0 20px #FFD600,
                  0 0 30px #FFD600
                `,
                            }}>
                            DIMENSIONAL ALLIES
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto">
                        Entities from across the multiverse who power our
                        journey through the unknown realms of technology and
                        innovation.
                    </p>
                </motion.div>

                {/* Sponsors by Tier */}
                <div className="space-y-16">
                    {tierOrder.map((tier) => {
                        if (!groupedSponsors[tier]) return null;

                        const tierSponsors = groupedSponsors[tier];
                        const colorClass = getTierColor(tier);

                        return (
                            <motion.div
                                key={tier}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-center">
                                {/* Tier Title */}
                                <h3
                                    className={`text-2xl md:text-3xl font-bold font-stranger text-${colorClass} mb-8 uppercase`}>
                                    {tier} Partners
                                </h3>

                                {/* Sponsors Grid */}
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className={`
                    flex flex-wrap items-center justify-center gap-8
                    ${tier === "title" ? "justify-center" : ""}
                  `}>
                                    {tierSponsors.map((sponsor) => (
                                        <motion.div
                                            key={sponsor.id}
                                            variants={cardVariants}
                                            whileHover={
                                                shouldReduceMotion
                                                    ? {}
                                                    : {
                                                          scale: 1.1,
                                                          rotateY: 10,
                                                      }
                                            }
                                            className={`
                        relative group cursor-pointer p-6 rounded-lg
                        bg-dark-gray/60 border-2 border-${colorClass}/30
                        hover:border-${colorClass} transition-all duration-300
                        hover:shadow-${colorClass} backdrop-blur-sm
                        ${getTierSize(tier)}
                        flex items-center justify-center
                      `}
                                            style={{
                                                backgroundImage: `linear-gradient(135deg, rgba(10, 10, 10, 0.8), rgba(5, 5, 5, 0.9))`,
                                            }}
                                            onClick={() =>
                                                sponsor.website &&
                                                window.open(
                                                    sponsor.website,
                                                    "_blank"
                                                )
                                            }>
                                            {/* Sponsor Logo */}
                                            <img
                                                src={sponsor.logo}
                                                alt={`${sponsor.name} logo`}
                                                className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:brightness-125"
                                                style={{
                                                    filter: `
                            grayscale(100%) 
                            contrast(1.2) 
                            brightness(0.8)
                            drop-shadow(0 0 10px ${
                                colorClass === "neon-red"
                                    ? "#FF1744"
                                    : colorClass === "neon-yellow"
                                    ? "#FFD600"
                                    : colorClass === "neon-cyan"
                                    ? "#00E5FF"
                                    : "#FF6D00"
                            })
                          `,
                                                }}
                                            />

                                            {/* Sponsor Name Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-darker-gray/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                                <div className="text-center">
                                                    <h4
                                                        className={`text-${colorClass} font-bold font-stranger mb-2`}>
                                                        {sponsor.name}
                                                    </h4>
                                                    {sponsor.website && (
                                                        <div
                                                            className={`flex items-center justify-center space-x-1 text-${colorClass}/70`}>
                                                            <ExternalLink
                                                                size={12}
                                                            />
                                                            <span className="text-xs font-mono">
                                                                Visit Website
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Flicker Animation */}
                                            <motion.div
                                                className={`absolute inset-0 bg-${colorClass}/10 rounded-lg opacity-0 group-hover:opacity-100`}
                                                animate={
                                                    shouldReduceMotion
                                                        ? {}
                                                        : {
                                                              opacity: [
                                                                  0, 0.3, 0,
                                                              ],
                                                          }
                                                }
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 2,
                                                    ease: "easeInOut",
                                                }}
                                            />

                                            {/* Neon Glow Effect */}
                                            <motion.div
                                                className="absolute inset-0 rounded-lg pointer-events-none"
                                                style={{
                                                    background: `linear-gradient(45deg, transparent, rgba(255, 23, 68, 0.1), transparent)`,
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
                                                    duration: 3,
                                                    ease: "linear",
                                                }}
                                            />

                                            {/* Scanlines */}
                                            <motion.div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-lg"
                                                style={{
                                                    background:
                                                        "linear-gradient(0deg, transparent 50%, rgba(0, 229, 255, 0.1) 50%)",
                                                    backgroundSize: "100% 2px",
                                                }}
                                                animate={
                                                    shouldReduceMotion
                                                        ? {}
                                                        : {
                                                              backgroundPosition:
                                                                  [
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
                                    ))}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Partnership CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center mt-16">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white font-stranger mb-4">
                            Join the Alliance
                        </h3>
                        <p className="text-gray-300 font-mono mb-8">
                            Ready to become part of our interdimensional
                            network? Let's create extraordinary experiences
                            together.
                        </p>
                        <motion.button
                            className="px-8 py-4 bg-transparent border-2 border-neon-yellow text-neon-yellow font-mono font-bold rounded-lg hover:bg-neon-yellow hover:text-black transition-all duration-300"
                            whileHover={
                                shouldReduceMotion ? {} : { scale: 1.05 }
                            }
                            whileTap={{ scale: 0.95 }}>
                            BECOME A SPONSOR
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsors;
