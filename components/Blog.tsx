
import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section className="grid grid-cols-12 gap-4">
      <div className="col-span-12 mb-8 flex items-end justify-between border-b border-[#222] pb-6">
        <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold uppercase tracking-tighter text-white"
        >
            Producer Insights
        </motion.h3>
        <motion.button 
             whileHover={{ x: 5, color: '#fff' }}
             className="text-[10px] text-[#888] border-b border-[#888] pb-1 hover:border-white transition-colors uppercase tracking-widest"
         >
             View All Articles →
         </motion.button>
      </div>

      {BLOG_POSTS.map((post, index) => (
        <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="col-span-12 md:col-span-4 group cursor-pointer"
        >
            <div className="h-48 bg-[#1a1a1a] mb-4 border border-[#222] overflow-hidden relative">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex items-center justify-between mb-2 text-[9px] text-[#555] uppercase tracking-widest">
                <span>{post.category}</span>
                <span>{post.date}</span>
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-[#ccc] transition-colors leading-relaxed">
                {post.title}
            </h4>
        </motion.div>
      ))}
    </section>
  );
};

export default Blog;
