import * as React from 'react';

import * as styles from './full-history.module.css';
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

interface FullHistoryProps {
  page: {
    body: {
      childMarkdownRemark: {
        html: string;
      };
    };
    heroImage?: { gatsbyImageData: IGatsbyImageData };
  };
}

export const FullHistory = ({ page }: FullHistoryProps) => {
  return (
    <>
      {page.heroImage?.gatsbyImageData && (
        <div className={styles.heroContainer}>
          <GatsbyImage
            image={page.heroImage?.gatsbyImageData}
            alt="HVP Image"
          />
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.article}>
          <h1 className={styles.pageHeading}>Our History</h1>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{
              __html: page.body?.childMarkdownRemark?.html,
            }}
          />
          <div className={styles.readMore}>
            <Link to="/">Read more &raquo;</Link>
          </div>
        </div>
      </div>
    </>
  );
};
