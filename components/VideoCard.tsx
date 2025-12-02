import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoCardProps {
    videoId: string;
    title: string;
    date?: string;
    location?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, date, location }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="group relative w-full aspect-video bg-[#111] border border-[#222] overflow-hidden">
            {!isPlaying ? (
                <div
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                >
                    {/* Thumbnail */}
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/30 bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:border-white transition-colors"
                        >
                            <div className="w-0 h-0 border-l-[10px] md:border-l-[14px] border-l-white border-y-[6px] md:border-y-[8px] border-y-transparent ml-1" />
                        </motion.div>
                    </div>

                    {/* Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                        <h4 className="text-white text-sm font-bold uppercase tracking-tight mb-1">{title}</h4>
                        {(date || location) && (
                            <p className="text-[10px] text-[#888] uppercase tracking-widest">
                                {date} {date && location && '—'} {location}
                            </p>
                        )}
                    </div>
                </div>
            ) : (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default VideoCard;
