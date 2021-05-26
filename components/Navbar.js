import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
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
              // src='/SkinnyRedVector.svg'
              src='/glitchLogo.gif'
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
                    ? {
                        borderBottom: '2px solid #64a7f5',
                        fontSize: '105%',
                        transition: '.2s',
                      }
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
                    ? {
                        borderBottom: '2px solid #64a7f5',
                        fontSize: '105%',
                        transition: '.2s',
                      }
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
                    ? {
                        borderBottom: '2px solid #64a7f5',
                        fontSize: '105%',
                        transition: '.2s',
                      }
                    : { borderBottom: 'none' }
                }>
                Music
              </a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a
                style={
                  active === '/contact'
                    ? {
                        borderBottom: '2px solid #64a7f5',
                        fontSize: '105%',
                        transition: '.2s',
                      }
                    : { borderBottom: 'none' }
                }>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
