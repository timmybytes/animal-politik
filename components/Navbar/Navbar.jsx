import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';
import Button from '@components/Button/Button';

export default function Navbar() {
  // const { toggleMenu } = useContext(MenuContext);

  return (
    <>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href='/'>
            <a>
              <video
                className={styles.logo}
                autoPlay
                loop
                muted
                playsInline
                // !IMPORTANT - 'poster' attr acts as fallback logo image for browsers blocking video
                poster='/graphics/SkinnyRedVector.svg'>
                <source src='/graphics/glitchLogo.webm' type='video/webm' />
                <source src='/graphics/glitchLogo.mp4' type='video/mp4' />
              </video>
            </a>
          </Link>
          <Button
            type='tracklist__flat'
            // onClick={toggleMenu}
          >
            <svg viewBox='0 0 10 8' width='40'>
              <path
                d='M1 1h8M1 4h 8M1 7h8'
                stroke='rgb(59, 59, 59)'
                stroke-width='1'
                stroke-linecap='square'
              />
            </svg>
          </Button>
          {/* <Menu /> */}
        </nav>
      </div>
      {/* <SocialMenu /> */}
    </>
  );
}
