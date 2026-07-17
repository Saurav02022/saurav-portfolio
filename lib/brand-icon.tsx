import { ImageResponse } from 'next/og';
import { BRAND, brandFont } from '@/lib/brand';

/**
 * The "S" mark set in Syne over the accent rule the cover eyebrow uses, on the
 * ink ground the marquee, toolkit and menu already establish. Shared by the
 * favicon and the apple touch icon so the two can't drift apart.
 */
export function brandIcon(px: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: BRAND.ink,
          color: BRAND.onAccent,
          fontFamily: 'Syne',
          fontSize: px * 0.62,
          lineHeight: 1,
          letterSpacing: '-0.035em',
        }}
      >
        <div style={{ display: 'flex' }}>S</div>
        {/* Sized to the S's own width and kept close, so it reads as the
            eyebrow rule underlining the mark rather than a stray bar. */}
        <div
          style={{
            width: px * 0.5,
            height: px * 0.055,
            marginTop: px * 0.035,
            background: BRAND.accent,
          }}
        />
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: [{ name: 'Syne', data: brandFont('syne-800.ttf'), weight: 800 }],
    }
  );
}
