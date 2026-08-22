import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface TypewriterOptions {
  /** Milliseconds per character while typing. */
  typeMs?: number;
  /** Milliseconds per character while deleting — faster reads as natural. */
  deleteMs?: number;
  /** Pause once a phrase is fully typed. */
  holdMs?: number;
  /** Pause after a phrase is fully cleared, before the next one starts. */
  clearedMs?: number;
  /** How long each phrase shows when motion is reduced. */
  staticMs?: number;
}

/**
 * Cycles through `phrases`, typing and deleting one character at a time.
 *
 * Under `prefers-reduced-motion` the per-character animation is dropped
 * entirely: phrases still rotate, but each appears fully formed and rests
 * longer, so the effect conveys the same information without the churn.
 *
 * @returns the text to display and whether a caret should be shown.
 */
export function useTypewriter(phrases: string[], options: TypewriterOptions = {}) {
  const {
    typeMs = 70,
    deleteMs = 32,
    holdMs = 2000,
    clearedMs = 420,
    staticMs = 3600,
  } = options;

  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(() => phrases[0] ?? '');
  const [deleting, setDeleting] = useState(false);

  // Guard against the phrase list shrinking underneath a stale index.
  const safeIndex = phrases.length > 0 ? index % phrases.length : 0;
  const phrase = phrases[safeIndex] ?? '';

  useEffect(() => {
    if (phrases.length <= 1) return;

    // Reduced motion: swap whole phrases on a slow timer, no typing.
    if (reduced) {
      setText(phrase);
      const id = setTimeout(() => setIndex((i) => (i + 1) % phrases.length), staticMs);
      return () => clearTimeout(id);
    }

    let delay: number;
    let step: () => void;

    if (!deleting) {
      if (text.length < phrase.length) {
        delay = typeMs;
        step = () => setText(phrase.slice(0, text.length + 1));
      } else {
        delay = holdMs;
        step = () => setDeleting(true);
      }
    } else if (text.length > 0) {
      delay = deleteMs;
      step = () => setText(phrase.slice(0, text.length - 1));
    } else {
      delay = clearedMs;
      step = () => {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      };
    }

    const id = setTimeout(step, delay);
    return () => clearTimeout(id);
  }, [
    text,
    deleting,
    phrase,
    phrases.length,
    reduced,
    typeMs,
    deleteMs,
    holdMs,
    clearedMs,
    staticMs,
  ]);

  return { text, showCaret: !reduced };
}
