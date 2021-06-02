import React from 'react';
import { motion } from 'framer-motion';
import styles from '@styles/SocialMenu.module.scss';
import {
  SiApplemusic,
  SiBandcamp,
  SiInstagram,
  SiKoFi,
  SiSoundcloud,
  SiSpotify,
  SiTwitter,
  SiYoutube,
} from 'react-icons/si';

const SocialMenu = () => {
  return (
    <div className={styles.social}>
      <motion.div className={styles.social__container}>
        <a
          href='https://music.apple.com/us/artist/animal-politik/1494225714'
          target='_blank'
          rel='noreferrer nofollow'>
          <SiApplemusic />
        </a>
      </motion.div>
      <motion.div className={styles.social__container}>
        <a
          href='https://open.spotify.com/artist/72RvQ5IlKW2zrVlPuxSr9h'
          target='_blank'
          rel='noreferrer nofollow'>
          <SiSpotify />
        </a>
      </motion.div>
      <motion.div className={styles.social__container}>
        <a
          href='https://animalpolitik.bandcamp.com/'
          target='_blank'
          rel='noreferrer nofollow'>
          <SiBandcamp />
        </a>
      </motion.div>
      <motion.div className={styles.social__container}>
        <a
          href='https://soundcloud.com/user-511973193'
          target='_blank'
          rel='noreferrer nofollow'>
          <SiSoundcloud />
        </a>
      </motion.div>
      <motion.div className={styles.social__container}>
        <a
          href='https://twitter.com/nimalpolitik'
          target='_blank'
          rel='noreferrer nofollow'>
          <SiTwitter />
        </a>
      </motion.div>
      <motion.div className={styles.social__container}>
        <a
          href='https://music.youtube.com/channel/UCKg5BbKgpP3820f05b6JYbg'
          target='_blank'
          rel='noreferrer nofollow'>
          <SiYoutube />
        </a>
      </motion.div>
      <motion.div className={styles.social__container}>
        <a
          href='https://www.instagram.com/animal.politik/'
          target='_blank'
          rel='noreferrer nofollow'>
          <SiInstagram />
        </a>
      </motion.div>
      <motion.div className={styles.social__container}>
        <a
          href='https://ko-fi.com/animalpolitik'
          target='_blank'
          rel='noreferrer nofollow'>
          <SiKoFi />
        </a>
      </motion.div>
    </div>
  );
};

export default SocialMenu;
