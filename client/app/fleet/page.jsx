import { ContactNavbar } from '@/components/sections/contact/ContactNavbar';
import { FleetHero } from '@/components/sections/fleet/FleetHero';
import { FleetSolution } from '@/components/sections/fleet/FleetSolution';
import { FleetMaximumUptime } from '@/components/sections/fleet/FleetMaximumUptime';
import { ContactCta } from '@/components/sections/contact/ContactCta';
import { ContactFooter } from '@/components/sections/contact/ContactFooter';

export const metadata = {
  title: 'Fleet — PositiEV Mobility',
  description:
    'Electrify your fleet with PositiEV leasing, charging support, predictive maintenance, and uptime assurance.',
};

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactNavbar />
      <FleetHero />
      <FleetSolution />
      <FleetMaximumUptime />
      <ContactCta />
      <ContactFooter />
    </main>
  );
}
