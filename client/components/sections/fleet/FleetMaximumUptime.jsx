const cards = [
  {
    title: 'Service SLAs',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    title: 'Quick turnaround support',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    title: 'Replacement assurance',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

export function FleetMaximumUptime() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="rounded-[22px] border border-[#d6d6d8] bg-[#f1f1f2] px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
          <div className="text-center">
            <h2 className="text-[2.25rem] font-medium leading-[1.1] tracking-[-0.02em] text-black md:text-[4.15rem]">
              Built for <span className="text-brand-coral">Maximum Uptime</span>
            </h2>
            <p className="mt-3 text-[15px] font-medium text-[#6c7178] md:mt-4 md:text-[20px]">
              Your fleet earns only when it moves.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-2 md:mt-10 md:grid-cols-3  lg:mt-12 ">
            {cards.map((card) => (
              <article
                key={card.title}
                className="mx-auto flex min-h-[190px] w-full max-w-[320px] flex-col justify-center rounded-[18px] border-4 border-[#efd7cd] bg-[#F97A4F] px-6 py-7 text-center shadow-[0_2px_0_rgba(255,255,255,0.35)_inset md:max-w-[300px] lg:max-w-[320px]"
              >
                <h3 className="text-[19px] font-medium leading-[1.15] text-white md:text-[18px]">{card.title}</h3>
                <p className="mx-auto mt-4 max-w-[280px] text-[12px] font-medium leading-[1.28] text-white/80 md:text-[13px]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
