import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="grid grid-cols-12 gap-4">
      <div className="col-span-12 mb-8 border-b border-[#222] pb-6">
        <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold uppercase tracking-tighter text-white mb-2"
        >
            Audio Services
        </motion.h3>
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs text-[#666] uppercase tracking-wide"
        >
            From Your DAW to Radio-Ready
        </motion.p>
      </div>

      <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222] border border-[#222] overflow-hidden">
        {SERVICES.map((service, index) => (
            <motion.div 
                key={service.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-[#0A0A0A] p-10 hover:bg-[#111] transition-colors flex flex-col h-full group"
            >
                <h4 className="text-lg font-bold text-white uppercase mb-1">{service.title}</h4>
                <span className="text-[10px] text-[#555] uppercase tracking-widest mb-8 block group-hover:text-[#777] transition-colors">{service.turnaround}</span>
                
                <div className="text-3xl font-serif italic text-white mb-8 opacity-80 group-hover:opacity-100 transition-opacity">{service.price}</div>
                
                <p className="text-xs text-[#888] leading-relaxed mb-12 flex-grow border-l border-[#333] pl-4">
                    {service.description}
                </p>

                <motion.button 
                    whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000", borderColor: "#fff" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border border-[#333] py-4 text-[9px] uppercase tracking-widest text-[#888] transition-all mt-auto"
                >
                    Book Now
                </motion.button>
            </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;