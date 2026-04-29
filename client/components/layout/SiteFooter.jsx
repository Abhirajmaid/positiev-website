import { Container } from '@/components/layout/Container';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <Container className="flex h-16 items-center justify-between text-xs text-white/60">
        <span>© {new Date().getFullYear()} Positiev</span>
        <span>Built with Next.js</span>
      </Container>
    </footer>
  );
}

