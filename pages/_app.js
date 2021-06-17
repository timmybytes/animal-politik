import { Head } from 'next/document';
import Navbar from '../components/Navbar/Navbar';
import '@styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Animal Politik</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
