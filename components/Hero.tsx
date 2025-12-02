
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Hero: React.FC = () => {

  return (
    <div id="hero" className="grid grid-cols-12 gap-4 mb-24 relative">

      {/* Background Image Container spanning full width of grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="col-span-12 relative w-full h-[60vh] min-h-[500px] xl:h-[700px] bg-[#1a1a1a] overflow-hidden"
      >
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale mix-blend-overlay"
          alt="MJ Records Studio"
        />

        {/* Background Image Blend */}
        <div className="absolute inset-0 z-0">
          <img
            src="/MJ.png"
            alt="MJ Records Background"
            className="w-full h-full object-cover object-top opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between z-10">

          {/* Nav */}
          <div className="flex justify-between items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[9px] text-[#999] leading-tight tracking-wide hidden sm:block border-l border-white/20 pl-3 font-mono"
            >
              RAMLI T. MICHAEL & JUDAH<br />
              PREMIUM PRODUCTION DUO
            </motion.div>
          </div>

          {/* Hero Text */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full items-end">
            <div className="md:col-span-8 relative z-20">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-2 leading-[0.9]"
                >
                  CHART-READY SOUND
                </motion.h2>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-7xl font-bold text-white/40 tracking-tight leading-[0.9]"
                >
                  CRAFTED BY FORCES.
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xs md:text-sm text-[#999] max-w-lg mb-8 leading-relaxed"
              >
                The powerhouse duo behind countless streaming hits. From custom beat creation to radio-ready mixing & mastering. Your vision, perfected.
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#EAEAEA] text-black border border-[#EAEAEA] px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors"
                >
                  <Link to="/beats">Browse Beats</Link>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000", borderColor: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm transition-colors"
                >
                  <Link to="/contact">Book Session</Link>
                </motion.button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hidden md:block col-span-4 text-right"
            >
              <div className="text-[9px] text-[#888] uppercase tracking-wide leading-loose">
                Grammy-Nominated Sound<br />
                Custom Beats<br />
                Mixing & Mastering
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
