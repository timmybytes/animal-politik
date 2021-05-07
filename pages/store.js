import { useEffect, useState, useContext } from 'react';
import AuthContext from '../stores/authContext';

export default function Store() {
  const { user, authReady } = useContext(AuthContext);
  const [greeting, setGreeting] = useState(null);

  useEffect(() => {
    if (authReady) {
      console.log('authorizing' + authReady);
    }
  }, [user, authReady]);

  return (
    <div>
      <h2>Store</h2>
      <p>You're logged in as {greeting || 'Guest'}</p>
    </div>
  );
}
