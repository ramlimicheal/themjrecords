import React from 'react';
import BeatStore from '../../components/BeatStore';
import FeaturedBeatSpotlight from '../../components/FeaturedBeatSpotlight';
import { Beat } from '../../types';
import { TOP_BEATS } from '../../constants';

interface BeatsPageProps {
    currentBeat: Beat | null;
    isPlaying: boolean;
    onPlay: (beat: Beat) => void;
    onPause: () => void;
}

const BeatsPage: React.FC<BeatsPageProps> = ({ currentBeat, isPlaying, onPlay, onPause }) => {
    return (
        <div className="pt-32 px-6 md:px-12 text-white max-w-[1400px] mx-auto">

            <FeaturedBeatSpotlight
                beat={TOP_BEATS[0]}
                onPlay={onPlay}
                isPlaying={isPlaying && currentBeat?.id === TOP_BEATS[0].id}
            />

            <BeatStore
                currentBeat={currentBeat}
                isPlaying={isPlaying}
                onPlay={onPlay}
                onPause={onPause}
                showViewAllLink={false}
            />
        </div>
    );
};

export default BeatsPage;
