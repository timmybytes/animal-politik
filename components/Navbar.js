import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AuthContext from '../stores/authContext';

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);

  return (
    <div className='container'>
      <nav>
        <h1>
          <Link href='/'>
            <a>
              {/* <Image */}
              <img
                className='logo'
                src='/SkinnyVector.svg'
                // width={500}
                // height={50}
                alt='Animal Politik logo'
              />
            </a>
          </Link>
        </h1>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/guides'>
              <a>Members Only</a>
            </Link>
          </li>
          {/* NOTE: Comment out and reload site during development for authReady-dependent code to load, then enter the Netlify site URL into the login modal.  */}
          {authReady && (
            <>
              {!user && (
                <li className='btn' onClick={login}>
                  Login/Signup
                </li>
              )}
              {user && (
                <li>
                  <strong>{user.user_metadata.full_name}</strong>
                </li>
              )}
              {user && (
                <li className='btn' onClick={logout}>
                  Logout
                </li>
              )}
            </>
          )}
        </ul>
      </nav>
      {/* <div className='banner'>
        <Image src='/banner.png' width={966} height={276} />
      </div> */}
    </div>
  );
}
