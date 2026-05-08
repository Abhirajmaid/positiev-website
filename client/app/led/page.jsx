import { ContactNavbar } from '@/components/sections/contact/ContactNavbar';
import { LedHero } from '@/components/sections/led/LedHero';
import { LedDealerModel } from '@/components/sections/led/LedDealerModel';
import { LedRevenueStreams } from '@/components/sections/led/LedRevenueStreams';
import { LedReturns } from '@/components/sections/led/LedReturns';
import { ContactCta } from '@/components/sections/contact/ContactCta';
import { ContactFooter } from '@/components/sections/contact/ContactFooter';

export const metadata = {
  title: 'LED — PositiEV Mobility',
  description:
    'Start your EV dealership business with PositiEV dealer-led franchise support, multi-revenue streams, and strong data-backed returns.',
};

export default function LedPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactNavbar />
      <LedHero />
      <LedDealerModel />
      <LedRevenueStreams />
      <LedReturns />
      <ContactCta />
      <ContactFooter />
    </main>
  );
}
