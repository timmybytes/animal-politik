import React, { useEffect } from 'react';
import styles from '@/styles/Music.module.scss';
import MusicPlayer from '@/components/MusicPlayer';
import AlbumGrid from '@/components/AlbumGrid';
import SocialMenu from '@/components/SocialMenu';

const Music = () => {
  return (
    <section className={styles.music}>
      <h1 className='page_title'>Music</h1>
      <SocialMenu />
      <AlbumGrid />
    </section>
  );
};

export default Music;
