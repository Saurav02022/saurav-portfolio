# Portfolio Panel Review — FEEDBACK.md

**Subject:** Saurav Kumar portfolio (this repo, reviewed as rendered by `npm run dev` on localhost:3000, desktop 1280×720 and mobile 360×740).
**Calibration bar:** Full-stack engineer, 3+ years, AI project experience, targeting FAANG/MAANG SDE-2.
**Method note:** Every string was read from `lib/portfolio-data.tsx` (single content source) and verified against the rendered DOM/accessibility tree. External links were checked for reachability (HTTP status). Both GitHub project repos, their READMEs, their live deployment URLs, and the Google Drive résumé PDF were opened and read. LinkedIn (999) and LeetCode (403) block bots — treated as reachable-in-browser, content unverified. Screenshots below the fold were blocked by a browser-pane compositor bug; below-fold layout was verified via DOM geometry, computed styles, and overflow measurement instead — no site-side rendering defect was found there.

**One deployment-state fact that colors everything below:** the redesigned site in this repo is **not deployed**. The canonical URL (`https://saurav02022-portfolio.vercel.app`, default in `lib/site-config.ts`) currently serves the **old** portfolio (title: "Saurav Kumar | Full stack engineer — Next.js, TypeScript, React Native, FastAPI"). The résumé PDF links to a **third** domain, `saurav-portfolio-lovat.vercel.app`, which also serves the old site. Reviewers below judge the new site as if a visitor reached it, but flag this wherever it changes the verdict.

---

## 1. Technical Recruiter — Big Tech (60–90 sec, phone)

**The 10-second read:** Strong. On a 360px screen the first viewport delivers: name, "FULL-STACK SOFTWARE ENGINEER · 3+ YRS" eyebrow, and a statement with bolded numbers ("117 schools", "10,000 creators", "50,000+ users a month"). Level, years, and scale are readable before the first scroll. "Based in Mumbai, India / Open to relocation / 3+ years in production" is exactly what a screener wants for req-matching.

**What I'd note on the card:**
- 3+ yrs, full-stack, Next.js/TypeScript/Python/FastAPI/PostgreSQL — checks SDE-2 req keywords.
- Scope words present: "founding engineer" (Experience, Shikha bullet 2), "a PostgreSQL schema I designed" (same bullet), "I own features end to end" (hero support).
- Companies are unknown brands (Shikha Learning Labs, Nuveb) — I lean entirely on the numbers, so the numbers had better survive the phone screen.
- Education: B.Sc. Mathematics + MCA in progress (About → Education). No CS degree completed — some FAANG screens will note it; the in-progress MCA "2026 – 2028 (expected)" helps.

**Where I hesitated:**
1. **Level read is ambiguous.** Site says "Software Engineer" at Shikha (Experience heading), the résumé PDF says "Software Engineer (Full Stack)", and the GitHub profile bio says "Software Engineer II". Three surfaces, three titles. I screen hundreds weekly; inconsistent titles make me re-verify everything else.
2. **Résumé access is two hops and off-site.** Hero "Résumé ↓" and navbar "Résumé" open a Google Drive *viewer* (not a download) in a new tab (`lib/portfolio-data.tsx` `RESUME_URL`). The mobile menu says "Download résumé ↓" but it doesn't download. Drive is blocked or login-walled on some corporate networks. Friction where there should be none.
3. **If I arrive from the résumé, I land on the old site** (`saurav-portfolio-lovat.vercel.app` in the PDF header) and never see this redesign at all.
4. Contact is clean — `sk729584@gmail.com` as a large mailto (Contact section), no form. Good.

**Verdict: Advance, with a note to verify title/level.** The first screen does its job unusually well for this bracket. The hesitations are all consistency and access friction, not content.

---

## 2. Hiring Manager — Product Team (3–5 min, leveling rubric)

Mapping each Experience bullet against ownership / scope / ambiguity / measurable impact:

**Reads SDE-2 or above:**
- Shikha bullet 1 (evaluation pipeline): owns a queue architecture decision (async Redis + FastAPI workers on Gemini), states before/after ("40 min to 5 min"), and steady-state load ("400+ evaluations a week"). Ambiguity + impact + ownership in one bullet. This is the strongest bullet on the site.
- Shikha bullet 2: "Built and shipped 4 production apps… as a founding engineer, on a shared Next.js API layer and a PostgreSQL schema I designed." Breadth + platform ownership. "Founding engineer" is a real scope word.
- Shikha bullet 3 (idempotent jobs against a fixed LLM schema, "a failed call retries instead of writing a duplicate") — mechanism-level reasoning, not tool-listing. SDE-2 voice.
- Nuveb bullet 2 (8.5s → 2.5s): includes the diagnosis ("catalog pages over-fetched in SSR") and the decision (SSG for browse, SSR only for personalized). Cause → decision → number. Good.

**Reads task-executor:**
- Nuveb bullet 3 ("Dropped image API latency from 3.2s to 1.9s… switching server-side resizing to Sharp"): one profiling session and a library swap. Fine work; L4 signal it is not.
- Shikha bullet 4, second half ("traced an Android bug that deleted unsaved audio and recovered 20+ recordings"): 20 recordings is a small trophy stapled to a strong offline-first bullet. It dilutes the bullet it lives in.
- Nuveb bullet 1 ("Grew the creator portal from 0 to 10,000+ active creators"): a growth claim owned by an engineer, with no stated engineering mechanism beyond "building the video, scheduling, and payment modules." I'd probe whether he grew it or the business did.

**Numbers that hurt at this bar (I map these to the rubric too):**
- "96%+ crash-free rate" (Shikha bullet 2): the industry watermark for crash-free sessions is 99%+. Presenting 96% as a win tells me the team may not know the bar. Same with "98% API success rate" (bullet 3) — a 2% failure rate on student submissions, adjacent to a "zero data loss" claim in the same sentence. Both invite the exact scrutiny an SDE-2 loop applies.
- "gives 200+ teachers back 100+ hours a month" (bullet 1) doesn't reconcile with "400+ evaluations a week" at ~35 minutes saved each (that arithmetic implies hundreds of hours per week). One of these numbers is doing something the sentence doesn't explain, and I can't tell which.

**Do the AI projects read as real engineering or API wrappers?** Split verdict. The *reliability plumbing* is real engineering: idempotent webhook + polling fallback feeding one pipeline (RTO Shield, "Key decisions & trade-offs"), schema-pinned outputs reviewed as diffs with 30+ Playwright tests gating deploys (AI Resume Builder). But there is zero *model-side* engineering visible: no evals, no failure-mode analysis, no prompt/schema iteration story, no "when the model is wrong, the system does X." As presented, the AI is a fixed vendor call wrapped in good hygiene. For an "AI project experience" positioning at FAANG, the model-behavior layer is the missing half.

**Single change that would most increase phone-screen odds:** make the strongest claim bulletproof — the evaluation-pipeline bullet is the interview centerpiece, and right now its own numbers (5 min vs the résumé's "5 to 10 minutes", the 100+ hours arithmetic) disagree across surfaces. One internally consistent, defensible version of that story is worth more than everything else on the page combined.

---

## 3. Senior/Staff Engineer — Interview Loop (10 min, opened everything)

**Case study depth — where the tradeoff reasoning runs out:**
- **RTO Shield** (Work, card 1): "I structured it in layers (Router, Service, Repository, Store)" is pattern-name-dropping with no *why* — for a take-home-sized service, four layers is a decision that needs defending, not listing. The idempotency story (webhook + polling fallback, "a webhook retry and a late poll now resolve to the same result instead of writing twice") is the genuinely good part — but it stops one question short: what's the dedup key? At-least-once from both sources resolved *how*? The site sets up the interview question and doesn't answer it.
- **AI Resume Builder** (Work, card 2): "pinned the model to a fixed schema… improvises less" is the right instinct, but there's no account of what happens when the model violates the schema anyway (retry? reject? partial?). "30+ Playwright tests mock the API" — mocking the LLM means the tests gate the *app*, not the AI behavior. I'd drill exactly there.

**Claims I'd drill in a loop:**
1. "98% API success rate with zero data loss over 5,000+ student submissions" (Shikha bullet 3) — what are the failing 2%, and how is "zero data loss" measured such that the 2% don't count?
2. "96%+ crash-free rate" — crash-free *sessions* or *users*? Why is 96% acceptable? (I would expect a candidate at this level to name 99%+ as the target.)
3. The résumé PDF says the idempotent jobs run "against a fixed **OpenAI** response schema" while the same pipeline everywhere else is **Gemini** (site bullet 1, both project cards). One of them is wrong. Small, but it's exactly the kind of detail a skeptical interviewer catches, and it plants the "was this written carefully?" seed.

**Code links — verdict (all clicked):**
- `github.com/Saurav02022/bolna-assignment-web-app` — reachable, TypeScript, active May 2026. But: the showcase repo for "RTO Shield" is literally named **"bolna-assignment-web-app"** and has **no repo description**. The README's own "Live deployments" table lists "canonical production HTTPS endpoints" — **both return HTTP 500** (frontend and backend `/health`, checked 2026-07-15). A README that boasts "path-filtered CI/CD" and "Docker smoke tests" above a dead deploy is worse than no deploy link at all.
- `github.com/Saurav02022/resume-builder` — reachable, no repo description, but it has a **working** live deployment (`resume-builder-saurav02022.vercel.app`, HTTP 200) — which the portfolio never links. The site offers only "View source" for both projects.
- Both READMEs are thorough (architecture, env vars, API reference, testing) but written in heavy bold-every-third-word AI-assisted style. Fine as docs; as a writing sample, an interviewer will notice the difference in voice between the site (human, specific) and the READMEs (generated-feeling).

**Does the site arm him or expose him?** Arms him on system-reliability reasoning (idempotency, offline-first queue, SSR/SSG). Exposes him on: the dead RTO Shield deploy, the below-bar reliability numbers stated proudly, the Gemini/OpenAI drift, and every place a case study stops one "why" short of the question I'd actually ask.

---

## 4. Product Manager (2–3 min)

**Sections that connect work to user/business impact:**
- Shikha bullet 1 is the best story on the site: a teacher gets an evaluation in 5 minutes instead of 40, and "200+ teachers" get time back. A PM can retell that to a VP without translation.
- Hero support ("EdTech software running in 117 schools… video platform that grew past 10,000 creators") frames both jobs in user terms immediately.
- Nuveb bullet 2 ties latency to "50,000+ monthly users" — page load → user experience is a business-legible chain.
- RTO Shield's **Problem** block is genuinely product-literate: "COD orders that get refused cost money to ship out and ship back." Correct framing of RTO economics.

**Jargon-only or outcome-free:**
- RTO Shield's **Outcome** block: "No more duplicate status updates. A webhook retry and a late poll now resolve to the same result instead of writing twice." That is an *engineering* outcome. Zero orders saved, zero calls placed, zero rupees — the Problem block promised business stakes the Outcome never pays off.
- AI Resume Builder's **Outcome**: "100+ tailored resumes with no broken deployments." Whose resumes? Did anyone get interviews? "No broken deployments" is table stakes, not an outcome.
- Work intro ("both are mostly about keeping something reliable under real use") promises "real use" that neither project's outcome block substantiates.

**Would I want him in a stakeholder room?** Provisionally yes — the writing is unusually clear, and the Problem framing on RTO Shield shows he can think in business terms. But both project Outcomes retreat to engineering metrics, which is exactly what happens in stakeholder rooms with engineers who *can't* stay in the business frame. The Shikha material says he can; the projects don't back it up.

---

## 5. Personal-Brand Strategist (full pass)

**"Saurav is the engineer who ___":** Best supported completion: *"…makes full-stack and LLM features hold up in production for real, messy environments — 117 schools on weak networks."* The raw material for that sentence is all present (offline-first IndexedDB queue, idempotent LLM jobs, schema-pinning, crash-free rollouts). But the site never quite commits to it, so a visitor completes the sentence with *"…builds full-stack products with AI"* — which describes roughly two hundred thousand engineers.

**One positioning idea vs. competing ones:** Three ideas compete: (a) reliability-under-constraint engineer (Shikha material + both projects' idempotency stories — the strongest and most distinctive), (b) performance optimizer (both Nuveb latency bullets), (c) generic "full-stack + AI" (hero statement, Focus line "Full-stack systems · LLM / AI features · Performance & reliability" — which literally lists all three). The Focus line in About is the tell: it's an OR of identities, not a position.

**Memorable signature element vs. forgettable-generic:** The typographic system (serif display name, mono eyebrows, amber-highlighted metrics) is handsome and consistent — but it's a *style*, not a *signature*. Nothing on the site is retellable as "oh, the person who ___". The nearest candidate for a signature asset — the offline-first, weak-network schools story — is buried as the fourth bullet of a job. There is no photo, no voice artifact, no distinctive named thing (the one named product, "RTO Shield," lives in a repo named "bolna-assignment-web-app," which un-names it).

**Identity consistency across surfaces (would it extend to GitHub/LinkedIn/résumé?):** Currently the weakest axis, with hard evidence:
- The résumé links to `saurav-portfolio-lovat.vercel.app` (old design, old title); the canonical Vercel URL serves the old design too; this redesign is visible nowhere in public.
- GitHub bio: "Software Engineer II (Full-Stack / Frontend) | 3+ YOE" — different title *and* a "/ Frontend" hedge the site has deliberately dropped.
- The site's structured data (`components/structured-data.tsx`, `sameAs`) claims a dev.to profile that the visible site never mentions.
- GitHub display name is "SAURAV KUMAR" (all caps) vs. the site's carefully typeset "Saurav Kumar."
A recruiter triangulating across three surfaces gets three slightly different people. Brand is precisely the thing that must not do that.

---

## 6. Skeptic / QA (adversarial full pass)

**AI-sounding or template copy:**
- Site copy is largely human and specific — credit where due. Exceptions: "shipped to real users, not demos" (hero) and "survives contact with real users" (About lead 2) are LinkedIn-cadence lines; "the details that decide whether it holds up in production" (hero) + "the reliability work nobody notices until something breaks" (Experience intro) + "the small reliability details that decide whether something survives" (About) are the same sentence written three times.
- Both GitHub READMEs are unmistakably AI-formatted (bold-density, "This repository is intentionally **full lifecycle**", emoji-free but template-structured). They are linked as the primary evidence artifacts.

**Embellished-feeling claims (with exact locations):**
- "shipped to real users, not demos" (hero statement) — the Work section then presents a take-home assignment ("began as a Bolna voice-AI take-home", RTO Shield summary) whose deployment is dead, and a personal tool with self-reported usage. The hero's own framing indicts the portfolio's project section.
- "Cut teacher evaluation from 40 min to 5 min (87%)" (Shikha bullet 1) vs. the résumé's "5 to 10 minutes of automated feedback" — the site picks the flattering endpoint and adds a precision ("87%") the résumé's range contradicts.
- "gives 200+ teachers back 100+ hours a month" (same bullet) — vs "400+ evaluations a week" × ~35 min saved: the numbers don't reconcile in any direction I can construct.
- "zero data loss" sitting inside a "98% API success rate" sentence (Shikha bullet 3) — needs a definition to not read as contradiction.
- "100+ tailored resumes" / "no broken deployments" (AI Resume Builder, Outcome) — unverifiable self-metrics.

**Broken / degraded links:**
- RTO Shield README "Live deployments": `bolna-frontend-3sacqleaea-el.a.run.app` → **500**; `bolna-backend-3sacqleaea-el.a.run.app/health` → **500**.
- Site "Résumé ↓" → Google Drive viewer (not a download; extra click; blocked on some networks).
- No broken links *on the site itself* — all hrefs resolve (GitHub 200s; LinkedIn/LeetCode bot-blocked but valid).

**Inconsistent dates/facts:**
- Titles: "Software Engineer" (site) / "Software Engineer (Full Stack)" (résumé) / "Software Engineer II" (GitHub bio).
- Gemini (site, both projects, Shikha bullet 1) vs. "fixed OpenAI response schema" (résumé, Shikha bullet 3).
- Résumé lists "Supabase (PostgreSQL)" at Shikha; site says "a PostgreSQL schema I designed" and never mentions Supabase.
- Employment gap Sep 2024 → Nov 2024 (unexplained, minor).
- Site tags "Go REST APIs" as a Nuveb skill badge (Experience, Nuveb tags) — the bullets say he built Next.js *over* Go APIs someone else wrote; the résumé doesn't list Go at all.

**Layout at 360–414px:** Clean. `scrollWidth === innerWidth` at 360px (no horizontal overflow); nav collapses to a hamburger; menu opens with 55px-tall tap targets; hero stacks correctly. No breakage found.

**Accessibility:**
- **Miss:** the closed mobile menu's five links remain keyboard-focusable (verified: `link.focus()` succeeds while the menu is visually collapsed to 1px, `Navbar.tsx:87-108` + `.mobileMenu` max-height collapse in `globals.css:805+`). A keyboard user tabs through five invisible stops.
- **Miss (minor):** no scroll-lock behind the open mobile menu; background page scrolls under it.
- **Miss (minor):** every external link (`target="_blank"` throughout `Hero.tsx`, `Contact.tsx`, `About.tsx`, `Navbar.tsx`) gives no "opens in new tab" indication to screen readers.
- **Passes:** `:focus-visible` outline defined globally (`globals.css:93-95`); skip link present (`page.tsx:12`); heading hierarchy is a clean h1→h2→h3; `aria-expanded`/`aria-controls` on the menu button; `aria-labelledby` on sections; contrast of body (#a1a199 on #0b0b0d ≈ 7:1) and accent (#e9a23b ≈ 8:1) both clear WCAG AA; no images, so no alt-text surface.

**Slow/heavy assets:** None material. No page images, three self-hosted Google font families (Hanken Grotesk, Newsreader, JetBrains Mono — the third is a luxury but small). Static single page.

**SEO gaps:**
- **OG preview is broken in the way that matters most:** `public/og-image.png` is actually a **539×510 JPEG headshot** (a personal photo), declared in `app/layout.tsx:90-97` as a 1200×630 PNG. Every share on LinkedIn/Slack/X renders a wrong-aspect-ratio personal photo instead of a card — for a job-search portfolio, the LinkedIn share preview *is* the first impression.
- Meta description is ~190 chars (`layout.tsx:26-27`) — truncates around 160 in SERPs, cutting the LLM clause.
- `sitemap.ts` sets `lastModified: new Date()` on every build and `changeFrequency: 'daily'` for a page that changes rarely — noise signals to crawlers, minor.
- JSON-LD publishes the personal **phone number** in page source (`structured-data.tsx:20`) — scraper fodder, and it appears nowhere in the visible UI, so it's pure leak with no UX benefit.
- JSON-LD `programmingLanguage: "TypeScript"` hardcoded for both projects (`structured-data.tsx:100`) — half of each project is Python/FastAPI.
- Canonical URL currently serves the old site (see header note) — until deploy, all of this metadata belongs to a page nobody can reach.

---

# SYNTHESIS

## Scores /10

| Reviewer | Score | One-line justification |
|---|---|---|
| Technical Recruiter | **7** | Best-in-bracket 10-second read and scope words; docked for three conflicting job titles across surfaces and a Drive-viewer résumé. |
| Hiring Manager | **6.5** | Four genuinely SDE-2 bullets, but the centerpiece story's numbers disagree with the résumé and with their own arithmetic. |
| Senior/Staff Engineer | **5** | Real reliability reasoning, undone by a dead showcase deploy, an "assignment"-named repo, and claims that stop one "why" short. |
| Product Manager | **7** | The teacher-time story is boardroom-ready; both project Outcome blocks retreat to engineering metrics. |
| Brand Strategist | **5.5** | A distinctive "reliability under constraint" identity is fully present in the raw material and committed to nowhere; three public surfaces disagree. |
| Skeptic / QA | **4.5** | Broken OG card, undeployed redesign, résumé↔site fact drift, and irreconcilable impact arithmetic — each individually survivable, collectively a pattern. |

(Nothing scored above 8; the recruiter's 7 is defended by the mobile first-viewport, which is genuinely better than most SDE-2 portfolios this reviewer sees.)

## Consensus themes (raised by 2+ reviewers, ranked by hiring impact)

1. **Cross-surface inconsistency** (Recruiter, Engineer, Brand, Skeptic): titles (SE vs SE-II vs "(Full Stack)"), Gemini vs OpenAI, three portfolio domains of which the two public ones serve the old design, dev.to orphaned in structured data. The redesign's quality is irrelevant while the surfaces disagree.
2. **The flagship numbers invite hostile drilling** (HM, Engineer, Skeptic): 5 min vs 5–10 min, 100+ hours vs 400/week arithmetic, 96% crash-free and 98% success framed as wins, "zero data loss" beside a 2% failure rate. The strongest content on the site is also its most fragile.
3. **Projects don't let anyone touch a product** (Engineer, PM, Brand): the only working live demo (AI Resume Builder) is unlinked; the linked project's advertised deployment returns 500; the repo name says "assignment" while the hero says "not demos."
4. **AI depth is plumbing-only** (HM, Engineer): idempotency and schema-pinning are real, but no evals, failure-mode, or model-behavior story exists anywhere — thin for an "AI engineer" positioning at FAANG.
5. **Social/share first impression is broken** (Recruiter, Skeptic): the OG image is a wrong-dimensions headshot photo, and the URL it would be shared under serves the old site.

## Conflicts between reviewers (stated, not resolved)

- **Recruiter vs. Engineer:** the recruiter scores the terse hero and short case cards as the site's best feature; the engineer wants dedup keys, failure modes, and queue semantics, which would lengthen exactly those sections.
- **PM vs. Skeptic:** the PM rates the "200+ teachers / 100+ hours" story as the site's most valuable asset; the skeptic shows its arithmetic doesn't reconcile. The same sentence is simultaneously the best and most dangerous content on the page.
- **Engineer vs. Brand:** the engineer credits the honest "began as a Bolna voice-AI take-home" disclosure; the brand strategist notes that "assignment" provenance (and repo name) un-brands the site's only named product.
- **Brand vs. Recruiter:** the brand strategist wants one committed identity (reliability-under-constraint), which means demoting keywords; the recruiter's screen depends on the broad "full-stack + AI + performance" keyword surface staying put.

## Brand sentence

- **Current (as the site actually reads):** "Saurav is the engineer who builds full-stack products with AI inside and puts numbers on his work."
- **Strongest honest sentence the existing content could support:** "Saurav is the engineer who makes LLM features and full-stack apps survive hostile production — weak networks, flaky devices, async vendor APIs — across 117 schools."

## Top 10 issues ranked by impact on passing a FAANG screen

*(Findings only. Severity: critical / major / minor.)*

1. **CRITICAL — The redesign is unreachable; both public portfolio URLs serve the old site.** Location: `lib/site-config.ts` default `https://saurav02022-portfolio.vercel.app` (serves old title, verified 2026-07-15); résumé PDF header links `saurav-portfolio-lovat.vercel.app` (also old). Evidence: `<title>` of both live URLs is the old site's. Every reviewer above reviewed something no recruiter can currently see.
2. **CRITICAL — Broken social-share card.** Location: `app/layout.tsx:90-105` declares `/og-image.png` as 1200×630 PNG; `public/og-image.png` is a 539×510 baseline JPEG of a personal headshot. Evidence: `file` output "JPEG image data… 539x510". LinkedIn/Slack/X previews render a distorted photo, not a card.
3. **CRITICAL — Flagship metric drift between site and résumé.** Location: `lib/portfolio-data.tsx` Shikha bullet 1 ("40 min to 5 min (87%)") vs. résumé PDF ("5 to 10 minutes of automated feedback"); site "fixed LLM schema" / Gemini everywhere vs. résumé "fixed OpenAI response schema." Evidence quoted verbatim from both artifacts. This is the exact bullet an interviewer will anchor on.
4. **MAJOR — RTO Shield's advertised live deployment is dead.** Location: linked repo `Saurav02022/bolna-assignment-web-app` README "Live deployments" table. Evidence: `https://bolna-frontend-3sacqleaea-el.a.run.app` → 500; `…backend…/health` → 500 (2026-07-15). The site links this repo from `Work` card 1 ("View source").
5. **MAJOR — Impact arithmetic doesn't reconcile.** Location: `lib/portfolio-data.tsx` Shikha bullet 1: "400+ evaluations a week" + "40 min to 5 min" + "200+ teachers back 100+ hours a month." Evidence: 400/wk × ~35 min ≈ 230+ hrs/week saved, vs. the stated 100+ hrs/month. Whichever number is right, the sentence as written can't survive a whiteboard.
6. **MAJOR — Reliability numbers below industry bar presented as wins.** Location: Shikha bullet 2 ("96%+ crash-free rate") and bullet 3 ("98% API success rate" beside "zero data loss"). Evidence: crash-free-session norms are 99%+; a 2% failure rate adjacent to a zero-loss claim reads as contradiction absent definitions the site doesn't give.
7. **MAJOR — The only working product demo is unlinked; the site offers source-only links.** Location: `Work` section — both cards link only "View source" (`Work.tsx:34-42`); `resume-builder`'s live app (`resume-builder-saurav02022.vercel.app`, HTTP 200, listed as the repo's homepage) appears nowhere on the site.
8. **MAJOR — Showcase repo presentation undercuts the product story.** Location: `github.com/Saurav02022/bolna-assignment-web-app` — repo named "assignment," no repo description; `resume-builder` also has no description. Evidence: GitHub API `description: None` for both. Hero meanwhile claims "shipped to real users, not demos" (`lib/portfolio-data.tsx` hero statement).
9. **MINOR — Keyboard a11y: five invisible focus stops.** Location: `components/layout/Navbar.tsx:87-108` mobile menu links + `.mobileMenu` collapsed state (`app/globals.css:805+`). Evidence: `link.focus()` succeeds at 360px with the menu closed (collapsed to 1px). Also no scroll-lock behind the open menu, and no new-tab indication on any external link.
10. **MINOR — Metadata leaks and lint.** Location: `components/structured-data.tsx:20` (personal phone number in public JSON-LD, shown nowhere in the UI), `:26` (dev.to profile in `sameAs`, absent from the visible site), `:100` (`programmingLanguage: "TypeScript"` hardcoded for two half-Python projects); `app/layout.tsx:26-27` (~190-char meta description, truncates ~160); `app/sitemap.ts` (`lastModified: new Date()` per build + `changeFrequency: 'daily'` for a static page); résumé CTA labeled as a download ("Download résumé ↓", `Navbar.tsx:106`) that opens a Drive viewer.

---

*End of review. This document is feedback only; no site files were modified.*
