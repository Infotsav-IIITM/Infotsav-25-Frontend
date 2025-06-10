import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";

const Contact: React.FC = () => {
    const shouldReduceMotion = useReducedMotion();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    const contactInfo = [
        {
            icon: <Mail size={20} />,
            label: "Email",
            value: "infotsav@iiitm.ac.in",
            color: "neon-red",
        },
        {
            icon: <Phone size={20} />,
            label: "Phone",
            value: "+1 (555) UPSIDE-DOWN",
            color: "neon-cyan",
        },
        {
            icon: <MapPin size={20} />,
            label: "Location",
            value: "ABV IIITM\n Gwalior, Madhya Pradesh",
            color: "neon-magenta",
        },
    ];

    return (
        <section id="contact" className="py-20 relative">
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
                            className="drop-shadow-neon-cyan"
                            style={{
                                textShadow: `
                  0 0 10px #00E5FF,
                  0 0 20px #00E5FF,
                  0 0 30px #00E5FF
                `,
                            }}>
                            ESTABLISH CONTACT
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto">
                        Ready to breach the dimensional barrier? Send us a
                        transmission from your reality and we'll respond from
                        ours.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative">
                        <div className="bg-dark-gray/80 rounded-lg p-8 border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-neon-cyan font-stranger mb-6">
                                Send Transmission
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-mono text-gray-300 mb-2">
                                        <User
                                            size={16}
                                            className="inline mr-2"
                                        />
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-darker-gray/50 border-2 border-gray-600 rounded-lg text-white font-mono focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                                        placeholder="Enter your name..."
                                    />
                                    <motion.div
                                        className="absolute inset-0 rounded-lg pointer-events-none opacity-0 hover:opacity-100 transition-opacity"
                                        style={{
                                            background:
                                                "linear-gradient(45deg, transparent, rgba(0, 229, 255, 0.1), transparent)",
                                        }}
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-mono text-gray-300 mb-2">
                                        <Mail
                                            size={16}
                                            className="inline mr-2"
                                        />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-darker-gray/50 border-2 border-gray-600 rounded-lg text-white font-mono focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                                        placeholder="your.email@dimension.com"
                                    />
                                </div>

                                {/* Subject Field */}
                                <div className="relative">
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-mono text-gray-300 mb-2">
                                        <MessageSquare
                                            size={16}
                                            className="inline mr-2"
                                        />
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-darker-gray/50 border-2 border-gray-600 rounded-lg text-white font-mono focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                                        placeholder="What's your inquiry about?"
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-mono text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-darker-gray/50 border-2 border-gray-600 rounded-lg text-white font-mono focus:border-neon-cyan focus:outline-none transition-colors duration-300 resize-none"
                                        placeholder="Describe your message from the other side..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan font-mono font-bold rounded-lg hover:bg-neon-cyan hover:text-black transition-all duration-300 relative overflow-hidden group"
                                    whileHover={
                                        shouldReduceMotion
                                            ? {}
                                            : { scale: 1.02 }
                                    }
                                    whileTap={{ scale: 0.98 }}>
                                    <span className="relative z-10 flex items-center justify-center space-x-2">
                                        <Send size={20} />
                                        <span>SEND TRANSMISSION</span>
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-neon-cyan"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.button>
                            </form>

                            {/* Form Decorative Effects */}
                            <motion.div
                                className="absolute inset-0 rounded-lg pointer-events-none opacity-30"
                                style={{
                                    background:
                                        "linear-gradient(0deg, transparent 50%, rgba(0, 229, 255, 0.05) 50%)",
                                    backgroundSize: "100% 4px",
                                }}
                                animate={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                              backgroundPosition: [
                                                  "0px 0px",
                                                  "0px 40px",
                                              ],
                                          }
                                }
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "linear",
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6">
                        {/* Contact Information Cards */}
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.6,
                                }}
                                whileHover={
                                    shouldReduceMotion ? {} : { scale: 1.02 }
                                }
                                className={`
                  bg-dark-gray/80 rounded-lg p-6 border-2 border-${info.color}/30 
                  hover:border-${info.color} transition-all duration-300 backdrop-blur-sm
                  hover:shadow-${info.color} group cursor-pointer
                `}>
                                <div className="flex items-start space-x-4">
                                    <div
                                        className={`p-3 bg-${info.color}/20 rounded-lg border border-${info.color}/50 group-hover:animate-pulse`}>
                                        <span className={`text-${info.color}`}>
                                            {info.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h4
                                            className={`text-${info.color} font-bold font-stranger mb-2`}>
                                            {info.label}
                                        </h4>
                                        <p className="text-gray-300 font-mono text-sm whitespace-pre-line">
                                            {info.value}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <motion.div
                                    className={`absolute inset-0 bg-${info.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                                    style={{
                                        background: `linear-gradient(45deg, transparent, rgba(0, 229, 255, 0.1), transparent)`,
                                    }}
                                />
                            </motion.div>
                        ))}

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="bg-dark-gray/80 rounded-lg p-6 border-2 border-neon-purple/30 hover:border-neon-purple transition-all duration-300 backdrop-blur-sm">
                            <h4 className="text-neon-purple font-bold font-stranger mb-4">
                                Dimensional Gateway
                            </h4>
                            <div className="aspect-video bg-darker-gray/50 rounded-lg border border-neon-purple/30 relative overflow-hidden">
                                {/* Stylized Map Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin
                                            className="text-neon-purple mx-auto mb-2"
                                            size={32}
                                        />
                                        <p className="text-neon-purple font-mono text-sm">
                                            Institute
                                        </p>
                                        <p className="text-gray-400 font-mono text-xs">
                                            Grid Coordinates: 41.1°N, 87.6°W
                                        </p>
                                    </div>
                                </div>

                                {/* Grid Overlay */}
                                <div
                                    className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage: `
                      linear-gradient(rgba(156, 39, 176, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(156, 39, 176, 0.3) 1px, transparent 1px)
                    `,
                                        backgroundSize: "20px 20px",
                                    }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-center mt-16 pt-8 border-t border-gray-700">
                    <p className="text-gray-400 font-mono text-sm">
                        &copy; 2025 Infotsav. All rights reserved across all
                        dimensions.
                    </p>
                    <p className="text-gray-500 font-mono text-xs mt-2">
                        "In the darkness, we find the light of innovation."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
