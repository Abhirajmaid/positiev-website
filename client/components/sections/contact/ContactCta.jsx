import Link from 'next/link';

/** Ref-image 3: wide light-gray card, left-aligned copy, generous padding, large type, orange CTA */
export function ContactCta() {
  return (
    <section className="bg-white pb-16 md:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="min-h-[260px] w-full rounded-[32px] bg-[#d1d5db] px-8 py-14 shadow-sm md:min-h-[300px] md:rounded-[36px] md:px-14 md:py-16 lg:min-h-[340px] lg:px-16 lg:py-20 xl:px-20 xl:py-24">
          <div className="flex max-w-2xl flex-col items-start text-left md:max-w-3xl lg:max-w-[52rem]">
            <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-white md:text-5xl md:leading-[1.1] lg:text-[3.25rem] lg:leading-[1.08] xl:text-6xl xl:leading-[1.06]">
              Ready to Power Your EV Business with Positiev?
            </h2>
            <p className="mt-6 max-w-[40rem] text-lg leading-relaxed text-white md:mt-8 md:text-xl md:leading-relaxed lg:text-[22px] lg:leading-relaxed">
              OEM, dealer, or fleet operator — the right partnership model is waiting for you.
              Let&apos;s build something together.
            </p>
            <Link
              href="/contact#contact-form"
              className="mt-10 inline-flex min-h-[52px] items-center gap-3 rounded-xl bg-brand-coral px-10 py-4 text-lg font-semibold text-white transition hover:bg-brand-coral/90 md:mt-12 md:min-h-[56px] md:px-12 md:py-5 md:text-xl lg:gap-4"
            >
              Book a Call
              <span aria-hidden className="text-2xl leading-none md:text-[1.75rem]">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
