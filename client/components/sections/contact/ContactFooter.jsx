import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const social = [
  { label: 'Facebook', href: '#', icon: 'mdi:facebook' },
  { label: 'Instagram', href: '#', icon: 'mdi:instagram' },
  { label: 'YouTube', href: '#', icon: 'mdi:youtube' },
  { label: 'X', href: '#', icon: 'mdi:twitter' },
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
                      <Icon icon={s.icon} className="h-5 w-5" />
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
