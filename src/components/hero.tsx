import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import * as styles from './hero.module.css';

interface HeroProps {
  title: string;
  image: IGatsbyImageData;
  subtitle: string;
  ctaText?: string;
}

const Hero = ({ image, title, subtitle, ctaText }: HeroProps) => (
  <div className={styles.hero}>
    {image && <GatsbyImage alt={title} image={image} />}
    <div className={styles.imageOverlay} />
    <div className={styles.textOverlay}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {ctaText && <button className={styles.cta}>{ctaText}</button>}
    </div>
  </div>
);

export default Hero;
