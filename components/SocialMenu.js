import React from 'react';
import { motion } from 'framer-motion';

const SocialMenu = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <motion.div
        style={{
          width: 20,
          height: 20,
          background: 'red',
          borderRadius: 10,
        }}
      />
      <motion.div
        style={{
          width: 20,
          height: 20,
          background: 'red',
          borderRadius: 10,
        }}
      />
      <motion.div
        style={{
          width: 20,
          height: 20,
          background: 'red',
          borderRadius: 10,
        }}
      />
      <motion.div
        style={{
          width: 20,
          height: 20,
          background: 'red',
          borderRadius: 10,
        }}
      />
      <motion.div
        style={{
          width: 20,
          height: 20,
          background: 'red',
          borderRadius: 10,
        }}
      />
    </div>
  );
};

export default SocialMenu;
