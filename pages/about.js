import React from 'react';
import styles from '@styles/About.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className='page_title'>About</h1>
      <h2 className={styles.header}>
        Animal Politik is a (mostly) human, music-making collective:
      </h2>
      <div className={styles.members}>
        <ul className={styles.member__list}>
          <li className={styles.member}>
            Timothy Merritt
            <sub>Vocals, Guitar</sub>
          </li>
          <li className={styles.member}>
            Michael Gleeson
            <sub>Vocals, Bass, Guitar</sub>
          </li>
          <li className={styles.member}>
            Andrew Starr
            <sub>Drums</sub>
          </li>
          <li className={styles.member}>
            Matthew Azar
            <sub>Guitar</sub>
          </li>
        </ul>
      </div>
      <figure className={styles.photo}>
        <img src='/photos/IMG_3590.jpg' alt='Animal Politik live' />
        <figcaption className={styles.photo__caption}>
          Michael Gleeson (left), Timothy Merritt (right)
        </figcaption>
      </figure>
      <p>
        Initially known as Days of Dreams, the group formed as a two-piece with
        Timothy Merritt on vocals and guitar, and Andrew Starr on drums in early
        2003 in Great Falls, Montana. Releasing individually burned copies of
        their debut EP <em>Tragic Circumstance</em> that spring, the duo
        performed regularly until joined by Michael Gleeson on bass and backup
        vocals the following year. As a trio, the band honed a signature
        aggressive style by channeling influences from Nirvana and other early
        90s alternative through their own unique lens, releasing the full-length
        LP <em>Trauma Season</em> in December 2004.
      </p>
      <figure className={styles.photo}>
        <img src='/photos/IMG_3549.jpg' alt='Animal Politik live' />
        <figcaption className={styles.photo__caption}>
          Michael Gleeson (left), Andrew Starr (center), Timothy Merritt (right)
        </figcaption>
      </figure>
      <p>
        Over the next six months, the band played venues all over the state,
        gaining a small but dedicated following from their energetic live shows
        and less traditional merchandise habits (the group regularly tossed Days
        of Dreams-branded condoms into the crowd). In spring 2005, after winning
        the statewide Battle of the Bands, the trio went back to the studio to
        record the <em>Hearing the Vision</em> EP, and continued to tour locally
        for the rest of the year.
      </p>
      <figure className={styles.photo}>
        <img src='/photos/IMG_3532.jpg' alt='Animal Politik live' />
        <figcaption className={styles.photo__caption}>
          Michael Gleeson (left), Timothy Merritt (right)
        </figcaption>
      </figure>
      <p>
        In November 2005 the group relocated to Portland, OR and changed their
        name to The Last Days of Dreams, performing at many historic now-defunct
        venues like Satyricon, The Ash Street Saloon, the Loveland, and the
        Hawthorne Theatre, among others, but found a welcoming home in their
        neighborhood bar Scotty’s where they played regularly nearly once a
        month for years. In 2010, <em>Iron Sulfide Tremors</em> was released as
        a full length LP before the band went on hiatus.
      </p>
      <figure className={styles.photo}>
        <img src='/photos/IMG_3642.jpg' alt='Animal Politik live' />
        <figcaption className={styles.photo__caption}>Andrew Starr</figcaption>
      </figure>
      <p>
        In the interim, Gleeson, Starr, and other guest musicians collaborated
        as The Multnomah Project. By 2017 the original members were beginning to
        rehearse new material with the addition of Matthew Azar on lead guitar,
        working under the new moniker of Animal Politik, and adding greater
        nuance to their songwriting.
      </p>
      <figure className={styles.photo}>
        <img src='/photos/IMG_3688.jpg' alt='Animal Politik live' />
        <figcaption className={styles.photo__caption}>
          Timothy Merritt
        </figcaption>
      </figure>
      <p>
        In 2019 the quartet began work on their newest album, releasing the{' '}
        <a
          href='https://animalpolitik.bandcamp.com/album/fait-accompli'
          target='_blank'
          rel='noreferrer nofollow'>
          <em>Fait Accompli</em>
        </a>{' '}
        LP in January 2020. Immediately going to work on their next effort, the
        band was sidelined by the global COVID-19 pandemic, though they
        continued to record intermittently throughout the year, and released{' '}
        <a
          href='https://animalpolitik.bandcamp.com/album/multnomah'
          target='_blank'
          rel='noreferrer nofollow'>
          <em>Multnomah</em>
        </a>
        , a full length album comprised mostly of material recorded during The
        Multnomah Project, before releasing{' '}
        <a
          href='https://animalpolitik.bandcamp.com/album/simulacra'
          target='_blank'
          rel='noreferrer nofollow'>
          <em>Simulacra</em>
        </a>{' '}
        in spring of 2021.
      </p>
      <figure className={styles.photo}>
        <img src='/photos/IMG_3692.jpg' alt='Animal Politik live' />
        <figcaption className={styles.photo__caption}>
          Michael Gleeson
        </figcaption>
      </figure>
    </section>
  );
}
