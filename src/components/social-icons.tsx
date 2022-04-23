import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { OutboundLink } from 'gatsby-plugin-google-gtag';

import * as styles from './social-icons.module.css';

export const SocialIcons = () => {
  return (
    <div>
      <OutboundLink
        href="https://www.facebook.com/MusiciansOfTheHVP/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        <span className="visible-hidden">Facebook</span>
      </OutboundLink>
      <OutboundLink
        href="https://www.instagram.com/musiciansofthehvp/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        <span className="visible-hidden">Instagram</span>
      </OutboundLink>
    </div>
  );
};
