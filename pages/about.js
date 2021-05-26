import React from 'react';
import styles from '../styles/About.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className='page_title'>About</h1>
      <h2>Animal Politik is a (mostly) human music-making collective.</h2>
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
      <p>
        Over the next six months, the band played venues all over the state,
        gaining a small but dedicated following from their energetic live shows
        and less traditional merchandise habits (the group regularly tossed Days
        of Dreams-branded condoms into the crowd). In spring 2005, after winning
        the statewide Battle of the Bands, the trio went back to the studio to
        record the <em>Hearing the Vision</em> EP, and continued to tour locally
        for the rest of the year.
      </p>
      <p>
        In November 2005 the group relocated to Portland, OR and changed their
        name to The Last Days of Dreams, performing at many historic now-defunct
        venues like Satyricon, The Ash Street Saloon, the Loveland, and the
        Hawthorne Theatre, among others, but found a welcoming home in their
        neighborhood bar Scotty’s where they played regularly nearly once a
        month for years. In 2010, <em>Iron Sulfide Tremors</em> was released as
        a full length LP before the band went on hiatus.
      </p>
      <p>
        In the interim, Gleeson, Starr, and other guest musicians collaborated
        as The Multnomah Project. By 2017 the original members were beginning to
        rehearse new material with the addition of Matthew Azar on lead guitar,
        working under the new moniker of Animal Politik, and adding greater
        nuance to their songwriting.
      </p>
      <p>
        In 2019 the quartet began work on their newest album, releasing the{' '}
        <a
          href='https://animalpolitik.bandcamp.com/album/fait-accompli'
          target='_blank'>
          <em>Fait Accompli</em>
        </a>{' '}
        LP in January 2020. Immediately going to work on their next effort, the
        band was sidelined by the global COVID-19 pandemic, though they
        continued to record intermittently throughout the year, and released{' '}
        <a
          href='https://animalpolitik.bandcamp.com/album/multnomah'
          target='_blank'>
          <em>Multnomah</em>
        </a>
        , a full length album comprised mostly of material recorded during The
        Multnomah Project, before releasing{' '}
        <a
          href='https://animalpolitik.bandcamp.com/album/simulacra'
          target='_blank'>
          <em>Simulacra</em>
        </a>{' '}
        in spring of 2021.
      </p>
    </section>
  );
}
