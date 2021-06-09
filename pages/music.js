import React, { useEffect } from 'react';
import styles from '@styles/Music.module.scss';
import AlbumGrid from '@components/AlbumGrid/AlbumGrid';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

const Music = () => {
  return (
    <section className={styles.music}>
      <h1 className='page_title'>Music</h1>
      {/* <AlbumGrid /> */}
      <MusicPlayer />
    </section>
  );
};

export default Music;
