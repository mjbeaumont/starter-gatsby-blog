import * as React from 'react';

import { Hamburger } from './hamburger';
import { NavigationItem } from './navigation-item';
import { SocialIcons } from './social-icons';

import * as styles from './navigation.module.css';
import classNames from 'classnames';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => setIsOpen((state) => !state);

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Hamburger open={isOpen} onClick={handleClick} />
      <SocialIcons />
      <ul className={classNames(styles.navigation, { [styles.open]: isOpen })}>
        <NavigationItem to="/" label="Home" />
        <NavigationItem to="/blog" label="Blog" />
      </ul>
    </nav>
  );
};

export default Navigation;
