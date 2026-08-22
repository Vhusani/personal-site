import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view so the rail nav can highlight it.
 *
 * Mirrors the observer tuning of the original single-file build: the root
 * margin biases towards the upper-middle of the viewport, and when several
 * sections are visible at once the one with the largest intersection wins.
 *
 * @param sectionIds ids of the <section> elements to watch, in document order.
 * @returns the id of the active section (defaults to the first id).
 */
export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  // Join so the effect re-runs on content change, not on every array identity.
  const key = sectionIds.join('|');

  useEffect(() => {
    const ids = key ? key.split('|') : [];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0 || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) setActive(mostVisible.target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.01, 0.25, 0.6] },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
