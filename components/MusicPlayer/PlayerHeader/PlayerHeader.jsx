import React from 'react';
import styles from '../MusicPlayer.module.scss';
import Button from '@components/Button/Button';

const PlayerHeader = ({ currentSong }) => {
  return (
    <div className={styles.header}>
      <div className={styles.inner__header}>
        {/* Show song/album for currently playing track */}
        {currentSong.title ? 'Now Playing:' : 'No song selected'}{' '}
        <span>{currentSong.title}</span>
        {currentSong.audio && `(${currentSong.album})`}
      </div>
    </div>
  );
};

export default PlayerHeader;
