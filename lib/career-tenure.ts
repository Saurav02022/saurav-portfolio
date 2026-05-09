export type TenureParts = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function compareYm(a: string, b: string): number {
  const [ay, am] = a.split('-').map(Number);
  const [by, bm] = b.split('-').map(Number);
  if (ay !== by) return ay - by;
  return am - bm;
}

export function getEarliestExperienceStartYm(
  experience: { startDate: string }[],
): string | null {
  if (!experience.length) return null;
  return [...experience].sort((x, y) =>
    compareYm(x.startDate, y.startDate),
  )[0].startDate;
}

/** Parse YYYY-MM-DD; returns null if invalid. */
function parseYyyyMmDd(raw: string): { y: number; m: number; d: number } | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw.trim());
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  if (!y || mo < 1 || mo > 12 || d < 1 || d > 31) return null;
  const trial = new Date(y, mo - 1, d);
  if (
    trial.getFullYear() !== y ||
    trial.getMonth() !== mo - 1 ||
    trial.getDate() !== d
  ) {
    return null;
  }
  return { y, m: mo, d };
}

/** Start of professional tenure from CV: local midnight on that calendar day. */
export function careerStartToDate(isoDate: string): Date | null {
  const p = parseYyyyMmDd(isoDate);
  if (!p) return null;
  return new Date(p.y, p.m - 1, p.d, 0, 0, 0, 0);
}

/**
 * Calendar difference from `from` to `to` (local), years → seconds (borrows bottom-up).
 * Career start is stored at local midnight; `to` is usually “now” for a live counter.
 */
export function diffCalendarParts(from: Date, to: Date): TenureParts {
  if (to.getTime() < from.getTime()) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  let y = to.getFullYear() - from.getFullYear();
  let mo = to.getMonth() - from.getMonth();
  let d = to.getDate() - from.getDate();
  let h = to.getHours() - from.getHours();
  let mi = to.getMinutes() - from.getMinutes();
  let s = to.getSeconds() - from.getSeconds();

  if (s < 0) {
    s += 60;
    mi -= 1;
  }
  if (mi < 0) {
    mi += 60;
    h -= 1;
  }
  if (h < 0) {
    h += 24;
    d -= 1;
  }
  if (d < 0) {
    const dim = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
    d += dim;
    mo -= 1;
  }
  if (mo < 0) {
    mo += 12;
    y -= 1;
  }

  if (y < 0) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return { years: y, months: mo, days: d, hours: h, minutes: mi, seconds: s };
}

function joinParts(parts: { label: string; value: number }[]): string {
  const bits = parts.filter((p) => p.value > 0);
  if (bits.length === 0) return '';
  return bits
    .map((p) => `${p.value} ${p.label}${p.value === 1 ? '' : 's'}`)
    .join(', ');
}

/**
 * e.g. "3 years, 8 days, 2 hours, 5 minutes, 12 seconds of experience"
 * Omits units that are zero.
 */
export function formatTenureOfExperience(parts: TenureParts): string {
  const { years, months, days, hours, minutes, seconds } = parts;
  const core = joinParts([
    { label: 'year', value: years },
    { label: 'month', value: months },
    { label: 'day', value: days },
    { label: 'hour', value: hours },
    { label: 'minute', value: minutes },
    { label: 'second', value: seconds },
  ]);
  if (!core) return 'Less than a second of experience';
  return `${core} of experience`;
}

export interface CareerSourceInput {
  personal: {
    careerStartDate?: string;
    careerStartMonth?: string;
  };
  experience: { startDate: string }[];
}

/**
 * Resolve YYYY-MM-DD for tenure:
 * 1. `personal.careerStartDate` (exact day on CV)
 * 2. `personal.careerStartMonth` (YYYY-MM) → first of month
 * 3. Earliest `experience.startDate` (YYYY-MM) → first of month
 */
export function resolveCareerStartIsoDate(input: CareerSourceInput): string | null {
  if (input.personal.careerStartDate?.trim()) {
    const raw = input.personal.careerStartDate.trim();
    if (parseYyyyMmDd(raw)) return raw;
  }
  const ym =
    input.personal.careerStartMonth?.trim() ||
    getEarliestExperienceStartYm(input.experience);
  if (ym && /^\d{4}-\d{2}$/.test(ym)) return `${ym}-01`;
  return null;
}

export function buildTenureLabel(
  startIso: string,
  asOf: Date = new Date(),
): string | null {
  const from = careerStartToDate(startIso);
  if (!from) return null;
  return formatTenureOfExperience(diffCalendarParts(from, asOf));
}
