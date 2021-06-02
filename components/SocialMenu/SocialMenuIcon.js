import React from 'react';
import { motion } from 'framer-motion';
import styles from '@styles/SocialMenu.module.scss';
import * as Icon from 'react-icons/si';

const SocialMenuIcon = ({ link, icon }) => {
  /*
  Container
    Link
      Icon
  */
  let socialIcon = icon => {
    return icon.toLowerCase();
  };

  const iconMap = {
    apple: Icon.SiApplemusic,
    spotify: Icon.SiSpotify,
    bandcamp: Icon.SiBandcamp,
    twitter: Icon.SiTwitter,
    instagram: Icon.SiInstagram,
    youtube: Icon.SiYoutube,
    soundcloud: Icon.SiSoundcloud,
    kofi: Icon.SiKoFi,
  };

  console.log(iconMap[icon.toLowerCase()]);

  return (
    <motion.div className={styles.social__container}>
      <a href={link} target='_blank' rel='noreferrer nofollow'>
        {/* Icon */}
      </a>
    </motion.div>
  );
};

export default SocialMenuIcon;
