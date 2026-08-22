import styles from './AvailabilityBadge.module.css';

interface AvailabilityBadgeProps {
  label: string;
}

/** Small status pill announcing that the author is open to work. */
export function AvailabilityBadge({ label }: AvailabilityBadgeProps) {
  return (
    <p className={styles.badge}>
      <span className={styles.dot} aria-hidden="true" />
      {label}
    </p>
  );
}
