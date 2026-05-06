import { ContactNavbar } from '@/components/sections/contact/ContactNavbar';
import { SegmentsHero } from '@/components/sections/segments/SegmentsHero';
import { SegmentsFeatures } from '@/components/sections/segments/SegmentsFeatures';
import { SegmentsFaq } from '@/components/sections/segments/SegmentsFaq';
import { ContactCta } from '@/components/sections/contact/ContactCta';
import { ContactFooter } from '@/components/sections/contact/ContactFooter';

export const metadata = {
  title: 'Segments — PositiEV Mobility',
  description:
    'Explore PositiEV segments for OEMs, dealers, fleets, and investors — EV distribution, leasing, and franchise programmes across India.',
};

export default function SegmentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactNavbar />
      <SegmentsHero />
      <SegmentsFeatures />
      <SegmentsFaq />
      <ContactCta />
      <ContactFooter />
    </main>
  );
}
