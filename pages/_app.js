import Head from 'next/head';
import Menu from '@components/Navbar/Menu';
import Navbar from '../components/Navbar/Navbar';
import '@styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Animal Politik</title>
      </Head>
      {/* <MenuProvider MenuComponent={Menu} animation='slide'> */}
      <Navbar />
      <Component {...pageProps} />
      {/* </MenuProvider> */}
    </>
  );
}

export default MyApp;
