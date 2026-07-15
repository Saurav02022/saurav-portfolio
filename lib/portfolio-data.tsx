import type {
  CaseStudy,
  DetailLink,
  EducationEntry,
  ExperienceRole,
  NavItem,
} from './types';

/* ---------------------------------------------------------------------------
 * Content source of truth — copy comes verbatim from the approved design
 * ("Saurav Kumar - Portfolio.dc.html"). Edit here, not in components.
 * ------------------------------------------------------------------------- */

export const NAME = 'Saurav Kumar';
export const ROLE = 'Full-Stack Software Engineer';
export const EMAIL = 'sk729584@gmail.com';
export const PHONE = '+919572365331';
export const LOCATION = 'Mumbai, India';

// ponytail: design links a local PDF, but it can't be exported intact from the
// design project. Drop public/Saurav-Kumar-Resume.pdf into the repo and change
// this to '/Saurav-Kumar-Resume.pdf' to serve it locally.
export const RESUME_URL =
  'https://drive.google.com/file/d/1dXCSi_ufn4W0W9mrIpKgU_w9ONNmqsWF/view?usp=sharing';

export const SOCIALS: DetailLink[] = [
  { label: 'GitHub', url: 'https://github.com/saurav02022' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/saurav02022/' },
  { label: 'LeetCode', url: 'https://leetcode.com/u/Saurav02022/' },
];

export const NAV_ITEMS: NavItem[] = [
  { num: '01', label: 'Experience', id: 'experience' },
  { num: '02', label: 'Work', id: 'work' },
  { num: '03', label: 'About', id: 'about' },
  { num: '04', label: 'Contact', id: 'contact' },
];

export const hero = {
  eyebrow: 'Full-Stack Software Engineer · 3+ yrs',
  statement: (
    <>
      I build full-stack products and the <em>AI</em> that runs inside them —
      shipped to real users, not demos.
    </>
  ),
  // Copy is frozen — only the verifiable numbers are emphasised, matching the
  // .mv treatment already used in Experience bullets.
  support: (
    <>
      Right now I build EdTech software running in{' '}
      <b className="mv">117 schools</b>. Before that, a video platform that
      grew past <b className="mv">10,000 creators</b> and served{' '}
      <b className="mv">50,000+ users a month</b>. I own features end to end:
      the API, the database, the deploy, and the details that decide whether
      it holds up in production.
    </>
  ),
  meta: ['Based in Mumbai, India', 'Open to relocation', '3+ years in production'],
};

export const experienceIntro =
  'Two roles, three years — most of it spent on the API, the database, and the reliability work nobody notices until something breaks.';

export const experience: ExperienceRole[] = [
  {
    dates: 'Nov 2024 — Present',
    role: 'Software Engineer',
    company: 'Shikha Learning Labs',
    meta: 'Shantilal Shanghvi Foundation · EdTech · Mumbai, India',
    bullets: [
      <>
        Cut teacher evaluation from <b className="mv">40 min to 5 min</b> (
        <b className="mv">87%</b>) by moving scoring to an async Redis queue
        with FastAPI workers on the Gemini API. It now runs{' '}
        <b className="mv">400+ evaluations a week</b> and gives{' '}
        <b className="mv">200+ teachers</b> back{' '}
        <b className="mv">100+ hours a month</b>.
      </>,
      <>
        Built and shipped <b className="mv">4 production apps</b> (web and
        Android) as a founding engineer, on a shared Next.js API layer and a
        PostgreSQL schema I designed. Staged rollouts keep them at a{' '}
        <b className="mv">96%+ crash-free rate</b> across{' '}
        <b className="mv">117 schools</b>.
      </>,
      <>
        Held a <b className="mv">98% API success rate</b> with{' '}
        <b className="mv">zero data loss</b> over{' '}
        <b className="mv">5,000+ student submissions</b>. Jobs are idempotent
        against a fixed LLM schema, so a failed call retries instead of writing
        a duplicate.
      </>,
      <>
        Stopped data loss at <b className="mv">50+ low-network schools</b> with
        an offline-first queue in IndexedDB that replays audio in order and
        syncs on reconnect. Separately, traced an Android bug that deleted
        unsaved audio and recovered <b className="mv">20+ recordings</b>.
      </>,
    ],
    tags: [
      'Next.js',
      'React Native',
      'TypeScript',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'Redis',
      'IndexedDB',
    ],
  },
  {
    dates: 'May 2023 — Sep 2024',
    role: 'Full Stack Developer',
    company: 'Nuveb',
    meta: 'Open OTT network for creators · Bengaluru, India',
    bullets: [
      <>
        Grew the creator portal from{' '}
        <b className="mv">0 to 10,000+ active creators</b>, building the video,
        scheduling, and payment modules in Next.js and TypeScript over Go REST
        APIs.
      </>,
      <>
        Cut page load from <b className="mv">8.5s to 2.5s</b> (
        <b className="mv">70%</b>) for <b className="mv">50,000+ monthly users</b>
        . The catalog pages over-fetched in SSR, so I moved browse to SSG and
        kept SSR only for personalized routes.
      </>,
      <>
        Dropped image API latency from <b className="mv">3.2s to 1.9s</b> (
        <b className="mv">41%</b>) across <b className="mv">10,000+ items</b> by
        profiling the resize step and switching server-side resizing to Sharp
        instead of a cloud CDN.
      </>,
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Go REST APIs',
      'Sharp',
      'React Native',
    ],
  },
];

export const workIntro =
  'Two things I designed and built myself: a full-stack service and an LLM tool. I picked them because both are mostly about keeping something reliable under real use.';

export const cases: CaseStudy[] = [
  {
    index: 'Voice AI · Ops tooling',
    title: 'RTO Shield — Voice AI Ops Console',
    summary:
      'An ops console that places automated voice calls to customers on high-risk cash-on-delivery orders, so a team can confirm the order before it ships. It began as a Bolna voice-AI take-home that I built out into a working console.',
    blocks: [
      {
        label: 'Problem',
        text: 'COD orders that get refused cost money to ship out and ship back. The ops team needed a way to reach risky customers and confirm the order before dispatch.',
      },
      {
        label: 'Approach',
        text: 'Calls go out through Bolna. I structured it in layers (Router, Service, Repository, Store), with Firestore for live data and an in-memory store for local tests.',
      },
      {
        label: 'Key decisions & trade-offs',
        text: 'Bolna returns results asynchronously, so webhook handling is idempotent with a polling fallback, both feeding one pipeline. The extra plumbing made retries safe. The repository layer let me test the logic without a live Firestore.',
      },
      {
        label: 'Outcome',
        text: 'No more duplicate status updates. A webhook retry and a late poll now resolve to the same result instead of writing twice.',
      },
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'FastAPI',
      'Python',
      'Bolna',
      'Firestore',
      'Docker',
      'GCP Cloud Run',
    ],
    repoUrl: 'https://github.com/Saurav02022/bolna-assignment-web-app',
  },
  {
    index: 'LLM product · Full-stack',
    title: 'AI Resume Builder',
    summary:
      'A tool that tailors a resume to a job. You upload a PDF and a job description, review the changes as a diff, and export to LaTeX or PDF.',
    blocks: [
      {
        label: 'Problem',
        text: 'Tailoring a resume by hand for every role is slow. And raw LLM output is hard to trust: it drifts and quietly breaks the formatting.',
      },
      {
        label: 'Approach',
        text: 'A step-by-step flow: upload, job description, diff review, then export. It runs on the Google Gemini API pinned to a fixed response schema. React/Next.js on Vercel, FastAPI on GCP Cloud Run.',
      },
      {
        label: 'Key decisions & trade-offs',
        text: (
          <>
            I pinned the model to a fixed schema instead of free-form text. It
            improvises less, and the output stays predictable and easy to
            review as a diff. <b className="mv">30+</b> Playwright tests mock
            the API and gate every deploy through GitHub Actions.
          </>
        ),
      },
      {
        label: 'Outcome',
        text: (
          <>
            So far it has generated <b className="mv">100+ tailored resumes</b>{' '}
            with <b className="mv">no broken deployments</b>. Nothing ships
            unless the test suite passes.
          </>
        ),
      },
    ],
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'FastAPI',
      'Gemini API',
      'Playwright',
      'GitHub Actions',
      'GCP Cloud Run',
    ],
    repoUrl: 'https://github.com/Saurav02022/resume-builder',
  },
];

export const about = {
  leads: [
    <>
      I&apos;m a full-stack engineer, three years in. At <b>Nuveb</b> I worked
      on a creator video platform and got page loads down from 8.5s to 2.5s
      for 50,000+ users a month. Now I&apos;m a founding engineer at{' '}
      <b>Shikha Learning Labs</b>, building EdTech that runs in 117 schools.
    </>,
    <>
      I like owning the whole path — the API, the database, the deploy, and
      the small reliability details that decide whether something survives
      contact with real users. Lately a lot of that has been LLMs in
      production: evaluation pipelines and schema-locked outputs I can
      actually trust, plus offline-first flows and idempotent, tested jobs so
      things hold together on a weak network or a flaky Android device.
    </>,
  ],
  basedIn: { value: 'Mumbai, India', sub: 'Open to relocation' },
  focus: 'Full-stack systems · LLM / AI features · Performance & reliability',
  education: [
    {
      value: 'IIIT Ranchi — MCA',
      sub: '2026 – 2028 (expected) · weekend program',
    },
    {
      value: 'Munger University — B.Sc. Mathematics (Honours)',
      sub: '2019 – 2022',
    },
  ] satisfies EducationEntry[],
};

export const contact = {
  lead: 'Drop me a line.',
  support:
    "I'm looking for full-stack or AI engineering roles and happy to relocate. Email gets to me fastest — I read everything that lands there.",
};
