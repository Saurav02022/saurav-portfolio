# Saurav Kumar — Portfolio · Design Spec

Single-page, light, typography-led portfolio for a full-stack + AI engineer.
Voice is plain-engineer: concrete claims, no hype. The visual system is quiet
so the writing carries the page.

Source of truth: `Saurav Kumar Portfolio.dc.html` and this codebase. Both must
stay in step. Copy lives in `lib/portfolio-data.tsx` — every string on the site
is there, and nowhere else.

---

## 1. Foundations

### Tokens
Declared once in `app/globals.css` under `@theme`, so each one compiles to a
Tailwind utility as well as a CSS variable. There is no separate Tailwind config
file — Tailwind v4 reads the CSS.

| Token | Value | Utility | Use |
|---|---|---|---|
| `--color-bg` | `#F3EFE7` | `bg-bg` | Page ground (warm paper) |
| `--color-bg2` | `#EAE3D6` | `bg-bg2` | Experience band |
| `--color-paper` | `#FBF8F1` | `bg-paper` | Figure interiors |
| `--color-ink` | `#151310` | `text-ink` | Primary text, inverted surfaces |
| `--color-ink2` | `#3A352D` | `text-ink2` | Leads, case summaries |
| `--color-muted` | `#6C6558` | `text-muted` | Body / secondary text |
| `--color-faint` | `#6F695A` | `text-faint` | Meta, dates, captions |
| `--color-line` | `rgb(21 19 16 / .15)` | `border-line` | Hairline dividers |
| `--color-line2` | `rgb(21 19 16 / .28)` | `border-line2` | Stronger borders |
| `--color-accent` | `#0A6B57` | `text-accent` | Teal — the only chromatic colour |
| `--color-accent-soft` | `rgb(10 107 87 / .13)` | `bg-accent-soft` | Section numbers, gate fills |
| `--color-accent-bright` | `#71A99E` | `text-accent-bright` | Accent on the ink ground |
| `--color-on-accent` | `#F7F3EB` | `text-on-accent` | Text on ink; `/NN` for its tints |
| `--color-live` | `#2E9E62` | `bg-live` | The "Live" status dot only |

Accent is deliberately scarce: eyebrow, section numbers, `<em>` in the cover,
bullet markers, hover states, `::selection`. Never a large teal fill.

`--color-faint` is pinned to the lightest value that still clears WCAG AA
(4.8:1 on `--color-bg`) — it carries 11px metadata, so it cannot go lighter.

### Type
- **Display** — Syne 600/700/800 (`font-display`): brand mark, cover title,
  section titles, case titles, company names, big email. Carries all display weight.
- **Sans** — Instrument Sans (`font-sans`): body, leads, buttons. Base 17px / 1.6.
- **Mono** — Space Mono (`font-mono`): eyebrow, nav, dates, meta, tags, captions,
  labels, links. Every "instrument panel" element is mono + uppercase + wide tracking.

The display ↔ mono contrast (expressive against technical metadata) is the core
visual idea. Do not introduce a fourth family.

Font stacks are declared literally (`"Syne", sans-serif`), **not** as next/font's
`--font-*` variables: those expand to `"Syne", "Syne Fallback"`, and the glyphs
this design leans on (→ ↗ ✳) sit outside the latin subset, so they would resolve
to Next's proportional metric-fallback instead of a real mono face. The
`@font-face` rules still come from next/font via the `.variable` classes on `<html>`.

Display sizing is fluid via `clamp()` — cover title `clamp(40px,6.4vw,86px)`,
section title `clamp(38px,6vw,78px)`. `text-balance` on headlines, `text-pretty`
on paragraphs and bullets. Prose measures are capped in `ch`.

### Layout & spacing
- `WRAP` (`lib/styles.ts`) — `max-w-wrap` (1360px) with the fluid `px-gutter`
  (`clamp(20px,5vw,56px)`). The page's only measure.
- `<Section>` (`components/layout/Section.tsx`) — `py-sec`
  (`clamp(78px,10vw,140px)`), `scroll-mt-19` so anchors clear the fixed nav, and
  the optional vertical rail label.

---

## 2. Components

**Nav** — fixed, transparent until scrolled; then translucent blur + hairline.
Display brand mark with a teal ✳. Mono links tracked by scroll-spy, which sets
`aria-current`. Collapses to an "Index" button below 860px (`nav:` breakpoint)
opening a native `<dialog>` via `showModal()` — the platform supplies the focus
trap, Esc-to-close, focus restore and inert background.

**Cover** — mono bar (role · discipline · location · year) over a rule; mono
eyebrow with a leading accent rule; oversized display title with one teal `<em>`;
support paragraph; primary / ghost / quiet buttons; and an index rail listing the
six numbered sections with a mono stats block. Staggered `rise` on entry.

**Marquee** — ink band, mono uppercase, two identical strips scrolled -50%.
`aria-hidden` — it is decoration, and its content is stated elsewhere on the page.

**Section head** — oversized ghost number in `accent-soft`, then the title, with
the intro baseline-aligned into the same row where a section has one. Without an
intro the title carries the pull-up onto the number instead.

**Work / case study** — six features, one identical card, sorted by how much
verifiable engineering each repo holds. Per card: mono meta row over a rule
(Feature NN · kind · year, with origin — take-home, hackathon — stated in the
kind on purpose), then a prose column (title, summary, facts, links) beside a
bordered figure. Each figure is a numbered step list from `fig` in the case
data — the highlighted step (the one with a `note`) is the point of the
mechanism. Fig numbers derive from list position. Facts are a `<dl>` of
Role / Challenge / Key decision / Outcome.

**Experience** — two-column row (mono dates + company | prose), 2px ink rules
top and bottom, dash-marker bullets, mono tag pills. `<b>` in the copy is a
weight shift, never colour.

**Open source** — the Experience row reused verbatim: same two-column split, same
2px rules, same tag pills. This is work, and reading it in the same frame as the
jobs is the point. Two rows, reverse-chronological like Experience, so the arc
(contributor in the winter cohort, mentor in the summer one) lands without being
narrated. Projects are `/`-marker rows carrying a stat, a one-clause description
of the project, then what was actually done — and a row only carries a number
once that number resolves to something a reader can open.

**About** — prose column + a detail rail of hairline-separated Label/Value rows.

**Toolkit** — inverted: ink ground, `accent-bright` labels, `on-accent` tints
for the body. Five rows, then the languages line.

**Contact** — oversized display title, muted support, big display mailto, and a
mono "Elsewhere" list.

**Footer** — display name + mono meta left; colophon + back-to-top right.

---

## 3. Motion
Restrained. `rise` (20px + fade, 0.6–0.8s) staggers the cover on load; a shared
`Reveal` observer applies the same idea to `[data-reveal]` elements on scroll,
staggering by `85ms × the attribute value`. Hover transitions are 0.2s on colour,
border and small transforms. The primary button lifts 2px.

All of it is disabled under `prefers-reduced-motion` — including `Reveal`, which
checks the media query and returns before hiding anything, so nothing can be left
invisible.

## 4. Accessibility
Skip link to `<main>`; teal `:focus-visible` ring on every link and button;
`aria-labelledby` per section; scroll-spy sets `aria-current`; the mobile menu is
a native modal `<dialog>`; 44px minimum touch targets on the menu buttons;
"(opens in new tab)" in the `aria-label` of every external link; decorative
glyphs (→ ↗ ✳ /) are `aria-hidden`. Body text meets WCAG AA.

## 5. Responsive
- **≥860px** (`nav:`) — nav links and the vertical rail labels appear.
- **<860px** — nav collapses to the Index dialog; rail labels drop out.

Everything else is intrinsic: `flex-wrap` with `flex-[grow_shrink_basis]` and
`min-w-[min(100%,Npx)]` on each column, so sections reflow on content width
rather than on breakpoints.

## 6. Rules
- Teal stays scarce — accent, not decoration.
- Display for anything human-facing and expressive; mono for anything
  machine/metadata.
- No emoji, no gradients-as-decoration.
- Claims stay concrete and verifiable; unverified metrics never ship (see the
  RTO Shield outcome, which states the take-home caveat rather than inventing
  numbers). This applies to the OG card and JSON-LD too.
