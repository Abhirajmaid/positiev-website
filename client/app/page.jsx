import { HashContactRedirect } from '@/components/HashContactRedirect';
import { Hero } from '@/components/sections/home/Hero';
import { ExperienceSection } from '@/components/sections/home/ExperienceSection';
import { TeamSection } from '@/components/sections/home/TeamSection';
import { DreamSection } from '@/components/sections/home/DreamSection';
import { DiscoverSection } from '@/components/sections/home/DiscoverSection';
import { TrendsSection } from '@/components/sections/home/TrendsSection';
import { FaqSection } from '@/components/sections/home/FaqSection';
import { CtaSection } from '@/components/sections/home/CtaSection';
import { FooterSection } from '@/components/sections/home/FooterSection';

export default function HomePage() {
  return (
    <main>
      <HashContactRedirect />
      <Hero />
      <ExperienceSection />
      <TeamSection />
      <DreamSection />
      <DiscoverSection />
      <TrendsSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

