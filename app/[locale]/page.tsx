import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EventsSection from '@/components/sections/EventsSection';
import CommitteeSection from '@/components/sections/CommitteeSection';
import ContactSection from '@/components/sections/ContactSection';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <CommitteeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
