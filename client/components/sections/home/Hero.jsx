import { Navbar } from '@/components/layout/Navbar';
import { Icon } from '@iconify/react';

export function Hero() {
  return (
    <section className="relative isolate h-screen min-h-[100svh] overflow-hidden bg-black">
      {/* Layer 1 (z-0): sky / gradient base */}
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_45%_10%,rgba(191,157,136,0.60)_0%,rgba(113,124,148,0.50)_40%,rgba(27,34,46,0.84)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/15 to-black/55"
        aria-hidden="true"
      />

      {/* Layer 2 (z-1): giant brand text */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[22%] z-[1] text-center font-serif text-[24vw] font-semibold leading-none text-white md:text-[16vw]"
        style={{ textShadow: '0 6px 28px rgba(255,255,255,0.14)' }}
        aria-hidden="true"
      >
        POSITIEV
      </div>

      {/* Layer 3 (z-2): house image covering lower area for depth illusion */}
      <div
        className="absolute inset-0 z-[2] bg-cover bg-center [mask-image:linear-gradient(to_bottom,transparent_30%,black_58%)]"
        style={{ backgroundImage: "url('/samp.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_80%_60%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.34)_58%,rgba(0,0,0,0.62)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent to-black/45"
        aria-hidden="true"
      />

      {/* Layer 4 (z-3): all UI content */}
      <div className="relative z-[3]">
        <Navbar />
      </div>

      <div className="relative z-[3] mx-auto h-screen min-h-[100svh] w-full max-w-[1400px] px-4 pb-10 pt-24 md:px-6 md:pt-28">
        <div className="absolute left-4 top-24 md:left-6 md:top-24">
          <div className="text-[9px] uppercase tracking-[0.28em] text-white/65 md:text-[10px]">
            Since 2026
          </div>

          <h1 className="mt-2 max-w-[42vw] font-semibold leading-[0.95] tracking-[-0.02em] text-white md:text-[25px]">
            INDIA&apos;S LEADING
            <br />
            EV DISTRIBUTION &amp;
            <br />
            LEASING PLATFORM
          </h1>
        </div>

        <div className="absolute right-2 top-32 hidden md:block lg:right-3">
          <div
            className="text-[9px] uppercase leading-snug tracking-[0.34em] text-white/55"
            style={{ writingMode: 'vertical-rl' }}
          >
            Empowering Dealers, OEMs &amp; Fleets
          </div>
        </div>

        <div className="absolute bottom-14 right-4 hidden w-[500px] md:block lg:right-6">
          <div className="w-[230px] rounded-[20px] border border-white/10 bg-black/45 p-5 backdrop-blur-[20px]">
            <div className="text-[42px] font-semibold leading-none text-white">₹100 Cr+</div>
            <p className="mt-4 max-w-[16ch] text-[13px] leading-relaxed text-white/85">
              Revenue pipeline already in motion from day one.
            </p>
          </div>

          <div className="ml-auto mt-4 w-[230px] rounded-[20px] border border-white/10 bg-black/45 p-5 backdrop-blur-[20px]">
            <div className="text-[42px] font-semibold leading-none text-white">5 OEM+</div>
            <p className="mt-4 text-[13px] leading-relaxed text-white/85">
              Manufacturing partners across 2W, 3W &amp; 4W segments.
            </p>
          </div>
        </div>

        <div className="absolute inset-x-4 bottom-28 grid gap-4 md:hidden">
          <div className="rounded-[20px] border border-white/10 bg-black/45 p-4 backdrop-blur-[20px]">
            <div className="text-3xl font-semibold leading-none text-white">₹100 Cr+</div>
            <p className="mt-2 text-xs text-white/85">
              Revenue pipeline already in motion from day one.
            </p>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-black/45 p-4 backdrop-blur-[20px]">
            <div className="text-3xl font-semibold leading-none text-white">5 OEM+</div>
            <p className="mt-2 text-xs text-white/85">
              Manufacturing partners across 2W, 3W &amp; 4W segments.
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 flex justify-center px-4">
          <a
            href="#solutions"
            className="inline-flex items-center rounded-full border border-white/20 bg-white p-1 text-[18px] font-semibold text-black shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_22px_52px_rgba(0,0,0,0.45)]"
          >
            <span className="px-8 py-3">EXPLORE SOLUTIONS</span>
            <span className="grid h-[52px] w-[52px] place-items-center rounded-full bg-black text-white">
              <Icon icon="mdi:arrow-top-right" className="h-5 w-5" />
            </span>
          </a>
        </div>

        <div className="absolute bottom-8 left-4 max-w-[230px] text-[9px] uppercase tracking-[0.2em] text-white/55 md:left-6">
          Operating Lease · Charging Infrastructure · Maintenance
        </div>
        <div className="absolute bottom-8 right-4 text-[9px] uppercase tracking-[0.2em] text-white/55 md:right-6">
          India&apos;s Largest EV Distributor by 2030
        </div>
      </div>
    </section>
  );
}
