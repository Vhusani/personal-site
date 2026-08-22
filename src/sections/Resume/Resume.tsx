import { SectionHeader } from '@/components/SectionHeader';
import { Tag } from '@/components/Tag';
import { TimelineList } from '@/components/TimelineList';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';
import styles from './Resume.module.css';

export function Resume() {
  return (
    <section id="resume" className={styles.section}>
      <SectionHeader num="02" label="Resume" />

      <h2 className={styles.heading}>Experience</h2>
      <TimelineList entries={experience} />

      <h2 className={`${styles.heading} ${styles.headingSpaced}`}>Education</h2>
      <TimelineList entries={education} />

      <h2 className={`${styles.heading} ${styles.headingSpaced}`}>Skills</h2>
      <ul className={styles.skills}>
        {skills.map((skill) => (
          <li key={skill}>
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>
    </section>
  );
}
