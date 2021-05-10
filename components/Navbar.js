import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import AuthContext from '../stores/authContext';
import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href='/'>
          <a>
            <img
              className={styles.logo}
              src='/SkinnyRedVector.svg'
              alt='Animal Politik logo'
            />
          </a>
        </Link>
        {/* NOTE: Comment out and reload site during development for authReady-dependent code to load, then enter the Netlify site URL into the login modal.  */}
        <ul>
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
            <Link href='/store'>
              <a>Store</a>
            </Link>
          </li>
          <li>
            <Link href='/members'>
              <a>Members Only</a>
            </Link>
          </li>
          {authReady && (
            <>
              {!user && (
                <li className={styles.btn} onClick={login}>
                  Login/Signup
                </li>
              )}
              {user && (
                <li>
                  <strong>{user.user_metadata.full_name}</strong>
                </li>
              )}
              {user && (
                <li className={styles.btn} onClick={logout}>
                  Logout
                </li>
              )}
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
