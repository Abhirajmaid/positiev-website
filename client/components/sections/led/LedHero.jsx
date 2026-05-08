import Link from 'next/link';

export function LedHero() {
  return (
    <section className="bg-white pb-10 pt-8 md:pb-14 md:pt-10 lg:pb-16">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[860px] text-center">
          <h1 className="text-[2.2rem] font-medium leading-[1.08] tracking-[-0.02em] text-black md:text-[4.1rem]">
            Start Your EV
            <br />
            <span className="text-brand-coral">Dealership Business</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[740px] text-[15px] font-medium leading-[1.3] text-[#696e75] md:mt-6 md:text-[18px]">
            Join PositiEV and build a high-growth business in the electric mobility revolution.
          </p>
          <Link
            href="/contact#contact-form"
            className="mt-7 inline-flex h-[44px] items-center justify-center rounded-full bg-brand-coral px-8 text-[14px] font-semibold uppercase tracking-[0.02em] text-white md:mt-8 md:h-[48px] md:px-10 md:text-[15px]"
          >
            Apply for Franchise
          </Link>
        </div>

        <div className="mx-auto mt-10 h-[230px] w-full max-w-[1260px] rounded-[14px] bg-[#d4d4d6] md:mt-12 md:h-[300px]" />
      </div>
    </section>
  );
}
