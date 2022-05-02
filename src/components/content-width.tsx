import * as React from 'react';

import * as styles from './content-width.module.css';

interface ContentWidthProps {
  children: React.ReactNode;
  as?: React.ElementType;
}

export const ContentWidth = ({ children, as = 'div' }: ContentWidthProps) => {
  const Tag = as;

  return <Tag className={styles.container}>{children}</Tag>;
};
