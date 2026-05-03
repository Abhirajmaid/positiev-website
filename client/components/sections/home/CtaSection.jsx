import Image from 'next/image';

export function CtaSection() {
  return (
    <section className="bg-black">
      <div className="w-full pb-8 md:pb-10">
        <div className="w-full overflow-hidden bg-black/25 shadow-[0_26px_90px_rgba(0,0,0,0.35)]">
          <div className="grid h-[380px] grid-cols-1 md:h-[520px] md:grid-cols-2">
            {/* Image */}
            <div className="relative h-full w-full">
              <Image
                src="/sampleuse.jpg"
                alt="Luxury home"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/25" />
            </div>

            {/* Copy */}
            <div className="relative flex h-full w-full items-start bg-[#121820] px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,#2a2d31_0%,#161f2c_52%,#081c27_100%)]" />
              <div className="pointer-events-none absolute -left-20 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(116,126,145,0.20)_0%,rgba(20,30,45,0)_72%)]" />
              <div className="pointer-events-none absolute right-[-120px] top-[-90px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(10,76,92,0.28)_0%,rgba(8,28,39,0)_68%)]" />

              <div className="relative z-10 max-w-[92%] md:max-w-[640px] mt-14 ml-14">
                <h2 className="font-serif text-[52px] font-semibold leading-[1.06] text-brand-white md:text-[50px] lg:text-[50px]">
                  <span className="md:whitespace-nowrap">Ready to Power Your</span>
                  <br />
                  EV Business with PositiEV?
                </h2>
                <p className="mt-5 max-w-[28ch] text-[16px] leading-[1.45] text-brand-white/70 md:text-[18px]">
                  OEM, dealer, or fleet operator — the right partnership model
                  is waiting for you. Let&apos;s build something together.
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center rounded-full bg-brand-light px-6 py-2.5 text-[12px] font-semibold text-brand-dark md:px-7 md:py-3 md:text-[16px]"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

