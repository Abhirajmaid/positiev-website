'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';

const tabs = [
  { id: 'dlfs', label: 'DLFs' },
  { id: 'oems', label: 'OEMs' },
  { id: 'fleets', label: 'Fleets' },
];

/**
 * Ref-image 2: section title outside; card with unified grid — 5 cols (2fr + 1fr×4) × 3 rows;
 * column 1 spans 3 rows (pills top, copy bottom); columns 2–5 = 4×3 logo cells with hairline grid.
 */
export function AboutTrustedClients() {
  const [active, setActive] = useState('dlfs');

  return (
    <section className="bg-white pb-16 pt-4 md:pb-24 md:pt-4">
      <Container className="max-w-[1200px]">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] md:text-4xl">
          Trusted by clients
        </h2>

        <div className="mt-8 overflow-hidden rounded-[24px] border border-[#E0E0E0] bg-white md:mt-10 md:rounded-[28px]">
          <div
            className="grid grid-cols-1 lg:min-h-[320px] lg:[grid-template-columns:2fr_1fr_1fr_1fr_1fr] lg:[grid-template-rows:repeat(3,minmax(112px,1fr))]"
          >
            {/* Col 1 — ref-image 2: tabs top, headline + body bottom; spans 3 rows on lg */}
            <div className="flex flex-col justify-between border-b border-[#E5E5E5] p-6 md:p-8 lg:row-span-3 lg:min-h-[300px] lg:border-b-0 lg:border-r lg:px-10 lg:py-10">
              <div className="flex flex-wrap gap-2">
                {tabs.map((t) => {
                  const isOn = active === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActive(t.id)}
                      className={[
                        'rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition md:px-6 md:py-2.5 md:text-sm',
                        isOn ? 'bg-[#FF7F50] text-white' : 'bg-[#FADBD8] text-white',
                      ].join(' ')}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
              <div className="mt-10 md:mt-14 lg:mt-16">
                <h3 className="text-base font-bold leading-snug text-[#1a1a1a] md:text-lg lg:text-xl">
                  Discover the trusted network that powers our mission
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#6B7280] md:mt-5 md:text-[15px]">
                  From esteemed partners and impactful collaborations to cutting-edge solutions, we
                  work together to elevate every aspect of your experience while making a
                  difference.
                </p>
              </div>
            </div>

            {/* Cols 2–5: 4 × 3 — gap-px hairlines; clips to card radius via parent overflow-hidden */}
            <div className="grid min-h-[220px] grid-cols-4 grid-rows-3 gap-px bg-[#E5E5E5] md:min-h-[260px] lg:col-span-4 lg:col-start-2 lg:row-span-3 lg:min-h-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="min-h-[64px] bg-white md:min-h-[72px] lg:min-h-0" aria-hidden />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
