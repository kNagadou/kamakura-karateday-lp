import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EventsSection from '@/components/sections/EventsSection';
import CommitteeSection from '@/components/sections/CommitteeSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
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
