import type {
  CaseStudy,
  CommunityEntry,
  DetailLink,
  ExperienceRole,
  NavItem,
  RailRow,
  Section,
  ToolkitRow,
} from './types';
import { INLINE_LINK } from './styles';

/* ---------------------------------------------------------------------------
 * Content source of truth — every string on the site lives here.
 * Copy is transcribed verbatim from "Saurav Kumar Portfolio.dc.html".
 * ------------------------------------------------------------------------- */

export const NAME = 'Saurav Kumar';
/* Deliberately not "Software Engineer II": the experience section states the
 * actual employer title, and a self-assigned level is the fastest way to make
 * a reviewer re-audit everything else. The page argues the level; it never
 * claims it. */
export const ROLE = 'Full-Stack + AI Engineer';
export const EMAIL = 'sk729584@gmail.com';
export const LOCATION = 'Mumbai, IN';
export const YEAR = '2026';

// Design links a Drive PDF. Drop public/Saurav-Kumar-Resume.pdf into the repo and
// change this to '/Saurav-Kumar-Resume.pdf' to serve it locally.
export const RESUME_URL =
  'https://drive.google.com/file/d/1dXCSi_ufn4W0W9mrIpKgU_w9ONNmqsWF/view?usp=sharing';

export const SOCIALS: DetailLink[] = [
  { label: 'GitHub', url: 'https://github.com/saurav02022' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/saurav02022/' },
  { label: 'LeetCode', url: 'https://leetcode.com/u/Saurav02022/' },
];

/** Numbered sections — the cover index rail and the mobile menu. */
export const SECTIONS: Section[] = [
  { num: '01', label: 'Work', indexLabel: 'Selected Work', id: 'work' },
  { num: '02', label: 'Experience', id: 'experience' },
  { num: '03', label: 'Open source', id: 'open-source' },
  { num: '04', label: 'About', id: 'about' },
  { num: '05', label: 'Toolkit', id: 'toolkit' },
  { num: '06', label: 'Contact', id: 'contact' },
];

/** Top nav — unnumbered, and Toolkit is deliberately not in it. */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Index', id: 'top' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Open source', id: 'open-source' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export const cover = {
  discipline: 'Full-stack + AI',
  eyebrow: 'Currently shipping EdTech used in 117 schools',
  title: (
    <>
      I make software that <em>keeps working</em> when the network doesn&rsquo;t.
    </>
  ),
  support:
    'I own the whole path, API through deploy, and I design for the failure cases: the connection that drops, the model that answers off-schema, the vendor API that answers twice.',
  stats: [
    { label: 'FOCUS', value: 'Full-stack + AI features' },
    { label: 'STATUS', value: 'Open to full-stack / AI roles · will relocate' },
    { label: 'EXP', value: '3+ yrs in production' },
  ],
};

export const MARQUEE_ITEMS = [
  'Reliability under bad conditions',
  'Idempotent writes',
  'Offline-first sync',
  'Schema-locked LLMs',
  '117 schools',
  '10,000+ creators',
  'Nothing lost, nothing written twice',
  'One engineer, whole path',
];

export const workIntro =
  'Six builds, sorted by how much they prove. A job seeker, an ops team, a claims processor: the person on the other end changes from card to card, but the work underneath never does — stay correct when the thing upstream is slow, or fires the same call twice. Where a project started as a take-home or a hackathon, the card says so.';

/* Six cases, one card. Sorted by how much verifiable engineering each repo
 * holds — tests, architecture, deploy pipeline — not by how shiny the product
 * is. Origin (take-home, hackathon) is stated in the copy on purpose. */
export const cases: CaseStudy[] = [
  {
    feature: 'Feature 01',
    kind: 'LLM product · Full-stack',
    year: '2026',
    title: 'AI Résumé Builder',
    summary:
      'Tailors a résumé to a specific job. Upload a résumé and a job description, review the result as a side-by-side diff, then export to LaTeX or PDF.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'Sole engineer — frontend, API, LLM pipeline, tests, deploy.',
      },
      {
        label: 'Challenge',
        text: 'Tailoring a résumé by hand for every role is slow. And raw model output drifts, quietly breaking the formatting you need it to keep.',
      },
      {
        label: 'Key decision',
        text: 'Pin Gemini to a Pydantic-defined response schema at temperature zero, so tailoring comes back as structured JSON. Keep the human gate anyway: the full result lands as a side-by-side diff you review before anything exports. 31 Playwright tests stub the app’s own API routes at the network edge, so the suite checks the app and not the model.',
      },
      {
        label: 'Outcome',
        tone: 'strong',
        text: 'Deploys on main are gated on the suite: the Vercel workflow only fires after a green Playwright run on that same commit. It’s a decoupled Next.js + FastAPI build, and my own daily driver — 100+ résumés tailored and exported through it.',
      },
    ],
    fig: {
      caption: 'trust pipeline',
      sub: 'input → gate → export',
      steps: [
        { n: '01', text: 'Upload PDF + job description' },
        { n: '02', text: 'Gemini · Pydantic-defined schema · temp 0' },
        { n: '03', text: 'Diff gate', note: 'the full change set, side by side, before export' },
        { n: '04', text: 'Export → LaTeX / PDF' },
      ],
    },
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'Gemini API', 'Playwright', 'Cloud Run'],
    languages: ['TypeScript', 'Python'],
    repoUrl: 'https://github.com/Saurav02022/resume-builder',
    liveUrl: 'https://resume-builder-saurav02022.vercel.app',
  },
  {
    feature: 'Feature 02',
    kind: 'Voice AI · COD order confirmation · Open-ended take-home',
    year: '2026',
    title: 'RTO Shield — Voice-AI Ops Console',
    summary:
      'A refused cash-on-delivery order goes back to the seller, who pays freight both ways — the trade calls it RTO, return to origin. This console puts an AI voice call between order and dispatch: one click, the customer confirms, then it ships.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'Sole engineer — defined the use case, users, and tech stack, then built the backend, dashboard, tests, and CI.',
      },
      {
        label: 'Challenge',
        text: 'Call results can arrive more than once: Bolna’s webhooks fire early and again when extractions land, and an operator can re-pull the execution record on demand. Naive handling either writes duplicates or drops the real outcome.',
      },
      {
        label: 'Key decision',
        text: 'The backend is layered — router, service, repository, store — and domain logic only talks to the store interface: tests run in-memory, production runs Firestore, nothing else changes. Every report path replays through one handler keyed on the call ID, and a call is marked done only once a real outcome arrives, so an early empty webhook can’t swallow the late one.',
      },
      {
        label: 'Outcome',
        tone: 'strong',
        text: 'The suite locks the behaviour: post the same payload twice, and the second delivery is acked as a duplicate and not applied. 19 pytest + 14 Vitest tests gate every push. It started as a take-home and runs on seed data — there are no production order numbers, and I won’t invent them.',
      },
    ],
    fig: {
      caption: 'at-least-once in, exactly-once out',
      sub: 'duplicate reports → one record',
      steps: [
        { n: '01', text: 'Bolna places the call' },
        { n: '02', text: 'Webhook push · on-demand re-pull' },
        { n: '03', text: 'One handler · key = call ID', note: 'marked done only on a real outcome' },
        { n: '04', text: 'Duplicates acked · one record' },
      ],
    },
    tags: ['FastAPI', 'Python', 'Next.js', 'Bolna', 'Firestore', 'Docker', 'GitHub Actions'],
    languages: ['Python', 'TypeScript'],
    repoUrl: 'https://github.com/Saurav02022/rto-shield',
  },
  {
    feature: 'Feature 03',
    kind: 'Domain engine · Backend · Take-home',
    year: '2026',
    title: 'Claims Adjudication Engine',
    summary:
      'Decides what a health-insurance claim actually pays, working each line through policy validity, coverage, deductible, copay and annual limits, then rolling it up into a claim status with an append-only history so every decision stays auditable.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'Sole engineer — domain model, schema, API, tests.',
      },
      {
        label: 'Challenge',
        text: 'Money math has no partial credit: rounding drift, a double-applied deductible, or a half-written claim all corrupt the record. And the Supabase REST client can’t span a transaction across calls.',
      },
      {
        label: 'Key decision',
        text: 'Keep the engine pure — Decimal arithmetic, a reason-code taxonomy, zero framework imports — behind a repository seam, and push submission into a single Postgres function. A claim and all its lines commit atomically, or not at all.',
      },
      {
        label: 'Outcome',
        tone: 'strong',
        text: '74 tests — more test code than application code — from unit tests on the pure engine to schema-constraint and round-trip checks against the real database.',
      },
    ],
    fig: {
      caption: 'one claim, one transaction',
      sub: 'adjudicate → commit',
      steps: [
        { n: '01', text: 'Claim + line items in' },
        { n: '02', text: 'Pure engine · Decimal math · reason codes' },
        { n: '03', text: 'One Postgres function', note: 'every line commits, or none of them do' },
        { n: '04', text: 'Status roll-up + append-only history' },
      ],
    },
    tags: ['FastAPI', 'Python', 'PostgreSQL', 'Supabase', 'pytest'],
    languages: ['Python'],
    repoUrl: 'https://github.com/Saurav02022/claims-processing-system',
  },
  {
    feature: 'Feature 04',
    kind: 'Marketplace · Full-stack',
    year: '2026',
    title: 'Intervue — Mock-Interview Marketplace',
    summary:
      'Book a mock interview with credits, meet on a video call that transcribes itself, and get structured feedback generated from the transcript after you hang up.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'Sole engineer — both services, schema, CI/CD.',
      },
      {
        label: 'Challenge',
        text: 'The interesting work starts after the call ends: the transcript webhook can fire more than once, and the feedback pipeline has to survive the repeats without crediting an interviewer twice.',
      },
      {
        label: 'Key decision',
        text: 'The transcript → Gemini → feedback pipeline is an idempotent upsert keyed on the booking, so a repeated delivery hits the same row instead of paying out again. Clerk JWTs are verified against JWKS inside the FastAPI service, so auth stays stateless across both services, and booking and withdrawal are rate-limited per user with a token bucket.',
      },
      {
        label: 'Outcome',
        tone: 'strong',
        text: 'CI builds the image, boots it, and hits /health before any rollout, so a broken container never ships. Auth to GCP is keyless, via Workload Identity.',
      },
    ],
    fig: {
      caption: 'after the call ends',
      sub: 'transcript → feedback, once',
      steps: [
        { n: '01', text: 'Call ends · Stream webhook fires' },
        { n: '02', text: 'Transcript pulled · speakers mapped' },
        { n: '03', text: 'Gemini · structured feedback' },
        { n: '04', text: 'One payout per booking', note: 'a retry hits the same row; no second credit' },
      ],
    },
    tags: ['Next.js', 'FastAPI', 'Clerk', 'Prisma', 'Stream', 'Gemini API', 'Cloud Run'],
    languages: ['TypeScript', 'Python'],
    repoUrl: 'https://github.com/Saurav02022/ai-interview',
  },
  {
    feature: 'Feature 05',
    kind: 'LLM product · Full-stack',
    live: true,
    year: '2025',
    title: 'LinkedIn Hashtag Refresh Engine',
    summary:
      'A LinkedIn post stops circulating once its hashtags go stale. Paste the post and Gemini drafts three hashtag sets, each aimed at a different kind of reach; sign in, and one click adds your pick as a comment — a second push for something you already wrote.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'Sole engineer — product, auth, integrations, packaging.',
      },
      {
        label: 'Challenge',
        text: 'LinkedIn’s API is the hard part: tokens on a 60-day expiry, permission scopes that differ by account, and responses that need defensive parsing before anything reaches the UI.',
      },
      {
        label: 'Key decision',
        text: 'Implement the OIDC refresh flow by hand with an error-flagged fallback, validate every request body with Zod behind one typed error envelope, and wire Sentry across client, server and edge so a failure lands somewhere I can see it.',
      },
      {
        label: 'Outcome',
        tone: 'strong',
        text: 'The build carries a real decision I can walk through: when Puppeteer scraping proved a dead end on Vercel, I chose free manual paste over paying for a scraping API rather than sink more time into it. It ships with a multi-stage, non-root Dockerfile and a healthcheck; the app itself runs on Vercel.',
      },
    ],
    fig: {
      caption: 'the plumbing is the product',
      sub: 'post in → comment out',
      steps: [
        { n: '01', text: 'Paste post content' },
        { n: '02', text: 'Gemini · 3 hashtag sets' },
        { n: '03', text: 'OIDC · 60-day token refresh', note: 'refresh by hand, flagged fallback' },
        { n: '04', text: 'One-click comment on the post' },
      ],
    },
    tags: ['Next.js', 'NextAuth', 'Gemini API', 'Zod', 'Sentry', 'Docker'],
    languages: ['TypeScript'],
    repoUrl: 'https://github.com/Saurav02022/linkedin-hashtag-refresh-engine-app',
    liveUrl: 'https://ai-linkedin-hashtag-refresh-engine-app.vercel.app',
  },
  {
    feature: 'Feature 06',
    kind: 'Full-stack · Hackathon · 3 hours',
    year: '2026',
    title: 'Financial Literacy Assistant',
    summary:
      'Budgeting, saving and investing journeys for financial beginners, built in a three-hour hackathon and deployed to Cloud Run for judging.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'Sole engineer — all three journeys, auth, persistence.',
      },
      {
        label: 'Challenge',
        text: 'Financial guidance can’t be wrong just because a model is down. The numbers have to come from somewhere deterministic.',
      },
      {
        label: 'Key decision',
        text: 'Split every journey in two: the math is plain TypeScript, and Gemini only writes the coaching on top. When the model fails, the app falls back to fixed guidance instead of erroring.',
      },
      {
        label: 'Outcome',
        tone: 'strong',
        text: '10 unit tests cover the deterministic core — the budget and saving math plus the fallback guidance — and every analysis route rejects bad input the same way.',
      },
    ],
    fig: {
      caption: 'the model never does the math',
      sub: 'deterministic core · AI on top',
      steps: [
        { n: '01', text: 'Journey input · budget / save / invest' },
        { n: '02', text: 'Deterministic math · plain TypeScript', note: 'stored figures never come from the model' },
        { n: '03', text: 'Gemini coaching · fixed fallback if down' },
        { n: '04', text: 'Saved to history' },
      ],
    },
    tags: ['Next.js', 'Supabase', 'Gemini API', 'Vitest'],
    languages: ['TypeScript'],
    repoUrl: 'https://github.com/Saurav02022/financial-literacy-assistant',
  },
];

export const experienceIntro =
  'Two roles, three years and counting. Most of it is API and schema work, plus the reliability work nobody notices until it breaks.';

export const experience: ExperienceRole[] = [
  {
    dates: 'Nov 2024 — Present',
    company: 'Shikha Learning Labs',
    meta: ['Software Engineer', 'Shantilal Shanghvi Foundation', 'EdTech · Mumbai, India'],
    summary: (
      <>
        Software&nbsp;engineer on an EdTech platform used across 117 schools — a lot of
        them on connections that drop. I own the API layer, the database schema, and the
        reliability work. Since I joined, the features shipped on our history chatbots have
        been mine; an earlier team built the first version. Colleagues at Shikha have
        published on that system (
        <a
          className={INLINE_LINK}
          href="https://doi.org/10.33965/celda2025_202509l042"
          target="_blank"
          rel="noopener"
          aria-label="Conversations for Learning, CELDA 2025 (opens in new tab)"
        >
          CELDA 2025
        </a>
        ) and on the design research behind the platform (
        <a
          className={INLINE_LINK}
          href="https://doi.org/10.1007/978-3-032-29791-4_25"
          target="_blank"
          rel="noopener"
          aria-label="AI-Human Synergy, Springer CCIS 2026 (opens in new tab)"
        >
          Springer CCIS 2026
        </a>
        ).
      </>
    ),
    bullets: [
      <>
        Cut a teacher’s grading pass from <b>40 minutes to 5–10</b> by moving scoring onto an
        async Redis queue with FastAPI workers on the Gemini API — now{' '}
        <b>400+ evaluations a week</b> for <b>200+ teachers</b>.
      </>,
      <>
        <b>4 production apps</b> (web and Android) run on a shared Next.js API layer and a
        PostgreSQL schema I designed; rolled out in stages, they hold <b>96%+ crash-free</b>{' '}
        across <b>117 schools</b>.
      </>,
      <>
        Held a <b>98% API success rate</b> over <b>5,000+ submissions</b>; the failing 2%
        retry idempotently against a fixed schema, so nothing is lost or written twice.
        Stopped data loss at <b>50+ low-network schools</b> with an offline-first
        IndexedDB queue.
      </>,
      <>
        Traced an Android bug that was silently deleting unsaved audio and saved{' '}
        <b>20+ class recordings</b> by verifying each file exists before every write.
      </>,
    ],
    tags: [
      'Next.js',
      'React Native',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'IndexedDB',
      'Microservices',
      'Monorepo',
    ],
  },
  {
    dates: 'May 2023 — Sep 2024',
    company: 'Nuveb',
    meta: ['Full-Stack Developer', 'Open OTT network for creators', 'Bengaluru, India'],
    summary:
      'Built creator-facing product — video, scheduling, payments — in Next.js and TypeScript over a Go microservices backend.',
    bullets: [
      <>
        Built the creator portal’s video, scheduling, and payment modules as it grew from{' '}
        <b>0 to 10,000+ active creators</b>.
      </>,
      <>
        Cut page load from <b>8.5s to 2.5s</b> (70%) for <b>50,000+ monthly users</b> —
        catalogue pages over-fetched in SSR, so I moved browse to SSG and kept SSR for
        personalized routes.
      </>,
      <>
        Dropped image API latency from <b>3.2s to 1.9s</b> (41%) across{' '}
        <b>10,000+ items</b> by profiling the resize step and moving it to Sharp on the
        server.
      </>,
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Go microservices', 'Sharp', 'React Native'],
  },
];

export const communityIntro =
  'I came into Social Winter of Code as a contributor and came back to the summer round as a mentor.';

/* Every number and link here resolves to something a reader can open. Projects
 * without a verified repo carry no count and no link rather than a guess. */
export const community: CommunityEntry[] = [
  {
    dates: 'Jun 2026 — present',
    org: 'Social Summer of Code',
    meta: ['Mentor', 'Open-source programme', 'Two projects'],
    summary: (
      <>
        Social Summer of Code pairs contributors with maintainers on live repositories
        for a season. I mentor two of the 2026 projects — triage and scoping rather than
        writing the code: what gets built, in what order, and what done looks like. The
        two repos have drawn <b>41 distinct contributors</b> between them.
      </>
    ),
    projects: [
      {
        name: 'EduFlow AI',
        stat: '23 contributors · 31 forks',
        blurb: 'A study platform, with roughly 100 SSoC-tagged issues open to the cohort.',
        did: 'Asked for a written approach and user flow on one of the harder issues before the contributor started building.',
        url: 'https://github.com/prabhakarshukla/EduFlow-AI',
      },
      {
        name: 'VidyAI++ (jai3546/AI_ROCKERS)',
        stat: '23 contributors · 35 forks',
        blurb: 'An AI tutoring app the cohort is hardening.',
        did: 'Authored 5 of its ~68 SSoC-tagged issues: a missing import crashing the app, a service worker serving stale pages after deploy, 44 TypeScript errors the build was ignoring, and a build that fails without DATABASE_URL.',
        url: 'https://github.com/jai3546/AI_ROCKERS',
      },
    ],
    tags: ['Mentoring', 'Issue scoping'],
  },
  {
    dates: 'Jan 2026',
    org: 'Social Winter of Code',
    meta: ['Contributor', 'Open-source programme', 'Two projects'],
    summary: (
      <>
        The same programme&rsquo;s winter round, from the other side of it. I took
        labelled issues in two projects and shipped them.
      </>
    ),
    projects: [
      {
        name: 'AlgoFi',
        stat: '11 contributors · 29 forks',
        blurb: 'A decentralised NFT marketplace on the Algorand testnet.',
        did: 'Two merged pull requests. Started on a good-first-issue and finished on a Medium one: the app-wide dark/light theme, made to persist across reloads — 11 files, +419/−226.',
        url: 'https://github.com/denshaw-09/AlgoFi',
      },
      {
        name: 'BrowsePing',
        stat: '5 contributors · 15 forks',
        blurb: 'A browser extension for social browsing.',
        did: 'Real-time typing indicators — 8 files, +365/−123 over 6 commits, still open for review. Also split the web dashboard epic into five phased issues on the landing-page repo.',
        url: 'https://github.com/browseping/browser-extension',
      },
    ],
    tags: ['Open source', 'React'],
  },
];

export const about = {
  statement:
    'I like the unglamorous parts — the retry logic, the schema, the reconnect path. That’s usually where a product is won or lost.',
  p1: 'Most of my work sits between a frontend and something unreliable — a flaky network, or a model that answers off-schema. I’d rather own that whole path than hand off the hard 20%, so I work end to end, from the API down to the deploy.',
  p2: 'When I make a call, it’s usually the boring one: pin the LLM to a schema, make the write idempotent, queue it offline and sync later. On a team I care about clear interfaces and tests that actually gate deploys — it’s what lets a small group ship without breaking things. I’m going deeper on distributed systems now, starting an MCA at IIIT Ranchi in 2026.',
  rail: [
    { label: 'Based in', value: 'Mumbai, India' },
    {
      label: 'Focus',
      value: 'Full-stack + AI features for unreliable networks and third-party APIs',
      narrow: true,
    },
    {
      label: 'Open source',
      value: 'SSoC 2026 mentor · SWoC 2026 contributor',
      sub: 'EduFlow AI · VidyAI++ · AlgoFi · BrowsePing',
    },
    { label: 'Now', value: 'MCA, IIIT Ranchi', sub: '2026–2028 · weekend program' },
    {
      label: 'Before',
      value: 'B.Sc. Mathematics (Hons.)',
      sub: 'Munger University · 2019–2022',
    },
  ] satisfies RailRow[],
};

export const toolkitIntro =
  'Only tools I’ve shipped with, grouped by what I use them for.';

export const toolkit: ToolkitRow[] = [
  {
    num: '01',
    label: 'Building interfaces',
    tools: 'Next.js · React · React Native',
    note: 'Product UIs for web and Android, built on shared API layers — including offline-first flows that hold up on bad connections.',
  },
  {
    num: '02',
    label: 'Building services',
    tools: 'FastAPI · Node.js · Python',
    note: 'REST APIs and async workers, including LLM calls that only ever return schema-validated JSON — the model answers in the shape the code expects, or the call fails loudly.',
  },
  {
    num: '03',
    label: 'Working with data',
    tools: 'PostgreSQL · Redis · Firestore · IndexedDB',
    note: 'Schemas I design, Redis queues for async jobs, and local-first stores that replay and sync when a device reconnects.',
  },
  {
    num: '04',
    label: 'Shipping & maintaining',
    tools: 'Docker · GCP Cloud Run · Vercel · GitHub Actions',
    note: 'Containerized deploys, staged rollouts, and a test suite that must pass before a rollout.',
  },
  {
    num: '05',
    label: 'Workflow',
    tools: 'Playwright · pytest · Git · code review',
    note: 'End-to-end tests that stub the app’s own API routes at the network edge, plus small diffs and real code review.',
  },
];

export const LANGUAGES = 'TypeScript · Python · JavaScript · SQL';

export const contact = {
  title: 'Have something that can’t afford to break?',
  support:
    'I’m looking for full-stack or AI engineering roles and I’m happy to relocate. Email reaches me fastest — I read everything that lands there.',
};

export const COLOPHON = 'Set in Syne, Instrument Sans & Space Mono.';
