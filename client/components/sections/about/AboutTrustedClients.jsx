'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';

const tabs = [
  { id: 'dlfs', label: 'DLFs' },
  { id: 'oems', label: 'OEMs' },
  { id: 'fleets', label: 'Fleets' },
];

/**
 * Ref-image 6: larger panel, hairline #E0E0E0 borders only;
 * left col: darker orange active pill, peach inactive; title + body copy exact.
 */
export function AboutTrustedClients() {
  const [active, setActive] = useState('dlfs');

  return (
    <section className="bg-white pb-20 pt-6 md:pb-28 md:pt-10">
      <Container className="max-w-[1380px]">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] md:text-4xl lg:text-[2.5rem]">
          Trusted by clients
        </h2>

        <div className="mt-10 overflow-hidden rounded-[26px] border border-black/20 bg-white md:mt-12 md:rounded-[28px]">
          <div className="grid grid-cols-1 lg:min-h-[480px] lg:[grid-template-columns:2fr_1fr_1fr_1fr_1fr] lg:[grid-template-rows:repeat(3,minmax(152px,1fr))]">
            <div className="flex min-h-[340px] flex-col justify-between border-b border-black/20 p-7 md:p-9 lg:row-span-3 lg:min-h-0 lg:border-b-0 lg:border-r lg:border-black/20 lg:p-10 lg:py-11">
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {tabs.map((t) => {
                  const isOn = active === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActive(t.id)}
                      className={[
                        'rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wide md:px-7 md:py-3 md:text-sm',
                        isOn
                          ? 'bg-[#E65100] text-white'
                          : 'bg-[#FFE4DB] text-white',
                      ].join(' ')}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
              <div className="mt-12 md:mt-16 lg:mt-0">
                <h3 className="text-lg font-bold leading-snug text-black md:text-xl lg:text-[1.35rem]">
                  Discover the trusted network that powers our mission
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-black/50 md:mt-6 md:text-[15px] md:leading-relaxed">
                  From esteemed partners and impactful collaborations to cutting-edge solutions, we
                  work together to elevate every aspect of your experience while making a difference.
                </p>
              </div>
            </div>

            <div className="grid min-h-[300px] grid-cols-4 grid-rows-3 gap-px border-t border-black/20 bg-black/20 lg:col-span-4 lg:col-start-2 lg:row-span-3 lg:min-h-0 lg:border-t-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="min-h-[80px] bg-white md:min-h-[96px] lg:min-h-0" aria-hidden />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
