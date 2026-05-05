import { Container } from '@/components/layout/Container';

/** Ref-image 2: white area, two columns — heading left (black + coral “Explore!”), subcopy right-aligned gray */
export function BlogHero() {
  return (
    <section className="bg-white pb-16 pt-10 md:pb-24 md:pt-14 lg:pb-28 lg:pt-20">
      <Container className="max-w-[1140px]">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14 lg:gap-20">
          <div className="text-left">
            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-black sm:text-6xl md:text-7xl md:leading-[1.06] lg:text-8xl lg:leading-[1.05]">
              Live, Learn,
              <br />
              <span className="text-brand-coral">Explore!</span>
            </h1>
          </div>
          <div className="text-left md:text-right">
            <p className="text-lg leading-relaxed text-[#666666] md:text-xl md:leading-relaxed lg:text-[22px] lg:leading-relaxed">
              Discover our exciting offerings and get inspired with tips and stories. From sustainable
              practices to new routes and green initiatives—there&apos;s something for everyone!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
