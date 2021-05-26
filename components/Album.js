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
        whileHover={{
          boxShadow:
            '0.5px 0.5px 0 0 #3B3B3B, 1px 1px 0 0 #3B3B3B, 1.5px 1.5px 0 0 #3B3B3B, 2px 2px 0 0 #3B3B3B, 2.5px 2.5px 0 0 #3B3B3B, 3px 3px 0 0 #3B3B3B, 3.5px 3.5px 0 0 #3B3B3B, 4px 4px 0 0 #3B3B3B, 4.5px 4.5px 0 0 #3B3B3B, 5px 5px 0 0 #3B3B3B, 5.5px 5.5px 0 0 #3B3B3B, 6px 6px 0 0 #3B3B3B, 6.5px 6.5px 0 0 #3B3B3B, 7px 7px 0 0 #3B3B3B, 7.5px 7.5px 0 0 #3B3B3B, 8px 8px 0 0 #3B3B3B',
          x: -8,
          y: -8,
        }}
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
                <>
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
                </>
              );
            })}
          </motion.ol>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Album;
