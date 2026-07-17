import { Fragment } from 'react';
import { TagList } from '@/components/Tag';
import { Section } from '@/components/layout/Section';
import { experience, experienceIntro } from '@/lib/portfolio-data';
import { SectionHead } from './SectionHead';

/** <b> in the copy is a weight shift, not a colour one — see lib/portfolio-data. */
const BOLD_IN_PROSE = '[&_b]:font-semibold [&_b]:text-ink';

export function Experience() {
  return (
    <Section id="experience" labelledBy="exp-h" className="border-y-[1.5px] border-ink bg-bg2">
      <SectionHead
        num="02"
        title="Experience"
        id="exp-h"
        intro={experienceIntro}
        className="mb-[clamp(44px,6vw,76px)]"
        introClassName="max-w-[40ch]"
      />

      {experience.map((role, i) => (
        <div
          key={role.company}
          className="flex flex-wrap gap-[clamp(22px,4vw,64px)] border-t-2 border-ink py-[clamp(30px,3.5vw,44px)] last:border-b-2"
          data-reveal={String(i)}
        >
          <div className="min-w-[min(100%,230px)] flex-[1_1_250px]">
            <p className="mb-4 font-mono text-[12px] font-bold tracking-[0.08em] text-accent">
              {role.dates}
            </p>
            <h3 className="mb-1.5 font-display text-[clamp(26px,3.4vw,40px)] leading-none font-bold tracking-[-0.025em]">
              {role.company}
            </h3>
            <p className="font-mono text-[11.5px] leading-[1.7] text-muted">
              {role.meta.map((line, j) => (
                <Fragment key={line}>
                  {j > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </p>
          </div>

          <div className="min-w-[min(100%,300px)] flex-[1_1_440px]">
            <p
              className={`mb-5.5 text-[clamp(16px,1.5vw,18.5px)] text-ink2 text-pretty ${BOLD_IN_PROSE}`}
            >
              {role.summary}
            </p>
            <ul className={`mb-6 grid gap-4 ${BOLD_IN_PROSE}`}>
              {/* The marker is a real element, not ::before — generated
                  content gets announced as "slash" on every bullet. */}
              {role.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-3.5 text-[16px] text-muted text-pretty">
                  <span className="flex-none font-mono font-bold text-accent" aria-hidden="true">
                    /
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <TagList tags={role.tags} tagClassName="border-line2" />
          </div>
        </div>
      ))}
    </Section>
  );
}
