import React, { useEffect } from 'react';
import styles from './BandCampPlayer.module.scss';

const BandCampPlayer = ({ album }) => {
  const albums = {
    simulacra: '3977076337',
    multnomah: '386567576',
    faitAccompli: '3480589355',
  };

  useEffect(() => {
    <link
      rel='preload'
      href='https://bandcamp.com/EmbeddedPlayer/album=${albums[album]}/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/'
      as='document'
    />;
  }, []);

  return (
    <>
      <iframe
        className={styles.BandCampPlayer}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${albums[album]}/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/`}
        seamless>
        <a href='https://animalpolitik.bandcamp.com/album/simulacra'>
          Simulacra by Animal Politik
        </a>
      </iframe>
    </>
  );
};

export default BandCampPlayer;
