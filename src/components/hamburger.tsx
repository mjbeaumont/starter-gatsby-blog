import * as React from 'react';

import classNames from 'classnames';
import * as styles from './hamburger.module.css';

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
}

export const Hamburger = ({ open, onClick }: HamburgerProps) => {
  return (
    <div
      className={styles.button}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      aria-controls="main-menu"
      aria-expanded={open}
    >
      <div className={classNames(styles.hamburger, { [styles.open]: open })} />
      <span className="visible-hidden">Menu</span>
    </div>
  );
};
