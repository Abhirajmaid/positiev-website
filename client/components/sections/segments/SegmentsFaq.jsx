'use client';

import { useState } from 'react';

const categories = [
  { id: 'dealers', label: 'For Dealers (DLF)' },
  { id: 'oems', label: 'For OEMs' },
  { id: 'fleets', label: 'For EV Fleets' },
  { id: 'financing', label: 'Financing & Investment' },
];

const PLACEHOLDER_ROWS = [0, 1, 2, 3,4] ;

/** Empty FAQ shell — static closed row with + icon (UI-only, ref-image 2) */
function FaqUiRow() {
  return (
    <div className="rounded-lg border border-[#d6d6d6] ">
      <button type="button" className="flex h-[72px] w-full items-center justify-end px-8 md:h-[74px] md:px-9" aria-label="FAQ placeholder row">
        <span className="text-[52px] font-medium leading-none text-black" aria-hidden>
          +
        </span>
      </button>
    </div>
  );
}

/**
 * FAQ layout per ref-image 2: top-aligned heading + pills; uniform-width pills;
 * inactive faded peach; accordion rows are empty shells only (+ / −).
 */
export function SegmentsFaq() {
  const [activeId, setActiveId] = useState(categories[0].id);

  return (
    <section className="bg-white py-14 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12 lg:gap-14">
          {/* Left: variable-width pills + muted copy (ref-image 2) */}
          <aside className="md:col-span-4 lg:col-span-4">
            <nav className="flex w-full max-w-[360px] flex-col gap-5" aria-label="FAQ segments">
              {categories.map((c) => {
                const active = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveId(c.id)}
                    className={[
                      'inline-flex w-fit items-center justify-center rounded-full px-6 py-3 text-left font-medium leading-none transition md:px-6.5 md:py-3.5',
                      active
                        ? 'bg-brand-coral text-white'
                        : 'bg-[#F8CDBA] text-white/95',
                    ].join(' ')}
                  >
                    <span className="block whitespace-nowrap text-[18px] font-medium leading-none tracking-[-0.01em] md:text-[20px]">
                      {c.label}
                    </span>
                  </button>
                );
              })}
            </nav>
            <p className="mt-14 max-w-[28ch] text-[16px] font-normal leading-[1.35] tracking-[-0.01em] text-[#74777B] md:mt-16 md:text-[18px]">
              Everything you need to know about partnering with PositiEV for dealers, OEMs, fleet
              operators, and financing partners.
            </p>
          </aside>

          {/* Right: heading shares top baseline with pills; empty accordion shells */}
          <div className="md:col-span-8 lg:col-span-8">
            <div className="w-full max-w-[890px]">
            <h2 className="text-left text-[1.9rem] font-medium leading-[1.08] tracking-[-0.02em] text-black md:text-[4.55rem] pl-14 pb-14">
              Find quick answers
              <br />
              to common questions
            </h2>

            <div className="mt-12 space-y-5 md:mt-16 md:space-y-6">
              {PLACEHOLDER_ROWS.map((i) => (
                <FaqUiRow key={i} />
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
