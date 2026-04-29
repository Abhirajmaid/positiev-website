'use client';

import { useMemo, useState } from 'react';
import { Container } from '@/components/layout/Container';

const categories = [
  { id: 'travel', label: 'Travel Packages', icon: 'travel' },
  { id: 'booking', label: 'Booking & Reservations', icon: 'booking' },
  { id: 'payments', label: 'Payments & Refunds', icon: 'payments' },
  { id: 'visa', label: 'Visa & Travel Info', icon: 'visa' },
  { id: 'support', label: 'Customer Support', icon: 'support' },
];

const faqByCategory = {
  travel: [
    {
      q: 'What types of travel packages does Ryokou offer?',
      a: 'We provide guided tours, custom itineraries, adventure experiences, cultural trips, and luxury travel options across Japan.',
    },
    { q: 'Can I customize my own travel package?', a: '' },
    { q: 'How long do your travel packages last?', a: '' },
    { q: 'Are meals included in the travel packages?', a: '' },
    { q: 'What types of accommodations are included?', a: '' },
    { q: 'Are there family-friendly travel packages?', a: '' },
    { q: 'Do you offer group discounts?', a: '' },
  ],
  booking: [
    { q: 'How do I book a property viewing?', a: '' },
    { q: 'Can I reschedule my appointment?', a: '' },
  ],
  payments: [
    { q: 'What payment methods do you accept?', a: '' },
    { q: 'How do refunds work?', a: '' },
  ],
  visa: [
    { q: 'Do you help with documentation?', a: '' },
    { q: 'What is the typical processing time?', a: '' },
  ],
  support: [
    { q: 'How can I contact support?', a: '' },
    { q: 'What are your working hours?', a: '' },
  ],
};

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

function CategoryIcon({ kind, active }) {
  const cls = active ? 'text-white' : 'text-brand-medium';

  if (kind === 'travel') {
    return (
      <Svg className={`h-4 w-4 ${cls}`}>
        <path
          d="M9 7V6.6C9 5.16 10.16 4 11.6 4h.8C13.84 4 15 5.16 15 6.6V7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <rect
          x="5"
          y="7"
          width="14"
          height="13"
          rx="2.2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M5 12h14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M11 12v2.2M13 12v2.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </Svg>
    );
  }

  if (kind === 'booking') {
    return (
      <Svg className={`h-4 w-4 ${cls}`}>
        <rect x="5" y="5" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </Svg>
    );
  }

  if (kind === 'payments') {
    return (
      <Svg className={`h-4 w-4 ${cls}`}>
        <path d="M7 8h10M7 16h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M9 5 6 8l3 3M15 19l3-3-3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    );
  }

  if (kind === 'visa') {
    return (
      <Svg className={`h-4 w-4 ${cls}`}>
        <rect x="4.5" y="6" width="15" height="11.5" rx="1.8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M7.5 10.2h9M7.5 13.3h5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </Svg>
    );
  }

  return (
    <Svg className={`h-4 w-4 ${cls}`}>
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 8v4.2M12 15.4h.01" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </Svg>
  );
}

function Chevron({ open }) {
  return (
    <Svg className="h-6 w-6 text-brand-dark/75">
      <path
        d={open ? 'M6 14.5 12 8.5l6 6' : 'M6 9.5 12 15.5l6-6'}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CategoryButton({ active, children, icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'inline-flex w-fit items-center gap-3 rounded-lg px-5 py-3 text-left text-[13px] transition',
        active
          ? 'bg-brand-dark text-brand-white shadow-sm'
          : 'text-brand-medium hover:bg-black/5',
      ].join(' ')}
    >
      <span
        className={[
          'grid h-6 w-6 place-items-center rounded-md',
          active ? 'bg-white/10' : 'bg-transparent',
        ].join(' ')}
      >
        <CategoryIcon kind={icon} active={active} />
      </span>
      <span className="font-medium">{children}</span>
    </button>
  );
}

function AccordionItem({ open, title, body, onToggle }) {
  return (
    <div
      className={[
        'overflow-hidden rounded-[22px] border',
        open
          ? 'border-transparent bg-brand-light'
          : 'border-black/10 bg-[#f3f3f3]',
      ].join(' ')}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 bg-transparent px-8 py-6 text-left"
      >
        <span className="text-[15px] font-medium text-brand-dark/90">{title}</span>
        <Chevron open={open} />
      </button>
      {open ? (
        <div className="px-6 pb-5 text-[12px] leading-relaxed text-brand-medium">
          {body}
        </div>
      ) : null}
    </div>
  );
}

export function FaqSection() {
  const [cat, setCat] = useState(categories[0].id);
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = useMemo(() => faqByCategory[cat] || [], [cat]);
  const title = categories.find((c) => c.id === cat)?.label ?? 'FAQs';

  return (
    <section className="bg-brand-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-semibold leading-[0.98] text-brand-dark md:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[58ch] text-[12px] leading-relaxed text-brand-medium">
            Answers to your questions, every step of the way.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          {/* Left categories */}
          <aside className="md:col-span-4">
            <div className="flex flex-col items-start gap-2">
              {categories.map((c) => (
                <CategoryButton
                  key={c.id}
                  active={c.id === cat}
                  icon={c.icon}
                  onClick={() => {
                    setCat(c.id);
                    setOpenIndex(0);
                  }}
                >
                  {c.label}
                </CategoryButton>
              ))}
            </div>
          </aside>

          {/* Right accordion */}
          <div className="md:col-span-8">
            <div className="text-[12px] font-semibold text-brand-dark/70">
              {title}
            </div>

            <div className="mt-4 space-y-4">
              {faqs.map((item, idx) => (
                <AccordionItem
                  key={item.q}
                  open={idx === openIndex}
                  title={item.q}
                  body={item.a || ' '}
                  onToggle={() =>
                    setOpenIndex((v) => (v === idx ? -1 : idx))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

