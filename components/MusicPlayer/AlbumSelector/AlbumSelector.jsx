import React from 'react';
import styles from '../MusicPlayer.module.scss';
import Button from '@components/Button/Button';

const AlbumSelector = ({ children, albums, setCurrentAlbum, ...props }) => {
  return (
    <div className={styles.buttons}>
      <h3>Albums</h3>
      {/* Render a button for each album object received from albums[] */}
      {albums ? (
        albums.map(album => {
          return (
            <Button value={album} onClick={() => setCurrentAlbum(album)}>
              {album.albumTitle}
            </Button>
          );
        })
      ) : (
        // Default if no albums are passed to AlbumSelector
        <p>No albums currently available.</p>
      )}
      {children}
    </div>
  );
};

export default AlbumSelector;
