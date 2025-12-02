import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const FeaturedProductions: React.FC = () => {
    // Mock data for homepage display
    const FEATURED_VIDEOS = [
        { id: 'dQw4w9WgXcQ', title: 'Top Artist: "Hit Single"', date: '2024', location: 'Produced by MJ' },
        { id: '5qap5aO4i9A', title: 'Global Star: "Album Cut"', date: '2024', location: 'Mixed by MJ' },
    ];

    return (
        <section id="featured" className="grid grid-cols-12 gap-4">
            <div className="col-span-12 mb-8 flex items-end justify-between border-b border-[#222] pb-6">
                <div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold uppercase tracking-tighter text-white mb-2"
                    >
                        Selected Productions
                    </motion.h3>
                    <p className="text-xs text-[#666] uppercase tracking-wide">
                        Brilliant songs we worked for top artists
                    </p>
                </div>
                <motion.div
                    whileHover={{ x: 5, color: '#fff' }}
                    className="text-[10px] text-[#888] border-b border-[#888] pb-1 hover:border-white transition-colors uppercase tracking-widest w-fit cursor-pointer"
                >
                    <Link to="/portfolio">View Full Discography →</Link>
                </motion.div>
            </div>

            {FEATURED_VIDEOS.map((video, index) => (
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

export default FeaturedProductions;
