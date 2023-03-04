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
            <strong>December 17th, 2022</strong>: Handel’s “Messiah”
          </li>
          <li>
            <strong>March 19th, 2023</strong>: “The Irish Tenors” at the Lycian
            Center, Sugar Loaf
          </li>
          <li>
            <strong>May 20th, 2023</strong>: Holst’s “The Planets”
          </li>
        </ul>
        <h2 className={styles.secondHeading}>Philharmonic Chamber Series</h2>
        <p>
          We are thrilled to announce 3 more chamber music events featuring
          musicians who play in the Hudson Valley Philharmonic. Admission is
          free, and there will be opportunities to meet and chat with the
          musicians after the concerts. Bring your friends and family for
          sublime music!
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
          <strong>January 22, 2023 @ 5pm</strong> – Music by Jesse Montgomery,
          Prokofiev, and more
          <br />
        </p>
        <p>
          Performed by The Handman String Quartet; Hudson Valley String Quartet;
          Cara Quartet (flute, violin, viola, cello), and cellist Christopher
          Santos.
        </p>
        <p>
          <strong>February 26, 2023 @ 5pm</strong>
        </p>
        <p>Performed by violin duos, woodwind ensemble</p>
        <p>
          <strong>March 19, 2023 @ 5pm</strong>
        </p>
        <p>Brass Quintet with Paul Bellino</p>
        <p>
          <strong>Sunday, April 30 @ 5pm</strong>
        </p>
        <p>Harp, strings, winds, piano</p>
        <p>
          <strong>Sunday, May 21</strong>
        </p>
        <p>
          3pm Silent Auction
          <br />
          4pm Concert
        </p>
        <p>Harp, Flute Quintet, Wind Octet</p>
      </Container>
    </section>
  );
};
