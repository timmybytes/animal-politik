import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Album.module.scss';

const Album = ({ title, cover, tracks, children }) => {
  const [hidden, setHidden] = useState(true);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const variants = {
    visible: idx => ({
      opacity: 1,
      transition: {
        delay: idx * 0.03,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div className={styles.album} onClick={() => setHidden(!hidden)}>
      <div className={styles.album__coverWrapper}>
        <img
          className={styles.album__cover}
          src={cover}
          alt={`${title} Cover Art`}
        />
      </div>
      <h3 className={styles.album__title}>{title}</h3>
      <button>Listen</button>
      {!hidden && children}
    </div>
  );
};

export default Album;
