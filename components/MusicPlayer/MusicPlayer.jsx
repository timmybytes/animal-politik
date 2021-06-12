import React, { useState, useEffect } from 'react';
import styles from '@components/MusicPlayer/MusicPlayer.module.scss';
import { simulacra } from '../../musicData.js';

const TrackPlayer = ({ song, children, ...props }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
        border: '1px solid black',
        borderRadius: '6px',
      }}>
      <img
        style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
        src={song.artwork}
        alt={`Artwork for ${song.album}`}
      />
      <p>{song.title}</p>
      <p>{song.album}</p>
      <audio src={song.audio} controls></audio>
    </div>
  );
};

const MusicPlayer = () => {
  const [current, setCurrent] = useState({ title: '', audio: '' });

  const handleClick = e => {
    const songAudio = e.currentTarget.dataset.audio;
    const songTitle = e.currentTarget.dataset.title;
    setCurrent({ title: songTitle, audio: songAudio });
  };

  return (
    <div className={styles.MusicPlayer}>
      <>
        {/* Current Album Info & Player */}
        <div>
          <h2 className={styles.MusicPlayer__albumTitle}>Simulacra</h2>
          <p>{current.title}</p>
          <audio
            style={{ width: '100%' }}
            src={current.audio}
            controls
            playsInline
            mute
          />
        </div>
        {/* Current Album Tracklist */}
        <div>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyleType: 'none',
            }}>
            {simulacra.map((song, idx) => {
              const key = song.title;
              return (
                <li key={key}>
                  {song.trackNumber} - {song.title}{' '}
                  <button
                    data-title={song.title}
                    data-audio={song.audio}
                    onClick={handleClick}>
                    Play
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    </div>
  );
};

export default MusicPlayer;
