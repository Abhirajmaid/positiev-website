const challenges = [
  {
    id: '01',
    title: 'Fragmented Dealer Network',
    body: 'The EV market is still in its early stages, with dealer networks scattered and inconsistent across regions. Many manufacturers struggle to find reliable, well-equipped partners in Tier 2 and Tier 3 cities, slowing down expansion and limiting market reach.',
    align: 'left',
  },
  {
    id: '02',
    title: 'High Capital for Expansion',
    body: 'Building a strong distribution network requires significant upfront investment - showrooms, inventory, logistics, and manpower. For many OEMs, this capital burden becomes a major barrier to scaling quickly and efficiently.',
    align: 'right',
  },
  {
    id: '03',
    title: 'Lack of Financing Ecosystem',
    body: 'Access to structured financing for EVs remains limited. Without strong NBFC partnerships and leasing models, both dealers and end customers face challenges in adopting EVs, directly impacting sales velocity.',
    align: 'left',
  },
  {
    id: '04',
    title: 'After-Sales Service Gaps',
    body: 'A weak service infrastructure leads to poor customer experience and reduced trust in EV adoption. Limited availability of trained technicians, spare parts, and service centers creates operational inefficiencies and long downtimes.',
    align: 'right',
  },
];

function ChallengeCard({ id, title, body, align }) {
  return (
    <article
      className={`w-full max-w-[392px] rounded-[16px] bg-brand-coral p-5 text-white md:h-[318px] md:p-7 ${
        align === 'right' ? 'md:ml-auto' : ''
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-[38px] font-light leading-none text-white/65">{id}</span>
        <h3 className="pt-1 text-[27px] font-medium leading-[1.05] tracking-[-0.01em] md:text-[29px]">
          {title}
        </h3>
      </div>
      <p className="mt-5 text-[15px] leading-[1.3] text-white/88 md:mt-6 md:text-[16px]">{body}</p>
    </article>
  );
}

export function OemsChallenge() {
  const leftCards = challenges.filter((item) => item.align === 'left');
  const rightCards = challenges.filter((item) => item.align === 'right');

  return (
    <section className="bg-white pb-14 pt-6 md:pb-20 md:pt-10">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-[2.15rem] font-medium leading-none tracking-[-0.02em] text-brand-coral md:text-[3.3rem]">
            The Challenge
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[2.15rem] font-medium leading-[1.08] tracking-[-0.02em] text-[#666a70] md:mt-4 md:text-[3rem]">
            Scaling EV Distribution
            <br />
            Isn&apos;t Easy
          </p>
          <button
            type="button"
            className="mt-6 inline-flex h-[40px] items-center justify-center rounded-full bg-brand-coral px-8 text-[14px] font-medium uppercase tracking-[0.03em] text-white md:mt-7 md:h-[46px] md:px-10 md:text-[17px]"
          >
            Partner with us
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:hidden">
          {challenges.map((item) => (
            <ChallengeCard key={item.id} {...item} />
          ))}
        </div>

        <div className="mt-14 hidden md:grid md:grid-cols-2 md:gap-x-20 lg:gap-x-28">
          <div>
            <ChallengeCard {...leftCards[0]} />
            <div className="mt-20 lg:mt-48">
              <ChallengeCard {...leftCards[1]} />
            </div>
          </div>
          <div className="pt-16 lg:pt-36">
            <ChallengeCard {...rightCards[0]} />
            <div className="mt-24 lg:mt-48">
              <ChallengeCard {...rightCards[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
