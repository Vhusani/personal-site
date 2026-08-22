import type { ProjectFilter } from '@/types';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  filters: ProjectFilter[];
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}

/**
 * Tag filter for the projects grid. Rendered as a tablist so keyboard and
 * screen-reader users get the same grouping the visual design implies.
 */
export function FilterBar({ filters, active, onChange }: FilterBarProps) {
  return (
    <div className={styles.bar} role="tablist" aria-label="Filter projects by technology">
      {filters.map((filter) => {
        const selected = filter === active;
        return (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={selected}
            className={`${styles.button} ${selected ? styles.active : ''}`}
            onClick={() => onChange(filter)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
