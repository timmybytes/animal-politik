import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';
import SocialMenu from '@components/SocialMenu/SocialMenu';

export default function Navbar() {
  const router = useRouter();
  const [active, setActive] = useState('none');

  useEffect(() => {
    setActive(router.pathname);
  });

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
      <SocialMenu />
    </>
  );
}
