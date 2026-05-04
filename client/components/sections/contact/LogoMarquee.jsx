import { Container } from '@/components/layout/Container';

function LogoStrip() {
  const placeholders = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="flex w-max shrink-0 gap-5 pr-5">
      {placeholders.map((i) => (
        <div
          key={i}
          className="flex h-14 min-w-[120px] items-center justify-center rounded-xl bg-[#e8e8e8] px-6 text-sm font-medium text-brand-medium md:h-16 md:min-w-[140px]"
        >
          Logo
        </div>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container className="max-w-[1100px]">
        <h2 className="mx-auto max-w-3xl text-center text-xl font-normal leading-snug text-brand-medium md:text-2xl md:leading-relaxed">
          <span className="text-brand-medium">Discover the </span>
          <span className="font-bold text-brand-dark">trusted network</span>
          <span className="text-brand-medium"> that</span>
          <br />
          <span className="font-bold text-brand-dark">powers our mission</span>
        </h2>

        <div className="relative mt-12 overflow-hidden">
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
      </Container>
    </section>
  );
}
