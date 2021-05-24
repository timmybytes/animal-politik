import React, { useEffect } from 'react';
import styles from '../styles/Music.module.scss';

const Music = () => {
  const randomImage = () => {
    return 'https://picsum.photos/200';
  };
  return (
    <section className={styles.music}>
      <h1>Music</h1>
      <h2>Player</h2>
      <div>
        <div className={styles.player} style={{}}></div>
      </div>
      <h2>Releases</h2>
      <div className={styles.releases}>
        <div className={styles.album}>
          <h3>Simulacra</h3>
          <img src={randomImage()} alt='Random image' />
          <ol>
            <li></li>
          </ol>
        </div>
        <div className={styles.album}>
          <h3>Multnomah</h3>
          <img src={randomImage()} alt='Random image' />
          <ol>
            <li></li>
          </ol>
        </div>
        <div className={styles.album}>
          <h3>Fait Accompli</h3>
          <img src={randomImage()} alt='Random image' />
          <ol>
            <li></li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Music;
