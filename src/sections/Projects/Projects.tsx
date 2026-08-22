import { useMemo, useState } from 'react';
import { FilterBar } from '@/components/FilterBar';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { SectionHeader } from '@/components/SectionHeader';
import { filterProjects, projectFilters, projects } from '@/data/projects';
import { profile } from '@/data/profile';
import { ALL_FILTER, type Project, type ProjectFilter } from '@/types';
import styles from './Projects.module.css';

interface ProjectsProps {
  /** Set false to render every project without the filter bar. */
  showFilters?: boolean;
}

export function Projects({ showFilters = true }: ProjectsProps) {
  const [filter, setFilter] = useState<ProjectFilter>(ALL_FILTER);
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(
    () => (showFilters ? filterProjects(projects, filter) : projects),
    [filter, showFilters],
  );

  return (
    <section id="portfolio" className={styles.section}>
      <SectionHeader num="03" label="Projects" />
      <h2 className={styles.heading}>Selected work</h2>
      <p className={styles.intro}>
        Professional and personal projects. See my GitHub for additional code samples:{' '}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          github.com/vhusani
        </a>
      </p>

      {showFilters && (
        <FilterBar filters={projectFilters} active={filter} onChange={setFilter} />
      )}

      <div className={styles.grid}>
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={setSelected} />
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
