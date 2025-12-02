
import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="grid grid-cols-12 gap-4 border-t border-[#222] pt-24 pb-12">
      <div className="col-span-12 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4"
        >
          READY TO ELEVATE YOUR SOUND?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#666] text-xs uppercase tracking-widest"
        >
          Choose your path with MJ Records
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ backgroundColor: '#111', borderColor: '#444' }}
        className="col-span-12 md:col-span-3 border border-[#222] p-8 flex flex-col items-center text-center transition-colors cursor-pointer"
      >
        <h3 className="text-white font-bold uppercase mb-2">Buy Beats</h3>
        <p className="text-[10px] text-[#666] mb-6">Browse our catalog of chart-ready instrumentals.</p>
        <span className="text-[9px] text-[#888] border-b border-[#333] pb-1 uppercase tracking-widest">View Store</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        whileHover={{ backgroundColor: '#111', borderColor: '#444' }}
        className="col-span-12 md:col-span-3 border border-[#222] p-8 flex flex-col items-center text-center transition-colors cursor-pointer"
      >
        <h3 className="text-white font-bold uppercase mb-2">Mixing</h3>
        <p className="text-[10px] text-[#666] mb-6">Professional mixing & mastering services.</p>
        <span className="text-[9px] text-[#888] border-b border-[#333] pb-1 uppercase tracking-widest">Get Quote</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ backgroundColor: '#111', borderColor: '#444' }}
        className="col-span-12 md:col-span-3 border border-[#222] p-8 flex flex-col items-center text-center transition-colors cursor-pointer"
      >
        <h3 className="text-white font-bold uppercase mb-2">Collab</h3>
        <p className="text-[10px] text-[#666] mb-6">Custom production for serious artists.</p>
        <span className="text-[9px] text-[#888] border-b border-[#333] pb-1 uppercase tracking-widest">Book Consult</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        whileHover={{ backgroundColor: '#111', borderColor: '#444' }}
        className="col-span-12 md:col-span-3 border border-[#222] p-8 flex flex-col items-center text-center transition-colors cursor-pointer"
      >
        <h3 className="text-white font-bold uppercase mb-2">Coaching</h3>
        <p className="text-[10px] text-[#666] mb-6">One-on-one production mentorship.</p>
        <span className="text-[9px] text-[#888] border-b border-[#333] pb-1 uppercase tracking-widest">Apply Now</span>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
