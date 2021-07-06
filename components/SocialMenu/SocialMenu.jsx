import React from 'react';
import styles from './SocialMenu.module.scss';
import {
  SiApplemusic,
  SiBandcamp,
  SiInstagram,
  SiSoundcloud,
  SiSpotify,
  SiTwitter,
  SiYoutube,
} from 'react-icons/si';
import SocialMenuIcon from '@components/SocialMenu/SocialMenuIcon';

const SocialMenu = () => {
  return (
    <div className={styles.social}>
      <SocialMenuIcon
        icon={<SiApplemusic />}
        link='https://music.apple.com/us/artist/animal-politik/1494225714'
        tooltip={'Apple Music'}
      />
      <SocialMenuIcon
        icon={<SiSpotify />}
        link='https://open.spotify.com/artist/72RvQ5IlKW2zrVlPuxSr9h'
        tooltip='Spotify'
      />
      <SocialMenuIcon
        icon={<SiBandcamp />}
        link='https://animalpolitik.bandcamp.com/'
        tooltip='BandCamp'
      />
      <SocialMenuIcon
        icon={<SiSoundcloud />}
        link='https://soundcloud.com/user-511973193'
        tooltip='SoundCloud'
      />
      <SocialMenuIcon
        icon={<SiTwitter />}
        link='https://twitter.com/nimalpolitik'
        tooltip='Twitter'
      />
      <SocialMenuIcon
        icon={<SiYoutube />}
        link='https://music.youtube.com/channel/UCKg5BbKgpP3820f05b6JYbg'
        tooltip='YouTube'
      />
      <SocialMenuIcon
        icon={<SiInstagram />}
        link='https://www.instagram.com/animal.politik/'
        tooltip='Instagram'
      />
    </div>
  );
};

export default SocialMenu;
