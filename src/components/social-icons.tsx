import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import * as styles from './social-icons.module.css';

export const SocialIcons = () => {
  return (
    <div>
      <a
        href="https://www.facebook.com/MusiciansOfTheHVP/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        <span className="visible-hidden">Facebook</span>
      </a>
      <a
        href="https://www.instagram.com/musiciansofthehvp/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        <span className="visible-hidden">Instagram</span>
      </a>
    </div>
  );
};
