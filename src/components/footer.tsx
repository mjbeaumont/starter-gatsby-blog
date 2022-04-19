import React from 'react';

import Container from './container';
import * as styles from './footer.module.css';

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      &copy; {new Date().getFullYear()} Musicians of the Hudson Valley
      Philharmonic
    </div>
  </Container>
);

export default Footer;
