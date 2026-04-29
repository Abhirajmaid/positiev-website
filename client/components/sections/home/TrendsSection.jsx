'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';

const slides = [
  {
    id: '1',
    image: '/sampleuse.jpg',
    name: 'David Thompson',
    role: 'Investment Banker',
    company: 'Spherule',
    headline: 'Purchased Property: The Grand Haven',
    quote:
      '"Luxira Real Estate made the entire home-buying process seamless. The team was professional, and they found me the perfect modern home in Beverly Hills. Highly recommended!"',
    rating: 4.9,
  },
  { id: '2', image: '/sampleuse.jpg' },
  { id: '3', image: '/sampleuse.jpg' },
  { id: '4', image: '/sampleuse.jpg' },
];

function Svg({ children, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function IconChevronLeft({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M14.5 6.5 9 12l5.5 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function IconChevronRight({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M9.5 6.5 15 12l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function IconStar({ className = '', filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.6-5.9-3.2-5.9 3.2 1.2-6.6-4.8-4.6 6.6-.9 2.9-6Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke={filled ? 'currentColor' : 'currentColor'}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpheruleMark() {
  return (
    <span className="grid h-6 w-6 place-items-center rounded-full border border-black/10">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 3.2c4.9 0 8.8 3.9 8.8 8.8S16.9 20.8 12 20.8 3.2 16.9 3.2 12 7.1 3.2 12 3.2Z"
          fill="none"
          stroke="#6D28D9"
          strokeWidth="2"
        />
        <path
          d="M7.2 12h9.6M12 7.2v9.6"
          stroke="#6D28D9"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function StarRow({ value }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStar
            key={i}
            filled={i < full}
            className={i < full ? 'h-4 w-4 text-[#C9A227]' : 'h-4 w-4 text-black/15'}
          />
        ))}
      </div>
      <div className="text-[12px] font-semibold text-brand-dark">{value}</div>
    </div>
  );
}

function RoundNavButton({ direction, onClick }) {
  const isPrev = direction === 'prev';
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'grid h-10 w-10 place-items-center rounded-full transition',
        isPrev
          ? 'border border-black/20 bg-brand-white text-brand-dark hover:bg-brand-light'
          : 'border border-black bg-black text-brand-white hover:bg-black/90',
      ].join(' ')}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
    >
      {isPrev ? (
        <IconChevronLeft className="h-5 w-5" />
      ) : (
        <IconChevronRight className="h-5 w-5" />
      )}
    </button>
  );
}

export function TrendsSection() {
  const [index, setIndex] = useState(0);
  const items = useMemo(() => slides, []);
  const active = items[index] || items[0];

  const total = items.length;
  const label = `${index + 1}/${total}`;

  return (
    <section className="bg-black py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1500px] px-4">
        <div className="mx-auto grid max-w-[1180px] items-start gap-8 md:grid-cols-[minmax(0,1fr)_360px] md:gap-x-20">
          <div>
            <h2 className="font-serif text-4xl font-semibold leading-[0.98] text-brand-white md:text-[50px]">
              Discover Insights, Trends, And
              <br />
              Inspiration.
            </h2>
          </div>
          <div className="md:justify-self-end md:pt-2">
            <p className="max-w-[360px] text-[17px] leading-relaxed text-brand-white/80 md:text-[21px]">
              Explore our latest listings in the most sought-after locations. we
              have the perfect home for you.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[1180px] overflow-hidden rounded-2xl bg-[#151515] shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
          <div className="relative min-h-[340px] md:min-h-[380px]">
            <Image
              src={active.image}
              alt="Featured"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 1400px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/12 via-transparent to-black/10" />

            <div className="absolute bottom-6 left-6 flex items-end gap-3 text-brand-white/85">
              <div className="text-[12px] font-medium">{label}</div>
              <div className="h-[2px] w-12 bg-brand-white/25">
                <div
                  className="h-full bg-brand-white"
                  style={{ width: `${((index + 1) / total) * 100}%` }}
                />
              </div>
            </div>

            <div className="absolute inset-x-4 top-4 md:inset-x-auto md:right-6 md:top-6 md:w-[455px]">
              <div className="rounded-2xl bg-brand-white p-6 shadow-[0_18px_65px_rgba(0,0,0,0.25)] md:min-h-[330px]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-brand-light">
                      <div className="relative h-full w-full">
                        <Image
                          src="/sampleuse.jpg"
                          alt="Avatar"
                          fill
                          className="object-cover"
                          sizes="46px"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-brand-dark">
                        {active.name}
                      </div>
                      <div className="text-[11px] text-brand-medium">
                        {active.role}
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-brand-dark/80">
                    <SpheruleMark />
                    <span className="text-[12px] font-semibold">{active.company}</span>
                  </div>
                </div>

                <div className="mt-5 text-[15px] font-semibold text-brand-dark">
                  {active.headline}
                </div>
                <div className="mt-2 text-[14px] leading-relaxed text-brand-medium">
                  {active.quote}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <StarRow value={active.rating || 4.9} />
                  <div className="flex items-center gap-3">
                    <RoundNavButton
                      direction="prev"
                      onClick={() => setIndex((v) => (v + total - 1) % total)}
                    />
                    <RoundNavButton
                      direction="next"
                      onClick={() => setIndex((v) => (v + 1) % total)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

