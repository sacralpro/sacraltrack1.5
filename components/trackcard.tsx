import React from 'react';
import styles from './trackcard.module.css';


interface Track {
  id: string;
  title: string;
  artist: string;
  imageUrl?: string;
  audioUrl: string;
}

interface TrackCardProps {
  track: Track;
  onPlayPause: (track: Track) => void;
  onBuy: (track: Track) => void;
  isPlaying: boolean | null;
}

const TrackCard: React.FC<TrackCardProps> = ({ track, onPlayPause, onBuy, isPlaying }) => {
  const handlePlayPause = () => {
    onPlayPause(track);
  };
  return (
    <div className={styles['main-container']}>
      <div className={styles['pic']} />
      <div className={styles['box']}>
        <div className={styles['img']} />
        <div className={styles['wrapper']} />
        <div className={styles['pic-2']} />
        <span className={styles['text']}>18</span>
      </div>
      <div className={styles['img-2']}>
        <div className={styles['pic-3']} />
      </div>
      <div className={styles['section']}>
        <div className={styles['pic-4']} />
        <div className={styles['pic-5']} />
        <div className={styles['section-2']}>
          <div className={styles['pic-6']} />
          <span className={styles['text-2']}>Create NFT</span>
        </div>
        <div className={styles['pic-7']} />
        <div className={styles['pic-8']} />
        <span className={styles['text-3']}>Share</span>
      </div>
      <h3>{track.title}</h3>
      <p>{track.artist}</p>
      <button onClick={handlePlayPause}>Play</button>
    </div>
    
  );
};

export default TrackCard;