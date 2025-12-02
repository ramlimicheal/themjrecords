import React from 'react';

const UpcomingDemo: React.FC = () => {
    return (
        <div className="mb-20 max-w-[1400px] mx-auto px-6">
            <div className="relative overflow-hidden rounded-2xl border border-[#222] bg-[#050505] p-8 md:p-12 group">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left: Title & Badge */}
                    <div className="flex items-start gap-6">
                        <div className="relative">
                            <div className="w-16 h-16 bg-[#111] rounded-xl border border-[#333] flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                                <span className="text-2xl">🔥</span>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-white text-black text-[9px] font-bold px-2 py-1 uppercase tracking-widest rounded-full">
                                New
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tighter">Fresh Drops</h4>
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
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
                            <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:scale-110 transition-transform shadow-lg shadow-white/10">
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 6.13397C11.1667 6.51887 11.1667 7.48113 10.5 7.86603L1.5 13.0622C0.833334 13.4471 0 12.9659 0 12.1962L0 1.80385C0 1.03405 0.833334 0.55292 1.5 0.937822L10.5 6.13397Z" fill="currentColor" />
                                </svg>
                            </button>

                            <div className="flex flex-col gap-1 min-w-[200px] md:min-w-[300px]">
                                <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-[#666]">
                                    <span>Project: Neon Nights</span>
                                    <span>0:45</span>
                                </div>
                                <div className="h-1.5 bg-[#222] w-full rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-white to-[#888] w-1/3 rounded-full" />
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
