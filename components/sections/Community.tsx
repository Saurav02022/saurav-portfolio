import { Fragment } from 'react';
import { TagList } from '@/components/Tag';
import { Section } from '@/components/layout/Section';
import { community, communityIntro } from '@/lib/portfolio-data';
import type { CommunityProject } from '@/lib/types';
import { SectionHead } from './SectionHead';

/**
 * Mirrors the Experience row deliberately — this is work, and it should read
 * with the same weight rather than as a footnote.
 */
function Project({ project }: { project: CommunityProject }) {
  const heading = project.url ? (
    <a
      className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-200 hover:text-accent"
      href={project.url}
      target="_blank"
      rel="noopener"
      aria-label={`${project.name} on GitHub (opens in new tab)`}
    >
      {project.name} <span aria-hidden="true">↗</span>
    </a>
  ) : (
    <b className="font-semibold text-ink">{project.name}</b>
  );

  return (
    <li className="flex gap-3.5 text-[15.5px] text-muted text-pretty">
      <span className="flex-none pt-0.5 font-mono font-bold text-accent" aria-hidden="true">
        /
      </span>
      <span>
        {heading}
        {project.stat && (
          <span className="ml-2.5 font-mono text-[11px] tracking-[0.08em] text-faint uppercase">
            {project.stat}
          </span>
        )}
        {project.blurb && <span className="mt-1 block">{project.blurb}</span>}
        {project.did && <span className="mt-1 block text-ink2">{project.did}</span>}
      </span>
    </li>
  );
}

export function Community() {
  return (
    <Section id="open-source" labelledBy="os-h" rail="Open Source — 2025/26">
      <SectionHead
        num="03"
        title="Open source"
        id="os-h"
        intro={communityIntro}
        className="mb-[clamp(40px,5vw,68px)]"
      />

      {community.map((entry, i) => (
        <div
          key={entry.org}
          className="flex flex-wrap gap-[clamp(22px,4vw,64px)] border-t-2 border-ink py-[clamp(30px,3.5vw,44px)] last:border-b-2"
          data-reveal={i}
        >
          <div className="min-w-[min(100%,230px)] flex-[1_1_250px]">
            <p className="mb-4 font-mono text-[12px] font-bold tracking-[0.08em] text-accent">
              {entry.dates}
            </p>
            <h3 className="mb-1.5 font-display text-[clamp(24px,3.2vw,36px)] leading-[1.05] font-bold tracking-[-0.025em] text-balance">
              {entry.org}
            </h3>
            <p className="font-mono text-[11.5px] leading-[1.7] text-muted">
              {entry.meta.map((metaLine, j) => (
                <Fragment key={metaLine}>
                  {j > 0 && <br />}
                  {metaLine}
                </Fragment>
              ))}
            </p>
          </div>

          <div className="min-w-[min(100%,300px)] flex-[1_1_440px]">
            <p className="mb-6 max-w-[58ch] text-[clamp(16px,1.5vw,18.5px)] text-ink2 text-pretty">
              {entry.summary}
            </p>

            <ul className="mb-6 grid max-w-[58ch] gap-5">
              {entry.projects.map((project) => (
                <Project key={project.name} project={project} />
              ))}
            </ul>

            <TagList tags={entry.tags} tagClassName="border-line2" />
          </div>
        </div>
      ))}
    </Section>
  );
}
