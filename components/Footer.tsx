import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer className="mt-20 pt-12 border-t border-[#222] grid grid-cols-1 md:grid-cols-12 gap-8 text-[10px] text-[#444] uppercase tracking-widest pb-12">
            <div className="md:col-span-4">
                <h5 className="text-white mb-6 text-xs font-bold">Studio</h5>
                <motion.a whileHover={{ x: 5, color: '#fff' }} href="mailto:studio@mj-records.com" className="block mb-2 text-[#888] transition-colors">studio@mj-records.com</motion.a>
                <motion.p whileHover={{ x: 5, color: '#fff' }} className="text-[#888] cursor-pointer transition-colors">+1 (555) 019-2834</motion.p>
                <p className="mt-4 text-[#555]">Mon-Fri, 10am-6pm EST</p>
            </div>

            <div className="md:col-span-4 md:col-start-9 flex flex-col md:flex-row justify-between gap-8">
                <div>
                    <h5 className="text-white mb-6 text-xs font-bold">Socials</h5>
                    <ul className="flex flex-col gap-2 text-[#888]">
                        <motion.li whileHover={{ x: 3, color: '#fff' }} className="cursor-pointer transition-colors">Instagram</motion.li>
                        <motion.li whileHover={{ x: 3, color: '#fff' }} className="cursor-pointer transition-colors">Twitter</motion.li>
                        <motion.li whileHover={{ x: 3, color: '#fff' }} className="cursor-pointer transition-colors">SoundCloud</motion.li>
                    </ul>
                </div>
                <div className="text-right flex flex-col justify-end">
                    <p className="text-[#333]">© {new Date().getFullYear()} MJ Records</p>
                    <p className="mt-1 text-[#333]">Ramli T. Michael & Judah</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
