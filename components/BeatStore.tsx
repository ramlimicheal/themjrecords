import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TOP_BEATS } from '../constants';
import { Beat } from '../types';

interface BeatStoreProps {
    currentBeat?: Beat | null;
    isPlaying?: boolean;
    onPlay?: (beat: Beat) => void;
    onPause?: () => void;
    showViewAllLink?: boolean;
}

const BeatStore: React.FC<BeatStoreProps> = ({
    currentBeat,
    isPlaying,
    onPlay,
    onPause,
    showViewAllLink = true
}) => {
    const [expandedBeatId, setExpandedBeatId] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setExpandedBeatId(expandedBeatId === id ? null : id);
    };

    return (
        <section id="beats" className="relative">

            <div className="flex items-end justify-between border-b border-[#222] pb-6 mb-8">
                <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tighter text-white mb-2">Beat Store</h3>
                    <p className="text-xs text-[#666] uppercase tracking-wide">
                        Premium Licenses & Exclusives
                    </p>
                </div>
                {showViewAllLink && (
                    <div className="flex gap-4">
                        <motion.button
                            whileHover={{ x: 5, color: '#fff' }}
                            className="text-[10px] text-[#888] border-b border-[#888] pb-1 hover:border-white transition-colors uppercase tracking-widest w-fit"
                        >
                            <Link to="/beats">View Full Catalog →</Link>
                        </motion.button>
                    </div>
                )}
                {!showViewAllLink && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 bg-[#111] border border-[#333] px-4 py-2 rounded-full text-[10px] text-[#ccc] uppercase tracking-wider hover:border-white hover:text-white transition-all"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Ask AI Assistant
                    </motion.button>
                )}
            </div>

            <div className="grid grid-cols-1">
                <div className="grid grid-cols-12 gap-4 pb-4 text-[10px] text-[#444] uppercase tracking-widest font-semibold border-b border-[#222] mb-4 px-4">
                    <div className="col-span-1">#</div>
                    <div className="col-span-1"></div>
                    <div className="col-span-6 md:col-span-4">Title</div>
                    <div className="col-span-2 hidden md:block">BPM</div>
                    <div className="col-span-2 hidden md:block">Key</div>
                    <div className="col-span-4 md:col-span-2 text-right">Action</div>
                </div>

                {TOP_BEATS.map((beat, i) => (
                    <div key={beat.id} className="group border-b border-[#222] last:border-0">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={`grid grid-cols-12 gap-4 py-4 items-center hover:bg-[#111] px-4 transition-colors cursor-pointer ${expandedBeatId === beat.id ? 'bg-[#111]' : ''}`}
                            onClick={() => toggleAccordion(beat.id)}
                        >
                            <div className="col-span-1 text-[#444] font-mono text-xs">0{i + 1}</div>
                            <div className="col-span-1">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (currentBeat?.id === beat.id && isPlaying) {
                                            onPause?.();
                                        } else {
                                            onPlay?.(beat);
                                        }
                                    }}
                                    className="w-8 h-8 border border-[#333] flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all rounded-full"
                                >
                                    {currentBeat?.id === beat.id && isPlaying ? 'II' : '▶'}
                                </button>
                            </div>
                            <div className="col-span-6 md:col-span-4">
                                <h4 className="text-white font-bold uppercase tracking-tight text-sm">{beat.title}</h4>
                                <p className="text-[#666] text-[10px] uppercase tracking-wide">{beat.genre}</p>
                            </div>
                            <div className="col-span-2 hidden md:block text-[#666] text-xs font-mono">{beat.bpm}</div>
                            <div className="col-span-2 hidden md:block text-[#666] text-xs font-mono">{beat.key}</div>
                            <div className="col-span-4 md:col-span-2 text-right flex items-center justify-end gap-4">
                                <span className="text-white font-mono text-xs">${beat.price}</span>
                                <span className={`text-[10px] text-[#666] transform transition-transform ${expandedBeatId === beat.id ? 'rotate-180' : ''}`}>▼</span>
                            </div>
                        </motion.div>

                        {/* Accordion Content */}
                        <AnimatePresence>
                            {expandedBeatId === beat.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden bg-[#050505] border-x border-[#222]"
                                >
                                    <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#222] border-b border-[#222]">
                                        {/* Column 1: Track Intel */}
                                        <div className="md:col-span-4 space-y-6">
                                            <div>
                                                <h5 className="text-[#444] text-[10px] font-bold uppercase tracking-widest mb-2">Sonic DNA</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {['Analog Synth', '808 Bass', 'Live Percussion', 'Vocal Chops'].map(tag => (
                                                        <span key={tag} className="text-[9px] text-[#888] border border-[#333] bg-[#111] px-2 py-1 uppercase tracking-wider font-mono">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-[#111] p-3 border border-[#222]">
                                                    <span className="block text-[#444] text-[9px] uppercase tracking-widest mb-1">BPM</span>
                                                    <span className="text-white font-mono text-xl">{beat.bpm}</span>
                                                </div>
                                                <div className="bg-[#111] p-3 border border-[#222]">
                                                    <span className="block text-[#444] text-[9px] uppercase tracking-widest mb-1">Key</span>
                                                    <span className="text-white font-mono text-xl">{beat.key || 'Cm'}</span>
                                                </div>
                                            </div>

                                            <div>
                                                <h5 className="text-[#444] text-[10px] font-bold uppercase tracking-widest mb-2">Mood</h5>
                                                <p className="text-[#ccc] text-xs leading-relaxed font-light">
                                                    A dark, cinematic soundscape designed for storytelling. Features heavy low-end saturation and wide stereo imaging.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Column 2: Visualizer (Abstract) */}
                                        <div className="md:col-span-4 flex flex-col justify-center items-center border-x border-[#222] bg-[#080808] relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#222] via-[#000] to-[#000] opacity-50"></div>
                                            <div className="relative z-10 flex items-end gap-1 h-16">
                                                {[...Array(8)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{ height: [10, 40, 20, 50, 30] }}
                                                        transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                                                        className="w-2 bg-[#333]"
                                                    />
                                                ))}
                                            </div>
                                            <span className="relative z-10 mt-4 text-[9px] text-[#444] uppercase tracking-[0.2em]">Audio Spectrum Analysis</span>
                                        </div>

                                        {/* Column 3: License Terminal */}
                                        <div className="md:col-span-4 flex flex-col justify-between">
                                            <div>
                                                <h5 className="text-[#444] text-[10px] font-bold uppercase tracking-widest mb-4">Select License</h5>
                                                <div className="space-y-2">
                                                    <button className="w-full flex justify-between items-center p-3 border border-[#333] hover:border-white hover:bg-[#111] transition-all group text-left">
                                                        <div>
                                                            <span className="block text-white text-xs font-bold uppercase tracking-wide">MP3 Lease</span>
                                                            <span className="text-[#666] text-[9px] uppercase">Non-Exclusive</span>
                                                        </div>
                                                        <span className="text-white font-mono text-xs group-hover:text-green-400">${beat.price}</span>
                                                    </button>
                                                    <button className="w-full flex justify-between items-center p-3 border border-[#333] hover:border-white hover:bg-[#111] transition-all group text-left">
                                                        <div>
                                                            <span className="block text-white text-xs font-bold uppercase tracking-wide">WAV Lease</span>
                                                            <span className="text-[#666] text-[9px] uppercase">High Quality</span>
                                                        </div>
                                                        <span className="text-white font-mono text-xs group-hover:text-green-400">${(beat.price * 2).toFixed(2)}</span>
                                                    </button>
                                                    <button className="w-full flex justify-between items-center p-3 border border-[#333] hover:border-white hover:bg-[#111] transition-all group text-left">
                                                        <div>
                                                            <span className="block text-white text-xs font-bold uppercase tracking-wide">Unlimited</span>
                                                            <span className="text-[#666] text-[9px] uppercase">Stems Included</span>
                                                        </div>
                                                        <span className="text-white font-mono text-xs group-hover:text-green-400">${(beat.price * 5).toFixed(2)}</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <button className="mt-6 w-full bg-white text-black py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#ccc] transition-colors">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BeatStore;
