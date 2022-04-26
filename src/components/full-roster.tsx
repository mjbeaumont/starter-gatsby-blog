import * as React from 'react';

import { SectionHeading } from './section-heading';
import { OrchestraSection } from './orchestra-section';

import * as styles from './full-roster.module.css';

import { Section } from '../data/roster';

interface FullRosterProps {
  sections: Section[];
}

export const FullRoster = ({ sections }: FullRosterProps) => {
  return (
    <>
      <section className={styles.container}>
        <SectionHeading>Musician Roster</SectionHeading>
        <div className={styles.sectionGrid}>
          {sections.map((section) => (
            <OrchestraSection section={section} key={section.name} />
          ))}
        </div>
      </section>
    </>
  );
};
