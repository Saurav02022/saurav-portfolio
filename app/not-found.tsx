import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '404',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="hero wrap" style={{ minHeight: '70vh' }}>
      <p className="heroEyebrow">404</p>
      <h1 className="heroName serif">Nothing here.</h1>
      <p className="heroSupport">
        This address doesn&apos;t resolve — the portfolio is a single page,
        and everything lives on it.
      </p>
      <div className="heroCtas">
        <Button asChild variant="primary">
          <Link href="/">Go to the portfolio →</Link>
        </Button>
      </div>
    </main>
  );
}
