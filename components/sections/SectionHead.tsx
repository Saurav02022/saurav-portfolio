import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Oversized ghost number, then the title — and, where the design gives the
 * section one, an intro paragraph baseline-aligned to it.
 */
export function SectionHead({
  num,
  title,
  id,
  intro,
  className,
  introClassName,
  titleClassName,
  onDark = false,
}: {
  num: string;
  title: string;
  id: string;
  intro?: ReactNode;
  className?: string;
  /** The intro's measure is tuned per section. */
  introClassName?: string;
  /** Contact sizes its title well past the rest. */
  titleClassName?: string;
  /** Toolkit sits on the ink ground and inverts the whole head. */
  onDark?: boolean;
}) {
  const heading = (
    <h2
      id={id}
      className={cn(
        'font-display text-[clamp(38px,6vw,78px)] leading-[0.95] font-extrabold tracking-[-0.035em]',
        onDark ? 'text-bg' : 'text-ink',
        // With an intro the row carries the pull-up onto the number; without
        // one the title carries it itself.
        !intro && 'mt-[clamp(-30px,-3vw,-58px)]',
        titleClassName
      )}
    >
      {title}
    </h2>
  );

  return (
    <header className={className} data-reveal="0">
      <div
        aria-hidden="true"
        className={cn(
          'font-display text-[clamp(88px,15vw,190px)] leading-[0.7] font-extrabold tracking-[-0.05em]',
          onDark ? 'text-accent/36' : 'text-accent-soft'
        )}
      >
        {num}
      </div>
      {intro ? (
        <div className="mt-[clamp(-30px,-3vw,-58px)] flex flex-wrap items-end gap-x-7 gap-y-3.5">
          {heading}
          <p
            className={cn(
              'mb-2 max-w-[42ch] text-[clamp(15px,1.4vw,18px)] text-pretty',
              onDark ? 'text-on-accent/60' : 'text-muted',
              introClassName
            )}
          >
            {intro}
          </p>
        </div>
      ) : (
        heading
      )}
    </header>
  );
}
