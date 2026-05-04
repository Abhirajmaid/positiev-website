import { Container } from '@/components/layout/Container';

export function ContactHero() {
  return (
    <section className="bg-white pb-10 pt-6 md:pb-14 md:pt-8">
      <Container className="max-w-[1100px]">
        <div className="flex min-h-[280px] flex-col items-center justify-center rounded-[20px] bg-[#d3d3d3] px-6 py-16 text-center md:min-h-[320px] md:rounded-[24px] md:px-12 md:py-20">
          <h1 className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white md:text-base">
            Have questions, need assistance, or want to learn more? Our team is here to help. Reach
            out to us, and we&apos;ll ensure you have!
          </p>
        </div>
      </Container>
    </section>
  );
}
