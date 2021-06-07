import React, { Component } from 'react';
import styles from '@styles/SocialMenu.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const SocialMenuIcon = ({ link, icon, tooltip }) => {
  return (
    <Tippy content={<span>{tooltip}</span>}>
      <div className={styles.social__container}>
        <a href={link} target='_blank' rel='noreferrer nofollow'>
          {icon}
        </a>
      </div>
    </Tippy>
  );
};

export default SocialMenuIcon;
