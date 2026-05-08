const solutionPoints = [
  'EV Leasing (No upfront burden)',
  'Charging Setup Support',
  'Predictive Maintenance',
  'Fleet Analytics',
];

function CheckPoint({ text }) {
  return (
    <li className="flex items-center gap-4">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-[5px] bg-brand-coral text-[12px] font-bold text-white">
        ✓
      </span>
      <span className="text-[15px] font-medium leading-[1.2] text-[#61656b] md:text-[18px]">{text}</span>
    </li>
  );
}

export function FleetSolution() {
  return (
    <section className="bg-white pb-14 pt-8 md:pb-20 md:pt-12">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <h2 className="mx-auto max-w-[1100px] text-center text-[2rem] font-medium leading-[1.18] tracking-[-0.02em] text-[#5f646b] md:text-[2.75rem]">
          Fleet Electrification Comes With Operational,
          <br />
          Infrastructure, and Financial Challenges
        </h2>

        <div className="mx-auto mt-12 grid w-full max-w-[900px] items-center gap-8 md:mt-32 md:grid-cols-2 md:gap-40">
          <div className="h-[300px] rounded-[14px] bg-[#d4d4d6] md:h-[442px]" />

          <div>
            <h3 className="text-[2rem] font-medium leading-[1.06] tracking-[-0.02em] text-black md:text-[4.2rem]">
              A Complete
              <br />
              <span className="text-brand-coral">Fleet Solution</span>
            </h3>

            <ul className="mt-7 space-y-3.5">
              {solutionPoints.map((item) => (
                <CheckPoint key={item} text={item} />
              ))}
            </ul>

            <p className="mt-8 max-w-[420px] text-[18px] font-medium leading-[1.2] text-black md:text-[21px]">
              From vehicle to uptime-we manage everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
