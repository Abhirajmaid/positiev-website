'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';

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

const NAV_BTN =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0C9BC] text-white shadow-none transition hover:bg-[#E5C4B8] md:h-12 md:w-12';

function StarRow({ muted }) {
  return (
    <div
      className={`flex justify-center gap-1 ${muted ? 'text-brand-coral/55' : 'text-brand-coral'}`}
      aria-hidden
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-current md:h-[1.15rem] md:w-[1.15rem]">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Chevron({ dir }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Active: soft bg only (ref-image 2), no reliance on border */
function ActiveReviewPanel({ r }) {
  return (
    <article className="rounded-2xl bg-[#FAFAFA] px-6 py-6 text-center shadow-[0_2px_24px_rgba(0,0,0,0.06)] md:rounded-[1.125rem] md:px-8 md:py-7">
      <StarRow muted={false} />
      <p className="mt-4 px-1 text-[15px] font-medium leading-relaxed text-[#1a1a1a] md:mt-5 md:text-base md:leading-relaxed lg:text-[1.125rem] lg:leading-relaxed lg:max-w-[30rem] lg:mx-auto">
        {r.quote}
      </p>
      <div className="mt-5 flex items-center justify-center gap-2.5 md:mt-6 md:gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-[10px] bg-[#E8E8E8] md:h-12 md:w-12 md:rounded-xl">
          <Image src={r.image} alt="" fill className="object-cover" sizes="56px" />
        </div>
        <span className="text-[15px] font-normal text-[#1a1a1a] md:text-base">{r.name}</span>
      </div>
    </article>
  );
}

/** Side panels: faint content + fade into white (ref-image 2) */
function SideReviewPreview({ r, align }) {
  return (
    <div
      className={`relative min-w-0 flex-1 overflow-hidden select-none py-2 ${
        align === 'left' ? 'mr-auto pr-2' : 'ml-auto pl-2'
      }`}
    >
      <div className="mx-auto max-w-[min(100%,17rem)] opacity-[0.5] saturate-[0.85] [filter:blur(0.25px)] md:max-w-[19rem] md:opacity-[0.48]">
        <StarRow muted />
        <p className="mt-3 line-clamp-5 px-1 text-center text-[13px] font-normal leading-relaxed text-[#1a1a1a] md:text-sm md:leading-relaxed">
          {r.quote}
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-[#E8E8E8] md:h-10 md:w-10">
            <Image src={r.image} alt="" fill className="object-cover" sizes="40px" />
          </div>
          <span className="truncate text-xs font-medium text-[#1a1a1a] md:text-[13px]">{r.name}</span>
        </div>
      </div>
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${
          align === 'left'
            ? 'from-white/55 via-white/10 to-transparent'
            : 'from-transparent via-white/10 to-white/55'
        }`}
        aria-hidden
      />
    </div>
  );
}

export function AboutRecentReviews() {
  const [index, setIndex] = useState(0);
  const n = reviews.length;

  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);
  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);

  const at = (offset) => reviews[(index + offset + n) % n];
  const current = at(0);

  return (
    <section className="w-full bg-white py-10 md:py-12">
      {/* Full-bleed content width */}
      <div className="mx-auto flex w-full max-w-none flex-col items-center px-4 sm:px-6 lg:px-10 xl:px-14">
        <span className="rounded-full bg-brand-coral px-7 py-2.5 text-center text-[13px] font-semibold text-white md:px-8 md:py-3 md:text-sm">
          Most Recent Reviews
        </span>

        <div className="relative mt-8 w-full md:mt-10">
          {/* Ref-image 2: full width — side fades | gap | ◀ | gap | active | gap | ▶ | gap | side fades */}
          <div className="mx-auto hidden w-full max-w-[1600px] items-center gap-x-8 md:flex lg:gap-x-12 xl:gap-x-16">
            <div
              className="min-w-0 flex-1 text-left"
              role="region"
              aria-label={`Previous review preview: ${at(-1).name}`}
            >
              <SideReviewPreview r={at(-1)} align="left" />
            </div>

            <button type="button" onClick={prev} className={NAV_BTN} aria-label="Previous review">
              <Chevron dir="left" />
            </button>

            <div className="relative z-[1] w-full max-w-[32rem] shrink-0">
              <ActiveReviewPanel r={at(0)} />
            </div>

            <button type="button" onClick={next} className={NAV_BTN} aria-label="Next review">
              <Chevron dir="right" />
            </button>

            <div
              className="min-w-0 flex-1 text-left"
              role="region"
              aria-label={`Next review preview: ${at(1).name}`}
            >
              <SideReviewPreview r={at(1)} align="right" />
            </div>
          </div>

          <div className="md:hidden">
            <ActiveReviewPanel r={current} />
            <div className="mt-6 flex justify-center gap-16">
              <button type="button" onClick={prev} className={NAV_BTN} aria-label="Previous review">
                <Chevron dir="left" />
              </button>
              <button type="button" onClick={next} className={NAV_BTN} aria-label="Next review">
                <Chevron dir="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
