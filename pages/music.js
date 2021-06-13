import React from 'react';
import styles from '@styles/Music.module.scss';
import NewMusicPlayer from '../components/MusicPlayer/NewMusicPlayer';

const Music = () => {
  return (
    <section className={styles.music}>
      <h1 className='page_title'>Music</h1>
      <NewMusicPlayer />
      {/* <AlbumGrid /> */}
      {/* <MusicPlayer /> */}
    </section>
  );
};

export default Music;
