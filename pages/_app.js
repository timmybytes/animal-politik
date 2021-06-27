import Header from '@components/Header/Header';
import '@styles/globals.scss';
import Head from 'next/head';

const Main = ({ children }) => (
  <main className='main' style={{ padding: '20px' }}>
    {children}
  </main>
);

const Footer = () => <footer>&copy; Animal Politik 2021</footer>;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Animal Politik</title>
      </Head>
      {/* <Navbar /> */}
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
}

export default MyApp;
