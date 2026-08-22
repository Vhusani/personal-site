import { Modal } from '@/components/Modal';
import { Tag } from '@/components/Tag';
import { projectDetails } from '@/data/projectDetails';
import type { Project } from '@/types';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

/** Full detail view for a single project. */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const details = projectDetails[project.id];

  // The source detail pages sometimes carry a more precise date than the card.
  const date = details.sourceDate || project.date;
  // Falls back to the card summary where the source page had only filler text.
  const overview = details.overview || project.body;
  const stack = details.stack.length > 0 ? details.stack : project.tech;

  return (
    <Modal title={project.title} eyebrow={project.kicker} onClose={onClose}>
      {date && (
        <p className={styles.date}>
          <span className="visually-hidden">Project dates: </span>
          {date}
        </p>
      )}

      <p className={styles.overview}>{overview}</p>

      {details.highlights.length > 0 && (
        <section className={styles.block}>
          <h3 className={styles.blockTitle}>Key contributions</h3>
          <ul className={styles.highlights}>
            {details.highlights.map((item) => (
              <li key={item} className={styles.highlight}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className={styles.block}>
        <h3 className={styles.blockTitle}>Stack</h3>
        <ul className={styles.stack}>
          {stack.map((item) => (
            <li key={item}>
              <Tag size="sm">{item}</Tag>
            </li>
          ))}
        </ul>
      </section>

      {details.links.length > 0 && (
        <section className={styles.block}>
          <h3 className={styles.blockTitle}>Links</h3>
          <ul className={styles.links}>
            {details.links.map((link) => (
              <li key={link.href}>
                <a
                  className={styles.link}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Modal>
  );
}
