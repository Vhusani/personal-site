import { SectionHeader } from '@/components/SectionHeader';
import { Typewriter } from '@/components/Typewriter';
import { contactDetails, headlines, profile } from '@/data/profile';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeader num="01" label="About me" />
      <h2 className={styles.heading}>
        <Typewriter phrases={headlines} />
      </h2>
      <div className={styles.bio}>
        {profile.bio.map((paragraph) => (
          <p key={paragraph} className={styles.bioParagraph}>
            {paragraph}
          </p>
        ))}
      </div>

      <dl className={styles.details}>
        {contactDetails.map((detail) => (
          <div key={detail.label} className={styles.detail}>
            <dt className={styles.detailLabel}>{detail.label}</dt>
            <dd className={styles.detailValue}>
              {detail.href ? (
                <a className={styles.detailLink} href={detail.href}>
                  {detail.value}
                </a>
              ) : (
                detail.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
