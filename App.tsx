import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Gradients from './components/Gradients';
import Header from './components/Header';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import Home from './src/pages/Home';
import BeatsPage from './src/pages/BeatsPage';
import AboutPage from './src/pages/AboutPage';
import ServicesPage from './src/pages/ServicesPage';
import PortfolioPage from './src/pages/PortfolioPage';
import BlogPage from './src/pages/BlogPage';
import ContactPage from './src/pages/ContactPage';
import { Beat } from './types';
import { TOP_BEATS } from './constants';

const App: React.FC = () => {
  const [currentBeat, setCurrentBeat] = useState<Beat | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayBeat = (beat: Beat) => {
    setCurrentBeat(beat);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    if (currentBeat) {
      setIsPlaying(!isPlaying);
    }
  };

  const handleClosePlayer = () => {
    setIsPlaying(false);
    setCurrentBeat(null);
  };

  const handleNext = () => {
    if (!currentBeat) return;
    const currentIndex = TOP_BEATS.findIndex(b => b.id === currentBeat.id);
    const nextIndex = (currentIndex + 1) % TOP_BEATS.length;
    setCurrentBeat(TOP_BEATS[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    if (!currentBeat) return;
    const currentIndex = TOP_BEATS.findIndex(b => b.id === currentBeat.id);
    const prevIndex = (currentIndex - 1 + TOP_BEATS.length) % TOP_BEATS.length;
    setCurrentBeat(TOP_BEATS[prevIndex]);
    setIsPlaying(true);
  };

  return (
    <Router>
      <div className={`min-h-screen bg-[#050505] text-[#EAEAEA] font-sans selection:bg-white selection:text-black overflow-x-hidden relative ${currentBeat ? 'pb-32' : ''}`}>
        <Gradients />

        {/* Grid Lines Background for Visual Alignment Debugging (Optional aesthetic choice) */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] hidden xl:grid grid-cols-12 gap-4 max-w-[1400px] mx-auto px-6 md:px-12">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full border-r border-white/20 last:border-r-0" />
          ))}
        </div>

        {/* Top Left Annotation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="fixed top-8 left-8 z-50 hidden 2xl:block mix-blend-difference"
        >
          <div className="text-[9px] leading-[1.4] text-[#888] font-medium tracking-wide font-mono">
            MJ RECORDS<br />
            EST. 2024<br />
            PROD. UNIT
          </div>
        </motion.div>

        {/* Main Container - Strict Grid System */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 relative z-10">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={
                <Home
                  currentBeat={currentBeat}
                  isPlaying={isPlaying}
                  onPlay={handlePlayBeat}
                  onPause={() => setIsPlaying(false)}
                />
              } />
              <Route path="/beats" element={
                <BeatsPage
                  currentBeat={currentBeat}
                  isPlaying={isPlaying}
                  onPlay={handlePlayBeat}
                  onPause={() => setIsPlaying(false)}
                />
              } />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          <Footer />
        </div>

        <AnimatePresence>
          {currentBeat && (
            <MusicPlayer
              currentBeat={currentBeat}
              isPlaying={isPlaying}
              onTogglePlay={handleTogglePlay}
              onClose={handleClosePlayer}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
