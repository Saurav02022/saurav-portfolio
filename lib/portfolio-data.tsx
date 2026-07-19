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
  eyebrow: 'Software engineer, 3 years in production',
  title: (
    <>
      I design the database, write the API and the app, and <em>put it live</em> myself.
    </>
  ),
  support:
    'Right now that is school software in 117 schools. A teacher records their own class and gets written feedback ten minutes later, with nobody sitting at the back of the room. I own the API behind that app and three others, and I designed the database under all four.',
  stats: [
    { label: 'SCHOOLS', value: '117, government and private' },
    { label: 'CLASSES', value: 'About 400 recorded every week' },
    { label: 'BASED', value: 'Mumbai, open to relocating' },
  ],
};

export const MARQUEE_ITEMS = [
  '117 schools',
  '4 apps, 1 database',
  '400 classes a week',
  '8.5 seconds down to 2.5',
  '20+ recordings recovered',
  '5,000+ submissions assessed',
  '10,000+ creators at Nuveb',
  '41 contributors on 2 projects',
];

export const workIntro =
  'These six are mine. I was the only engineer on each one. Several share a stack, and that is on purpose, so the new thinking went into the problem instead of the setup. The claims engine is the one I would open first: there is no model anywhere near the part that decides the money. Where a project started as a take-home or a hackathon, the card says so.';

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
        text: 'The transcript goes to Gemini and comes back as written feedback. That whole step is tied to the booking, so if the same message arrives twice it updates the same record instead of paying the interviewer again. Each service checks the login itself, so neither has to remember who you are, and booking and withdrawal are both capped per person.',
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
      'Budgeting, saving and investing, for people starting from zero. Built in a three-hour hackathon and put on Cloud Run for the judges.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'Only engineer — all three sections, the login, and saving the data.',
      },
      {
        label: 'Challenge',
        text: 'Financial guidance can’t be wrong just because a model is down. The numbers have to come from somewhere deterministic.',
      },
      {
        label: 'Key decision',
        text: 'Split each one in two. The maths is plain TypeScript. Gemini only writes the wording on top of it, so when the model is down the app falls back to fixed advice instead of showing an error.',
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
  'Two jobs, three years between them. The first was a video platform for creators in Bengaluru. The second is the school software I work on now.';

export const experience: ExperienceRole[] = [
  {
    dates: 'Nov 2024 — Present',
    company: 'Shikha Learning Labs',
    meta: ['Software Engineer', 'Shantilal Shanghvi Foundation', 'EdTech · Mumbai, India'],
    summary: (
      <>
        The four apps are web and Android, and they run in government and private schools.
        A change to one table is a change all four have to live with, so that database gets
        argued about before it gets written. Two peer-reviewed papers have been published
        on this work: one on the history chatbots (
        <a
          className={INLINE_LINK}
          href="https://doi.org/10.33965/celda2025_202509l042"
          target="_blank"
          rel="noopener"
          aria-label="Conversations for Learning, CELDA 2025 (opens in new tab)"
        >
          CELDA 2025
        </a>
        ), and one on how the platform was designed with teachers (
        <a
          className={INLINE_LINK}
          href="https://doi.org/10.1007/978-3-032-29791-4_25"
          target="_blank"
          rel="noopener"
          aria-label="AI-Human Synergy, Springer CCIS 2026 (opens in new tab)"
        >
          Springer CCIS 2026
        </a>
        ). My colleagues wrote them, including our founder and my own product manager. My
        part is the engineering.
      </>
    ),
    bullets: [
      <>
        About <b>200 teachers</b> record around <b>400 classes a week</b> on the AI Teacher
        Coach. Before it, assessing how a teacher taught meant a mentor sitting through the
        whole class: a sixty-minute class cost a mentor sixty minutes, and it happened only
        when a mentor was free. The feedback now comes back in{' '}
        <b>five to ten minutes</b>, with nobody in the room.
      </>,
      <>
        I built the portfolio portal alone, web and Android, start to finish.{' '}
        <b>300+ students</b> keep a public website of their best work on it, and an AI
        assessor reads the finished portfolio and reports on how their skills are
        developing, quoting their own work as evidence. <b>98% of 5,000+ submissions</b> go
        through on the first attempt. The rest retry on their own, and a job that runs
        twice saves the result once.
      </>,
      <>
        At about <b>50 of the 117 schools</b> the connection drops several times a day, and
        class recordings were being lost. The recording now saves on the phone first and
        uploads once the signal returns. The losses stopped.
      </>,
      <>
        On Android, unsaved audio was being deleted quietly. Nobody had reported it,
        because nobody knew it had happened. I traced it, and every file now has to prove
        it exists before anything writes over it. <b>20+ recordings</b> came back.
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
      'I built the creator side of a video platform: video, scheduling and payments, on Next.js and TypeScript over a Go backend. Much of the work was making pages that already worked load faster.',
    bullets: [
      <>
        Pages were taking <b>8.5 seconds</b> to load for <b>50,000+ visitors a month</b>.
        The browse pages were rebuilding themselves on every request, for content that
        barely changed. I moved those to pre-built pages, keeping the rebuild only where
        the page was personal to the user. Load time came down to <b>2.5 seconds</b>.
      </>,
      <>
        I profiled the image requests, which were sitting at <b>3.2 seconds</b> across{' '}
        <b>10,000+ items</b>, and the resizing step was the cost. Moving that work to the
        server brought them to <b>1.9 seconds</b>.
      </>,
      <>
        The platform went from no creators to <b>10,000+</b> while I was there.
      </>,
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Go microservices', 'Sharp', 'React Native'],
  },
];

export const communityIntro =
  'I have been on both sides of the same programme inside a year. In January I was a contributor. From June I have been a mentor, and that turned out to be the harder job.';

/* Every number and link here resolves to something a reader can open. Projects
 * without a verified repo carry no count and no link rather than a guess. */
export const community: CommunityEntry[] = [
  {
    dates: 'Jun 2026 — present',
    org: 'Social Summer of Code',
    meta: ['Mentor', 'Two projects', '41 contributors between them'],
    summary: (
      <>
        Most of my time goes on the tasks, not the code. A task has to be written well
        enough that a stranger can pick it up, build the right thing, and finish it without
        needing me to explain it again.
      </>
    ),
    projects: [
      {
        name: 'EduFlow AI',
        stat: '23 contributors · around 100 open tasks',
        blurb: 'A study platform the group is building out.',
        did: 'On the harder tasks I ask the contributor to write down their approach and the user flow before they start building.',
        url: 'https://github.com/prabhakarshukla/EduFlow-AI',
      },
      {
        name: 'VidyAI++ (jai3546/AI_ROCKERS)',
        stat: '23 contributors · around 68 open tasks',
        blurb: 'An AI tutoring app the group is cleaning up.',
        did: 'I wrote 5 of those tasks: a missing import that crashed the app, old pages still being served after a new release, 44 type errors the build was ignoring, and a build that fails when one database setting is missing.',
        url: 'https://github.com/jai3546/AI_ROCKERS',
      },
    ],
    tags: ['Mentoring', 'Task writing'],
  },
  {
    dates: 'Jan 2026',
    org: 'Social Winter of Code',
    meta: ['Contributor', 'Two projects', 'Two pull requests merged'],
    summary: (
      <>
        On AlgoFi I started on a beginner-tagged task and finished on a harder one. Both
        projects were somebody else&rsquo;s codebase, which is most of what the programme
        teaches you.
      </>
    ),
    projects: [
      {
        name: 'AlgoFi',
        stat: '11 contributors · 2 pull requests merged',
        blurb: 'A marketplace for digital collectibles.',
        did: 'I built the dark and light theme for the whole app and made the choice survive a reload. 11 files, +419/−226.',
        url: 'https://github.com/denshaw-09/AlgoFi',
      },
      {
        name: 'BrowsePing',
        stat: '5 contributors · still open for review',
        blurb: 'A browser extension for browsing together.',
        did: 'I added the live typing indicators, 8 files and +365/−123 over 6 commits, and broke their dashboard plan into five smaller tasks other people could pick up.',
        url: 'https://github.com/browseping/browser-extension',
      },
    ],
    tags: ['Open source', 'Frontend'],
  },
];

export const about = {
  statement:
    'Losing a teacher’s class recording is the worst thing this software can do.',
  p1: 'I start with what breaks. The failures I trust least are the quiet ones, where nothing shows an error and nobody files a report, because nobody knows anything has gone wrong. A file disappears. Or a job runs a second time and quietly pays twice, and the only sign is a number that does not add up three weeks later. In two of the products below I built it so the same message arriving twice cannot do the work twice, rather than only writing a test and hoping.',
  p2: 'The decisions I am proud of are mostly the ones where I gave something up. A feature cut because the version that would have held was out of budget. An extra layer kept because a fast test run is worth more than a tidy one. What I want next is a product company, in India or abroad, with a backend that has real users on bad connections. I am starting an MCA at IIIT Ranchi in 2026 to go deeper on the systems side.',
  rail: [
    { label: 'Based in', value: 'Mumbai, India' },
    {
      label: 'Focus',
      value: 'Backend APIs and the databases under them',
      sub: 'Python and TypeScript · PostgreSQL and Redis',
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
  'The tools I reach for most, listed plainly, with no ratings and no percentages.';

export const toolkit: ToolkitRow[] = [
  {
    num: '01',
    label: 'Building interfaces',
    tools: 'Next.js · React · React Native',
    note: 'Web and Android apps that share one API behind them, including the ones that have to keep working when the connection does not.',
  },
  {
    num: '02',
    label: 'Building services',
    tools: 'FastAPI · Node.js · Python',
    note: 'APIs, and the background workers that do the slow jobs. When these call an AI model, the answer has to come back in a fixed shape, or the call fails loudly instead of quietly passing something broken along.',
  },
  {
    num: '03',
    label: 'Working with data',
    tools: 'PostgreSQL · Redis · Firestore · IndexedDB',
    note: 'Databases I design myself, queues for the slow jobs, and storage on the device that catches up with the server once it can reach it.',
  },
  {
    num: '04',
    label: 'Shipping & maintaining',
    tools: 'Docker · GCP Cloud Run · Vercel · GitHub Actions',
    note: 'The app ships as a container, goes out to a few schools before the rest, and the tests have to pass before any of it moves.',
  },
  {
    num: '05',
    label: 'Workflow',
    tools: 'Playwright · pytest · Git · code review',
    note: 'Tests that drive the real app in a browser, with its own API answers faked, so a failure means my code broke and not somebody else’s server. Small changes, and code review that actually reads the change.',
  },
];

export const LANGUAGES = 'TypeScript · Python · JavaScript · SQL';

export const contact = {
  title: 'Tell me what you are building',
  support:
    'I am looking for a software engineer role and I am happy to relocate. Email is the fastest way to reach me, and I reply to everything that lands there.',
};

export const COLOPHON = 'Set in Syne, Instrument Sans & Space Mono.';
