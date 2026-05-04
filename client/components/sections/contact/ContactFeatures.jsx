import { Container } from '@/components/layout/Container';

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

function FeatureCard({ n, title, body, offset }) {
  return (
    <article
      className={[
        'flex flex-col overflow-hidden rounded-[22px] bg-brand-coral-deep p-8 text-white shadow-sm md:p-10',
        offset ? 'md:mt-14' : '',
      ].join(' ')}
    >
      <div className="flex items-start gap-4">
        <span className="text-5xl font-semibold leading-none text-white/35 md:text-6xl">{n}</span>
        <h2 className="pt-2 text-xl font-bold leading-snug md:text-2xl">{title}</h2>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-white/95 md:text-[15px]">{body}</p>
      <div className="mt-10 min-h-[140px] flex-1 rounded-[18px] bg-white md:min-h-[180px]" aria-hidden />
    </article>
  );
}

export function ContactFeatures() {
  return (
    <section className="bg-white pb-14 pt-2 md:pb-20">
      <Container className="max-w-[1200px]">
        <div className="grid gap-6 md:grid-cols-3 md:items-start md:gap-8">
          {cards.map((c) => (
            <FeatureCard key={c.n} {...c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
