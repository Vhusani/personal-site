import type { TimelineEntry } from '@/types';
import styles from './TimelineList.module.css';

interface TimelineListProps {
  entries: TimelineEntry[];
}

/** Dated rows shared by the Experience and Education blocks. */
export function TimelineList({ entries }: TimelineListProps) {
  return (
    <ul className={styles.list}>
      {entries.map((entry) => (
        <li key={`${entry.date}-${entry.title}`} className={styles.row}>
          <div className={styles.date}>{entry.date}</div>
          <div className={styles.body}>
            <h3 className={styles.title}>{entry.title}</h3>
            <p className={styles.subtitle}>{entry.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
