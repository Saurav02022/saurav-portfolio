import { cn } from '@/lib/utils';

/**
 * Class recipes for the few combos that repeat across files. Anything used in
 * a single component is written inline at the element instead.
 */

/** The page's one measure: centred column with the design's fluid gutter. */
export const WRAP = 'mx-auto w-full max-w-wrap px-gutter';

const BTN = 'inline-flex min-h-13 items-center gap-2.5 text-[15px] font-semibold';

export const BTN_PRIMARY = cn(
  BTN,
  'bg-ink px-6.5 text-bg transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent'
);

export const BTN_GHOST = cn(
  BTN,
  'border-[1.5px] border-ink px-6 transition-colors duration-200 hover:bg-ink hover:text-bg'
);

export const BTN_QUIET = cn(
  BTN,
  'gap-2 border-b border-line2 px-1.5 font-mono text-[12.5px] font-normal tracking-[0.06em] text-ink2 uppercase transition-colors duration-200 hover:border-ink hover:text-ink'
);
