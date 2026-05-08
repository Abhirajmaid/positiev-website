const capabilityCards = [
  { id: '01', label: 'Nationwide Distribution Network' },
  { id: '02', label: 'Dealer Network Development' },
  { id: '03', label: 'Integrated Financing Support' },
  { id: '04', label: 'Service & Maintenance Backbone' },
];

function CapabilityCard({ id, label }) {
  return (
    <article className="flex h-[102px] items-end justify-between rounded-[12px] border border-[#d9d9d9] bg-white px-5 py-4">
      <p className="max-w-[150px] text-[19px] font-medium leading-[1.1] text-[#6b6f74]">{label}</p>
      <span className="text-[52px] font-light leading-none text-[#f4b7a5]">{id}</span>
    </article>
  );
}

export function OemsGrowthEngine() {
  return (
    <section className="bg-white pb-14 pt-6 md:pb-20 md:pt-8">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 md:grid-cols-2 md:gap-14 lg:gap-16">
          <div className="h-full min-h-[670px] rounded-[14px] bg-[#d6d6d8]" />

          <div className="flex min-h-[670px] flex-col">
            <h2 className="max-w-[590px] text-[2.1rem] font-medium leading-[1.08] tracking-[-0.02em] text-black md:text-[3.55rem]">
              A Plug-and-Play Growth Engine Built to Accelerate EV Expansion at Scale
            </h2>

            <p className="mt-7 max-w-[640px] text-[15px] font-medium leading-[1.26] text-[#6b6f74] md:mt-8 md:text-[17px]">
              We go far beyond traditional distribution by creating a fully integrated ecosystem that
              powers every stage of your growth journey. From entering new markets and building a
              high-performing dealer network to enabling financing and ensuring reliable after-sales
              support, PositiEV provides everything required to establish, operate, and scale your EV
              presence seamlessly. Our model is designed to reduce complexity, lower capital burden, and
              unlock faster, more sustainable expansion across regions.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5 md:mt-12 md:gap-6">
              {capabilityCards.map((card) => (
                <CapabilityCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
