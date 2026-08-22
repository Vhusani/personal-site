/** A tag used both to label a project and to drive the filter bar. */
export type ProjectTag =
  | 'Professional'
  | 'C#'
  | 'Typescript'
  | 'JavaScript'
  | 'Front-End'
  | 'SQL';

/** The filter bar adds a catch-all in front of the real tags. */
export const ALL_FILTER = 'All' as const;
export type ProjectFilter = typeof ALL_FILTER | ProjectTag;

/**
 * Stable slug for each project. Declaring it as a union means
 * `projectDetails` must cover every project, so a missing detail entry is a
 * compile error rather than an empty modal.
 */
export type ProjectId =
  | 'thesouthmart'
  | 'tillapos'
  | 'tillapos-website'
  | 'thesouthmart-news'
  | 'cc-dashboard'
  | 'cash2cache'
  | 'dotnet-api'
  | 'survey-app'
  | 'snake-bite'
  | 'digital-lab'
  | 'cube'
  | 'database-scripts';

export interface Project {
  id: ProjectId;
  /** Short category line shown above the title. */
  kicker: string;
  /** Free-form date range; empty string renders no date. */
  date: string;
  title: string;
  /** Card summary, and the modal's fallback when there is no `overview`. */
  body: string;
  tech: string[];
  tags: ProjectTag[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

/** Long-form content shown when a project card is opened. */
export interface ProjectDetails {
  /** Date as written on the source detail page; may be more precise than the card. */
  sourceDate?: string;
  /** Omitted where the source page had only filler text. */
  overview?: string;
  /** Fuller technology list than the card's `tech`. */
  stack: string[];
  /** Key achievements / contributions; may be empty. */
  highlights: string[];
  /** Live or demo URLs; may be empty. */
  links: ProjectLink[];
}

/** A verified badge from the Credly profile. */
export interface Certification {
  name: string;
  issuer: string;
  /** Human-readable issue date, e.g. "Nov 2016". */
  issued: string;
  /** Bundled badge artwork, imported so Vite fingerprints it. */
  image: string;
  /** Public Credly verification page for this badge. */
  href: string;
}

/** One row in a dated timeline (experience or education). */
export interface TimelineEntry {
  date: string;
  /** Job title or qualification. */
  title: string;
  /** Employer or institution. */
  subtitle: string;
}

export interface NavItem {
  /** Matches the id of the corresponding <section>. */
  id: string;
  label: string;
  /** Two-digit ordinal, e.g. "01". */
  num: string;
  href: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}
