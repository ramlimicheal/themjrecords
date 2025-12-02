import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="grid grid-cols-12 gap-4">
      <div className="col-span-12 mb-8 flex items-end justify-between border-b border-[#222] pb-6">
        <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold uppercase tracking-tighter text-white"
        >
            The Duo
        </motion.h3>
        <motion.span 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] text-[#666] uppercase tracking-widest hidden md:block"
        >
            Why Top Artists Choose Us
        </motion.span>
      </div>

      {TEAM.map((member, index) => (
        <motion.div 
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="col-span-12 md:col-span-6 group relative bg-[#0A0A0A] border border-[#222] p-8 md:p-12 hover:border-[#444] transition-colors duration-500 flex flex-col h-full"
        >
            <div className="absolute top-8 right-8 p-0 opacity-10 font-serif text-8xl text-white group-hover:opacity-20 transition-opacity select-none">
                {index === 0 ? 'RM' : 'JU'}
            </div>
            
            <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight relative z-10">{member.name}</h4>
            <p className="text-[10px] text-[#666] uppercase tracking-widest mb-8 relative z-10">{member.role}</p>
            
            <blockquote className="text-lg md:text-xl font-light text-[#ccc] italic mb-8 leading-snug relative z-10">
              "{member.quote}"
            </blockquote>
            
            <p className="text-xs text-[#888] leading-relaxed mb-8 border-l border-[#333] pl-4 relative z-10 max-w-xs">
              {member.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              {member.expertise.map(skill => (
                <span key={skill} className="text-[9px] border border-[#222] bg-[#111] px-3 py-1 text-[#666] uppercase tracking-wider group-hover:text-[#ccc] group-hover:border-[#444] transition-colors">
                  {skill}
                </span>
              ))}
            </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Team;