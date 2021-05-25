import React, { useState } from 'react';
import styles from '../styles/Music.module.scss';

const Album = ({ title, cover, tracks }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className={styles.album} onClick={() => setHidden(!hidden)}>
      <img
        className={styles.album__cover}
        src={cover}
        alt={`${title} Cover Art`}
      />
      <h3 className={styles.album__title}>{title}</h3>
      <p>(click for tracklist)</p>
      {!hidden && (
        <ol className={styles.album__tracks}>
          {tracks.map((track, idx) => {
            return <li key={idx}>{track.name}</li>;
          })}
        </ol>
      )}
    </div>
  );
};

export default Album;
