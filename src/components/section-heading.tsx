import * as React from 'react';

import * as styles from './section-heading.module.css';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => (
  <h2 className={styles.heading}>{children}</h2>
);
