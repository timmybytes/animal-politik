import Navbar from '../components/Navbar';
import { AuthContextProvider } from '../stores/authContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
