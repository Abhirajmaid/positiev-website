/** Ref-image 2: white hero — left “Segments” / coral “We serve”, right gray copy right-aligned */
export function SegmentsHero() {
  return (
    <section className="min-h-[min(78vh,720px)] bg-white pb-16 pt-10 md:flex md:items-center md:pb-24 md:pt-14 lg:min-h-[70vh] lg:pb-28 lg:pt-16">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16 lg:gap-24">
          <div className="text-left">
            <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-black sm:text-6xl md:text-7xl md:leading-[1.06] lg:text-8xl">
              Segments
              <br />
              <span className="text-brand-coral">We serve</span>
            </h1>
          </div>
          <div className="flex items-start pt-2 md:justify-end md:pt-4">
            <p className="max-w-xl text-lg leading-relaxed text-[#5a5a5a] md:text-right md:text-xl md:leading-relaxed lg:text-[22px] lg:leading-relaxed font-semibold">
              A tech-enabled suite covering every dimension of EV fleet ownership and dealer franchise
              operations across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
