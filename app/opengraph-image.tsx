import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * OG / Twitter share card, generated at build from the site's design tokens
 * so the LinkedIn preview is a proper 1200×630 card, always in sync with the
 * brand mark. Fonts are committed under assets/fonts (no network at build).
 */

export const alt =
  'Saurav Kumar — Full-Stack Software Engineer. Full-stack products and LLM features that survive weak networks, flaky devices, and async vendor APIs.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const font = (file: string) =>
  readFileSync(join(process.cwd(), 'assets/fonts', file));

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px 56px',
          background: '#0b0b0d',
          color: '#ecebe4',
          fontFamily: 'Hanken Grotesk',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontFamily: 'JetBrains Mono',
              fontSize: 22,
              letterSpacing: '0.22em',
              color: '#e9a23b',
            }}
          >
            <div style={{ width: 40, height: 1.5, background: '#e9a23b' }} />
            FULL-STACK SOFTWARE ENGINEER · 3+ YRS
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Newsreader',
              fontSize: 124,
              lineHeight: 1,
              letterSpacing: '-0.028em',
              marginTop: 28,
            }}
          >
            Saurav Kumar<span style={{ color: '#e9a23b' }}>.</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              lineHeight: 1.35,
              color: '#d6d5cd',
              maxWidth: 940,
              marginTop: 30,
            }}
          >
            Full-stack products and LLM features that survive weak networks,
            flaky devices, and async vendor APIs.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 28,
            fontFamily: 'JetBrains Mono',
            fontSize: 22,
            color: '#8c8c84',
            borderTop: '1px solid rgba(236,235,228,0.14)',
            paddingTop: 32,
          }}
        >
          <span>EdTech in 117 schools</span>
          <span style={{ color: '#e9a23b' }}>·</span>
          <span>50,000+ users a month</span>
          <span style={{ color: '#e9a23b' }}>·</span>
          <span>Mumbai, India</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Newsreader', data: font('newsreader-500.ttf'), weight: 500 },
        {
          name: 'Hanken Grotesk',
          data: font('hanken-grotesk-500.ttf'),
          weight: 500,
        },
        {
          name: 'JetBrains Mono',
          data: font('jetbrains-mono-400.ttf'),
          weight: 400,
        },
      ],
    }
  );
}
