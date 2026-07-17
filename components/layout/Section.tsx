import type { ReactNode } from 'react';
import { WRAP } from '@/lib/styles';
import { cn } from '@/lib/utils';

/**
 * A numbered page section: the design's fluid vertical rhythm, an anchor offset
 * that clears the fixed nav, and the vertical rail label wide viewports show.
 */
export function Section({
  id,
  labelledBy,
  rail,
  className,
  children,
}: {
  id: string;
  /** id of the <h2> this section is titled by. */
  labelledBy: string;
  /** Vertical marginalia — decorative, and dropped below the nav breakpoint. */
  rail?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      // relative: the containing block for the rail label, which otherwise
      // positions against the viewport and stacks on the other sections'.
      className={cn('relative scroll-mt-19 py-sec', className)}
    >
      {rail && (
        <span
          aria-hidden="true"
          className="absolute top-[clamp(90px,11vw,150px)] left-3.5 hidden rotate-180 font-mono text-[11px] tracking-[0.3em] text-faint uppercase [writing-mode:vertical-rl] nav:block"
        >
          {rail}
        </span>
      )}
      <div className={WRAP}>{children}</div>
    </section>
  );
}
