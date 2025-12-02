
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Beat } from '../types';

interface MusicPlayerProps {
  currentBeat: Beat;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ currentBeat, isPlaying, onTogglePlay, onClose, onNext, onPrev }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play failed (user interaction needed first)", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentBeat]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audioRef.current.currentTime = percentage * audioRef.current.duration;
  };

  // Mock visualizer bars
  const visualizerBars = Array.from({ length: 24 });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 border-t border-[#333] backdrop-blur-xl"
    >
      <audio
        ref={audioRef}
        src={currentBeat.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => onTogglePlay()} // Or onNext
      />

      {/* Progress Bar Line */}
      <div
        className="w-full h-1 bg-[#222] cursor-pointer group relative"
        onClick={handleSeek}
      >
        <motion.div
          className="h-full bg-white relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 md:py-6">
        <div className="grid grid-cols-12 gap-4 items-center">

          {/* Track Info */}
          <div className="col-span-8 md:col-span-3 flex items-center gap-4">
            {/* Mini Visualizer Icon */}
            <div className="flex items-end gap-[2px] h-6 w-8">
              {isPlaying && [1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: ["20%", "100%", "50%", "90%"] }}
                  transition={{ duration: 0.4 + (i * 0.1), repeat: Infinity, repeatType: "mirror" }}
                  className="w-1.5 bg-white"
                />
              ))}
              {!isPlaying && <div className="w-full h-[2px] bg-[#333]" />}
            </div>

            <div className="overflow-hidden">
              <motion.h4
                key={currentBeat.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-white font-bold uppercase text-xs md:text-sm tracking-tight truncate"
              >
                {currentBeat.title}
              </motion.h4>
              <motion.p
                key={currentBeat.genre}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-[#666] text-[9px] md:text-[10px] uppercase tracking-widest truncate"
              >
                {currentBeat.genre} • {currentBeat.bpm} BPM
              </motion.p>
            </div>
          </div>

          {/* Controls - Centered */}
          <div className="hidden md:flex col-span-6 justify-center items-center gap-8">
            <button onClick={onPrev} className="text-[#666] hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>

            <button
              onClick={onTogglePlay}
              className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all group"
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button onClick={onNext} className="text-[#666] hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>

          {/* Mobile Controls & Volume/Close */}
          <div className="col-span-4 md:col-span-3 flex justify-end items-center gap-4 md:gap-8">
            {/* Play/Pause for Mobile */}
            <button
              onClick={onTogglePlay}
              className="md:hidden w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-white"
            >
              {isPlaying ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              )}
            </button>

            {/* Volume (Desktop) */}
            <div className="hidden md:flex items-center gap-2 group">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#666">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
              <div className="w-20 h-1 bg-[#333] relative cursor-pointer overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 h-full bg-[#666] group-hover:bg-white transition-colors" style={{ width: '80%' }}></div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-[#666] hover:text-white text-[9px] uppercase tracking-widest border border-[#333] px-3 py-1 hover:border-white transition-colors"
            >
              <span className="hidden md:inline">Close</span>
              <span className="md:hidden">✕</span>
            </button>
          </div>

        </div>

        {/* Creative Background Visualizer (Subtle) */}
        <div className="absolute bottom-0 left-0 right-0 h-full pointer-events-none z-[-1] opacity-10 flex items-end justify-between gap-1 overflow-hidden px-4">
          {isPlaying && visualizerBars.map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: ["5%", `${Math.random() * 80 + 10}%`, "10%"] }}
              transition={{
                duration: Math.random() * 1 + 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="w-full bg-gradient-to-t from-white to-transparent opacity-20"
              style={{ flex: 1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
