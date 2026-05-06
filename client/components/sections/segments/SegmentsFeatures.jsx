import Link from 'next/link';

const CORAL = 'bg-brand-coral';

const cards = [
  {
    title: 'For OEMs — Master Dealer & Lessor',
    body: 'PositiEV buys vehicles in bulk, develops exclusive dealer territories, and builds multi-brand service centres — giving OEMs reliable nationwide distribution without fragile single-brand dealership risk.',
  },
  {
    title: 'For Dealers — DLF Franchise',
    body: 'Become a Dealer Lessor Franchisee (DLF) and unlock guaranteed returns on inventory, access to multiple OEM brands, rental partnerships, and charging infrastructure revenue — all backed by PositiEV\'s central support.',
  },
  {
    title: 'For Fleets — Operating Lease Backend',
    body: 'Scale your EV fleet without capital strain. PositiEV handles vehicle leasing, on-site charging, and proactive maintenance — backed by committed uptime SLAs so your operations never miss a beat.',
  },
  {
    title: 'NBFCs / Investors',
    body: 'Partner with PositiEV to unlock diversified exposure to EV distribution, leasing, and charging-linked revenue streams — with asset visibility and SLA-backed fleets that improve risk underwriting.',
  },
];

function SegmentCard({ title, body }) {
  return (
    <article
      className={`flex min-h-[400px] flex-col rounded-[28px] ${CORAL} p-9 shadow-[0_24px_60px_rgba(255,127,80,0.22)] md:min-h-[440px] md:p-11 lg:min-h-[480px] lg:rounded-[32px] lg:p-12`}
    >
      <h2 className="text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl lg:text-[2rem] lg:leading-tight">
        {title}
      </h2>
      <p className="mt-6 flex-1 text-base leading-relaxed text-white/95 md:mt-7 md:text-lg md:leading-relaxed lg:text-xl">
        {body}
      </p>
      <Link
        href="/contact#contact-form"
        className="mt-10 inline-flex min-h-[56px] w-full items-center justify-between gap-4 rounded-xl bg-white px-6 py-4 text-base font-semibold text-brand-coral transition hover:bg-white/95 md:mt-12 md:text-lg"
      >
        <span>Enquire Now</span>
        <span aria-hidden className="text-xl md:text-2xl">
          →
        </span>
      </Link>
    </article>
  );
}

/** Ref-image 3+4: large orange cards, 2×2 grid */
export function SegmentsFeatures() {
  return (
    <section className="min-h-[min(100vh,auto)] bg-white pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-9 lg:gap-10">
          {cards.map((c) => (
            <SegmentCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
