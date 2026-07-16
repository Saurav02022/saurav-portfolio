# Saurav Kumar — Portfolio · Design Spec

Single-page, dark, typography-led portfolio for a full-stack + LLM engineer.
Voice is plain-engineer: concrete claims, no hype. The visual system is quiet
so the writing carries the page.

Source of truth: `Saurav Kumar - Portfolio.dc.html` (this project) and the
synced Next.js codebase (`saurav-portfolio/`). Both must stay in step.

---

## 1. Foundations

### Color tokens
Defined once on `.page` (and mirrored in `globals.css` `:root`).

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0B0B0D` | Page background |
| `--bg2` | `#131317` | Row hover (experience) |
| `--bg3` | `#191921` | Reserved elevated surface |
| `--fg` | `#ECEBE4` | Primary text (warm off-white) |
| `--fg2` | `#D6D5CD` | Lead paragraphs, case summaries |
| `--muted` | `#A1A199` | Body / secondary text |
| `--faint` | `#8C8C84` | Meta, dates, captions |
| `--line` | `rgba(236,235,228,.10)` | Hairline dividers, borders |
| `--line2` | `rgba(236,235,228,.22)` | Stronger borders, ghost button |
| `--accent` | `#E9A23B` | Amber — the only chromatic color |
| `--accent-soft` | `rgba(233,162,59,.13)` | Accent hover fills |
| `--on-accent` | `#0B0B0D` | Text on amber |

Accent is deliberately scarce: eyebrow, section numbers, `<em>` in the hero,
tick marks, hover states, `::selection`. Never a large amber fill except the
primary button. Accent is tweakable (see §6): amber / teal / terracotta / lilac.

### Type
- **Serif** — Newsreader 500 (`--ff-serif`): name, section titles, role titles,
  case titles, contact lead, big email, brand mark. Carries all display weight.
- **Sans** — Hanken Grotesk (`--ff-sans`): body, leads, buttons. Base 17px / 1.65,
  `letter-spacing:-.003em`.
- **Mono** — JetBrains Mono (`--ff-mono`): eyebrow, nav, section numbers, dates,
  meta, tags, labels, links. Every "instrument panel" element is mono + uppercase
  + wide tracking.

The serif ↔ mono contrast (literary display against technical metadata) is the
core visual idea. Do not introduce a fourth family.

Display sizing is fluid via `clamp()` — e.g. hero name `clamp(3.4rem,9.5vw,7rem)`,
section title `clamp(2rem,4.4vw,3rem)`. `text-wrap:balance` on headlines,
`text-wrap:pretty` on paragraphs and bullets.

### Layout & spacing
- `.wrap` — `max-width:1140px`, fluid inline padding `clamp(1.25rem,5vw,2.75rem)`.
- `.sec` — vertical rhythm `clamp(5rem,10vw,8.5rem)`; `.compact` density halves it.
- `scroll-margin-top:80px` so anchored sections clear the fixed nav.
- Prose measures are capped in `ch` (hero support 68, secIntro 70, caseSummary 74,
  contactSupport 64) for even line lengths.

---

## 2. Components

**Nav** — fixed, transparent until scrolled; then translucent blur + hairline
(`.nav.scrolled`). Serif brand mark with amber dot. Mono links with `01–04`
numbers; active link tracked by scroll-spy. Ghost résumé CTA. Collapses to a
hamburger + slide-down menu below 860px (`inert` when closed).

**Hero** — mono eyebrow with a leading rule; oversized serif name; serif/sans
statement with one amber italic `<em>`; muted support paragraph with `.mv`
(foreground-weighted) numbers; mono meta dots; primary + ghost buttons; mono
social row.

**Section head** — mono number · serif title · hairline rule filling the row.

**Experience** (`.xpItem`) — two-column grid (190px mono date | content).
Hover reveals `--bg2` fill + a 2px amber left edge. Serif role with amber company,
mono meta, dash-marker bullets, mono tag pills.

**Work / case study** (`.case`) — bordered rounded card with a whisper gradient.
Mono index, serif title, `--fg2` summary, then a 2-col grid of labeled blocks
(Problem / Approach / Key decisions & trade-offs / Outcome). Footer separates
tags (left, wrapping) from `.caseLinks` (right, no-wrap: Live app + View source).
Below 760px the grid and footer stack.

**About** — 1.55fr text / 1fr detail rail. Leads in `--fg2`→`--muted`; rail is a
stack of hairline-separated Label/Value rows (Based in · Focus · Education · Elsewhere).

**Contact** — big serif lead, muted support, underlined serif mailto, mono social row.

**Footer** — serif name + mono role left; back-to-top + copyright right.

---

## 3. Motion
Restrained: 0.15–0.3s ease transitions on color, border, background, and small
transforms. Primary button lifts 2px with an amber shadow; link arrows nudge
`translate(2px,-2px)` on hover; nav fades in its background on scroll. All of it
is disabled under `prefers-reduced-motion`.

## 4. Accessibility
Skip link; `:focus-visible` amber outline; `aria-labelledby` per section;
scroll-spy sets `aria-current`; mobile menu is `inert` when closed; touch targets
get invisible padding to clear 44px (menu button `::after`, text links below 860px);
`sr-only` "(opens in new tab)" on external links.

## 5. Responsive breakpoints
- **≤860px** — nav → hamburger; touch tap-area padding on links.
- **≤760px** — experience & case grids collapse to one column; case footer wraps;
  hero statement measure tightens to 26ch.

## 6. Tweakable props (DC)
- **accent** (color) — `#E9A23B` default; amber / teal `#6FB2A3` / terracotta
  `#E0785C` / lilac `#A99BF2`. Rebinds `--accent` across the whole page.
- **density** (enum) — Comfortable / Compact; Compact tightens section padding.

## 7. Rules
- Amber stays scarce — accent, not decoration. Max one large amber surface (the button).
- Serif for anything human-facing and expressive; mono for anything machine/metadata.
- Numbers in prose get `.mv`, not color.
- No emoji, no gradients-as-decoration, no borders-with-left-accent card trope.
- Claims stay concrete and verifiable; unverified metrics never ship (see the RTO
  Shield outcome, which states the take-home caveat rather than inventing numbers).
