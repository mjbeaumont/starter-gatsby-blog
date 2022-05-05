import * as React from 'react';

import { Hamburger } from './hamburger';
import { NavigationItem } from './navigation-item';
import { SocialIcons } from './social-icons';

import { HOME_CONTACT_ID } from '../constants';

import * as styles from './navigation.module.css';
import classNames from 'classnames';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => setIsOpen((state) => !state);

  return (
    <nav role="navigation" className={styles.container} aria-label="Main Menu">
      <Hamburger open={isOpen} onClick={handleClick} />
      <SocialIcons />
      <ul
        className={classNames(styles.navigation, { [styles.open]: isOpen })}
        id="main-menu"
      >
        <NavigationItem to="/" label="Home" />
        <NavigationItem to="/news" label="News" />
        <NavigationItem to="/history" label="History" />
        <NavigationItem to={`/#${HOME_CONTACT_ID}`} label="Contact" />
        <NavigationItem to="/musicians" label="Musicians" />
      </ul>
    </nav>
  );
};

export default Navigation;
