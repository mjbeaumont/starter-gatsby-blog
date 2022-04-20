import * as React from 'react';

import * as styles from './full-history.module.css';

interface FullHistoryProps {
  page: {
    body: {
      childMarkdownRemark: {
        html: string;
      };
    };
  };
}

export const FullHistory = ({ page }: FullHistoryProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.article}>
        <h1 className={styles.pageHeading}>Our History</h1>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{
            __html: page.body?.childMarkdownRemark?.html,
          }}
        />
      </div>
    </div>
  );
};
