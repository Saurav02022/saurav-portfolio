import { Section } from '@/components/layout/Section';
import { LANGUAGES, toolkit, toolkitIntro } from '@/lib/portfolio-data';
import { SectionHead } from './SectionHead';

export function Toolkit() {
  return (
    <Section id="toolkit" labelledBy="tk-h" className="border-t-[1.5px] border-ink bg-ink text-bg">
      <SectionHead
        num="05"
        title="Toolkit"
        id="tk-h"
        intro={toolkitIntro}
        className="mb-[clamp(40px,5vw,68px)]"
        introClassName="max-w-[44ch]"
        onDark
      />

      <div className="flex flex-col">
        {toolkit.map((row, i) => (
          <div
            key={row.num}
            className="flex flex-wrap gap-x-10 gap-y-4 border-t border-on-accent/20 py-[clamp(22px,2.6vw,30px)] last-of-type:border-b"
            data-reveal={String(i)}
          >
            <div className="flex-[1_1_240px]">
              <span className="font-mono text-[11.5px] tracking-[0.12em] text-accent-bright uppercase">
                {row.num} — {row.label}
              </span>
            </div>
            <div className="flex-[2_1_380px]">
              <p className="mb-2.5 font-display text-[clamp(18px,1.9vw,23px)] font-semibold">
                {row.tools}
              </p>
              <p className="text-[15.5px] text-on-accent/62 text-pretty">{row.note}</p>
            </div>
          </div>
        ))}
        <p className="mt-6.5 font-mono text-[12px] tracking-[0.08em] text-on-accent/50">
          <span className="text-accent-bright">LANGUAGES —</span> {LANGUAGES}
        </p>
      </div>
    </Section>
  );
}
