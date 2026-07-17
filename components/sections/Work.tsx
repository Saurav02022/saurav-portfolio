import { Fragment } from 'react';
import { TagList } from '@/components/Tag';
import { Section } from '@/components/layout/Section';
import { cases, workIntro } from '@/lib/portfolio-data';
import type { CaseFact, CaseStudy } from '@/lib/types';
import { cn } from '@/lib/utils';
import { SectionHead } from './SectionHead';

const CASE_LINK =
  'inline-flex items-center gap-2 border-b-2 border-accent pb-0.75 font-mono text-[12.5px] font-bold tracking-[0.06em] uppercase transition-colors duration-200 hover:text-accent';
const CASE_LINK_SECONDARY = 'border-line text-muted hover:text-ink';

const FIG = 'border-[1.5px] border-ink bg-paper';
const FIG_CAP =
  'mb-5 flex justify-between font-mono text-[10.5px] tracking-[0.16em] text-faint uppercase';
const FIG_STEP = 'border border-line2 bg-bg font-mono text-[12px] text-ink2';

/** Design assigns each fact row its own weight; muted is the default. */
const FACT_TONE = {
  plain: 'text-ink2 text-wrap',
  strong: 'text-ink',
} as const;

function Facts({ facts, className }: { facts: CaseFact[]; className?: string }) {
  return (
    <dl className={cn('grid max-w-[52ch] gap-5', className)}>
      {facts.map((f) => (
        <div key={f.label} className="flex flex-wrap gap-4.5">
          <dt className="flex-[0_0_118px] pt-0.5 font-mono text-[11px] tracking-[0.1em] text-accent uppercase">
            {f.label}
          </dt>
          <dd
            className={cn(
              'flex-[1_1_240px] text-[15.5px] text-muted text-pretty',
              f.tone && FACT_TONE[f.tone]
            )}
          >
            {f.text}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function CaseMeta({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4.5 gap-y-2 border-b-[1.5px] border-ink pb-4.5 font-mono text-[12px] tracking-[0.1em] text-muted uppercase">
      <span className="font-bold text-accent">{study.feature}</span>
      <span>{study.kind}</span>
      {study.live && (
        <span className="inline-flex items-center gap-1.5 text-ink2 before:size-1.75 before:bg-live before:content-['']">
          Live
        </span>
      )}
      <span className="ml-auto text-faint">{study.year}</span>
    </div>
  );
}

/** One case card — every feature uses this identical layout. */
function Case({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article className={index < cases.length - 1 ? 'mb-[clamp(64px,9vw,120px)]' : undefined}>
      <CaseMeta study={study} />
      <div className="flex flex-wrap gap-[clamp(28px,4vw,60px)] pt-[clamp(26px,3vw,40px)]">
        <div className="order-2 min-w-[min(100%,280px)] flex-[1_1_300px]">
          <h3 className="mb-4.5 font-display text-[clamp(30px,4.4vw,52px)] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
            {study.title}
          </h3>
          <p className="mb-[clamp(24px,3vw,34px)] max-w-[46ch] text-[clamp(16px,1.5vw,19px)] text-ink2 text-pretty">
            {study.summary}
          </p>
          <Facts facts={study.facts} />
          <div className="mt-7 flex flex-wrap gap-5">
            {study.liveUrl && (
              <a
                className={CASE_LINK}
                href={study.liveUrl}
                target="_blank"
                rel="noopener"
                aria-label={`${study.title} live app (opens in new tab)`}
              >
                Live app ↗
              </a>
            )}
            <a
              className={cn(CASE_LINK, study.liveUrl && CASE_LINK_SECONDARY)}
              href={study.repoUrl}
              target="_blank"
              rel="noopener"
              aria-label={`${study.title} source (opens in new tab)`}
            >
              Source ↗
            </a>
          </div>
        </div>

        <div className="order-1 min-w-[min(100%,300px)] flex-[1_1_380px]">
          <figure className={cn(FIG, 'p-[clamp(22px,2.6vw,34px)]')} data-reveal="0">
            <figcaption className={FIG_CAP}>
              <span>
                Fig.{String(index + 1).padStart(2, '0')} — {study.fig.caption}
              </span>
              <span>{study.fig.sub}</span>
            </figcaption>
            {/* Steps and connectors are flat siblings so the column gap
                falls between every one of them, as in the design. */}
            <div className="flex flex-col gap-2.25">
              {study.fig.steps.map((step, i) => (
                <Fragment key={step.n}>
                  {i > 0 && <div className="ml-5.5 h-3.5 w-px bg-line2" aria-hidden="true" />}
                  {step.note ? (
                    <div
                      className={cn(
                        FIG_STEP,
                        'border-[1.5px] border-accent bg-accent-soft px-3.75 py-3.5'
                      )}
                    >
                      <div className="font-bold tracking-[0.03em] text-ink">
                        <span className="text-accent">{step.n} </span>
                        {step.text}
                      </div>
                      <div className="mt-1.5 text-[11px] text-muted">{step.note}</div>
                    </div>
                  ) : (
                    <div className={cn(FIG_STEP, 'px-3.75 py-3.5 tracking-[0.03em]')}>
                      <span className="text-faint">{step.n} </span>
                      {step.text}
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
            <TagList tags={study.tags} className="mt-5 border-t border-line pt-4" />
          </figure>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <Section id="work" labelledBy="work-h" rail="Selected Work — 2025/26">
      <SectionHead
        num="01"
        title="Selected Work"
        id="work-h"
        intro={workIntro}
        className="mb-[clamp(40px,6vw,72px)]"
      />
      {cases.map((study, i) => (
        <Case key={study.title} study={study} index={i} />
      ))}
    </Section>
  );
}
