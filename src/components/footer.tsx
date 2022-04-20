import React from 'react';

import Container from './container';
import * as styles from './footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <p>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        <a href="mailto:info@hvpmusicians.org">info@hvpmusicians.org</a>
      </p>
      <p>
        &copy; {new Date().getFullYear()} Musicians of the Hudson Valley
        Philharmonic
      </p>
    </div>
  </Container>
);

export default Footer;
