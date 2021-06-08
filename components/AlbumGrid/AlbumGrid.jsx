import React from 'react';
import Album from '@components/Album/Album';
import { simulacra, faitAccompli, multnomah } from '../../albums';
import styles from './AlbumGrid.module.scss';
import BandCampPlayer from '../MusicPlayer/BandCampPlayer';

const AlbumGrid = () => {
  return (
    <section className={styles.albumGrid}>
      <Album
        title='Simulacra'
        tracks={simulacra}
        cover='/album-covers/simulacra-cover.jpg'>
        <BandCampPlayer album='simulacra' />
      </Album>
      <Album
        title='Multnomah'
        tracks={multnomah}
        cover='/album-covers/multnomah-cover.jpg'>
        <BandCampPlayer album='multnomah' />
      </Album>
      <Album
        title='Fait Accompli'
        tracks={faitAccompli}
        cover='/album-covers/fait-accompli-cover.jpg'>
        <BandCampPlayer album='faitAccompli' />
      </Album>
    </section>
  );
};

export default AlbumGrid;
