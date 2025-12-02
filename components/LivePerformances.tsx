import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const LivePerformances: React.FC = () => {
    // Mock data for homepage display
    const HIGHLIGHT_VIDEOS = [
        { id: 'dQw4w9WgXcQ', title: 'Live at The Blue Note', date: 'OCT 2024', location: 'NYC' }, // Placeholder ID
        { id: '5qap5aO4i9A', title: 'Studio Session: "Eclipse"', date: 'SEP 2024', location: 'LA' }, // Lo-fi placeholder
    ];

    return (
        <section id="live" className="grid grid-cols-12 gap-4">
            <div className="col-span-12 mb-8 flex items-end justify-between border-b border-[#222] pb-6">
                <div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold uppercase tracking-tighter text-white mb-2"
                    >
                        Live & Direct
                    </motion.h3>
                    <p className="text-xs text-[#666] uppercase tracking-wide">
                        Performance Highlights
                    </p>
                </div>
                <motion.div
                    whileHover={{ x: 5, color: '#fff' }}
                    className="text-[10px] text-[#888] border-b border-[#888] pb-1 hover:border-white transition-colors uppercase tracking-widest w-fit cursor-pointer"
                >
                    <Link to="/live">View All Dates →</Link>
                </motion.div>
            </div>

            {HIGHLIGHT_VIDEOS.map((video, index) => (
                <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="col-span-12 md:col-span-6"
                >
                    <VideoCard
                        videoId={video.id}
                        title={video.title}
                        date={video.date}
                        location={video.location}
                    />
                </motion.div>
            ))}
        </section>
    );
};

export default LivePerformances;
