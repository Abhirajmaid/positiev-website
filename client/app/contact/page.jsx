import { ContactNavbar } from '@/components/sections/contact/ContactNavbar';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactFeatures } from '@/components/sections/contact/ContactFeatures';
import { ContactFormSection } from '@/components/sections/contact/ContactFormSection';
import { LogoMarquee } from '@/components/sections/contact/LogoMarquee';
import { ContactCta } from '@/components/sections/contact/ContactCta';
import { ContactFooter } from '@/components/sections/contact/ContactFooter';

export const metadata = {
  title: 'Contact — PositiEV Mobility',
  description:
    'Get in touch with PositiEV. Questions about EV distribution, leasing, or fleet solutions — our team is here to help.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactNavbar />
      <ContactHero />
      <ContactFeatures />
      <ContactFormSection />
      <LogoMarquee />
      <ContactCta />
      <ContactFooter />
    </main>
  );
}
