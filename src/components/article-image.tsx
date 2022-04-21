import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import * as styles from './article-image.module.css';

interface ArticleImageProps {
  alt: string;
  image: IGatsbyImageData;
}

export const ArticleImage = ({ image, alt }: ArticleImageProps) => (
  <div className={styles.hero}>
    {image && <GatsbyImage className={styles.image} alt={alt} image={image} />}
  </div>
);
