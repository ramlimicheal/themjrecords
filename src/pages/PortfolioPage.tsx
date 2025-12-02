import React from 'react';
import { motion } from 'framer-motion';

const PortfolioPage: React.FC = () => {
    const DISCOGRAPHY = [
        { title: 'Midnight in Malibu', artist: 'Ramli T. Michael', role: 'Producer, Mix', year: '2024', streams: '2.4M' },
        { title: 'Block Party', artist: 'feat. Judah', role: 'Vocal Prod, Master', year: '2024', streams: '1.8M' },
        { title: 'Saudade', artist: 'Instrumental', role: 'Producer', year: '2023', streams: '1.5M' },
        { title: 'Eclipse EP', artist: 'Emerging Artist', role: 'Full Production', year: '2023', streams: '500K+' },
        { title: 'Neon Lights', artist: 'Synthwave Collective', role: 'Mastering', year: '2022', streams: '850K' },
        { title: 'Urban Jungle', artist: 'Trap Star', role: 'Mixing', year: '2022', streams: '3.2M' },
    ];

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
            <section className="mb-24">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8"
                >
                    SELECTED WORKS
                </motion.h1>
                <p className="text-[#888] max-w-2xl text-lg leading-relaxed">
                    A curated collection of our most impactful projects. From chart-topping singles to underground gems, our sonic fingerprint is unmistakable.
                </p>
            </section>

            {/* Featured Track (Large) */}
            <section className="mb-32">
                <div className="w-full aspect-[21/9] bg-[#111] border border-[#222] relative overflow-hidden group cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2000&auto=format&fit=crop"
                        alt="Featured Album Art"
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                    />
                    <div className="absolute bottom-0 left-0 p-8 md:p-16">
                        <span className="text-white/60 text-xs uppercase tracking-widest mb-2 block">Latest Release</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">NEON GRAVES</h2>
                        <p className="text-[#ccc] max-w-md mb-8">A dark melodic trap anthem featuring intricate hi-hat patterns and haunting synth textures. Produced, Mixed, and Mastered by MJ Records.</p>
                        <button className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#ccc] transition-colors">
                            Listen Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Discography List */}
            <section>
                <div className="flex items-end justify-between border-b border-[#222] pb-6 mb-8">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Artist Collaborations</h3>
                    <span className="text-[#666] text-xs uppercase tracking-wide">Selected Credits</span>
                </div>

                <div className="grid grid-cols-1">
                    {DISCOGRAPHY.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="grid grid-cols-12 gap-4 py-6 border-b border-[#222] items-center hover:bg-[#0A0A0A] transition-colors group"
                        >
                            <div className="col-span-1 text-[#444] font-mono text-xs">0{i + 1}</div>
                            <div className="col-span-5 md:col-span-4">
                                <h4 className="text-white font-bold uppercase tracking-tight text-lg group-hover:text-[#ccc] transition-colors">{item.title}</h4>
                                <p className="text-[#666] text-xs uppercase tracking-wide">{item.artist}</p>
                            </div>
                            <div className="col-span-3 md:col-span-3 text-[#888] text-xs uppercase tracking-widest">{item.role}</div>
                            <div className="col-span-3 md:col-span-2 text-[#666] text-xs font-mono">{item.year}</div>
                            <div className="hidden md:block col-span-2 text-right text-[#555] text-xs font-mono">{item.streams} Streams</div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
