import styles from './Tag.module.css';

interface TagProps {
  children: React.ReactNode;
  /** `sm` is the denser variant used inside project cards. */
  size?: 'md' | 'sm';
}

/** Outlined pill used for skills and per-project tech chips. */
export function Tag({ children, size = 'md' }: TagProps) {
  return <span className={`${styles.tag} ${styles[size]}`}>{children}</span>;
}
