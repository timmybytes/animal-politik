import SocialMenu from '@components/SocialMenu/SocialMenu';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = props => {
  const [openMenu, setOpenMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(true);
  return (
    <div className={styles.burgerMenu}>
      {/* Burger Menu Button */}
      <button
        // Use visibility instead of display to prevent layout shifts in navbar
        style={closeMenu ? { visibility: 'visible' } : { visibility: 'hidden' }}
        onClick={() => {
          setOpenMenu(!openMenu);
          setCloseMenu(!closeMenu);
        }}>
        {/* Burger Icon */}
        <svg
          className={styles.burgerIcon}
          viewBox='0 0 512 512'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z' />
        </svg>
      </button>
      {/* Menu */}
      <div
        className={styles.menu}
        style={
          closeMenu
            ? { display: 'none' }
            : {
                display: 'flex',
              }
        }>
        <button
          className={styles.closeIcon}
          onClick={() => {
            setOpenMenu(!openMenu);
            setCloseMenu(!closeMenu);
          }}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
            <path d='M0 0h24v24H0z' fill='none' />
          </svg>
        </button>
        <div className={styles.links}>
          <ul
            onClick={() => {
              setOpenMenu(!openMenu);
              setCloseMenu(!closeMenu);
            }}>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/music'>
                <a>Music</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <SocialMenu />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
