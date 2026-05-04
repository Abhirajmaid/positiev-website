import { Container } from '@/components/layout/Container';

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="ml-1 h-16 w-16 text-white drop-shadow md:h-20 md:w-20"
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
          <p className="mt-8 max-w-[46rem] text-lg font-medium leading-snug text-[#4A4A4A] md:mt-10 md:text-2xl md:leading-[1.45]">
            Intelligent EV charging systems powered by AI and renewables building a cleaner, more
            connected future with every charge.
          </p>
          <div
            className="relative mt-10 w-full max-w-[920px] overflow-hidden rounded-[26px] bg-[#E0E0E0] md:mt-12 md:rounded-[28px]"
            style={{ aspectRatio: '16 / 9' }}
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
