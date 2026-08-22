import { useTypewriter } from '@/hooks';
import styles from './Typewriter.module.css';

interface TypewriterProps {
  phrases: string[];
}

/**
 * Types through a list of phrases in place.
 *
 * Two details matter here:
 *
 * - Every phrase is also rendered invisibly in the same grid cell, so the
 *   block is always as tall as the longest one and the page never reflows
 *   mid-animation.
 * - The animated text is `aria-hidden`; the full phrase list is exposed once,
 *   statically, to assistive tech and crawlers. Announcing a heading that
 *   rewrites itself character by character would be unusable.
 */
export function Typewriter({ phrases }: TypewriterProps) {
  const { text, showCaret } = useTypewriter(phrases);

  return (
    <span className={styles.wrap}>
      {phrases.map((phrase) => (
        <span key={phrase} className={styles.sizer} aria-hidden="true">
          {phrase}
        </span>
      ))}

      <span className={styles.live} aria-hidden="true">
        {text}
        {showCaret && <span className={styles.caret} />}
      </span>

      <span className="visually-hidden">{phrases.join('. ')}</span>
    </span>
  );
}
