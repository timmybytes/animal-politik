import Navbar from '../components/Navbar/Navbar';
import '@styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
