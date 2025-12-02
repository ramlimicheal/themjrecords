import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
    const [projectType, setProjectType] = useState<string | null>(null);

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
            <section className="grid grid-cols-12 gap-12">

                {/* Contact Info */}
                <div className="col-span-12 md:col-span-5">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.9]"
                    >
                        LET'S<br />CREATE.
                    </motion.h1>
                    <p className="text-[#888] text-lg leading-relaxed mb-12">
                        Ready to take your sound to the next level? Tell us about your project. We are selective with who we work with to ensure quality.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-2">Studio</h5>
                            <p className="text-[#666] text-sm">Mumbai, India / Remote Worldwide</p>
                        </div>
                        <div>
                            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-2">Email</h5>
                            <a href="mailto:contact@mj-records.com" className="text-[#666] text-sm hover:text-white transition-colors">contact@mj-records.com</a>
                        </div>
                        <div>
                            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-2">Socials</h5>
                            <div className="flex gap-4 text-[#666] text-sm">
                                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                                <a href="#" className="hover:text-white transition-colors">YouTube</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-span-12 md:col-span-7">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group">
                                <label className="block text-[#444] text-xs uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Name</label>
                                <input type="text" className="w-full bg-transparent border-b border-[#333] py-2 text-white outline-none focus:border-white transition-colors placeholder-[#222]" placeholder="Your Name" />
                            </div>
                            <div className="group">
                                <label className="block text-[#444] text-xs uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Email</label>
                                <input type="email" className="w-full bg-transparent border-b border-[#333] py-2 text-white outline-none focus:border-white transition-colors placeholder-[#222]" placeholder="your@email.com" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[#444] text-xs uppercase tracking-widest mb-4">Project Type</label>
                            <div className="flex flex-wrap gap-3">
                                {["Custom Beat", "Mixing & Mastering", "Full Production", "Vocal Production"].map(type => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => setProjectType(type)}
                                        className={`px-6 py-3 border text-xs uppercase tracking-widest transition-all ${projectType === type
                                                ? 'bg-white text-black border-white'
                                                : 'border-[#333] text-[#666] hover:border-[#666] hover:text-[#ccc]'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-[#444] text-xs uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Message</label>
                            <textarea rows={4} className="w-full bg-transparent border-b border-[#333] py-2 text-white outline-none focus:border-white transition-colors placeholder-[#222] resize-none" placeholder="Tell us about your vision, references, and timeline..."></textarea>
                        </div>

                        <button type="submit" className="bg-white text-black px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#ccc] transition-colors w-full md:w-auto">
                            Send Request
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
