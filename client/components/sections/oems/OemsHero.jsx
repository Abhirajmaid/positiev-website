export function OemsHero() {
  return (
    <section className="bg-white pb-10 pt-8 md:pb-14 md:pt-10 lg:pb-16">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[860px] text-center">
          <h1 className="text-[2.15rem] font-medium leading-[1.1] tracking-[-0.02em] text-black md:text-[4.1rem]">
            Powering Your EV
            <br />
            <span className="text-brand-coral">Expansion Across India</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[720px] text-[15px] font-medium leading-[1.34] text-[#6f7378] md:mt-6 md:text-[17px]">
            PositiEV helps EV manufacturers scale faster with ready distribution, financing access, and
            service infrastructure.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1260px] grid-cols-12 gap-4 md:mt-14 md:gap-6">
          <div className="col-span-3 h-[320px] rounded-2xl bg-[#d6d6d8] md:h-[355px]" />

          <div className="col-span-3 flex flex-col gap-4 md:gap-6">
            <div className="h-[112px] rounded-2xl bg-[#d6d6d8] md:h-[124px]" />
            <div className="h-[192px] rounded-2xl bg-[#d6d6d8] md:h-[205px]" />
          </div>

          <div className="col-span-3 flex flex-col gap-4 md:gap-6">
            <div className="h-[236px] rounded-2xl bg-[#d6d6d8] md:h-[252px]" />
            <div className="h-[68px] rounded-2xl bg-[#d6d6d8] md:h-[78px]" />
          </div>

          <div className="col-span-3 h-[320px] rounded-2xl bg-[#d6d6d8] md:h-[355px]" />
        </div>
      </div>
    </section>
  );
}
