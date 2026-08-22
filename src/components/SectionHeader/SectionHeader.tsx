import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  /** Two-digit ordinal, e.g. "01". */
  num: string;
  label: string;
}

/** The numbered eyebrow that opens each section. */
export function SectionHeader({ num, label }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <span className={styles.num}>{num}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
