import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import Team from '../../components/Team';
import BeatStore from '../../components/BeatStore';
import Services from '../../components/Services';
import FeaturedProductions from '../../components/FeaturedProductions';
import Portfolio from '../../components/Portfolio';
import Blog from '../../components/Blog';
import Testimonials from '../../components/Testimonials';
import ContactCTA from '../../components/ContactCTA';
import UpcomingDemo from '../../components/UpcomingDemo';
import { Beat } from '../../types';

interface HomeProps {
    currentBeat: Beat | null;
    isPlaying: boolean;
    onPlay: (beat: Beat) => void;
    onPause: () => void;
}

const Home: React.FC<HomeProps> = ({ currentBeat, isPlaying, onPlay, onPause }) => {
    return (
        <div className="space-y-16">
            {/* Infinite Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full border-y border-[#222] py-3 mb-12 overflow-hidden relative"
            >
                <div className="animate-marquee whitespace-nowrap flex gap-4 text-[10px] font-medium text-[#666] uppercase tracking-wider">
                    <span>Chart-Ready Sound Crafted by Two Industry Forces — Ramli T. Michael & Judah — MJ Records Elite Production — Custom Beats — Mixing — Mastering — Live Performance — </span>
                    <span>Chart-Ready Sound Crafted by Two Industry Forces — Ramli T. Michael & Judah — MJ Records Elite Production — Custom Beats — Mixing — Mastering — Live Performance — </span>
                    <span>Chart-Ready Sound Crafted by Two Industry Forces — Ramli T. Michael & Judah — MJ Records Elite Production — Custom Beats — Mixing — Mastering — Live Performance — </span>
                    <span>Chart-Ready Sound Crafted by Two Industry Forces — Ramli T. Michael & Judah — MJ Records Elite Production — Custom Beats — Mixing — Mastering — Live Performance — </span>
                </div>
            </motion.div>

            <Hero />
            <UpcomingDemo />
            <Team />
            <BeatStore
                currentBeat={currentBeat}
                isPlaying={isPlaying}
                onPlay={onPlay}
                onPause={onPause}
            />
            <Services />
            <FeaturedProductions />
            <Portfolio />
            <Testimonials />
            <Blog />
            <ContactCTA />
        </div>
    );
};

export default Home;
