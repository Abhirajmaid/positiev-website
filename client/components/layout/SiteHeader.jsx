import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide text-white">
          Positiev
        </Link>
        <nav className="flex items-center gap-6 text-sm text-white/70">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="#" className="hover:text-white">
            About
          </Link>
          <Link href="#" className="hover:text-white">
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}

