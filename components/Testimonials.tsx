import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="grid grid-cols-12 gap-8 border-t border-[#222] pt-24 mb-12">
      {TESTIMONIALS.map((t, i) => (
            <motion.div 
                key={i} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="col-span-12 md:col-span-4 flex flex-col justify-between"
            >
                <p className="text-sm md:text-base font-light text-[#ccc] leading-relaxed mb-6">
                    "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                    <div className="h-[1px] w-8 bg-[#333]"></div>
                    <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wide">{t.author}</div>
                        <div className="text-[9px] text-[#666] uppercase tracking-widest">{t.role}</div>
                    </div>
                </div>
            </motion.div>
        ))}
    </section>
  );
};

export default Testimonials;