import * as React from 'react';

import Container from '../components/container';
import * as styles from './short-history.module.css';
import { Link } from 'gatsby';

import { SectionHeading } from '../components/section-heading';
import { HOME_MESSAGE_ID } from '../constants';

interface ShortHistoryProps {
  history: {
    description: {
      childMarkdownRemark: {
        html: string;
      };
    };
  };
}

export const ShortHistory = ({ history }: ShortHistoryProps) => {
  return (
    <section className={styles.container} id={HOME_MESSAGE_ID}>
      <Container>
        <SectionHeading>Our History</SectionHeading>
        <p
          className={styles.copy}
          dangerouslySetInnerHTML={{
            __html: history.description.childMarkdownRemark.html,
          }}
        ></p>
        <p>
          <Link to="/history" className={styles.readMore}>
            Read More &raquo;
          </Link>
        </p>
      </Container>
    </section>
  );
};
