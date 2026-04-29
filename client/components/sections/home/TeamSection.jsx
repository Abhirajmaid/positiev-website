import Image from 'next/image';
import { Container } from '@/components/layout/Container';

const team = [
  { name: 'Anika Dias', role: 'Lead Manager', image: '/sampleuse.jpg', variant: 'dark' },
  { name: 'Tiana Korsgaard', role: 'Sales Marketing', image: '/sampleuse.jpg', variant: 'mid' },
  { name: 'Tiana Donin', role: 'Property Agent', image: '/sampleuse.jpg', variant: 'dark-right' },
];

function TeamCard({ member }) {
  const cardBg =
    member.variant === 'light' ? 'bg-white' : 'bg-white/5';

  return (
    <div className="w-[200px]">
      <div
        className={[
          'overflow-hidden rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.55)]',
          cardBg,
        ].join(' ')}
      >
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={[
              'object-cover',
              member.variant === 'light'
                ? 'contrast-105 brightness-110'
                : member.variant === 'dark-right'
                  ? 'contrast-110 brightness-90 saturate-105'
                : member.variant === 'dark'
                  ? 'contrast-110 brightness-90 saturate-105'
                  : 'contrast-110 saturate-105',
            ].join(' ')}
            sizes="200px"
          />
          {member.variant === 'dark' ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-[42%] bg-black/28" />
            </>
          ) : null}

          {member.variant === 'dark-right' ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-[42%] bg-black/28" />
            </>
          ) : null}

          {member.variant === 'light' ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-l from-white via-white/45 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-[42%] bg-white/22" />
            </>
          ) : null}

          {member.variant !== 'mid' ? (
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/18 to-transparent" />
          ) : null}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-[13px] font-semibold text-brand-white/90">
          {member.name}
        </div>
        <div className="mt-0.5 text-[11px] text-brand-white/45">
          {member.role}
        </div>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section className="bg-black py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-10">
          {/* Cards */}
          <div className="md:col-span-7">
            <div className="flex flex-wrap items-start gap-6 md:flex-nowrap md:gap-10">
              {team.map((m) => (
                <TeamCard key={m.name} member={m} />
              ))}
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-5">
            <h2 className="font-serif text-4xl font-semibold leading-[1.02] text-brand-white md:text-6xl">
              Meet Our Expert Team
            </h2>
            <p className="mt-4 max-w-[48ch] text-[12px] leading-relaxed text-brand-white/55">
              our team of experienced professionals is committed to helping you
              find the perfect home or investment property.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center rounded-full bg-brand-white px-6 py-3 text-[12px] font-semibold text-brand-dark"
            >
              View All
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

