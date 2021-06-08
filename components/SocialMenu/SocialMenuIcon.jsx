import React from 'react';
import styles from './SocialMenu.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const SocialMenuIcon = ({ link, icon, tooltip }) => {
  return (
    <Tippy content={<span>{tooltip}</span>}>
      <div className={styles.social__iconContainer}>
        <a href={link} target='_blank' rel='noreferrer nofollow'>
          {icon}
        </a>
      </div>
    </Tippy>
  );
};

export default SocialMenuIcon;
