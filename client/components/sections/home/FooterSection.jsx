import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Container } from '@/components/layout/Container';

function ActionCard({ title, description }) {
  return (
    <div className="rounded-[14px] border border-white/25 bg-transparent p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[15px] font-semibold text-brand-white">{title}</div>
          <div className="mt-4 max-w-[34ch] text-[13px] leading-relaxed text-brand-white/65">
            {description}
          </div>
        </div>
        <Icon
          icon="mdi:arrow-top-right"
          className="mt-1 h-6 w-6 shrink-0 text-brand-white/85"
        />
      </div>
    </div>
  );
}

export function FooterSection() {
  return (
    <section className="bg-black pb-10 pt-0 md:pb-12">
      <Container>
        {/* Connect panel */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1f2023] p-8 shadow-[0_26px_90px_rgba(0,0,0,0.35)] md:p-9">
          <div className="grid items-start gap-10 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <h2 className="font-serif text-4xl font-semibold leading-[0.98] text-brand-white md:text-[50px]">
                <span className="md:whitespace-nowrap">Connect With Us To</span>
                <br />
                <span className="md:whitespace-nowrap">Discover Exclusive Real</span>
                <br />
                <span className="md:whitespace-nowrap">Estate Opportunities.</span>
              </h2>

              <div className="mt-14 flex max-w-[430px] items-center rounded-full border border-white/20 bg-[#2d3037] p-1">
                <input
                  placeholder="Find your dream house right now"
                  className="w-full bg-transparent px-4 text-[12px] text-brand-white/80 placeholder:text-brand-white/35 focus:outline-none"
                />
                <button
                  type="button"
                  className="shrink-0 rounded-full bg-brand-light px-8 py-2 text-[13px] font-semibold text-brand-dark"
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="space-y-4 md:col-span-4 md:pt-1">
              <ActionCard
                title="Free Consultation"
                description="Our consultation service lets you discuss your real estate needs."
              />
              <ActionCard
                title="Make an Appointment"
                description="Book your appointment today and take the next step toward your real estate goals with Luxira."
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 pt-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-8">
            <div className="flex items-center gap-3 text-brand-white">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/5">
                <Icon icon="mdi:home-outline" className="h-4 w-4 text-[#E2C98C]" />
              </span>
              <span className="font-serif text-[24px] font-semibold">
                LeonHome
              </span>
            </div>

            <nav className="hidden items-center gap-10 text-[18px] text-brand-white md:flex">
              <Link href="#" className="hover:text-brand-white">
                Home
              </Link>
              <Link href="#" className="hover:text-brand-white">
                About Us
              </Link>
              <Link href="#" className="hover:text-brand-white">
                Property
                <Icon icon="mdi:chevron-down" className="ml-1 inline h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-brand-white">
                Services
              </Link>
            </nav>
          </div>

          <div className="mt-10 grid gap-10 md:flex md:items-start md:justify-between md:gap-48">
            <div className="space-y-4 md:w-[24%]">
              <div className="text-[16px] font-semibold text-brand-white">
                Contact
              </div>
              <div className="space-y-3 text-[13px] text-brand-white">
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:phone-outline" className="h-4 w-4" />
                  <span>[+01] 334-998-0934</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:email-outline" className="h-4 w-4" />
                  <span>contact@luxiraestate.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 md:w-[24%]">
              <div className="text-[16px] font-semibold text-brand-white">
                Our Location
              </div>
              <div className="text-[13px] leading-relaxed text-brand-white">
                123 Stadium Avenue, Sport City, Zip Code 45678
              </div>
            </div>

            <div className="space-y-3 md:w-[24%]">
              <div className="text-[16px] font-semibold text-brand-white">
                Properties
              </div>
              <div className="space-y-2 text-[13px] text-brand-white">
                <div>Featured Listings</div>
                <div>Luxury Homes</div>
                <div>Apartments for Sale</div>
              </div>
            </div>

            <div className="space-y-3 md:w-[20%] md:ml-auto">
              <div className="text-[16px] font-semibold text-brand-white">
                Company
              </div>
              <div className="space-y-2 text-[13px] text-brand-white">
                <div>Our Agents</div>
                <div>FAQs</div>
                <div>Careers</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-brand-white/85 md:flex-row md:items-center">
            <div>© 2025 LeonHome real estate All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span>Terms &amp; Conditions</span>
              <span className="text-white/20">|</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </footer>
      </Container>
    </section>
  );
}

