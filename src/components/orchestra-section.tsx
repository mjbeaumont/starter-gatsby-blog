import * as React from 'react';

import type { Section } from '../data/roster';
import { MusicianPosition } from '../data/roster';
import * as styles from './orchestra-section.module.css';

interface OrchestraSectionProps {
  section: Section;
}

function getMusicianName(name: string) {
  return name.includes(MusicianPosition.Vacant) ? (
    <span>
      [<em>{MusicianPosition.Vacant}</em>]
    </span>
  ) : (
    name
  );
}

export const OrchestraSection = ({ section }: OrchestraSectionProps) => {
  return (
    <section key={section.name}>
      <h2>{section.name}</h2>
      <ul className={styles.musicianList}>
        {section.musicians.map((musician) => (
          <li key={musician}>{getMusicianName(musician)}</li>
        ))}
      </ul>
    </section>
  );
};
