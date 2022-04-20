import * as React from 'react';

import Container from '../components/container';
import * as styles from './short-history.module.css';
import { Link } from 'gatsby';

export const ShortHistory = () => {
  return (
    <section className={styles.container}>
      <Container>
        <h2 className={styles.heading}>Our History</h2>
        <p className={styles.copy}>
          The Hudson Valley Philharmonic began its existence as the Dutchess
          County Philharmonic Orchestra. The brainchild of four Poughkeepsie
          businessmen who also played classical music, the orchestra began in
          1932 as a small group of musicians who eventually gave their first
          public concert in 1934. One of the original businessmen, George
          Hagstrom, became the ensemble’s first conductor, and the group
          consisted of professionals, amateurs, and student musicians from area
          high schools.
        </p>
        <p>
          <Link to="/history" className={styles.readMore}>
            Read More &raquo;
          </Link>
        </p>
      </Container>
    </section>
  );
};
