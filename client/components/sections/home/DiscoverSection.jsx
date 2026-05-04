import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

const listings = [
  {
    title: 'Operating Lease (EV Assets)',
    location: 'India-wide · 2W, 3W & 4W',
    area: 'Lease-to-Own',
    beds: 'All Vehicle Types',
    baths: 'Monthly Billing',
    description:
      'Fleets access EVs through a structured operating lease model. Vehicles are leased with an ownership pathway — no heavy capex, no liquidity crunch.',
    price: 'From ₹X / month',
    image: '/sampleuse.jpg',
  },
  {
    title: 'Charging Infrastructure',
    location: 'Depots · Dealerships · Cities',
    area: 'Lease-based Setup',
    beds: 'AC & DC Chargers',
    baths: 'Revenue Share',
    description:
      'We deploy and manage EV charging infrastructure on a lease model. Dealers and fleet depots gain a new revenue stream without upfront investment.',
    price: 'Revenue Share Model',
    image: '/sampleuse.jpg',
  },
  {
    title: 'EV Maintenance & Uptime',
    location: 'FOFO Service Centres',
    area: 'Monthly Plans',
    beds: 'Multi-brand Support',
    baths: 'Spares Supply Chain',
    description:
      'Committed maintenance contracts with uptime guarantees. Our FOFO service network supports all EV brands — including spares continuity even if the OEM faces challenges.',
    price: 'Monthly Fixed Cost',
    image: '/sampleuse.jpg',
  },
  {
    title: 'DLF Franchise Development',
    location: 'Pan-India · Pincode Clusters',
    area: 'Multi-brand Showrooms',
    beds: 'Exclusive Territories',
    baths: 'Guaranteed ROI',
    description:
      'Build a high-return EV dealership business under PositiEV\'s franchise umbrella. We provide brand rights, inventory backing, financing access, and a multi-revenue playbook.',
    price: 'Guaranteed Returns',
    image: '/sampleuse.jpg',
  },
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

function IconPin({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </Svg>
  );
}

function IconArea({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M6 8h12M6 12h12M6 16h12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 6v12M12 6v12M16 6v12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.65"
      />
    </Svg>
  );
}

function IconBed({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M5 12.4V10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4.5 15h15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6 15v3M18 15v3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </Svg>
  );
}

function IconBath({ className = '' }) {
  return (
    <Svg className={className}>
      <path
        d="M6 11V9.6A2.6 2.6 0 0 1 8.6 7H10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M5 11h14v2.1A4.9 4.9 0 0 1 14.1 18H9.9A4.9 4.9 0 0 1 5 13.1V11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8 18v2M16 18v2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </Svg>
  );
}

function Meta({ icon, text }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] text-brand-medium">
      {icon === 'area' ? (
        <IconArea className="h-4 w-4 text-brand-medium" />
      ) : icon === 'bed' ? (
        <IconBed className="h-4 w-4 text-brand-medium" />
      ) : (
        <IconBath className="h-4 w-4 text-brand-medium" />
      )}
      <span>{text}</span>
    </div>
  );
}

function ListingCard({ item }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/15 bg-brand-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
      <div className="grid md:grid-cols-[240px_1fr]">
        <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="240px"
          />
        </div>

        <div className="p-6">
          <div className="font-sans text-[18px] font-semibold text-brand-dark">
            {item.title}
          </div>

          <div className="mt-2 inline-flex items-center gap-2 text-[11px] text-brand-medium">
            <IconPin className="h-4 w-4 text-brand-medium" />
            <span>{item.location}</span>
          </div>


          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Meta icon="area" text={item.area} />
            <div className="h-3 w-px bg-black/15" />
            <Meta icon="bed" text={item.beds} />
            <div className="h-3 w-px bg-black/15" />
            <Meta icon="bath" text={item.baths} />
          </div>

          <div className="mt-4 max-w-[46ch] text-[12px] leading-relaxed text-brand-medium">
            {item.description}
          </div>

          <div className="mt-5 text-[12px] text-brand-dark">
            <span className="text-brand-dark/70">Pricing :</span>{' '}
            <span className="ml-1 font-semibold text-brand-dark">{item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DiscoverSection() {
  return (
    <section id="for-oems" className="bg-brand-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-semibold leading-[0.98] text-brand-dark md:text-6xl">
            Our Service Offerings
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[12px] leading-relaxed text-brand-medium">
            A tech-enabled suite covering every dimension of EV fleet ownership
            and dealer franchise operations across India.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
          {listings.map((item) => (
            <ListingCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-brand-dark px-7 py-3 text-[12px] font-semibold text-brand-white"
          >
            Partner With Us
          </Link>
        </div>
      </Container>
    </section>
  );
}

