'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Container } from '@/components/layout/Container';
import { mainNavLinks } from '@/lib/constants/nav';

export function ContactNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-transparent py-4">
      <Container className="max-w-[1500px] px-4">
        <div className="flex justify-center">
          <div className="flex w-full max-w-[min(100%,960px)] items-center justify-between gap-3 rounded-full bg-[#8b8f96] px-4 py-2.5 shadow-sm md:gap-4 md:px-5 md:py-3 lg:max-w-[960px]">
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

            <nav className="hidden items-center justify-center gap-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white md:flex md:gap-5 lg:gap-7 lg:text-[14px]">
              {mainNavLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white/90">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-end gap-2">
              <Link
                href="/contact#contact-form"
                className="hidden rounded-full bg-brand-coral px-5 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-brand-coral/90 md:inline-flex lg:text-[13px]"
              >
                Contact
              </Link>

              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white md:hidden"
                aria-expanded={open}
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
              >
                <Icon icon={open ? 'mdi:close' : 'mdi:menu'} className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {open ? (
          <div className="mt-3 rounded-2xl border border-black/10 bg-white p-4 shadow-lg md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wide text-brand-dark">
              {mainNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 hover:bg-black/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact#contact-form"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-full bg-brand-coral px-4 py-3 text-center text-white"
              >
                Contact
              </Link>
            </nav>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
