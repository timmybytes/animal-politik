import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/SocialMenu.module.scss';

const SocialMenu = () => {
  return (
    <div className={styles.social}>
      <motion.div
        animate={{ scale: 1.3 }}
        transition={{ duration: 0.2 }}
        className={styles.social__container}
      />
      <motion.div
        animate={{ scale: 1.3 }}
        transition={{ duration: 0.2 }}
        className={styles.social__container}
      />
      <motion.div
        animate={{ scale: 1.3 }}
        transition={{ duration: 0.2 }}
        className={styles.social__container}
      />
      <motion.div
        animate={{ scale: 1.3 }}
        transition={{ duration: 0.2 }}
        className={styles.social__container}
      />
      <motion.div
        animate={{ scale: 1.3 }}
        transition={{ duration: 0.2 }}
        className={styles.social__container}
      />
    </div>
  );
};

export default SocialMenu;
