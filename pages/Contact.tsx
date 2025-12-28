import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, Github, Twitter, Linkedin, X } from 'lucide-react';

const Contact: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-secondary-900 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-40 right-10 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-100/40 dark:bg-gray-800/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-gray-800 border border-primary-100 dark:border-gray-700 text-primary-700 dark:text-primary-400 mb-6 text-sm font-medium">
                        <span className="relative flex h-2 w-2 mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        Available for new projects
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
                        Let's build something <span className="devecho-gradient-text">extraordinary.</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass-panel p-8 rounded-2xl border border-gray-100 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50">
                            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Email Us</p>
                                        <a href="mailto:devecho10@gmail.com" className="text-lg font-semibold text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                            devecho10@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Call Us</p>
                                        <a href="tel:+8801645xxxxxx" className="text-lg font-semibold text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                            +8801645xxxxxx
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Visit Us</p>
                                        <p className="text-lg font-semibold text-secondary-900 dark:text-white">
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">Connect with us</p>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <Github className="w-5 h-5" />, href: "#" },
                                        { icon: <Twitter className="w-5 h-5" />, href: "#" },
                                        { icon: <Linkedin className="w-5 h-5" />, href: "#" }
                                    ].map((social, idx) => (
                                        <a key={idx} href={social.href} className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-800 transition-all">
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-panel p-8 md:p-10 rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-secondary-900 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-secondary-900 dark:text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-secondary-900 dark:text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-secondary-900 dark:text-gray-300">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all appearance-none"
                                >
                                    <option>General Inquiry</option>
                                    <option>Project Estimation</option>
                                    <option>Careers</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-secondary-900 dark:text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-secondary-900 to-secondary-800  rounded-xl transition-all shadow-lg hover:shadow-primary-500/25 transform hover:-translate-y-1"
                            >
                                Send Message
                                <Send className="ml-2 w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-secondary-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-gray-100 dark:border-gray-700">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </button>

                        {/* Modal Content */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                            </div>
                            
                            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Contact us via Email</h2>
                            
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Send us your message directly to:
                            </p>

                            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
                                <a
                                    href="mailto:devecho10@gmail.com"
                                    className="text-lg font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors break-all"
                                >
                                    devecho10@gmail.com
                                </a>
                            </div>

                            <button
                                onClick={closeModal}
                                className="w-full px-6 py-3 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white font-semibold rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
