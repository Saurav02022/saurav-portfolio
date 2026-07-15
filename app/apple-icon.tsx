import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/** Apple touch icon — same "S." mark as the favicon. */

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0b0b0d',
          color: '#ecebe4',
          fontFamily: 'Newsreader',
          fontSize: 132,
          lineHeight: 1,
        }}
      >
        <span style={{ marginTop: -14 }}>S</span>
        <span style={{ color: '#e9a23b' }}>.</span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Newsreader',
          data: readFileSync(
            join(process.cwd(), 'assets/fonts', 'newsreader-500.ttf')
          ),
          weight: 500,
        },
      ],
    }
  );
}
