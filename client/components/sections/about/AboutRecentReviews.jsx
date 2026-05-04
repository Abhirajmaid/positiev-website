'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';

/** Order: center active = Anna; prev = Priya; next = Rajesh (matches ref layout) */
const reviews = [
  {
    id: '1',
    quote:
      "PositiEV's integrated model eliminated our fleet management headaches overnight. Having lease, charging, and maintenance under a single SLA means we scale without worrying about downtime or defaults. Highly recommend for any serious fleet operator.",
    name: 'Anna Hathaway',
    image: '/sampleuse.jpg',
  },
  {
    id: '2',
    quote:
      'Partnering as a DLF gave us guaranteed inventory backing, access to multiple OEM brands, and a revenue stream from charging infrastructure we never expected.',
    name: 'Rajesh Kumar',
    image: '/sampleuse.jpg',
  },
  {
    id: '3',
    quote:
      "Working with PositiEV as our Master Dealer accelerated our distribution reach across pincode clusters we hadn't been able to crack.",
    name: 'Priya Sharma',
    image: '/sampleuse.jpg',
  },
];

function StarRow({ className = '' }) {
  return (
    <div className={`flex justify-center gap-1 text-brand-coral ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-current md:h-6 md:w-6">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Chevron({ dir }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6" fill="none" aria-hidden>
      <path
        d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReviewCard({ r, active }) {
  return (
    <article className="flex w-full flex-col items-center text-center">
      <StarRow />
      <p
        className={[
          'mt-5 max-w-xl px-1 leading-relaxed md:mt-6',
          active
            ? 'text-[15px] font-semibold text-[#111111] md:text-base lg:text-[17px]'
            : 'text-[13px] font-normal text-[#111111] md:text-[14px]',
        ].join(' ')}
      >
        {r.quote}
      </p>
      <div className="mt-7 flex items-center justify-center gap-3 md:mt-8">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[10px] bg-[#E8E8E8] md:h-11 md:w-11 md:rounded-[12px]">
          <Image src={r.image} alt="" fill className="object-cover" sizes="48px" />
        </div>
        <span
          className={[
            'text-left text-sm md:text-[15px]',
            active ? 'font-medium text-[#111111]' : 'font-normal text-[#111111]/80',
          ].join(' ')}
        >
          {r.name}
        </span>
      </div>
    </article>
  );
}

/** Ref: pill badge, 3-up row (sides ~35% opacity), coral nav disks, click sides to change */
export function AboutRecentReviews() {
  const [index, setIndex] = useState(0);
  const n = reviews.length;

  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);
  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const at = (offset) => reviews[(index + offset + n) % n];
  const current = at(0);

  return (
    <section className="bg-white pb-20 pt-10 md:pb-28 md:pt-14">
      <Container className="max-w-[1100px]">
        <div className="flex flex-col items-center">
          <span className="rounded-full bg-brand-coral px-6 py-2.5 text-center text-[12px] font-semibold tracking-wide text-white md:px-7 md:text-[13px]">
            Most Recent Reviews
          </span>

          <div className="relative mt-14 w-full md:mt-16">
            {/*
              Ref-image 2: pastel peach disks (#FFD1C1), white thin chevrons; slight hover darken.
            */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFD1C1] text-white shadow-[0_4px_16px_rgba(255,140,105,0.2)] transition hover:bg-[#FFC4B0] md:left-[26%] md:h-[52px] md:w-[52px] md:-translate-x-1/2"
              aria-label="Previous review"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFD1C1] text-white shadow-[0_4px_16px_rgba(255,140,105,0.2)] transition hover:bg-[#FFC4B0] md:left-[74%] md:right-auto md:h-[52px] md:w-[52px] md:-translate-x-1/2"
              aria-label="Next review"
            >
              <Chevron dir="right" />
            </button>

            {/* Desktop / tablet: three columns — center dominant */}
            <div className="hidden min-h-[280px] md:grid md:min-h-0 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)_minmax(0,0.95fr)] md:items-start md:gap-3 md:px-6 lg:gap-5 lg:px-8">
              <button
                type="button"
                onClick={prev}
                className="group cursor-pointer pt-1 text-center opacity-[0.38] transition-opacity duration-300 hover:opacity-[0.55] focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2"
                aria-label={`Show previous review: ${at(-1).name}`}
              >
                <ReviewCard r={at(-1)} active={false} />
              </button>
              <div className="text-center md:px-2 lg:px-4">
                <ReviewCard r={at(0)} active />
              </div>
              <button
                type="button"
                onClick={next}
                className="group cursor-pointer pt-1 text-center opacity-[0.38] transition-opacity duration-300 hover:opacity-[0.55] focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2"
                aria-label={`Show next review: ${at(1).name}`}
              >
                <ReviewCard r={at(1)} active={false} />
              </button>
            </div>

            {/* Mobile: single active review */}
            <div className="px-2 md:hidden">
              <ReviewCard r={current} active />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
