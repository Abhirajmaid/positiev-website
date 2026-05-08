const streams = [
  { id: '01', label: 'Vehicle sales margins' },
  { id: '02', label: 'Leasing commissions' },
  { id: '03', label: 'Service & maintenance' },
  { id: '04', label: 'Charging revenue' },
];

export function LedRevenueStreams() {
  return (
    <section className="bg-white pb-14 pt-8 md:pb-20 md:pt-12">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[2.2rem] font-medium leading-[1.08] tracking-[-0.02em] text-black md:text-[4rem]">
            Multiple Revenue Streams
            <br />
            Designed for <span className="text-brand-coral">Long-Term</span>
            <br />
            <span className="text-brand-coral">Business Growth</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-[15px] font-medium leading-[1.28] text-[#696e75] md:mt-6 md:text-[17px]">
            The PositiEV franchise model is built to create diversified and recurring income opportunities
            beyond just vehicle sales.
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-[1240px] grid-cols-1 gap-4 md:grid-cols-4 md:gap-5 lg:gap-6">
          {streams.map((stream) => (
            <article
              key={stream.id}
              className="relative flex h-[126px] items-start rounded-[12px] bg-[#F97A4F] px-6 py-5 text-white"
            >
              <h3 className="max-w-[155px] text-[17px] font-medium leading-[1.15] md:text-[16px]">
                {stream.label}
              </h3>
              <span className="absolute bottom-2 right-3 text-[56px] font-light leading-none text-[#f7c4b4]">
                {stream.id}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
