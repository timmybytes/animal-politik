import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styles from '../styles/Music.module.scss';

const MusicPlayer = () => {
  return (
    <div className={styles.player}>
      <label htmlFor='audio player'>{'Song'}</label>
      <ReactAudioPlayer
        src='https://animalpolitik.org/wp-content/uploads/2021/05/Tabs%20On%20Your%20Insides.mp3'
        autoPlay={false}
        controls
      />
    </div>
  );
};

export default MusicPlayer;
