import Button from '@components/Button/Button';
import styles from '@styles/Home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>
        We are living in the fever dream of maniacs
        <br />— but it might as well have a good
        <br />
        soundtrack.
      </h2>
      <p>
        <strong className={styles.bandtag}>Animal Politik</strong> is an
        alternative rock band from Portland, Oregon.{' '}
        <Link href='/about'>
          <a>Learn more about their history,</a>
        </Link>{' '}
        check out{' '}
        <Link href='/music'>
          <a>their music</a>
        </Link>
        , or{' '}
        <Link href='/contact'>
          <a>send them a note.</a>
        </Link>
      </p>
      <Link href='/music'>
        <Button type='primary'>
          <a>Listen now</a>
        </Button>
      </Link>
    </div>
  );
}
