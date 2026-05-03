import Image from 'next/image';
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
    <section id="contact" className="bg-black pb-10 pt-0 md:pb-12">
      <Container>
        {/* Connect panel */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1f2023] p-8 shadow-[0_26px_90px_rgba(0,0,0,0.35)] md:p-9">
          <div className="grid items-start gap-10 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <h2 className="font-serif text-4xl font-semibold leading-[0.98] text-brand-white md:text-[50px]">
                <span className="md:whitespace-nowrap">Partner With PositiEV</span>
                <br />
                <span className="md:whitespace-nowrap">to Unlock India&apos;s</span>
                <br />
                <span className="md:whitespace-nowrap">EV Opportunity.</span>
              </h2>

              <div className="mt-14 flex max-w-[430px] items-center rounded-full border border-white/20 bg-[#2d3037] p-1">
                <input
                  placeholder="Your business email address"
                  className="w-full bg-transparent px-4 text-[12px] text-brand-white/80 placeholder:text-brand-white/35 focus:outline-none"
                />
                <button
                  type="button"
                  className="shrink-0 rounded-full bg-brand-light px-8 py-2 text-[13px] font-semibold text-brand-dark"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            <div className="space-y-4 md:col-span-4 md:pt-1">
              <ActionCard
                title="Become a DLF Franchisee"
                description="Join our growing network of Dealer Lessor Franchisees across India and unlock guaranteed returns."
              />
              <ActionCard
                title="OEM or NBFC Partnership"
                description="Explore Master Dealer agreements and co-financing opportunities with PositiEV Mobility."
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 pt-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-8">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/logo_2.png"
                alt="PositiEV Mobility"
                width={200}
                height={48}
                className="h-9 w-auto max-w-[min(200px,52vw)] object-contain object-left md:h-10"
              />
            </Link>

            <nav className="hidden items-center gap-10 text-[18px] text-brand-white md:flex">
              <Link href="/" className="hover:text-brand-white">
                Home
              </Link>
              <Link href="#solutions" className="hover:text-brand-white">
                Solutions
              </Link>
              <Link href="#for-dealers" className="hover:text-brand-white">
                For Dealers
              </Link>
              <Link href="#team" className="hover:text-brand-white">
                Team
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
                  <span>+91 81307 55275</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:email-outline" className="h-4 w-4" />
                  <span>hiten@positievmobility.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:web" className="h-4 w-4" />
                  <span>www.positievmobility.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 md:w-[24%]">
              <div className="text-[16px] font-semibold text-brand-white">
                Our Presence
              </div>
              <div className="text-[13px] leading-relaxed text-brand-white">
                Pan-India operations. Currently establishing in key metros with
                plans to cover 25+ locations by 2027.
              </div>
            </div>

            <div className="space-y-3 md:w-[24%]">
              <div className="text-[16px] font-semibold text-brand-white">
                Solutions
              </div>
              <div className="space-y-2 text-[13px] text-brand-white">
                <div>Operating Lease</div>
                <div>Charging Infrastructure</div>
                <div>EV Maintenance</div>
                <div>DLF Franchise</div>
              </div>
            </div>

            <div className="space-y-3 md:w-[20%] md:ml-auto">
              <div className="text-[16px] font-semibold text-brand-white">
                Company
              </div>
              <div className="space-y-2 text-[13px] text-brand-white">
                <div>About Us</div>
                <div>Team</div>
                <div>FAQs</div>
                <div>Careers</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-brand-white/85 md:flex-row md:items-center">
            <div>© 2026 PositiEV Mobility. All rights reserved.</div>
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

