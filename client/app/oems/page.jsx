import { ContactNavbar } from '@/components/sections/contact/ContactNavbar';
import { OemsHero } from '@/components/sections/oems/OemsHero';
import { OemsChallenge } from '@/components/sections/oems/OemsChallenge';
import { OemsGrowthEngine } from '@/components/sections/oems/OemsGrowthEngine';
import { OemsMldModel } from '@/components/sections/oems/OemsMldModel';
import { ContactCta } from '@/components/sections/contact/ContactCta';
import { ContactFooter } from '@/components/sections/contact/ContactFooter';

export const metadata = {
  title: "OEMs — PositiEV Mobility",
  description:
    'PositiEV OEM partnerships for EV distribution expansion across India with financing and service support.',
};

export default function OemsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactNavbar />
      <OemsHero />
      <OemsChallenge />
      <OemsGrowthEngine />
      <OemsMldModel />
      <ContactCta />
      <ContactFooter />
    </main>
  );
}
