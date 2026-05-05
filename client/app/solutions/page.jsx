import { ContactNavbar } from '@/components/sections/contact/ContactNavbar';
import { SolutionsHero } from '@/components/sections/solutions/SolutionsHero';
import { ContactFeatures } from '@/components/sections/contact/ContactFeatures';
import { SolutionsServiceCards } from '@/components/sections/solutions/SolutionsServiceCards';
import { AboutCompanyIntro } from '@/components/sections/about/AboutCompanyIntro';
import { AboutTrustedClients } from '@/components/sections/about/AboutTrustedClients';
import { ContactCta } from '@/components/sections/contact/ContactCta';
import { ContactFooter } from '@/components/sections/contact/ContactFooter';

export const metadata = {
  title: 'Solutions — PositiEV Mobility',
  description:
    'Explore PositiEV solutions — operating lease, charging, maintenance, and DLF franchise programs across India.',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactNavbar />
      <SolutionsHero />
      <ContactFeatures />
      <SolutionsServiceCards />
      <AboutCompanyIntro />
      <AboutTrustedClients />
      <ContactCta />
      <ContactFooter />
    </main>
  );
}
