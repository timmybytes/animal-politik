import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Menu.module.scss';

const Menu = ({ links, onClick }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = e => {
    setVisible(!visible);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => setVisible(!visible)}>Menu</button>
      <div
        className={styles.menu}
        style={
          !visible
            ? {
                display: 'none',
              }
            : {}
        }>
        {links.map(link => {
          return (
            <React.Fragment key={link.name}>
              <Link href={link.url}>
                <a onClick={() => setVisible(!visible)}>{link.name}</a>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <>
      {/* <button onClick={() => setVisible(!visible)}>Menu</button> */}
      <Menu
        links={[
          { url: '/', name: 'Home' },
          { url: '/about', name: 'About' },
          { url: '/music', name: 'Music' },
          { url: '/contact', name: 'Contact' },
        ]}
      />
      {/* <div className={styles.container}>
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
          <Button type='tracklist__flat' onClick={() => setVisible(!visible)}>
            <svg viewBox='0 0 10 8' width='40'>
              <path
                d='M1 1h8M1 4h 8M1 7h8'
                stroke='rgb(59, 59, 59)'
                strokeWidth='1'
                strokeLinecap='square'
              />
            </svg>
          </Button>
        </nav>
      </div> */}
      {/* <SocialMenu /> */}
    </>
  );
}
