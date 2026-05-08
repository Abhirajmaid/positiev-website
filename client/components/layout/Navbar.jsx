'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { Container } from '@/components/layout/Container';
import { mainNavLinks } from '@/lib/constants/nav';

function isActiveNavItem(pathname, item) {
  if (item.href === '/') return pathname === '/';
  if (item.href === '/about') return pathname === '/about';
  if (item.href === '/solutions') return pathname === '/solutions';
  if (item.href === '/led') return pathname === '/led';
  if (item.href === '/fleet') return pathname === '/fleet';
  if (item.href === '/segments') return pathname === '/segments';
  if (item.href === '/oems') return pathname === '/oems';
  if (item.href === '/blog') return pathname === '/blog';
  return false;
}

function PillLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={[
        'whitespace-nowrap rounded-full px-5 py-3 text-[14px] font-medium leading-none transition md:px-6 md:py-3.5 md:text-[15px]',
        active
          ? 'border border-white/0 bg-white text-[#1E1E1E] shadow-sm'
          : 'border border-white/35 bg-transparent text-white/80 hover:bg-white/10 hover:text-white',
      ].join(' ')}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 z-50">
      <Container className="pointer-events-auto relative flex max-w-[1500px] items-center justify-between py-4">
        {/* Left: logo */}
        <Link href="/" className="relative z-10 flex shrink-0 items-center">
          <Image
            src="/logo_2.png"
            alt="PositiEV Mobility"
            width={200}
            height={48}
            className="h-9 w-auto object-contain object-left md:h-11"
            priority
          />
        </Link>

        {/* Center: nav — viewport-centered */}
        <nav className="absolute left-1/2 top-1/2 hidden max-w-[min(95vw,1220px)] -translate-x-1/2 -translate-y-1/2 md:flex md:items-center md:justify-center md:gap-1 lg:gap-1.5">
          {mainNavLinks.map((item) => (
            <PillLink
              key={item.label}
              href={item.href}
              active={isActiveNavItem(pathname, item)}
            >
              {item.label}
            </PillLink>
          ))}
        </nav>

        {/* Right: contact */}
        <div className="relative z-10 ml-auto flex shrink-0 items-center">
          <Link
            href="/contact"
            className={[
              'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold tracking-wide md:text-[15px]',
              'border border-white/10 bg-white text-black',
              'shadow-[0_14px_55px_rgba(0,0,0,0.35)] hover:bg-white transition',
            ].join(' ')}
          >
            <Icon icon="mdi:phone-outline" className="h-[18px] w-[18px] shrink-0 text-black" aria-hidden />
            <span>Contact</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
