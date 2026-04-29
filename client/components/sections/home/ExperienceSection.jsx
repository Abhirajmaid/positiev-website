import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Container } from '@/components/layout/Container';

function Divider() {
  return <div className="h-px w-full bg-brand-dark/15" />;
}

function LogoMark({ kind }) {
  if (kind === 'polymath') {
    return (
      <span className="relative block h-4 w-4 rounded-full bg-brand-dark/70">
        <span className="absolute inset-[4px] rounded-full bg-brand-white" />
      </span>
    );
  }

  if (kind === 'boltshift') {
    return (
      <span className="grid h-4 w-4 place-items-center rounded-full bg-brand-dark/70">
        <svg
          viewBox="0 0 24 24"
          className="h-2.5 w-2.5 text-brand-white"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M13.7 2 6.8 12h4.2L10.3 22l6.9-10H13L13.7 2Z" />
        </svg>
      </span>
    );
  }

  return (
    <span className="relative block h-4 w-4 rounded-full border-[3px] border-brand-dark/70">
      <span className="absolute bottom-[-1px] right-[-2px] h-1.5 w-1.5 rounded-full bg-brand-dark/70" />
    </span>
  );
}

function PartnerPill({ kind, label }) {
  return (
    <div className="inline-flex items-center gap-2.5 text-[12px] text-brand-dark/75">
      <span className="grid h-5 w-5 place-items-center">
        <LogoMark kind={kind} />
      </span>
      <span className="text-[12px] font-semibold text-brand-dark/75">{label}</span>
    </div>
  );
}

function Feature({ title, description }) {
  return (
    <div className="space-y-1">
      <div className="text-[14px] font-semibold text-brand-dark">{title}</div>
      <div className="max-w-[46ch] text-[12px] leading-relaxed text-brand-medium">
        {description}
      </div>
    </div>
  );
}

function ReviewAvatars() {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-brand-white shadow-sm"
          >
            <Image
              src="/sampleuse.jpg"
              alt="Reviewer"
              fill
              className="object-cover"
              sizes="36px"
            />
          </div>
        ))}
        <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-dark text-[11px] font-semibold text-brand-white shadow-sm">
          6K+
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="bg-brand-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-semibold leading-[0.98] text-brand-dark md:text-6xl">
            Experience Excellence
            <br />
            In Real Estate
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-10 md:grid-cols-12 md:gap-10">
          {/* Left copy */}
          <div className="md:col-span-4">
            <h3 className="text-[20px] font-semibold leading-snug text-brand-dark">
              Your Trusted Partner in Finding the
              <br />
              Perfect Home
            </h3>
            <p className="mt-4 max-w-[48ch] text-[12px] leading-relaxed text-brand-medium">
              At Luxura Real Estate, we believe that buying or selling a home
              should be an exciting and stress-free experience.
            </p>

            <button
              type="button"
              className="mt-6 inline-flex items-center rounded-full bg-brand-dark px-6 py-3 text-[12px] font-semibold text-brand-white"
            >
              About Us
            </button>

            <div className="mt-14">
              <div className="text-[13px] font-semibold text-brand-dark/80">
                Our Partner:
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-3">
                <PartnerPill kind="polymath" label="Polymath" />
                <PartnerPill kind="boltshift" label="Boltshift" />
                <PartnerPill kind="quotient" label="Quotient" />
              </div>
            </div>
          </div>

          {/* Center image */}
          <div className="md:col-span-4">
            <div className="overflow-hidden rounded-2xl bg-brand-light shadow-[0_22px_70px_rgba(0,0,0,0.14)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/sampleuse.jpg"
                  alt="Property"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* Right features */}
          <div className="md:col-span-4">
            <div className="space-y-6">
              <Feature
                title="Expert Guidance"
                description="Our experienced agents provide professional advice and personalized support."
              />
              <Divider />
              <Feature
                title="Wide Property Selection"
                description="From luxury homes to budget-friendly apartments, we have something for everyone."
              />
              <Divider />
            </div>

            <div className="mt-10">
              <div className="text-[12px] font-semibold text-brand-dark/75">
                Reviews:
              </div>
              <div className="mt-4 flex items-center gap-2">
                <ReviewAvatars />
                <div className="text-left">
                  <div className="text-[13px] font-semibold text-brand-dark">
                    4.9
                  </div>
                  <div className="text-[12px] text-brand-dark/50">
                    Customer Ratings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

