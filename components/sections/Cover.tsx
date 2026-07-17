import { LOCATION, RESUME_URL, ROLE, SECTIONS, YEAR, cover } from '@/lib/portfolio-data';
import { BTN_GHOST, BTN_PRIMARY, BTN_QUIET, WRAP } from '@/lib/styles';
import { cn } from '@/lib/utils';

/** The mono strip across the top of the cover. */
const BAR_META = 'font-mono text-[11.5px] tracking-[0.14em] uppercase';

export function Cover() {
  return (
    <section
      id="top"
      aria-label="Cover"
      className="pt-[clamp(84px,11vh,116px)] pb-[clamp(40px,6vw,72px)]"
    >
      <div className={WRAP}>
        <div className="flex animate-rise flex-wrap items-baseline gap-x-5 gap-y-2 border-b-[1.5px] border-ink pb-3.75 [animation-duration:0.6s]">
          <span className={cn(BAR_META, 'font-bold text-ink')}>{ROLE}</span>
          <span className={cn(BAR_META, 'text-muted')}>{cover.discipline}</span>
          <span className={cn(BAR_META, 'ml-auto text-muted')}>{LOCATION}</span>
          <span className={cn(BAR_META, 'font-bold text-accent')}>{YEAR}</span>
        </div>

        <div className="flex flex-wrap items-start gap-[clamp(30px,4vw,64px)] pt-[clamp(24px,3.5vw,44px)]">
          <div className="min-w-[min(100%,320px)] flex-[1_1_560px]">
            <p className="mb-[clamp(16px,2.2vw,24px)] inline-flex animate-rise items-center gap-2.5 font-mono text-[12px] tracking-[0.16em] text-accent uppercase before:h-[1.5px] before:w-6.5 before:bg-accent before:content-[''] [animation-delay:0.05s] [animation-duration:0.7s]">
              {cover.eyebrow}
            </p>
            <h1 className="max-w-[15ch] animate-rise font-display text-[clamp(40px,6.4vw,86px)] leading-[0.95] font-extrabold tracking-[-0.035em] text-balance [animation-delay:0.12s] [&_em]:text-accent [&_em]:not-italic">
              {cover.title}
            </h1>
            <p className="mt-[clamp(22px,2.6vw,30px)] max-w-[50ch] animate-rise text-[clamp(16px,1.5vw,19px)] leading-[1.55] text-ink2 text-pretty [animation-delay:0.22s]">
              {cover.support}
            </p>
            <div className="mt-[clamp(30px,4vw,42px)] flex animate-rise flex-wrap gap-3 [animation-delay:0.32s]">
              <a className={BTN_PRIMARY} href="#work">
                View selected work
                <span aria-hidden="true">→</span>
              </a>
              <a className={BTN_GHOST} href="#contact">
                Get in touch
              </a>
              <a
                className={BTN_QUIET}
                href={RESUME_URL}
                target="_blank"
                rel="noopener"
                aria-label="Résumé (opens in new tab)"
              >
                Résumé ↗
              </a>
            </div>
          </div>

          <div className="max-w-[420px] min-w-[min(100%,260px)] flex-[1_1_280px] animate-rise [animation-delay:0.4s]">
            <p className="mb-2.5 font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
              Index
            </p>
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                className="flex items-baseline gap-3.5 border-t border-line py-2.75 transition-[color,padding-left] duration-200 last-of-type:border-b hover:pl-2 hover:text-accent"
                href={`#${s.id}`}
              >
                <span className="font-mono text-[12px] text-accent">{s.num}</span>
                <span className="font-display text-[clamp(20px,2.4vw,27px)] font-semibold tracking-[-0.02em]">
                  {s.indexLabel ?? s.label}
                </span>
              </a>
            ))}
            <dl className="mt-5 font-mono text-[12px] leading-[1.9] text-muted">
              {cover.stats.map((stat) => (
                <div key={stat.label} className="flex justify-between gap-3">
                  <dt className="text-faint">{stat.label}</dt>
                  <dd className="text-right text-ink2">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
