// (CORRIGIDO) Todas as importações usam o alias '@/' para serem mais robustas
import Hero from '@/app/components/Hero';
import ProductsSection from '@/app/components/ProductsSection';
import ServicesSection from '@/app/components/ServicesSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import DevelopersSection from '@/app/components/DevelopersSection';
import ResourcesSection from '@/app/components/ResourcesSection';
import GrowthSection from '@/app/components/GrowthSection';
import PricingSection from '@/app/components/PricingSection';
import CtaSection from '@/app/components/CtaSection';
import Footer from '@/app/components/Footer';

export default function HomePage() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <ProductsSection />
        <ServicesSection />
        <ProjectsSection />
        <DevelopersSection />
        <ResourcesSection />
        <GrowthSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}