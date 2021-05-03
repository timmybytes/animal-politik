import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AuthContext from '../stores/authContext';

export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);

  return (
    <div className='container'>
      <nav>
        <Image src='/rupee.png' width={50} height={48} />
        <h1>Gaming Vibes</h1>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/guides'>
              <a>Guides</a>
            </Link>
          </li>
          <li className='btn' onClick={login}>
            Login/Signup
          </li>
          <li className='btn' onClick={logout}>
            Logout
          </li>
        </ul>
      </nav>
      <div className='banner'>
        <Image src='/banner.png' width={966} height={276} />
      </div>
    </div>
  );
}
