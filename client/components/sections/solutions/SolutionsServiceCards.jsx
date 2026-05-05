import Link from 'next/link';

/** Copy aligned with ref-image 4 */
const ROW_A = [
  {
    n: '01',
    title: 'Operating Lease (EV Assets)',
    body: 'Fleets access EVs through a structured operating lease model. Vehicles are leased with an ownership pathway — no heavy capex, no liquidity crunch.',
    showCta: true,
  },
  {
    n: '02',
    title: 'Charging Infrastructure',
    body: 'We deploy and manage EV charging infrastructure on a lease model. Dealers and fleet depots gain a new revenue stream without upfront investment.',
    showCta: false,
  },
];

const ROW_B = [
  {
    n: '03',
    title: 'EV Maintenance & Uptime',
    body: 'Committed maintenance contracts with uptime guarantees. Our FOFO service network supports all EV brands — including spares continuity even if the OEM faces challenges.',
    showCta: false,
  },
  {
    n: '01',
    title: 'DLF Franchise Development',
    body: "Build a high-return EV dealership business under PositiEV's franchise umbrella. We provide brand rights, inventory backing, financing access, and a multi-revenue playbook.",
    showCta: false,
  },
];

function ArrowCircle() {
  return (
    <Link
      href="/contact#contact-form"
      className="inline-flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-[#FDC4B6] shadow-sm transition hover:bg-[#fab9a8] md:h-[4.25rem] md:w-[4.25rem]"
      aria-label="Partner with us"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-white md:h-8 md:w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

function ServiceCard({ n, title, body, showCta }) {
  return (
    <article className="flex min-h-0 flex-col overflow-hidden rounded-[22px] border border-[#E0E0E0] bg-white shadow-[0_2px_28px_rgba(0,0,0,0.05)]">
      <div className="bg-white px-7 py-8 md:px-9 md:py-9">
        <div className="flex items-start gap-3 md:gap-4">
          <span className="shrink-0 pt-1 text-[2.25rem] font-semibold tabular-nums leading-none text-[#FDC4B6] md:text-[2.5rem]">
            {n}
          </span>
          <div className="mt-1.5 w-px shrink-0 self-stretch bg-[#E0E0E0]" aria-hidden />
          <div className="min-w-0 flex-1 pt-0.5">
            <h2 className="text-left text-lg font-bold leading-snug text-black md:text-xl">
              {title}
            </h2>
            <p className="mt-3 text-left text-sm leading-relaxed text-[#4B5563] md:mt-4 md:text-[15px] md:leading-relaxed">
              {body}
            </p>
          </div>
        </div>
      </div>
      <div className="flex min-h-[168px] flex-1 items-center justify-center bg-[#E0E0E0] md:min-h-[188px] lg:min-h-[200px]">
        {showCta ? <ArrowCircle /> : null}
      </div>
    </article>
  );
}

/** Service grid — tighter column gap, larger cards (ref-image 3–4) */
export function SolutionsServiceCards() {
  return (
    <section className="bg-white pb-16 pt-4 md:pb-24 md:pt-8">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-7 lg:gap-x-8 lg:gap-y-8">
          {ROW_A.map((c) => (
            <ServiceCard key={`a-${c.n}-${c.title}`} {...c} />
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:mt-9 md:grid-cols-2 md:gap-x-6 md:gap-y-7 lg:gap-x-8 lg:gap-y-8">
          {ROW_B.map((c) => (
            <ServiceCard key={`b-${c.n}-${c.title}`} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
