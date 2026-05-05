import { Container } from '@/components/layout/Container';

const CARD_BG = 'bg-brand-coral';

const cards = [
  {
    n: '01',
    title: 'EV Distribution',
    body: 'We partner with EV manufacturers as their Master Dealer, building and managing dealer networks across India so their vehicles reach more customers.',
  },
  {
    n: '02',
    title: 'EV Leasing',
    body: 'Businesses get EVs on a simple monthly lease — no large upfront payment, no ownership headaches. We take care of the asset, they focus on their work.',
    offset: true,
  },
  {
    n: '03',
    title: 'Charging & Maintenance',
    body: 'We set up charging at depots and handle all vehicle maintenance. If something breaks, we fix it — keeping fleets running and on-time, always.',
  },
];

/** Ref-image 2: shorter white plate; card 02 stepped down on md+ */
function FeatureCard({ n, title, body, offset }) {
  return (
    <article
      className={[
        'flex flex-col overflow-hidden rounded-[22px] p-6 text-white md:rounded-[24px] md:p-7 lg:p-8',
        CARD_BG,
        offset ? 'md:mt-14 lg:mt-16' : '',
      ].join(' ')}
    >
      <div className="flex items-start gap-3 md:gap-3.5">
        <span className="text-4xl font-semibold leading-none text-white/40 md:text-[2.65rem]">{n}</span>
        <h2 className="min-w-0 pt-0.5 text-left text-lg font-bold leading-snug md:text-xl">{title}</h2>
      </div>
      <p className="mt-4 text-left text-xs leading-relaxed text-white/95 md:mt-5 md:text-[13px] md:leading-relaxed">
        {body}
      </p>
      <div
        className="mx-auto mt-6 w-full max-w-[calc(100%-0.5rem)] shrink-0 rounded-[14px] border border-black/20 bg-white md:mt-7 min-h-[96px] md:min-h-[104px] lg:min-h-[112px]"
        aria-hidden
      />
    </article>
  );
}

export function ContactFeatures() {
  return (
    <section className="bg-white pb-12 pt-4 md:pb-16 md:pt-6">
      <Container className="max-w-[1240px]">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
          {cards.map((c) => (
            <FeatureCard key={c.n} {...c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
