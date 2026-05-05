import { Container } from '@/components/layout/Container';

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="ml-0.5 h-12 w-12 text-white drop-shadow sm:h-14 sm:w-14 md:h-16 md:w-16"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

/** Ref-image 3: badge, centered copy, video placeholder (video wired later) */
export function AboutVideoSection() {
  return (
    <section className="bg-white pb-16 pt-4 md:pb-24 md:pt-6">
      <Container className="max-w-[1000px]">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block rounded-full bg-[#FF7F50] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white md:px-6 md:py-3 md:text-sm">
            About Us
          </span>
          <p className="mt-8 max-w-[46rem] text-lg font-medium leading-snug text-black/50 md:mt-10 md:text-4xl md:leading-[1.45]">
            Intelligent EV charging systems powered by AI and renewables building a cleaner, more
            connected future with every charge.
          </p>
          <div
            className="relative mx-auto mt-10 h-[220px] w-full max-w-[800px] overflow-hidden rounded-[26px] bg-[#E0E0E0] sm:h-[250px] md:mt-12 md:h-[280px] md:rounded-[28px] lg:h-[300px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayIcon />
            </div>
            {/* Reserve slot for <video> or embedded player */}
          </div>
        </div>
      </Container>
    </section>
  );
}
