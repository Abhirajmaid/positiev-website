function LogoStrip() {
  const placeholders = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="flex w-max shrink-0 gap-5 pr-5">
      {placeholders.map((i) => (
        <div
          key={i}
          className="flex h-14 min-w-[120px] items-center justify-center rounded-xl bg-[#e8e8e8] px-6 text-base font-medium text-brand-medium md:h-[72px] md:min-w-[150px] md:text-lg"
        >
          Logo
        </div>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <h2 className="mx-auto max-w-4xl text-center text-2xl font-normal leading-snug text-brand-medium sm:text-3xl md:text-4xl md:leading-relaxed lg:text-[2.75rem] lg:leading-snug">
          <span className="text-brand-medium">Discover the </span>
          <span className="font-bold text-brand-dark">trusted network</span>
          <span className="text-brand-medium"> that</span>
          <br />
          <span className="font-bold text-brand-dark">powers our mission</span>
        </h2>

        <div className="relative mt-14 overflow-hidden md:mt-16">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(to_right,white,transparent)] md:w-24"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(to_left,white,transparent)] md:w-24"
            aria-hidden
          />

          <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-contact-marquee will-change-transform">
              <LogoStrip />
              <LogoStrip />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
