import Link from 'next/link';
import { Container } from '@/components/layout/Container';

/** Ref-image 3–4: large grey shell, wider/taller white card + right placeholder */
export function AboutCompanyIntro() {
  return (
    <section className="bg-white pb-16 pt-6 md:pb-24 md:pt-10">
      <Container className="max-w-[1380px]">
        <div className="rounded-[26px] bg-[#D9D9D9] p-6 md:rounded-[28px] md:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">
            <div className="flex w-full flex-1 flex-col justify-center rounded-[14px] bg-white p-8 shadow-sm md:p-10 lg:max-w-[44%] lg:p-12 lg:py-14">
              <h2 className="text-2xl font-bold leading-tight text-[#1a1a1a] md:text-3xl md:leading-[1.18] lg:text-[2rem]">
                India&apos;s EV Distribution &amp; Leasing Company
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[#555555] md:text-[15px] lg:mt-7">
                PositiEV Mobility sits between EV manufacturers and the businesses that use EVs. We
                help manufacturers sell more, help dealers run profitably, and help fleets adopt EVs
                without the usual headaches of cost, downtime, or maintenance.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#555555] md:text-[15px]">
                In short — if you make EVs, sell EVs, or run EV fleets, we are the one partner that
                makes it all work seamlessly.
              </p>
              <Link
                href="/contact#contact-form"
                className="mt-10 inline-flex w-full max-w-[18rem] items-center justify-center gap-3 rounded-xl bg-[#FF8C61] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#FF8C61]/92 md:mt-12 md:py-4 md:text-base"
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
