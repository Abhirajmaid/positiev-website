'use client';

import { useMemo, useState } from 'react';
import { Container } from '@/components/layout/Container';

const categories = [
  { id: 'dealers', label: 'For Dealers (DLF)', icon: 'travel' },
  { id: 'oems', label: 'For OEMs', icon: 'booking' },
  { id: 'fleets', label: 'For EV Fleets', icon: 'payments' },
  { id: 'financing', label: 'Financing & Investment', icon: 'visa' },
  { id: 'contact', label: 'Contact & Process', icon: 'support' },
];

const faqByCategory = {
  dealers: [
    {
      q: 'What is a Dealer Lessor Franchisee (DLF)?',
      a: 'A DLF is a PositiEV franchise partner who operates an EV showroom and participates in our leasing ecosystem. As a DLF, you earn from retail vehicle sales, leasing returns, charging infrastructure revenue share, and rental partnerships — all under a single franchise agreement with PositiEV.',
    },
    {
      q: 'What investment is required to become a DLF?',
      a: 'Investment levels vary based on the OEM brands you wish to carry and your location. PositiEV teams work with you to structure the right investment tier. Contact us to get a customised DLF proposal.',
    },
    {
      q: 'What guaranteed returns does PositiEV offer DLFs?',
      a: 'PositiEV provides a "Guaranteed Return on Investment" structure to DLF partners. If inventory remains unsold, PositiEV can invoice it back with a deferred payment plan aligned to leasing income — ensuring your capital is never stranded.',
    },
    {
      q: 'Can a DLF partner with multiple OEM brands?',
      a: 'Yes. PositiEV operates both multi-brand and exclusive showrooms. Depending on your investment capacity and experience, our team allocates the right brand mix to maximise your showroom economics.',
    },
    {
      q: 'How does PositiEV support DLFs beyond the showroom?',
      a: 'We enable DLFs to partner with EV rental companies, charging infrastructure providers, and NBFCs — unlocking additional revenue streams with "Guaranteed Return on Investment" support at each step.',
    },
  ],
  oems: [
    {
      q: 'What is the Master Dealer & Lessor (MDL) model?',
      a: 'Under the MDL agreement, PositiEV acts as your exclusive master dealer for designated pincode clusters. We buy vehicles in bulk, develop multi-brand and exclusive showrooms, and build the retail distribution network — giving you consistent, reliable demand without the burden of managing individual dealerships.',
    },
    {
      q: 'How does PositiEV develop dealer networks for OEMs?',
      a: 'We identify, onboard, and support Dealer Lessor Franchisees (DLFs) across your allocated territories. PositiEV handles franchisee investment structuring, brand guidelines, training, and ongoing dealer support — acting as a self-sufficient distribution arm for your brand.',
    },
    {
      q: 'What happens to dealer continuity if an OEM faces challenges?',
      a: 'PositiEV\'s multi-brand service infrastructure ensures dealer continuity even during OEM disruptions. We maintain an independent spares and parts supply chain, so DLFs can transition to another affiliated brand while service operations remain uninterrupted.',
    },
    {
      q: 'How does PositiEV handle service and spares for OEMs?',
      a: 'We operate FOFO (Franchise-Owned, Franchise-Operated) multi-brand service centres with approval from OEMs to source spares directly from suppliers. This reduces overhead and ensures service quality across the network, independent of OEM supply chain status.',
    },
  ],
  fleets: [
    {
      q: 'What is an operating lease with PositiEV?',
      a: 'PositiEV\'s operating lease is a lease-to-own model where your fleet acquires EVs without heavy upfront capital. Payments are structured monthly, vehicles are maintained by us, and charging infrastructure is deployed at your depots — giving you full operational continuity at a predictable cost.',
    },
    {
      q: 'What vehicle types do you support?',
      a: 'We support 2-wheelers, 3-wheelers, and 4-wheelers across multiple OEM brands. Our multi-brand tie-ups mean you get the best-fit vehicle for your application without being locked into a single manufacturer.',
    },
    {
      q: 'How is uptime guaranteed?',
      a: 'PositiEV offers committed uptime SLAs backed by our in-house maintenance network. Our FOFO service centres and a proactive spares supply chain ensure that fleet downtime — and the SLA breaches it causes — are minimised or eliminated.',
    },
    {
      q: 'Can EV fleets access financing through PositiEV?',
      a: 'Yes. PositiEV works with a network of NBFC co-finance partners. Our involvement in maintenance gives NBFCs confidence in asset quality, making it easier for fleet operators to access capital compared to standalone borrowing.',
    },
  ],
  financing: [
    {
      q: 'What financing models does PositiEV work with?',
      a: 'PositiEV partners with NBFCs for co-financing fleet assets. We are also open to structured debt, venture debt, and asset finance partnerships. Our asset-backed leasing model provides NBFCs with better risk metrics than standard EV fleet loans.',
    },
    {
      q: 'What is the blended IRR of the PositiEV model?',
      a: 'The PositiEV model targets a blended IRR of 30–40% and above, combining a 2% margin on each unit sold through distribution with the recurring and insured returns from the leasing business (minimum 18% IRR on the leasing side).',
    },
    {
      q: 'Is PositiEV open to strategic partnerships or investment?',
      a: 'Yes. PositiEV is actively building strategic co-finance, franchise capital, and OEM partnership structures. Reach out to us at hiten@positievmobility.com to discuss partnership opportunities.',
    },
  ],
  contact: [
    {
      q: 'How do I get started with PositiEV?',
      a: 'Simply reach out to us via email at hiten@positievmobility.com or call +91 8130755275. Our team will schedule a discovery call to understand your requirements — whether you are an OEM, a prospective dealer, a fleet operator, or a financing partner.',
    },
    {
      q: 'Where is PositiEV currently operational?',
      a: 'PositiEV is currently establishing operations across key Indian markets. We are actively onboarding DLF partners and fleet clients in Stage 1 (Feb–Sept 2026) across initial locations, with plans to expand to 25+ locations by 2027.',
    },
    {
      q: 'What documents do I need to explore a DLF franchise?',
      a: 'Initial conversations require no documentation. Once you are aligned with the DLF model, our team will guide you through the standard KYC, investment capacity assessment, and brand eligibility steps in partnership with relevant OEMs.',
    },
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
    <section id="faq" className="bg-brand-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-semibold leading-[0.98] text-brand-dark md:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[58ch] text-[12px] leading-relaxed text-brand-medium">
            Everything you need to know about partnering with PositiEV — for
            dealers, OEMs, fleet operators, and financing partners.
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

