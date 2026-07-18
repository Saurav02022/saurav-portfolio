import { Section } from '@/components/layout/Section';
import { about } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';
import { SectionHead } from './SectionHead';

const PROSE = 'max-w-[58ch] text-[clamp(16px,1.5vw,18.5px)] text-pretty';

export function About() {
  return (
    <Section id="about" labelledBy="about-h" rail="Engineering POV">
      <SectionHead num="04" title="About" id="about-h" className="mb-[clamp(40px,5vw,64px)]" />

      <div className="flex flex-wrap items-start gap-[clamp(32px,5vw,80px)]">
        <div className="min-w-[min(100%,300px)] flex-[1_1_460px]" data-reveal="0">
          <p className="mb-[clamp(24px,3vw,34px)] font-display text-[clamp(22px,2.8vw,34px)] leading-[1.2] font-semibold tracking-[-0.02em] text-balance">
            {about.statement}
          </p>
          <p className={cn(PROSE, 'mb-4.5 text-ink2')}>{about.p1}</p>
          <p className={cn(PROSE, 'text-muted')}>{about.p2}</p>
        </div>

        <dl
          className="max-w-[420px] min-w-[min(100%,260px)] flex-[1_1_280px]"
          data-reveal="1"
        >
          {about.rail.map((row) => (
            <div
              key={row.label}
              className="flex justify-between gap-3.5 border-t border-line py-4 first:border-t-2 first:border-t-ink last:border-b-2 last:border-b-ink"
            >
              <dt className="font-mono text-[11px] tracking-[0.1em] text-faint uppercase">
                {row.label}
              </dt>
              <dd className={cn('text-right text-[15.5px]', row.narrow && 'max-w-[22ch]')}>
                {row.value}
                {row.sub && (
                  <>
                    <br />
                    <span className="text-[13.5px] text-muted">{row.sub}</span>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
