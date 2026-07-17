import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * The design tokens the build-time images need as plain values.
 * satori can't read CSS custom properties, so these mirror the @theme block in
 * app/globals.css by hand — keep the two in step.
 */
export const BRAND = {
  bg: '#f3efe7',
  ink: '#151310',
  ink2: '#3a352d',
  muted: '#6c6558',
  line: 'rgba(21, 19, 16, 0.15)',
  accent: '#0a6b57',
  onAccent: '#f7f3eb',
} as const;

/** Committed under assets/fonts so the build never reaches for the network. */
export const brandFont = (file: string) =>
  readFileSync(join(process.cwd(), 'assets/fonts', file));
