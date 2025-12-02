import React from 'react';
import { motion } from 'framer-motion';
import VideoCard from '../../components/VideoCard';

const LivePage: React.FC = () => {
    const TOUR_DATES = [
        { date: 'DEC 12', city: 'New York, NY', venue: 'Mercury Lounge', status: 'Tickets Available' },
        { date: 'DEC 18', city: 'Los Angeles, CA', venue: 'The Echo', status: 'Sold Out' },
        { date: 'JAN 05', city: 'London, UK', venue: 'Jazz Cafe', status: 'Selling Fast' },
        { date: 'JAN 12', city: 'Paris, FR', venue: 'Le Pop Up', status: 'Tickets Available' },
    ];

    const ARCHIVE_VIDEOS = [
        { id: 'dQw4w9WgXcQ', title: 'Live Set: "Neon Graves"', date: '2024', location: 'NYC' },
        { id: '5qap5aO4i9A', title: 'Improv Session', date: '2024', location: 'Studio A' },
        { id: 'jfKfPfyJRdk', title: 'Beat Breakdown Live', date: '2023', location: 'Workshop' }, // Lofi girl placeholder
        { id: '4xDzrJKXOOY', title: 'Festival Run Recap', date: '2023', location: 'Various' }, // Synthwave placeholder
    ];

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">

            {/* Hero Section */}
            <section className="mb-24">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8"
                >
                    LIVE
                </motion.h1>
                <div className="w-full h-[400px] bg-[#111] border border-[#222] relative overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1501386761106-e84b72d1e32f?q=80&w=2000&auto=format&fit=crop"
                        alt="Live Stage"
                        className="w-full h-full object-cover opacity-50 grayscale"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white/80 text-sm uppercase tracking-widest border border-white/30 px-6 py-3 backdrop-blur-md">
                            Experience the Sound in Person
                        </p>
                    </div>
                </div>
            </section>

            {/* Tour Dates */}
            <section className="mb-32 grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-4">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">Upcoming Dates</h3>
                    <p className="text-[#666] text-xs uppercase tracking-wide leading-relaxed">
                        Join us for an immersive sonic experience. Our live sets blend real-time production with vocal performance.
                    </p>
                </div>
                <div className="col-span-12 md:col-span-8">
                    <div className="border-t border-[#222]">
                        {TOUR_DATES.map((tour, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-[#222] group hover:bg-[#111] px-4 transition-colors"
                            >
                                <div className="flex items-center gap-8 mb-4 md:mb-0">
                                    <span className="text-white font-mono text-sm w-16">{tour.date}</span>
                                    <div>
                                        <h4 className="text-white text-lg font-bold uppercase tracking-tight">{tour.city}</h4>
                                        <p className="text-[#666] text-xs uppercase tracking-wide">{tour.venue}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                                    <span className={`text-[10px] uppercase tracking-widest ${tour.status === 'Sold Out' ? 'text-red-500' : 'text-[#888]'}`}>
                                        {tour.status}
                                    </span>
                                    <button
                                        disabled={tour.status === 'Sold Out'}
                                        className={`px-6 py-2 border text-[10px] uppercase tracking-widest transition-all ${tour.status === 'Sold Out'
                                                ? 'border-[#333] text-[#333] cursor-not-allowed'
                                                : 'border-white text-white hover:bg-white hover:text-black'
                                            }`}
                                    >
                                        Tickets
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Archive */}
            <section>
                <div className="mb-12 border-b border-[#222] pb-6">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Performance Archive</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ARCHIVE_VIDEOS.map((video) => (
                        <VideoCard
                            key={video.id}
                            videoId={video.id}
                            title={video.title}
                            date={video.date}
                            location={video.location}
                        />
                    ))}
                </div>
            </section>

            {/* Booking CTA */}
            <section className="mt-32 p-12 border border-[#222] bg-[#0A0A0A] text-center">
                <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-4">Book MJ Records Live</h3>
                <p className="text-[#888] mb-8 max-w-md mx-auto">Available for festivals, private showcases, and production workshops.</p>
                <a href="mailto:booking@mj-records.com" className="inline-block bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#ccc] transition-colors">
                    Contact Booking Agent
                </a>
            </section>
        </div>
    );
};

export default LivePage;
