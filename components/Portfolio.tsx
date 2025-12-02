
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section className="grid grid-cols-12 gap-4">
      <div className="col-span-12 mb-8 flex items-end justify-between border-b border-[#222] pb-6">
         <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold uppercase tracking-tighter text-white"
        >
            Discography
        </motion.h3>
        <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] text-[#666] uppercase tracking-widest hidden md:block"
        >
            Proof in the Playback
        </motion.span>
      </div>

      <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Featured Stream Stats */}
        <div className="space-y-4">
             {PORTFOLIO_ITEMS.map((item, index) => (
                <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border border-[#222] hover:bg-[#111] transition-colors group"
                >
                    <div className="flex flex-col">
                        <span className="text-white font-bold uppercase tracking-tight">{item.title}</span>
                        <span className="text-[10px] text-[#666] uppercase">{item.artist}</span>
                    </div>
                    <div className="text-right">
                         <span className="block text-xl font-serif italic text-white/80 group-hover:text-white transition-colors">{item.streams}</span>
                         <span className="text-[9px] text-[#444] uppercase tracking-widest">Streams</span>
                    </div>
                </motion.div>
             ))}
        </div>

        {/* Mock Spotify/Apple Music Embed Visual */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[300px] bg-[#111] border border-[#222] flex flex-col items-center justify-center p-8 overflow-hidden"
        >
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay"></div>
            <div className="relative z-10 text-center">
                <div className="text-4xl text-white mb-2 font-bold tracking-tighter">MJ RECORDS</div>
                <div className="text-[10px] text-[#666] uppercase tracking-[0.3em] mb-8">Official Playlist</div>
                <button className="bg-[#1DB954] text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
                    Listen on Spotify
                </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
