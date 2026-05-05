import Link from 'next/link';

/**
 * Ref-image 2: small grey squares (~heading cap height); top/bottom aligned;
 * middle tiles further outward (chevron frame); larger type + CTA.
 */
export function SolutionsHero() {
  const tile =
    'rounded-xl bg-[#D9D9D9] h-[3.25rem] w-[3.25rem] sm:h-14 sm:w-14 md:h-[3.75rem] md:w-[3.75rem] lg:h-16 lg:w-16';

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 pb-20 pt-[5.5rem] md:pb-28 md:pt-28">
      {/* Left: top & bottom share inset; middle further outward (smaller left %) */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
        <div className={`absolute left-[15%] top-[24%] ${tile} md:left-[17%] md:top-[26%] lg:left-[18%]`} />
        <div
          className={`absolute left-[7%] top-1/2 ${tile} -translate-y-1/2 md:left-[8%] lg:left-[9%]`}
        />
        <div className={`absolute bottom-[22%] left-[15%] ${tile} md:bottom-[24%] md:left-[17%] lg:bottom-[25%] lg:left-[18%]`} />

        <div className={`absolute right-[15%] top-[24%] ${tile} md:right-[17%] md:top-[26%] lg:right-[18%]`} />
        <div
          className={`absolute right-[7%] top-1/2 ${tile} -translate-y-1/2 md:right-[8%] lg:right-[9%]`}
        />
        <div className={`absolute bottom-[22%] right-[15%] ${tile} md:bottom-[24%] md:right-[17%] lg:bottom-[25%] lg:right-[18%]`} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[46rem] flex-col items-center text-center xl:max-w-[52rem]">
        <span className="mb-8 inline-flex rounded-full bg-[#3E3631] px-8 py-3 text-[15px] font-medium leading-none text-white md:mb-10 md:px-9 md:py-3.5 md:text-base">
          Solutions
        </span>

        <h1 className="text-[2.65rem] font-bold leading-[1.08] tracking-tight text-[#1A1D23] sm:text-5xl md:text-6xl md:leading-[1.05] lg:text-7xl lg:leading-[1.02] xl:text-[4.35rem]">
          Our{' '}
          <span className="text-[#FF5722]">Services</span>
        </h1>

        <p className="mt-8 max-w-[38rem] text-lg font-normal leading-relaxed text-[#555555] md:mt-10 md:max-w-[42rem] md:text-xl md:leading-relaxed lg:mt-11 lg:text-2xl lg:leading-relaxed xl:text-[1.65rem] xl:leading-relaxed">
          A tech-enabled suite covering every dimension of EV fleet ownership and dealer franchise
          operations across India.
        </p>

        <Link
          href="/contact#contact-form"
          className="mt-12 inline-flex min-w-[14rem] items-center justify-center rounded-full bg-[#FF5722] px-12 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#E64A19] md:mt-14 md:min-w-[16rem] md:px-14 md:py-[1.125rem] md:text-base md:tracking-[0.12em] lg:px-16 lg:py-5"
        >
          Partner with us
        </Link>
      </div>
    </section>
  );
}
