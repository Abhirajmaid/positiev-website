'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';

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

function IconBadgeCheck({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M12 3.2c.9 0 1.5.9 2.3 1.2.9.4 2-.1 2.8.5.8.6.8 1.8 1.4 2.6.6.8 1.8 1 2.1 1.9.3.9-.4 1.9-.4 2.9s.7 2 .4 2.9c-.3.9-1.5 1.1-2.1 1.9-.6.8-.6 2-1.4 2.6-.8.6-1.9.1-2.8.5-.8.3-1.4 1.2-2.3 1.2s-1.5-.9-2.3-1.2c-.9-.4-2 .1-2.8-.5-.8-.6-.8-1.8-1.4-2.6-.6-.8-1.8-1-2.1-1.9-.3-.9.4-1.9.4-2.9s-.7-2-.4-2.9c.3-.9 1.5-1.1 2.1-1.9.6-.8.6-2 1.4-2.6.8-.6 1.9-.1 2.8-.5.8-.3 1.4-1.2 2.3-1.2Z"
        fill="currentColor"
      />
      <path
        d="M8.4 12.3 10.7 14.6 15.5 9.8"
        stroke="white"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function IconFloor({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M5 7h14M5 12h14M5 17h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.5 5v14M12 5v14M16.5 5v14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </Svg>
  );
}

function IconBed({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M5 12.5V10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.5 15h15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 15v3M18 15v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
}

function IconBath({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M6 11V9.5A2.5 2.5 0 0 1 8.5 7H10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5 11h14v2.2A4.8 4.8 0 0 1 14.2 18H9.8A4.8 4.8 0 0 1 5 13.2V11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 18v2M16 18v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const properties = [
  {
    id: 'left',
    badge: 'Partnership Model',
    title: 'For OEMs — Master Dealer & Lessor',
    price: 'MDL Agreement',
    description:
      'PositiEV buys vehicles in bulk, develops exclusive dealer territories, and builds multi-brand service centres — giving OEMs reliable nationwide distribution without fragile single-brand dealership risk.',
    meta: [
      { icon: 'mdi:floor-plan', label: '2W · 3W · 4W' },
      { icon: 'mdi:bed-outline', label: 'Bulk Procurement' },
      { icon: 'mdi:bathtub-outline', label: 'Pincode Clusters' },
    ],
    image: '/sampleuse.jpg',
  },
  {
    id: 'center',
    badge: 'Franchise Model',
    title: 'For Dealers — DLF Franchise',
    price: 'Guaranteed ROI',
    description:
      'Become a Dealer Lessor Franchisee (DLF) and unlock guaranteed returns on inventory, access to multiple OEM brands, rental partnerships, and charging infrastructure revenue — all backed by PositiEV\'s central support.',
    meta: [
      { icon: 'mdi:floor-plan', label: 'Multi-brand Showroom' },
      { icon: 'mdi:bed-outline', label: 'Inventory Backing' },
      { icon: 'mdi:bathtub-outline', label: 'Revenue Streams' },
    ],
    image: '/sampleuse.jpg',
  },
  {
    id: 'right',
    badge: 'Fleet Solution',
    title: 'For Fleets — Operating Lease Backend',
    price: 'All-in-One',
    description:
      'Scale your EV fleet without capital strain. PositiEV handles vehicle leasing, on-site charging, and proactive maintenance — backed by committed uptime SLAs so your operations never miss a beat.',
    meta: [
      { icon: 'mdi:floor-plan', label: 'Lease-to-Own' },
      { icon: 'mdi:bed-outline', label: 'Charging Infra' },
      { icon: 'mdi:bathtub-outline', label: 'Uptime SLA' },
    ],
    image: '/sampleuse.jpg',
  },
];

function Dot({ active }) {
  return (
    <span
      className={[
        'inline-block h-2 w-2 rounded-full transition',
        active ? 'bg-brand-dark' : 'bg-brand-dark/20',
      ].join(' ')}
    />
  );
}

function ArrowButton({ direction = 'left', onClick }) {
  const isLeft = direction === 'left';
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'grid h-12 w-12 place-items-center rounded-full transition',
        isLeft
          ? 'border border-brand-dark/25 bg-brand-white text-brand-dark hover:bg-brand-light'
          : 'border border-brand-dark bg-brand-dark text-brand-white hover:bg-black',
      ].join(' ')}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      {direction === 'left' ? (
        <IconChevronLeft className="h-5 w-5" />
      ) : (
        <IconChevronRight className="h-5 w-5" />
      )}
    </button>
  );
}

function SideCard({ item, side }) {
  return (
    <div
      className={[
        'hidden w-[300px] shrink-0 md:block',
        side === 'left' ? 'translate-x-[-10px]' : 'translate-x-[10px]',
      ].join(' ')}
    >
      <div className="relative overflow-hidden rounded-2xl bg-brand-light">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover opacity-35"
            sizes="300px"
          />
          <div className="absolute inset-0 bg-white/35" />
          {side === 'right' ? (
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/28 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
              <span className="grid h-5 w-5 place-items-center">
                <IconBadgeCheck className="h-5 w-5 text-[#9aa1ab]" />
              </span>
              {item.badge}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-[12px] font-semibold text-brand-dark">
          {item.title}
        </div>
        <div className="text-[12px] font-semibold text-brand-medium">
          {item.price}
        </div>
      </div>
      <div className="mt-1 text-[11px] leading-relaxed text-brand-medium">
        {item.description}
      </div>
    </div>
  );
}

function FeaturedCard({ item }) {
  return (
    <div className="w-full max-w-[680px] shrink-0">
      <div className="relative overflow-hidden rounded-2xl bg-brand-light shadow-[0_20px_70px_rgba(0,0,0,0.10)]">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/10]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 680px, 100vw"
            priority={false}
          />

          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/28 px-3.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
            <span className="grid h-6 w-6 place-items-center">
              <IconBadgeCheck className="h-5 w-5 text-[#9aa1ab]" />
            </span>
            {item.badge}
          </div>
        </div>
      </div>

        <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <div className="text-[18px] font-semibold text-brand-dark md:text-[20px]">
            {item.title}
          </div>
          <div className="mt-2 max-w-[60ch] text-[12px] leading-relaxed text-brand-medium">
            {item.description}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-5 text-[11px] text-brand-medium">
            {item.meta.map((m) => (
              <div key={m.label} className="inline-flex items-center gap-2">
                {m.icon === 'mdi:floor-plan' ? (
                  <IconFloor className="h-4 w-4 text-brand-medium" />
                ) : m.icon === 'mdi:bed-outline' ? (
                  <IconBed className="h-4 w-4 text-brand-medium" />
                ) : (
                  <IconBath className="h-4 w-4 text-brand-medium" />
                )}
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-right">
          <div className="text-[18px] font-semibold text-brand-dark md:text-[20px]">
            {item.price}
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center rounded-full bg-brand-dark px-6 py-3 text-[12px] font-semibold text-brand-white"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
}

export function DreamSection() {
  const [index, setIndex] = useState(1);

  const items = useMemo(() => properties, []);
  const featured = items[index] || items[1];
  const left = items[(index + items.length - 1) % items.length];
  const right = items[(index + 1) % items.length];

  return (
    <section id="for-dealers" className="bg-brand-white py-16 md:py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-center md:gap-8">
          <div className="w-full md:w-[300px] md:shrink-0">
            <h2 className="w-full font-serif text-4xl font-semibold leading-[0.98] text-brand-dark md:w-max md:text-[56px]">
              <span className="md:whitespace-nowrap">Solutions Built For</span>
              <br />
              Every EV Partner
            </h2>
          </div>

          <div className="hidden md:block md:w-[680px] md:shrink-0" aria-hidden="true" />

          <div className="w-full md:w-[300px] md:shrink-0 md:pt-5">
            <p className="max-w-[300px] text-[14px] leading-relaxed text-brand-medium md:text-[16px]">
              Whether you are an OEM, a dealership, or an EV fleet operator —
              PositiEV has a partnership model engineered for your growth.
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8">
          <SideCard item={left} side="left" />
          <FeaturedCard item={featured} />
          <SideCard item={right} side="right" />
        </div>

        <div className="mt-10 flex items-center justify-center gap-8">
          <ArrowButton
            direction="left"
            onClick={() => setIndex((v) => (v + items.length - 1) % items.length)}
          />

          <div className="flex items-center gap-3">
            {items.map((_, i) => (
              <Dot key={i} active={i === index} />
            ))}
          </div>

          <ArrowButton
            direction="right"
            onClick={() => setIndex((v) => (v + 1) % items.length)}
          />
        </div>
      </Container>
    </section>
  );
}

