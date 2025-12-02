import React from 'react';
import { motion } from 'framer-motion';

interface UpcomingDemoProps {
    onPlay?: () => void;
    isPlaying?: boolean;
}

const UpcomingDemo: React.FC<UpcomingDemoProps> = ({ onPlay, isPlaying }) => {
    return (
        <div className="mb-20 max-w-[1400px] mx-auto px-6">
            <div className="relative overflow-hidden rounded-2xl border border-[#222] bg-[#050505] p-8 md:p-12 group">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left: Title & Badge */}
                    <div className="flex items-start gap-6">
                        <div className="relative">
                            <div className="w-16 h-16 bg-[#111] rounded-xl border border-[#333] flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                                <div className="w-6 h-6 border-2 border-white/20 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-white text-black text-[9px] font-bold px-2 py-1 uppercase tracking-widest rounded-full">
                                New
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tighter">Fresh Drops</h4>
                                {isPlaying && (
                                    <span className="flex gap-0.5 h-3 items-end">
                                        {[...Array(3)].map((_, i) => (
                                            <motion.span
                                                key={i}
                                                animate={{ height: ["20%", "100%", "20%"] }}
                                                transition={{
                                                    duration: 0.5,
                                                    repeat: Infinity,
                                                    delay: i * 0.1,
                                                    ease: "easeInOut"
                                                }}
                                                className="w-0.5 bg-green-500 rounded-full"
                                            />
                                        ))}
                                    </span>
                                )}
                            </div>
                            <p className="text-[#888] text-xs uppercase tracking-wide max-w-md leading-relaxed">
                                Exclusive preview of unreleased tracks. <br className="hidden md:block" />
                                Currently in the lab with Ramli & Judah.
                            </p>
                        </div>
                    </div>

                    {/* Right: Player */}
                    <div className="w-full md:w-auto flex flex-col gap-3">
                        <div className="flex items-center gap-4 bg-[#111]/50 backdrop-blur-sm p-4 rounded-xl border border-[#222] hover:border-[#444] transition-colors group-hover:bg-[#111]">
                            <button
                                onClick={onPlay}
                                className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:scale-110 transition-transform shadow-lg shadow-white/10"
                            >
                                {isPlaying ? (
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="3" height="12" fill="currentColor" />
                                        <rect x="7" width="3" height="12" fill="currentColor" />
                                    </svg>
                                ) : (
                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 6.13397C11.1667 6.51887 11.1667 7.48113 10.5 7.86603L1.5 13.0622C0.833334 13.4471 0 12.9659 0 12.1962L0 1.80385C0 1.03405 0.833334 0.55292 1.5 0.937822L10.5 6.13397Z" fill="currentColor" />
                                    </svg>
                                )}
                            </button>

                            <div className="flex flex-col gap-1 min-w-[200px] md:min-w-[300px]">
                                <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-[#666]">
                                    <span>Project: Nee En (Demo)</span>
                                    <span>{isPlaying ? "PLAYING..." : "0:45"}</span>
                                </div>
                                {/* Equalizer Visualizer */}
                                <div className="h-6 flex items-center gap-[2px] w-full overflow-hidden mask-linear-fade">
                                    {[...Array(40)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: "20%" }}
                                            animate={isPlaying ? {
                                                height: ["20%", "80%", "30%", "100%", "40%"],
                                                backgroundColor: ["#333", "#fff", "#333"]
                                            } : {
                                                height: "20%",
                                                backgroundColor: "#333"
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                                delay: i * 0.02,
                                                ease: "easeInOut"
                                            }}
                                            className="w-1 bg-[#333] rounded-full"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <span className="text-[9px] text-[#444] uppercase tracking-widest">Next Drop in 2 Days</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingDemo;


