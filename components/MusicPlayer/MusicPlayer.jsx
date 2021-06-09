import React from 'react';
import styles from '@components/MusicPlayer/MusicPlayer.module.scss';

// <player>
//   <trackInfo>
//     <art></art>
//     <album></album>
//     <year></year>
//     <share></share>
//     <download></download>
//   </trackInfo >
//   <audio></audio>
// </player >

const MusicPlayer = () => {
  return (
    <>
      <div className={styles.player}>
        <div className={styles.trackInfo}>
          <h3>Quagmire</h3>
          <h4>
            Simulacra <span>•</span>
            <span className={styles.year}>2021</span>
          </h4>
        </div>
        <audio autoPlay={false} controls>
          <source src='/songs/Quagmire.mp3' type='audio/mp3' />
          <p>
            Your browser does not support the
            <code>audio</code> element. Here is a{' '}
            <a href='/songs/Quagmire.mp3'>link to the audio</a> instead.
          </p>
        </audio>
      </div>
    </>
  );
};

export default MusicPlayer;
