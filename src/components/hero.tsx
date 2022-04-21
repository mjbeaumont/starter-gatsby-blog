import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import * as styles from './hero.module.css';
import { HOME_MESSAGE_ID } from '../constants';

import { getPreferredScrollBehavior } from '../utils';

interface HeroProps {
  title: string;
  image: IGatsbyImageData;
  subtitle: string;
  ctaText?: string;
}

const handleClick = () => {
  const el = document.getElementById(HOME_MESSAGE_ID);
  el?.scrollIntoView({ behavior: getPreferredScrollBehavior() });
};

const Hero = ({ image, title, subtitle, ctaText }: HeroProps) => (
  <div className={styles.hero}>
    {image && <GatsbyImage alt={title} image={image} />}
    <div className={styles.imageOverlay} />
    <div className={styles.textOverlay}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {ctaText && (
        <button className={styles.cta} onClick={handleClick}>
          {ctaText}
        </button>
      )}
    </div>
  </div>
);

export default Hero;
