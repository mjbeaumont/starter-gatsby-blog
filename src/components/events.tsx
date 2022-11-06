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
        <h2>2022/2023 HVP Performances</h2>
        <ul>
          <li>
            <strong>November 5th, 2022</strong>: Richard Einhorn’s “Voices of
            Light”
          </li>
          <li>
            <strong>December 14th, 2022</strong>: with “Mannheim Steamroller” at
            the Poughkeepsie Civic Center
          </li>
          <li>
            <strong>December 18th, 2022</strong>: Handel’s “Messiah”
          </li>
          <li>
            <strong>May 20th, 2023</strong>: Holst’s “The Planets”
          </li>
        </ul>
        <h2 className={styles.secondHeading}>Philharmonic Chamber Series</h2>
        <p>
          We are thrilled to announce 2 chamber music events featuring musicians
          who play in the Hudson Valley Philharmonic. Admission is free, and
          there will be opportunities to meet and chat with the musicians after
          the concerts. Bring your friends and family for sublime music!
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
          <strong>Saturday, Nov. 12 @ 7:30pm</strong>
        </p>{' '}
        <p>
          <em>String Quartet in D Major, op;. 64, “Lark”</em> - J. Haydn
          <br />
          Hudson Valley String Quartet: Marka Young, violin David Fiedler,
          violin, Lauren Byrne, viola Jeanne Fox, cello{' '}
        </p>
        <p>
          <em>Cello Suite No. 2 in D Minor, BWV 1008</em> - JS Bach
          <div className={styles.movements}>
            Prelude
            <br />
            Allemande
            <br />
            Courante
            <br /> Sarabande
            <br /> Menuet I & II
            <br /> Gigue
            <br />
          </div>{' '}
          Christopher Santos, cello
        </p>
        <p>
          <em>Five Duos for Two Cellos</em> - Halsey Stevens <br />
          Nanette Koch, Susan Seligman, cello cello
        </p>
        <p>
          <em>String Quartet in F Major, Op. 96 No. 12 (“American”)</em> -
          Dvorak
          <br />
          Hudson Valley String Quartet
        </p>
        <p>
          <strong>January 14, 2023 @ 5pm</strong> – Music by Jesse Montgomery,
          Prokofiev, and more
          <br />
        </p>
        <p>
          Performed by The Handman String Quartet; Christopher Santos, cello;
          Amy Hersh, flute, Kathleen Thomson, violin, Katherine Sinabaugh,
          viola, Jacqueline Stern, cello
        </p>
      </Container>
    </section>
  );
};
