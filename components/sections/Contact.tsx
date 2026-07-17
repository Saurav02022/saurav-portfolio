import { Section } from '@/components/layout/Section';
import { EMAIL, RESUME_URL, SOCIALS, contact } from '@/lib/portfolio-data';
import { SectionHead } from './SectionHead';

const ELSEWHERE = [...SOCIALS, { label: 'Résumé', url: RESUME_URL }];

export function Contact() {
  return (
    <Section id="contact" labelledBy="con-h">
      <SectionHead
        num="05"
        title={contact.title}
        id="con-h"
        className="mb-[clamp(30px,4vw,52px)]"
        titleClassName="text-[clamp(40px,7.5vw,104px)] leading-[0.92] tracking-[-0.04em] text-balance"
      />

      <div className="flex flex-wrap items-end gap-[clamp(28px,5vw,72px)]" data-reveal="1">
        <div className="min-w-[min(100%,300px)] flex-[1_1_440px]">
          <p className="mb-[clamp(26px,3vw,36px)] max-w-[50ch] text-[clamp(16px,1.5vw,19px)] text-muted text-pretty">
            {contact.support}
          </p>
          <a
            className="inline-flex items-center gap-3.5 font-display text-[clamp(24px,4vw,52px)] leading-none font-bold tracking-[-0.03em] text-balance transition-colors duration-200 hover:text-accent"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
            <span className="text-[0.5em] text-accent" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <div className="min-w-[min(100%,220px)] flex-[1_1_220px]">
          <p className="mb-1 font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
            Elsewhere
          </p>
          {ELSEWHERE.map((link) => (
            <a
              key={link.label}
              className="flex items-center justify-between gap-3.5 border-t border-line py-3.75 font-mono text-[13.5px] transition-[color,padding-left] duration-200 last-of-type:border-b hover:pl-2 hover:text-accent"
              href={link.url}
              target="_blank"
              rel="noopener"
              aria-label={`${link.label} (opens in new tab)`}
            >
              {link.label}
              <span className="text-faint" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
