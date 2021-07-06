import SocialMenu from '@components/SocialMenu/SocialMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';

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
              <img
                className={styles.logo}
                src='/graphics/Logo.svg'
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
            <li>
              <Link href='/store'>
                <a
                  style={
                    active === '/store'
                      ? {
                          borderBottom: '2px solid #64a7f5',
                          fontSize: '105%',
                          transition: '.2s',
                        }
                      : { borderBottom: 'none' }
                  }>
                  Store
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <SocialMenu />
      </div>
    </>
  );
}
