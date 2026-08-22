import { Tag } from '@/components/Tag';
import type { Project } from '@/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

/**
 * A single project tile. The whole card is a button that opens the project's
 * detail modal — it is a button rather than a link because it opens an
 * in-page dialog rather than navigating anywhere.
 */
export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={() => onSelect(project)}
      aria-haspopup="dialog"
      aria-label={`${project.title} — view details`}
    >
      <div className={styles.meta}>
        <span className={styles.kicker}>{project.kicker}</span>
        {project.date && <span className={styles.date}>{project.date}</span>}
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.body}>{project.body}</p>
      <div className={styles.tech}>
        {project.tech.map((item) => (
          <Tag key={item} size="sm">
            {item}
          </Tag>
        ))}
      </div>
      <span className={styles.cue} aria-hidden="true">
        View details →
      </span>
    </button>
  );
}
