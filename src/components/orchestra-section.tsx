import * as React from 'react';

import type { Section } from '../data/roster';
import * as styles from './orchestra-section.module.css';

interface OrchestraSectionProps {
  section: Section;
}

export const OrchestraSection = ({ section }: OrchestraSectionProps) => {
  return (
    <section key={section.name}>
      <h2>{section.name}</h2>
      <ul className={styles.musicianList}>
        {section.musicians.map((musician) => (
          <li key={musician}>{musician}</li>
        ))}
      </ul>
    </section>
  );
};
