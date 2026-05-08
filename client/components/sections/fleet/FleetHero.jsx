import Link from 'next/link';

export function FleetHero() {
  return (
    <section className="bg-white pb-10 pt-8 md:pb-14 md:pt-10 lg:pb-16">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[300px] w-full max-w-[1260px] flex-col items-center justify-center rounded-[16px] bg-[#d4d4d6] px-6 py-10 text-center md:min-h-[410px] md:rounded-[18px] md:px-8 md:py-14">
          <h1 className="text-[2.2rem] font-medium leading-[1.08] tracking-[-0.02em] text-black md:text-[4rem]">
            <span className="text-brand-coral">Electrify Your Fleet</span>
            <br />
            Without the Hassle
          </h1>
          <p className="mt-5 max-w-[760px] text-[15px] font-medium leading-[1.28] text-[#666b72] md:mt-6 md:text-[20px]">
            PositiEV provides leasing, maintenance, and uptime assurance-so you focus on operations.
          </p>
          <Link
            href="/contact#contact-form"
            className="mt-7 inline-flex h-[44px] items-center justify-center rounded-full bg-brand-coral px-9 text-[14px] font-semibold uppercase tracking-[0.02em] text-white md:mt-8 md:h-[48px] md:px-10 md:text-[15px]"
          >
            Get Fleet Solution
          </Link>
        </div>
      </div>
    </section>
  );
}
