import * as React from 'react';

import Container from '../components/container';
import * as styles from './events.module.css';

import { SectionHeading } from '../components/section-heading';
import { HOME_EVENTS_ID } from '../constants';

export const Events = () => {
  return (
    <section className={styles.container} id={HOME_EVENTS_ID}>
      <Container>
        <SectionHeading className={styles.heading}>Events</SectionHeading>
        <h2>Philharmonic Chamber Series</h2>
        <p>
          We are thrilled to announce 3 chamber music events featuring musicians
          who play in the Hudson Valley Philharmonic. Admission is free, and
          there will be opportunities to meet and chat with the musicians after
          the concerts. Bring your friends and family for sublime music on three
          summer evenings!
        </p>

        <p>
          All events are at{' '}
          <a
            href="https://www.christchurchpok.org/"
            target="_blank"
            rel="noreferrer"
          >
            Christ Episcopal Church
          </a>{' '}
          20 Carroll St, Poughkeepsie
        </p>

        <p>
          <strong>July 17, 2022, 5pm</strong> – Music by Strauss, Beethoven,
          Reinecke, Faure, and more.
        </p>
        <p>
          Performed by Nick Calouri, horn; Yalin Chi, piano; Paul Bellino,
          trombone; James Fitzwilliam, piano; Joel Evans, oboe; Ruthanne
          Schempf, piano
        </p>

        <p>
          <strong>July 31, 2022, 5pm</strong> – Music by Bach, Coleridge-Taylor,
          Bartok, Mozart, Grandjany, Andres, and Lutoslawski.
          <br />
        </p>
        <p>
          Performed by Susan Seligman, cello; Emily Kalish, violin; Kyle Walker,
          piano; Heather Vogel and Rachel Crozier, violins; Marcia Gates, flute;
          Frances Duffy, harp
        </p>
        <p>
          <strong>August 14, 2022, 5pm</strong> – Music for a Summer Evening
          <br />
        </p>
        <p>
          Performed by Rachel Handman, Heather Vogel, and Francie Mann, violins;
          Greg Williams, viola; Nanette Koch, cello; and James Fitzwilliam,
          piano
        </p>
      </Container>
    </section>
  );
};
