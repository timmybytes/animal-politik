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
      <button onClick={() => setVisible(!visible)}>+</button>
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
      <header className={styles.container}>
        <Link href='/'>
          <a className={styles.logo}>
            <video
              style={{ maxWidth: '400px', width: '100%', height: 'auto' }}
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
        <Menu
          className={styles.burger}
          links={[
            { url: '/', name: 'Home' },
            { url: '/about', name: 'About' },
            { url: '/music', name: 'Music' },
            { url: '/contact', name: 'Contact' },
          ]}
        />
      </header>
    </>
  );
}
