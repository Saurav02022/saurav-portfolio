import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/** Favicon: the serif "S." mark on the site's dark ground. */

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
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
          fontSize: 380,
          lineHeight: 1,
        }}
      >
        <span style={{ marginTop: -40 }}>S</span>
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
