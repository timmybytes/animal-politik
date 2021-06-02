import Navbar from '../components/Navbar';
import '@/styles/globals.scss';
import SocialMenu from '@/components/SocialMenu/SocialMenu';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
