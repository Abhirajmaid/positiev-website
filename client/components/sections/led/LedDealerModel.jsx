const cards = [
  {
    title: 'Low entry barrier',
    body: 'A structured business model with predictable growth.',
    active: true,
  },
  {
    title: 'Inventory + financing support',
    active: false,
  },
  {
    title: 'Tech + operations handled',
    active: false,
  },
  {
    title: 'Multi-revenue model',
    active: false,
  },
];

function DlfCard({ title, body, active }) {
  return (
    <article
      className={[
        'relative flex h-[290px] flex-col justify-end rounded-[14px] p-5 md:p-6',
        active ? 'bg-[#141519] text-white' : 'bg-[#dfdfe1] text-black',
      ].join(' ')}
    >
      <span
        className={[
          'absolute right-4 top-4 inline-flex h-7 w-7 items-center justify-center rounded-full text-[24px] leading-none',
          active ? 'bg-black text-white/80 ring-1 ring-white/25' : 'bg-black text-white',
        ].join(' ')}
      >
        {active ? '×' : '+'}
      </span>

      <h3 className="max-w-[180px] text-[20px] font-medium leading-[1.12] md:text-[19px]">{title}</h3>
      {body ? (
        <p className="mt-2 max-w-[190px] text-[12px] leading-[1.25] text-white/60 md:text-[13px]">{body}</p>
      ) : null}
    </article>
  );
}

export function LedDealerModel() {
  return (
    <section className="bg-white pb-14 pt-8 md:pb-20 md:pt-12">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <h2 className="text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-black md:text-[3.8rem]">
            Dealer-Led Franchise
            <br />
            (DLF Model)
          </h2>
          <p className="max-w-[420px] justify-self-end text-right text-[15px] font-medium leading-[1.25] text-[#696e75] md:text-[17px]">
            A structured business model with predictable growth.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-4 md:gap-5 lg:gap-6">
          {cards.map((card) => (
            <DlfCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
