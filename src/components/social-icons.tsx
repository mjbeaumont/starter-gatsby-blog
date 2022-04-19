import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

import * as styles from './social-icons.module.css';

export const SocialIcons = () => {
  return (
    <div>
      <Link to="https://www.facebook.com/MusiciansOfTheHVP/" target="_blank">
        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
      </Link>
      <Link to="/">
        <FontAwesomeIcon
          icon={faInstagram}
          className={styles.icon}
          target="_blank"
        />
      </Link>
      <Link to="https://www.bardavon.org/about/" target="_blank">
        <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
      </Link>
    </div>
  );
};
