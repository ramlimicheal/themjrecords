import React from 'react';
import { motion } from 'framer-motion';
import { Beat } from '../types';

interface FeaturedBeatSpotlightProps {
    beat: Beat;
    onPlay: (beat: Beat) => void;
    isPlaying: boolean;
}

const FeaturedBeatSpotlight: React.FC<FeaturedBeatSpotlightProps> = ({ beat, onPlay, isPlaying }) => {
    return (
        <div className="mb-16 border border-[#222] bg-[#050505] relative overflow-hidden group">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111] to-transparent opacity-50" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12 items-center">
                {/* Left: Info */}
                <div className="md:col-span-7 space-y-6">
                    <div className="inline-block px-3 py-1 border border-[#333] bg-[#000] text-[9px] text-white uppercase tracking-widest mb-2">
                        Featured Track of the Week
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
                        {beat.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-[#666] text-xs uppercase tracking-wide font-mono">
                        <span>{beat.bpm} BPM</span>
                        <span>•</span>
                        <span>{beat.key || 'Cm'}</span>
                        <span>•</span>
                        <span>{beat.genre}</span>
                    </div>
                    <p className="text-[#ccc] max-w-xl leading-relaxed">
                        A masterclass in modern production. Featuring analog warmth, punchy drums, and a melody that sticks. Perfect for artists looking for a billboard-ready sound.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button
                            onClick={() => onPlay(beat)}
                            className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#ccc] transition-colors flex items-center gap-2"
                        >
                            {isPlaying ? 'Pause' : 'Play Demo'}
                        </button>
                        <button className="border border-[#333] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:border-white transition-colors">
                            Purchase License ${beat.price}
                        </button>
                    </div>
                </div>

                {/* Right: Visuals */}
                <div className="md:col-span-5 flex justify-center md:justify-end">
                    <div className="w-64 h-64 border border-[#222] bg-[#111] relative flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center gap-1">
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [20, 60, 30, 80, 40] }}
                                    transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.1 }}
                                    className="w-2 bg-[#333]"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBeatSpotlight;
