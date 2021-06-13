import React, { useState } from 'react';
import Button from '@components/Button/Button';
import { faitAccompli, simulacra, multnomah } from '../../musicData';
import styles from './NewMusicPlayer.module.scss';

const NewMusicPlayer = () => {
  const [currentAlbum, setCurrentAlbum] = useState(simulacra);
  const [currentSong, setCurrentSong] = useState({ title: '', audio: '' });
  console.log(currentSong);
  return (
    <div className={styles.player}>
      <div className={styles.buttons}>
        <h3>Albums</h3>
        <Button value={simulacra} onClick={() => setCurrentAlbum(simulacra)}>
          Simulacra
        </Button>
        <Button value={multnomah} onClick={() => setCurrentAlbum(multnomah)}>
          Multnomah
        </Button>
        <Button
          value={faitAccompli}
          onClick={e => setCurrentAlbum(faitAccompli)}>
          Fait Accompli
        </Button>
      </div>
      <div className={styles.player_grid}>
        <div className={styles.header}>
          {currentSong.title ? 'Now Playing:' : 'No song selected'}{' '}
          <span>{currentSong.title}</span>
          {currentSong.audio ? `(${currentAlbum.albumTitle})` : ''}
        </div>
        {currentSong !== '/' && (
          <audio
            className={styles.audio}
            src={currentSong.audio}
            controls
            autoPlay={true}
            playsInline={true}
          />
        )}
        <div className={styles.art}>
          <img
            src={currentAlbum.albumArt}
            alt={`Album art for ${currentAlbum}`}
          />
          <div className={styles.art_caption}>
            {currentAlbum && (
              <figcaption>
                {currentAlbum.albumTitle} ({currentAlbum.albumYear})
              </figcaption>
            )}
          </div>
        </div>
        <ul className={styles.tracks}>
          {currentAlbum.tracks.map(track => {
            return (
              <li
                key={track.trackID}
                style={
                  currentSong.title === track.trackTitle
                    ? {
                        fontWeight: 'bold',
                        border: '2px solid #fe7272',
                      }
                    : {}
                }
                onClick={() =>
                  setCurrentSong({
                    title: track.trackTitle,
                    audio: track.trackAudio,
                  })
                }>
                {track.trackNumber}. {track.trackTitle}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewMusicPlayer;
