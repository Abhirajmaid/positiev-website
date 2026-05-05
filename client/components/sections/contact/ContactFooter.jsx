import Image from 'next/image';
import Link from 'next/link';

function SocialSvg({ id }) {
  const cn = 'h-5 w-5 shrink-0';
  switch (id) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cn} aria-hidden>
          <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cn} aria-hidden>
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cn} aria-hidden>
          <path d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
        </svg>
      );
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cn} aria-hidden>
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
        </svg>
      );
    default:
      return null;
  }
}

const social = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
  { label: 'X', href: '#', icon: 'twitter' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Contact Us', href: '/contact' },
];

const companyLinks = [
  { label: 'Resources', href: '#' },
  { label: 'How we work', href: '#' },
];

export function ContactFooter() {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-5 lg:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_minmax(320px,1fr)] md:gap-16 lg:grid-cols-[1fr_minmax(380px,520px)] lg:gap-20 md:pt-8 lg:pt-10">
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
              <p className="max-w-md text-[15px] leading-relaxed text-white/60 md:text-base">
                Powering the future of electric mobility through integrated EV leasing, infrastructure,
                and fleet solutions.
              </p>

              <div>
                <div className="text-[15px] font-semibold tracking-wide text-white md:text-base">
                  Connect With US
                </div>
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
                      <SocialSvg id={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-16 px-6 pb-12 pt-2 md:gap-20 md:px-0 md:pb-16 md:pt-12 lg:gap-24 lg:pt-14">
            <div className="w-full">
              <div className="text-base font-semibold text-white md:text-lg">Navigation</div>
              <nav className="mt-5 flex flex-wrap gap-x-6 gap-y-4 text-[15px] text-white/55 sm:gap-x-8 md:mt-6 md:gap-x-10 md:text-base lg:gap-x-12">
                {navLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="whitespace-nowrap hover:text-white/90">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="w-full">
              <div className="text-base font-semibold text-white md:text-lg">Company</div>
              <nav className="mt-5 flex flex-wrap gap-x-6 gap-y-4 text-[15px] text-white/55 sm:gap-x-8 md:mt-6 md:gap-x-10 md:text-base lg:gap-x-12">
                {companyLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="whitespace-nowrap hover:text-white/90">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
