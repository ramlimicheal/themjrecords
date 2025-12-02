import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';

const AboutPage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">

            {/* Hero / Story */}
            <section className="grid grid-cols-12 gap-8 mb-32">
                <div className="col-span-12 md:col-span-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.9]"
                    >
                        THE<br />DUO.
                    </motion.h1>
                </div>
                <div className="col-span-12 md:col-span-6 flex flex-col justify-end">
                    <p className="text-[#ccc] text-lg leading-relaxed mb-8">
                        MJ Records is the sonic partnership of Ramli T. Michael and Judah. Hailing from India, we bring a unique global perspective to modern production. We bridge the gap between traditional musicality and cutting-edge digital sound design.
                    </p>
                    <p className="text-[#888] text-sm leading-relaxed">
                        We are not limited by genre. From Bollywood fusion to Trap, Afrobeat to Pop, we craft custom sounds for every artist. Our mission is to bring your unique vision to life with world-class quality.
                    </p>
                </div>
            </section>

            {/* Minimal Duo Section */}
            <section className="space-y-32 mb-32">
                {/* Ramli Profile */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3">
                        <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-[#111] overflow-hidden group">
                            <div className="absolute inset-0 border border-[#222] z-10 group-hover:border-white/20 transition-colors duration-500" />
                            <img
                                src="/mike.png"
                                alt="Ramli T. Michael"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-2">Ramli T. Michael</h2>
                        <h3 className="text-[#666] text-xs font-mono uppercase tracking-widest mb-8">The Sonic Architect</h3>
                        <p className="text-[#ccc] leading-relaxed mb-8 text-sm max-w-xl">
                            Ramli is the master of texture and composition. With a deep background in classical Indian music and modern synthesis, he creates the landscapes that songs live in. His approach is surgical yet soulful.
                        </p>
                        <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center md:justify-start">
                            {["Cinematic Composition", "Advanced Synthesis", "Orchestral Arrangement", "Technical Mixing"].map(skill => (
                                <span key={skill} className="text-[#888] text-[10px] uppercase tracking-widest border-b border-[#222] pb-1">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Judah Profile */}
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="w-full md:w-1/3">
                        <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-[#111] overflow-hidden group">
                            <div className="absolute inset-0 border border-[#222] z-10 group-hover:border-white/20 transition-colors duration-500" />
                            <img
                                src="/judah.png"
                                alt="Judah"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-right flex flex-col items-center md:items-end">
                        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-2">Judah</h2>
                        <h3 className="text-[#666] text-xs font-mono uppercase tracking-widest mb-8">The Vocal Producer's Producer</h3>
                        <p className="text-[#ccc] leading-relaxed mb-8 text-sm max-w-xl">
                            Judah understands the voice as an instrument. He specializes in capturing the raw emotion of a performance and polishing it to radio perfection. His production style is rhythm-centric and punchy.
                        </p>
                        <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center md:justify-end">
                            {["Vocal Production", "Rhythm Design", "Rap Flow Coaching", "Competitive Mastering"].map(skill => (
                                <span key={skill} className="text-[#888] text-[10px] uppercase tracking-widest border-b border-[#222] pb-1">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Quote */}
            <section className="mb-32 py-24 border-y border-[#222] text-center">
                <blockquote className="text-2xl md:text-4xl font-light text-white italic max-w-4xl mx-auto leading-tight">
                    "We believe a record isn't finished until it makes you feel something you can't explain. Technical perfection is the baseline; emotional impact is the goal."
                </blockquote>
            </section>

            {/* Testimonials */}
            <Testimonials />
        </div>
    );
};

export default AboutPage;
