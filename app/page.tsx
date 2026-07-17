import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Cover } from '@/components/sections/Cover';
import { Marquee } from '@/components/sections/Marquee';
import { Work } from '@/components/sections/Work';
import { Experience } from '@/components/sections/Experience';
import { About } from '@/components/sections/About';
import { Toolkit } from '@/components/sections/Toolkit';
import { Contact } from '@/components/sections/Contact';

// Title and description come from the layout — this is the page they describe.
// Resolved against metadataBase, so it tracks NEXT_PUBLIC_SITE_URL.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <a
        className="absolute -top-15 left-3 z-300 bg-ink px-4 py-2.75 font-mono text-[13px] text-bg transition-[top] duration-200 focus:top-3"
        href="#main"
      >
        Skip to content
      </a>
      <Navbar />
      {/* tabIndex: the skip link has to be able to land focus here, otherwise
          it only scrolls and the next Tab returns to the nav. */}
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Cover />
        <Marquee />
        <Work />
        <Experience />
        <About />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
