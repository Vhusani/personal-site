import { SectionHeader } from '@/components/SectionHeader';
import { certifications, credlyProfileUrl } from '@/data/certifications';
import styles from './Certifications.module.css';

export function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <SectionHeader num="04" label="Certifications" />
      <h2 className={styles.heading}>Verified badges</h2>
      <p className={styles.intro}>
        Microsoft certifications and exams, verifiable on Credly:{' '}
        <a href={credlyProfileUrl} target="_blank" rel="noopener noreferrer">
          credly.com/users/vhusani-libago
        </a>
      </p>

      <ul className={styles.grid}>
        {certifications.map((cert) => (
          <li key={cert.href}>
            <a
              className={styles.card}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${cert.name} — verify on Credly`}
            >
              <img
                className={styles.badge}
                src={cert.image}
                alt=""
                width={104}
                height={104}
                loading="lazy"
                decoding="async"
              />
              <span className={styles.name}>{cert.name}</span>
              <span className={styles.meta}>
                {cert.issuer} · {cert.issued}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
