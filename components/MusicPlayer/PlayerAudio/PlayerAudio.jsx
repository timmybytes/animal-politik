import React, { useEffect } from 'react';
import styles from '../MusicPlayer.module.scss';

const PlayerAudio = ({ currentSong, ...props }) => {
  useEffect(() => {}, [currentSong]);

  return (
    <>
      {/* Render audio player only when valid song is selected */}
      {currentSong !== '/' && (
        <audio
          className={styles.audio}
          src={currentSong.audio}
          controls
          autoPlay={true}
          playsInline={true}
          preload='auto'>
          {/* Disclaimer if audio is blocked */}
          It looks like your browser can't play HTML5 audio! You can still{' '}
          <a href={currentSong.audio}>get the music directly here</a>.
        </audio>
      )}
    </>
  );
};

export default PlayerAudio;
