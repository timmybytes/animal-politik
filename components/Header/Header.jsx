import Button from '@components/Button/Button';
import Link from 'next/link';
import React from 'react';
import BurgerMenu from './BurgerMenu';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <img
            className={styles.logo}
            src='/graphics/SkinnyRedVector.svg'
            alt='logo'
          />
        </a>
      </Link>
      <BurgerMenu />
    </header>
  );
};

export default Header;
