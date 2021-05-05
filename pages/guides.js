import { useState, useContext, useEffect } from 'react';
import styles from '../styles/Guides.module.css';
import AuthContext from '../stores/authContext';

export default function Guides() {
  const { user, authReady } = useContext(AuthContext);
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        '/.netlify/functions/guides',
        user && {
          headers: { Authorization: 'Bearer ' + user.token.access_token },
        }
      )
        .then(res => {
          if (!res.ok) {
            throw Error('You must be logged in to view this content.');
          }
          return res.json();
        })
        .then(data => {
          setGuides(data);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setGuides(null);
        });
    }
  }, [user, authReady]);

  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading...</div>}
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      {guides &&
        guides.map(guide => (
          <div key={guide.title} className={styles.card}>
            <h3>{guide.title}</h3>
            <h4>Written by {guide.author}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              eaque cumque perspiciatis doloremque nesciunt ullam consequatur,
              voluptatem totam sint qui, voluptatum expedita soluta! Facilis
              magni deserunt non dolorum suscipit quis? Facilis totam doloribus
              excepturi, deserunt animi laborum nam eius ratione ipsam modi
              mollitia tempore reiciendis, obcaecati consectetur perferendis
              maiores laboriosam aperiam quam. Magni, explicabo ducimus. Vitae
              alias laudantium nulla quibusdam.
            </p>
          </div>
        ))}
    </div>
  );
}
