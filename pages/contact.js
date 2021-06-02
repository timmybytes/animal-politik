import React, { useEffect } from 'react';
import styles from '@styles/Contact.module.scss';
import SocialMenu from '@components/SocialMenu/SocialMenu';

const Music = () => {
  return (
    <section className={styles.contact}>
      <h1 className='page_title'>Contact</h1>
      <SocialMenu />
      <form name='contact' method='POST' data-netlify='true'>
        <p>
          <label>
            Your Name:{' '}
            <input type='text' name='name' placeholder='Name' required />
          </label>
        </p>
        <p>
          <label>
            Your Email:{' '}
            <input
              type='email'
              name='email'
              placeholder='name@provider.com'
              required
            />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name='message' required></textarea>
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    </section>
  );
};

export default Music;
