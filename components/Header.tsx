import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="mb-6 md:mb-10 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-[#222] pb-6">
      {/* Logo Section */}
      <div className="flex flex-col justify-center items-start leading-[0.9] select-none">
        <Link to="/" className="group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-baseline gap-2"
          >
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white glitch"
              data-text="MJ RECORDS"
            >
              MJ RECORDS
            </h1>
            <span className="text-[10px] text-[#555] font-mono uppercase tracking-widest hidden md:inline-block">
              Est. 2024
            </span>
          </motion.div>
        </Link>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-semibold tracking-widest text-[#666] uppercase">
          {NAV_ITEMS.map((item, i) => {
            const isActive = location.pathname === item.href;
            return (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className={`transition-colors cursor-pointer hover:text-white ${isActive ? 'text-white' : ''}`}
              >
                <Link to={item.href}>
                  {item.label}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;