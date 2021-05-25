import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthContext from '../stores/authContext';
import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  const router = useRouter();
  const [active, setActive] = useState('none');

  useEffect(() => {
    setActive(router.pathname);
  });

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
        <ul>
          <li>
            <Link href='/'>
              <a
                style={
                  active === '/'
                    ? { borderBottom: '2px solid #64a7f5' }
                    : { borderBottom: 'none' }
                }>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a
                style={
                  active === '/about'
                    ? { borderBottom: '2px solid #64a7f5' }
                    : { borderBottom: 'none' }
                }>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href='/music'>
              <a
                style={
                  active === '/music'
                    ? { borderBottom: '2px solid #64a7f5' }
                    : { borderBottom: 'none' }
                }>
                Music
              </a>
            </Link>
          </li>
          {/* <li>
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
          )} */}
        </ul>
      </nav>
    </div>
  );
}
