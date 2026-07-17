import { Fragment } from 'react';
import { MARQUEE_ITEMS } from '@/lib/portfolio-data';

// Non-breaking: regular spaces would collapse and the spacing would go flat.
const GAP = '\u00a0\u00a0';

// Two identical strips; the keyframe scrolls the track exactly -50%, so the
// second lands where the first began. Each item reads "<item>␣␣✳", joined by
// "␣␣" — note the strip ends on the ✳ with no trailing gap, which is what the
// design renders (its source's trailing &nbsp;&nbsp; is dropped in its build).
const strip = (
  <span className="font-mono text-[13px] tracking-[0.14em] uppercase">
    {MARQUEE_ITEMS.map((item, i) => (
      <Fragment key={item}>
        {i > 0 && GAP}
        {item}
        {GAP}
        <span className="text-accent">✳</span>
      </Fragment>
    ))}
  </span>
);

export function Marquee() {
  return (
    <div
      className="overflow-hidden border-y-[1.5px] border-ink bg-ink py-3.25 whitespace-nowrap text-bg"
      aria-hidden="true"
    >
      <div className="inline-flex animate-marquee will-change-transform">
        {strip}
        {strip}
      </div>
    </div>
  );
}
