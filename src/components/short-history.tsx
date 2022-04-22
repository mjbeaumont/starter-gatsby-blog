import * as React from 'react';

import Container from '../components/container';
import * as styles from './short-history.module.css';

import { SectionHeading } from '../components/section-heading';
import { HOME_MESSAGE_ID } from '../constants';

export const ShortHistory = () => {
  return (
    <section className={styles.container} id={HOME_MESSAGE_ID}>
      <Container>
        <SectionHeading className={styles.heading}>Welcome</SectionHeading>
        <p>
          We, the Musicians of the Hudson Valley Philharmonic, have created this
          website for you, our audience and community members. We would not be
          here without you.
        </p>
        <h3>
          The Hudson Valley Philharmonic is in danger. Help us keep the music
          playing.
        </h3>
        <p>
          The Bardavon 1869 Opera House is planning to suspend the 2022-2023
          season. Our management has indicated they do not wish to negotiate a
          new contract for our next season. We, the musicians, are members of
          the American Federation of Musicians, Local 238-291. We have made our
          desire to negotiate a new contract know to the Bardavon management.
          While they claim the orchestra is a burden to the Bardavon, we
          disagree. The HVP should be seen as an asset. It is a jewel of the
          Hudson Valley!
        </p>
        <p>
          The orchestra has been a vital part of the community since the 1930’s.
          It is a cultural and educational pillar in the region. The Musicians
          of the HVP are active in the community beyond the Bardavon stage,
          providing music for weddings and important events, teaching music to
          all ages, and much more.
        </p>
        <p>
          We are still mourning the loss of our late music director, Maestro
          Randall Craig Fleischer. The Musicians of the HVP want to honor his 28
          years of work with us - and celebrate the long history of the
          orchestra - by continuing to bring music to the region. We believe the
          HVP continues to be a musical treasure for our audiences, students,
          and the entire community.
        </p>
        <h3>How can you help?</h3>
        <p>
          Contact the Bardavon management and board members. Tell them you want
          to see the HVP on stage next year, to continue its mission of bringing
          vibrant classical music to the region. Contact the local press and
          tell them what the Hudson Valley Philharmonic means to you and the
          community. Pledge your support to the orchestra and help spread the
          word to your family and friends. Together, we can keep the music
          playing! Write to:
        </p>
        <ul>
          <li>
            <strong>Bardavon Executive Director, Chris Silva:</strong>{' '}
            <a href="mailto:csilva@bardavon.org">csilva@bardavon.org</a>
          </li>
          <li>
            <strong>Bardavon Administrative Offices:</strong>{' '}
            <span>(845) 473-5288</span>{' '}
          </li>
          <li>
            <strong>Bardavon Board of Directors:</strong>{' '}
            <a
              href="https://www.bardavon.org/about-us/board-of-directors"
              target="_blank"
              rel="noreferrer"
            >
              www.bardavon.org/about-us/board-of-directors/
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
};
