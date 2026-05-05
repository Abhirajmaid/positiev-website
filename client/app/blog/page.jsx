import { ContactNavbar } from '@/components/sections/contact/ContactNavbar';
import { BlogHero } from '@/components/sections/blog/BlogHero';
import { BlogGrid } from '@/components/sections/blog/BlogGrid';
import { ContactCta } from '@/components/sections/contact/ContactCta';
import { ContactFooter } from '@/components/sections/contact/ContactFooter';

export const metadata = {
  title: 'Blog — PositiEV Mobility',
  description:
    'Stories and insights on EV mobility, sustainable fleet practices, charging, and industry trends.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactNavbar />
      <BlogHero />
      <BlogGrid />
      <ContactCta />
      <ContactFooter />
    </main>
  );
}
