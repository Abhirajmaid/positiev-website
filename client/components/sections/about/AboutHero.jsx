import { Container } from '@/components/layout/Container';

const CARD = 'bg-[#E0E0E0]';
const R_BIG = 'rounded-[28px] md:rounded-[36px] lg:rounded-[40px]';

/**
 * Ref-image 2: left — pill, tall block, pill. Right — three stacked tiles, column shifted up
 * (translate) so the upper tile is clipped at the section top; larger type on the left.
 */
export function AboutHero() {
  return (
    <section className="bg-white pb-16 pt-10 md:pb-24 md:pt-14">
      <Container className="max-w-[1200px]">
        <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          <div className="flex max-w-xl shrink-0 flex-col justify-center lg:w-[44%] lg:max-w-none">
            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-black md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] xl:leading-[1.06]">
              About<span className="text-brand-coral"> Us</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#757575] md:text-xl md:leading-relaxed">
              Intelligent EV charging systems powered by AI and renewables building a cleaner, more
              connected future with every charge.
            </p>
          </div>

          <div className="min-h-[300px] w-full flex-1 lg:min-h-0 lg:w-[56%]">
            <div
              className="relative mx-auto h-[340px] w-full max-w-[540px] overflow-hidden sm:h-[380px] md:h-[420px] lg:mx-0 lg:h-[460px] lg:max-w-none"
              aria-hidden
            >
              <div className="grid h-full grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                {/* Left column — aligned to full height */}
                <div className="flex h-full min-h-0 flex-col gap-4 md:gap-5 lg:gap-6">
                  <div
                    className={`h-[64px] shrink-0 sm:h-[72px] md:h-[76px] ${CARD} rounded-[25px]`}
                  />
                  <div className={`min-h-0 flex-1 ${CARD} ${R_BIG}`} />
                  <div
                    className={`h-[64px] shrink-0 sm:h-[72px] md:h-[76px] ${CARD} rounded-[25px]`}
                  />
                </div>

                {/* Right column — shifted up so top tile is partially clipped (ref-image 2) */}
                <div className="-translate-y-10 flex h-full min-h-0 flex-col gap-4 md:-translate-y-14 md:gap-5 lg:-translate-y-16 lg:gap-6">
                  <div
                    className={`h-[200px] shrink-0 sm:h-[220px] md:h-[240px] lg:h-[252px] ${CARD} ${R_BIG} rounded-[25px]`}
                  />
                  <div
                    className={`h-[128px] shrink-0 sm:h-[148px] md:h-[158px] lg:h-[168px] ${CARD} ${R_BIG} rounded-[25px]`}
                  />
                  <div
                    className={`h-[128px] shrink-0 sm:h-[148px] md:h-[158px] lg:h-[168px] ${CARD} ${R_BIG} rounded-[25px]`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
