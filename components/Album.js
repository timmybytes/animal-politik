import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Music.module.scss';

const Album = ({ title, cover, tracks }) => {
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
    <motion.div className={styles.album} onClick={() => setHidden(!hidden)}>
      <motion.img
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className={styles.album__cover}
        src={cover}
        alt={`${title} Cover Art`}
      />
      <h3 className={styles.album__title}>{title}</h3>
      <sub>(click for tracklist)</sub>
      <AnimatePresence>
        {!hidden && (
          <motion.ol
            initial='hidden'
            animate='visible'
            variants={list}
            className={styles.album__tracks}>
            {tracks.map((track, idx) => {
              return (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  custom={idx}
                  variants={variants}
                  animate='visible'
                  key={idx}>
                  {track.name}
                </motion.li>
              );
            })}
          </motion.ol>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Album;
