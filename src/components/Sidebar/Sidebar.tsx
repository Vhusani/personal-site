import profilePhoto from '@/assets/profile.webp';
import { AvailabilityBadge } from '@/components/AvailabilityBadge';
import { GithubIcon, LinkedInIcon, MailIcon } from '@/components/icons';
import { navItems } from '@/data/nav';
import { availability, profile } from '@/data/profile';
import styles from './Sidebar.module.css';

const socialLinks = [
  { label: 'Github', href: profile.github, Icon: GithubIcon, external: true },
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: MailIcon, external: false },
];

interface SidebarProps {
  /** Id of the section currently in view; drives the nav highlight. */
  activeSection: string;
  /** Set false to hide the portrait (was a prop on the original build). */
  showPhoto?: boolean;
}

/** Sticky identity rail: portrait, name, section nav and social links. */
export function Sidebar({ activeSection, showPhoto = true }: SidebarProps) {
  return (
    <aside className={styles.rail}>
      {showPhoto && (
        <div className={styles.photoFrame}>
          <img
            className={styles.photo}
            src={profilePhoto}
            alt={`${profile.firstName} ${profile.lastName}`}
            width={160}
            height={160}
          />
        </div>
      )}

      <div>
        <h1 className={styles.name}>
          {profile.firstName} {profile.lastName}
        </h1>
        <p className={styles.role}>{profile.role}</p>
        <p className={styles.location}>{profile.location}</p>
        {availability.available && (
          <div className={styles.availability}>
            <AvailabilityBadge label={availability.label} />
          </div>
        )}
      </div>

      <nav className={styles.nav} aria-label="Sections">
        {navItems.map((item) => {
          const isActive = item.id === activeSection;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className={styles.navNum}>{item.num}</span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className={styles.social}>
        {socialLinks.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            className={styles.socialLink}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon className={styles.socialIcon} />
            <span>{label}</span>
            <span className={styles.socialArrow} aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
