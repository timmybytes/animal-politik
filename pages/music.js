import React, { useEffect } from 'react';
import styles from '@styles/Music.module.scss';
import AlbumGrid from '@components/AlbumGrid/AlbumGrid';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
import { filterAlbums } from '../components/MusicPlayer/musicSorter';

const Music = () => {
  // filterAlbums(filterProperty, filterTerm)
  console.log(
    filterAlbums('albumTitle', 'Simulacra')
      .map(album => album.tracks)
      .map(tracks => tracks[0])
      .map(track => track.trackAudio)
  );
  return (
    <section className={styles.music}>
      <h1 className='page_title'>Music</h1>
      <div>
        <button>Simulacra</button>
        {filterAlbums('albumTitle', 'Simulacra').map(album => {
          <p>{album.tracks.trackTitle}</p>;
        })}
      </div>
      {/* <AlbumGrid /> */}
      {/* <MusicPlayer /> */}
    </section>
  );
};

export default Music;
