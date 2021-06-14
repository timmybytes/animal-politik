import React from 'react';
import styles from '../MusicPlayer.module.scss';

const PlayerTracks = ({ currentAlbum, setCurrentSong, currentSong }) => {
  return (
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
                album: currentAlbum.albumTitle,
              })
            }>
            {track.trackNumber}. {track.trackTitle}
          </li>
        );
      })}
    </ul>
  );
};

export default PlayerTracks;
