import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Container } from '@/components/layout/Container';

const social = [
  { label: 'Facebook', href: '#', icon: 'mdi:facebook' },
  { label: 'Instagram', href: '#', icon: 'mdi:instagram' },
  { label: 'YouTube', href: '#', icon: 'mdi:youtube' },
  { label: 'X', href: '#', icon: 'mdi:twitter' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Solution', href: '/#solutions' },
  { label: 'Contact Us', href: '/contact' },
];

const companyLinks = [
  { label: 'Resources', href: '#' },
  { label: 'How we work', href: '#' },
];

export function ContactFooter() {
  return (
    <footer className="bg-[#121212] text-white">
      <Container className="max-w-[1200px] px-0 md:px-4">
        <div className="grid gap-0 md:grid-cols-2 md:gap-12 md:pt-6">
          <div>
            <div className="px-6 pt-8 md:px-8 md:pt-10">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/logo_2_transparent.png"
                  alt="PositiEV Mobility"
                  width={200}
                  height={48}
                  className="h-10 w-auto max-w-[min(220px,70vw)] object-contain object-left"
                />
              </Link>
            </div>

            <div className="space-y-8 px-6 pb-12 pt-6 md:px-8 md:pb-16">
              <p className="max-w-md text-sm leading-relaxed text-white/60">
                Powering the future of electric mobility through integrated EV leasing, infrastructure,
                and fleet solutions.
              </p>

              <div>
                <div className="text-sm font-semibold tracking-wide text-white">Connect With US</div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 text-white transition hover:bg-white/10"
                    >
                      <Icon icon={s.icon} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 px-6 pb-12 pt-4 md:px-4 md:pb-16 md:pt-20">
            <div>
              <div className="text-sm font-semibold text-white">Navigation</div>
              <nav className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/55">
                {navLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="hover:text-white/90">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Company</div>
              <nav className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/55">
                {companyLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="hover:text-white/90">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
