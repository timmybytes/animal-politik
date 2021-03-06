import React, { useState } from 'react';
import { faitAccompli, simulacra, multnomah } from '../../musicData';
import styles from './MusicPlayer.module.scss';
import PlayerAlbumSelector from './PlayerAlbumSelector/PlayerAlbumSelector';
import PlayerHeader from './PlayerHeader/PlayerHeader';
import PlayerAudio from './PlayerAudio/PlayerAudio';
import PlayerArt from './PlayerArt/PlayerArt';
import PlayerTracks from './PlayerTracks/PlayerTracks';

const MusicPlayer = () => {
  const [currentAlbum, setCurrentAlbum] = useState(simulacra);
  const [currentSong, setCurrentSong] = useState({
    title: 'Quagmire',
    audio: '/music/simulacra/quagmire.mp3',
    album: 'Simulacra',
  });

  return (
    <div className={styles.player}>
      {/* Select album from array */}
      <PlayerAlbumSelector
        albums={[faitAccompli, multnomah, simulacra]}
        setCurrentAlbum={setCurrentAlbum}
        currentAlbum={currentAlbum}
      />

      {/* Responsive grid container for player UI */}
      <div className={styles.player_grid}>
        <PlayerHeader currentSong={currentSong} />

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

export default MusicPlayer;
