import * as React from 'react';

import * as styles from './cta.module.css';

export const Cta = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className={styles.cta}>
    {children}
  </button>
);
