import type {
  CaseStudy,
  DetailLink,
  EducationEntry,
  ExperienceRole,
  NavItem,
} from './types';

/* ---------------------------------------------------------------------------
 * Content source of truth — every string on the site lives here.
 * Voice: plain-engineer. Claims stay concrete and consistent with the résumé;
 * anything unverifiable goes to the NEEDS-INPUT list in BRAND.md / the PR.
 * ------------------------------------------------------------------------- */

export const NAME = 'Saurav Kumar';
export const ROLE = 'Full-Stack Software Engineer';
export const EMAIL = 'sk729584@gmail.com';
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
  // The brand sentence. Echoed (not repeated) in About and the Work intro.
  statement: (
    <>
      I build full-stack products and LLM features that <em>survive</em> weak
      networks, flaky devices, and async vendor APIs.
    </>
  ),
  support: (
    <>
      Right now that&apos;s EdTech running in <b className="mv">117 schools</b>,
      many on unreliable connections. Before that, a creator video platform
      that grew past <b className="mv">10,000 creators</b> and served{' '}
      <b className="mv">50,000+ users a month</b>. I own features end to end:
      the API, the database, the deploy.
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
        Cut teacher evaluation from <b className="mv">40 minutes to 5–10</b> by
        moving scoring to an async Redis queue with FastAPI workers on the
        Gemini API — now <b className="mv">400+ evaluations a week</b> for{' '}
        <b className="mv">200+ teachers</b>.
      </>,
      <>
        Built and shipped <b className="mv">4 production apps</b> (web and
        Android) as a founding engineer, on a shared Next.js API layer and a
        PostgreSQL schema I designed; staged rollouts hold them at{' '}
        <b className="mv">96%+ crash-free</b> across{' '}
        <b className="mv">117 schools</b>.
      </>,
      <>
        Held a <b className="mv">98% API success rate</b> over{' '}
        <b className="mv">5,000+ student submissions</b> — the failing 2% retry
        idempotently against a fixed LLM response schema, so no submission is
        lost or written twice.
      </>,
      <>
        Stopped data loss at <b className="mv">50+ low-network schools</b> with
        an offline-first IndexedDB queue that stores audio locally, replays it
        in order, and syncs on reconnect.
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
        Built the creator portal&apos;s video, scheduling, and payment modules
        in Next.js and TypeScript over Go REST APIs as it grew from{' '}
        <b className="mv">0 to 10,000+ active creators</b>.
      </>,
      <>
        Cut page load from <b className="mv">8.5s to 2.5s</b> (
        <b className="mv">70%</b>) for <b className="mv">50,000+ monthly users</b>
        : catalog pages over-fetched in SSR, so I moved browse to SSG and kept
        SSR for personalized routes.
      </>,
      <>
        Dropped image API latency from <b className="mv">3.2s to 1.9s</b> (
        <b className="mv">41%</b>) across <b className="mv">10,000+ items</b> by
        profiling the resize step and moving it to Sharp on the server.
      </>,
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Sharp', 'React Native'],
  },
];

export const workIntro =
  'Two projects I designed and built alone, end to end. Both are about the same problem: staying correct when a third-party API is slow, duplicated, or wrong.';

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
        text: 'Calls go out through Bolna. The backend is layered — router, service, repository, store — so domain logic only talks to a store interface: tests run against an in-memory store, production runs Firestore, and nothing else changes.',
      },
      {
        label: 'Key decisions & trade-offs',
        text: 'Bolna reports each call twice: a webhook push and a polling fallback. Both feed one normalization pipeline keyed on the call ID, and the handler only commits on a meaningful status change — so at-least-once delivery from two sources still writes exactly one record.',
      },
      {
        label: 'Outcome',
        text: 'Duplicate status updates went to zero: a webhook retry and a late poll resolve to the same record. It began as a take-home, so correctness under retries is the outcome I can claim honestly — there are no production order numbers to cite, and I won’t invent them.',
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
            The model is pinned to a fixed response schema and validated with
            Pydantic at the service layer — output that doesn&apos;t match
            never reaches the document, and every change ships as a diff you
            approve. <b className="mv">30+</b> Playwright tests cover the
            wizard, error contracts, and export; they mock the API, so they
            gate the app, not the model.
          </>
        ),
      },
      {
        label: 'Outcome',
        text: (
          <>
            I run my own job search on it: <b className="mv">100+</b> tailored
            resumes so far, and no deploy has broken the flow — nothing merges
            unless the suite passes. The live app is linked below.
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
    liveUrl: 'https://resume-builder-saurav02022.vercel.app',
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
      I like owning the whole path — the API, the database, the deploy. Lately
      a lot of that has been LLMs in production: schema-locked outputs,
      idempotent jobs, and offline-first flows, because a feature that only
      works on good Wi-Fi doesn&apos;t work in the schools we serve.
    </>,
  ],
  basedIn: { value: 'Mumbai, India', sub: 'Open to relocation' },
  focus:
    'Full-stack + LLM systems built for unreliable networks and third-party APIs',
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
