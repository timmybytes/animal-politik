import React, { useState, useEffect } from 'react';
import styles from '@components/MusicPlayer/MusicPlayer.module.scss';
import { simulacra } from '../../musicData.js';

const trackPlayer = ({ track, children, ...props }) => {
  return (
    <div>
      <img src={track.artwork} alt={`Artwork for ${track.album}`} />
      <p>{track.title}</p>
      <p>{track.album}</p>
      <audio src={track.audio}></audio>
    </div>
  );
};

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState();

  const handleSinglePlay = e => {
    // console.log(e.target.title);
    console.log(e);
    setCurrentSong(e.target.title);
  };

  const handlePlay = e => {
    console.log('play');
  };

  const handleStop = e => {
    console.log('stop');
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        justifyItems: 'stretch',
        alignContent: 'stretch',
        width: '100%',
      }}
      className={styles.player}>
      {simulacra.map(song => {
        return (
          <div style={{ width: '100%' }}>
            <p>{song.title}</p>
            <audio
              onPlay={handlePlay}
              onPause={handleStop}
              src={song.audio}
              controls
              playsInline={true}
              loop={false}
              autoPlay={false}
              title={song.title}
              type={currentSong === song.title ? 'play' : 'pause'}>
              Your browser does not support HTML5 audio! But you can still
              download this song here: <a href={song.audio}>{song.title}</a>
            </audio>
          </div>
        );
      })}
    </div>
  );
};

export default MusicPlayer;
