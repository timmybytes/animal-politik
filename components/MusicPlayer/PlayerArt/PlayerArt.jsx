import React from 'react';
import styles from '../MusicPlayer.module.scss';

const PlayerArt = ({ currentAlbum }) => {
  return (
    <div className={styles.art}>
      <img src={currentAlbum.albumArt} alt={`Album art for ${currentAlbum}`} />

      <div className={styles.art_caption}>
        {currentAlbum && (
          <figcaption>
            {currentAlbum.albumTitle} ({currentAlbum.albumYear})
          </figcaption>
        )}
      </div>
    </div>
  );
};

export default PlayerArt;
