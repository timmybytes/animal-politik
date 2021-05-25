import React from 'react';
import Album from '../components/Album';
import { simulacra, faitAccompli, multnomah } from '../albums';
import styles from '../styles/Music.module.scss';

const AlbumGrid = () => {
  return (
    <>
      {/* <h2>Releases</h2> */}
      <section className={styles.grid}>
        <Album
          title='Simulacra'
          tracks={simulacra}
          cover='/album-covers/simulacra-cover.jpg'
        />
        <Album
          title='Multnomah'
          tracks={multnomah}
          cover='/album-covers/multnomah-cover.jpg'
        />
        <Album
          title='Fait Accompli'
          tracks={faitAccompli}
          cover='/album-covers/fait-accompli-cover.jpg'
        />
      </section>
    </>
  );
};

export default AlbumGrid;
