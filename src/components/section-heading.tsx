import * as React from 'react';

import * as styles from './section-heading.module.css';
import classNames from 'classnames';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading = ({
  children,
  className,
}: SectionHeadingProps) => (
  <h2 className={classNames(className, styles.heading)}>{children}</h2>
);
