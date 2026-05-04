import { ContactNavbar } from '@/components/sections/contact/ContactNavbar';
import { ContactFeatures } from '@/components/sections/contact/ContactFeatures';
import { ContactCta } from '@/components/sections/contact/ContactCta';
import { ContactFooter } from '@/components/sections/contact/ContactFooter';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { AboutVideoSection } from '@/components/sections/about/AboutVideoSection';
import { AboutCompanyIntro } from '@/components/sections/about/AboutCompanyIntro';
import { AboutTrustedClients } from '@/components/sections/about/AboutTrustedClients';
import { AboutRecentReviews } from '@/components/sections/about/AboutRecentReviews';

export const metadata = {
  title: 'About Us — PositiEV Mobility',
  description:
    'Learn about PositiEV Mobility — intelligent EV distribution, leasing, charging, and fleet solutions for India.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactNavbar />
      <AboutHero />
      <AboutVideoSection />
      <ContactFeatures />
      <AboutCompanyIntro />
      <AboutTrustedClients />
      <AboutRecentReviews />
      <ContactCta />
      <ContactFooter />
    </main>
  );
}
