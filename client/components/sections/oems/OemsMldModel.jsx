const modelPoints = [
  {
    id: '01',
    title: 'We Onboard and Enable High-Quality Dealers',
    body: 'We identify, evaluate, and onboard the right dealer partners in key markets, ensuring they are equipped with the tools, training, and operational support needed to represent your brand effectively and drive consistent sales performance.',
  },
  {
    id: '02',
    title: 'We Enable Financing Across the Ecosystem',
    body: 'Through strong partnerships and integrated financial solutions, we make it easier for dealers, fleet operators, and end customers to access funding - removing one of the biggest barriers to EV adoption and accelerating purchase decisions.',
  },
  {
    id: '03',
    title: 'We Ensure Smooth Vehicle Movement',
    body: 'From inventory planning to last-mile delivery, we streamline the entire supply chain to ensure vehicles move efficiently across locations. This minimizes delays, reduces idle inventory, and keeps the sales cycle active and predictable.',
  },
  {
    id: '04',
    title: 'We Maintain High Service Uptime and Reliability',
    body: 'Our structured service network ensures vehicles remain operational with minimal downtime. By enabling access to trained technicians, spare parts, and responsive support systems, we help maintain customer trust and long-term satisfaction.',
  },
];

function MldPoint({ id, title, body, showDivider }) {
  return (
    <article className="pb-5 pt-1 md:pb-6">
      <div className="flex items-start gap-4">
        <span className="pt-0.5 text-[38px] font-light leading-none text-[#F2BBA9] md:text-[40px]">{id}</span>
        <h3 className="text-[24px] font-medium leading-[1.12] tracking-[-0.01em] text-black md:text-[26px]">
          {title}
        </h3>
      </div>
      <p className="mt-3 w-full text-[12px] font-medium leading-[1.28] text-[#676c72] md:text-[15px]">
        {body}
      </p>
      {showDivider ? <div className="mt-5 h-px w-full bg-[#d9d9d9] md:mt-6" aria-hidden /> : null}
    </article>
  );
}

export function OemsMldModel() {
  return (
    <section className="bg-white pb-14 pt-6 md:pb-20 md:pt-8">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-14 lg:gap-16">
          <aside className="md:col-span-4">
            <span className="inline-flex h-[42px] items-center rounded-full bg-brand-coral px-5 text-[14px] font-medium uppercase tracking-[0.02em] text-white md:h-[44px] md:px-6 md:text-[15px]">
              MLD Model
            </span>
          </aside>

          <div className="md:col-span-8">
            <div className="w-full max-w-[760px]">
              <h2 className="text-[2.05rem] font-medium leading-[1.08] tracking-[-0.02em] text-black md:text-[3.25rem]">
                Our Market Development Layer (MDL): A Scalable Framework for Structured EV Expansion
              </h2>
              <p className="mt-6 text-[15px] font-medium leading-[1.25] text-[#676c72] md:mt-7 md:text-[15px]">
                A carefully designed, execution-driven model that enables rapid and sustainable growth by
                seamlessly integrating distribution, financing, and after-sales operations into one unified
                system.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-2 md:mt-10 md:space-y-4">
          {modelPoints.map((point, index) => (
            <div
              key={point.id}
              className="grid items-start gap-6 md:min-h-[170px] md:grid-cols-12 md:items-center md:gap-14 lg:gap-16"
            >
              <div className="md:col-span-4 md:flex md:items-center">
                <div className="h-[145px] w-[88%] rounded-[14px] bg-[#d5d5d7]" />
              </div>
              <div className="md:col-span-8">
                <div className="w-full max-w-[760px]">
                  <MldPoint
                    id={point.id}
                    title={point.title}
                    body={point.body}
                    showDivider={index < modelPoints.length - 1}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
