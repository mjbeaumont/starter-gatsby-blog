import * as React from 'react';
import { Link } from 'gatsby';

import * as styles from './navigation-item.module.css';

interface NavigationItemProps {
  to: string;
  label: string;
}

export const NavigationItem = ({ to, label }: NavigationItemProps) => {
  return (
    <li className={styles.navigationItem}>
      <Link to={to} activeClassName="active">
        {label}
      </Link>
    </li>
  );
};
