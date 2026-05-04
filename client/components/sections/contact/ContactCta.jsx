import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export function ContactCta() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <Container className="max-w-[1100px]">
        <div className="rounded-[28px] bg-[#d1d5db] px-8 py-12 md:px-16 md:py-16">
          <div className="flex max-w-3xl flex-col items-start text-left">
            <h2 className="text-2xl font-semibold leading-tight text-white md:text-4xl md:leading-tight">
              Ready to Power Your EV Business with Positiev?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white md:text-lg">
              OEM, dealer, or fleet operator — the right partnership model is waiting for you.
              Let&apos;s build something together.
            </p>
            <Link
              href="/contact#contact-form"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-brand-coral px-8 py-4 text-base font-semibold text-white transition hover:bg-brand-coral/90"
            >
              Get in touch
              <span aria-hidden className="text-xl leading-none">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
