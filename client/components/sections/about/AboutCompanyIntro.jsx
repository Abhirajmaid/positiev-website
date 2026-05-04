import Link from 'next/link';
import { Container } from '@/components/layout/Container';

/** Ref-image 5: light grey shell, white text card, video placeholder area */
export function AboutCompanyIntro() {
  return (
    <section className="bg-white pb-16 pt-4 md:pb-24 md:pt-8">
      <Container className="max-w-[1200px]">
        <div className="rounded-[22px] bg-[#D9D9D9] p-5 md:rounded-[24px] md:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
            <div className="flex flex-1 flex-col justify-center rounded-[12px] bg-white p-7 shadow-sm md:p-9 lg:max-w-[46%]">
              <h2 className="text-2xl font-bold leading-tight text-[#1a1a1a] md:text-3xl md:leading-[1.2]">
                India&apos;s EV Distribution &amp; Leasing Company
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#4a4a4a] md:text-[15px]">
                PositiEV Mobility sits between EV manufacturers and the businesses that use EVs. We
                help manufacturers sell more, help dealers run profitably, and help fleets adopt
                EVs without the usual headaches of cost, downtime, or maintenance.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#4a4a4a] md:text-[15px]">
                In short — if you make EVs, sell EVs, or run EV fleets, we are the one partner that
                makes it all work seamlessly.
              </p>
              <Link
                href="/contact#contact-form"
                className="mt-8 inline-flex w-fit items-center justify-center gap-3 rounded-lg bg-[#FF8254] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#FF8254]/90 md:px-8 md:py-4 md:text-base"
              >
                Know More
                <span aria-hidden className="text-lg leading-none">
                  →
                </span>
              </Link>
            </div>
           
          </div>
        </div>
      </Container>
    </section>
  );
}
