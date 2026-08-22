import { profile } from '@/data/profile';
import styles from './SiteFooter.module.css';

/** Closing call-to-action band. */
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.heading}>Available for full stack work and collaboration.</h2>
      <div className={styles.actions}>
        <a className={styles.primary} href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a
          className={styles.secondary}
          href={profile.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp {profile.whatsappNumber}
        </a>
      </div>
    </footer>
  );
}
