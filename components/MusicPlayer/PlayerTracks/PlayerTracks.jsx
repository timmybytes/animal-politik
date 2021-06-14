import React from 'react';
import styles from '../MusicPlayer.module.scss';
import Button from '@components/Button/Button';
import { RiDownloadCloudFill } from 'react-icons/ri';

const PlayerTracks = ({ currentAlbum, setCurrentSong, currentSong }) => {
  return (
    <div className={styles.tracks}>
      {currentAlbum.tracks.map(track => {
        {
          /* TODO: Download Buttons */
        }
        {
          /* <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              // justifyItems: 'stretch',
              alignItems: 'center',
              // alignContent: 'stretch',
            }}> */
        }
        return (
          <Button
            key={track.trackID}
            type={
              currentSong.title === track.trackTitle
                ? 'tracklist__outline'
                : 'tracklist__flat'
            }
            onClick={() =>
              setCurrentSong({
                title: track.trackTitle,
                audio: track.trackAudio,
                album: currentAlbum.albumTitle,
              })
            }>
            {track.trackNumber}. {track.trackTitle}
          </Button>
        );
        {
          /* TODO: Download Buttons */
        }
        {
          /* <Button type='tracklist__filled'>
              <RiDownloadCloudFill />
            </Button>
          </div> */
        }
      })}
    </div>
  );
};

export default PlayerTracks;
