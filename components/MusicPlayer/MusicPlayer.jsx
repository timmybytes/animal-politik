import React, { useState } from 'react';
import { faitAccompli, simulacra, multnomah } from '../../musicData';
import styles from './MusicPlayer.module.scss';
import AlbumSelector from './AlbumSelector/AlbumSelector';
import PlayerHeader from './PlayerHeader/PlayerHeader';
import PlayerAudio from './PlayerAudio/PlayerAudio';
import PlayerArt from './PlayerArt/PlayerArt';
import PlayerTracks from './PlayerTracks/PlayerTracks';

const NewMusicPlayer = () => {
  const [currentAlbum, setCurrentAlbum] = useState(simulacra);
  const [currentSong, setCurrentSong] = useState({ title: '', audio: '' });

  return (
    <div className={styles.player}>
      {/* Select album from array */}
      <AlbumSelector
        albums={[faitAccompli, simulacra, multnomah]}
        setCurrentAlbum={setCurrentAlbum}
      />

      {/* Responsive grid container for player UI */}
      <div className={styles.player_grid}>
        <PlayerHeader currentSong={currentSong} currentAlbum={currentAlbum} />

        {/* Render audio player only when valid song is selected */}
        <PlayerAudio currentSong={currentSong} />

        {/* Show the artwork and caption for current album */}
        <PlayerArt currentAlbum={currentAlbum} />

        {/* Show tracklist of currently selected album */}
        <PlayerTracks
          setCurrentSong={setCurrentSong}
          currentAlbum={currentAlbum}
          currentSong={currentSong}
        />
      </div>
    </div>
  );
};

export default NewMusicPlayer;
