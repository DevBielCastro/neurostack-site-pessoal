import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import DevelopersSection from './components/DevelopersSection';
import ResourcesSection from './components/ResourcesSection';
import GrowthSection from './components/GrowthSection';
import PricingSection from './components/PricingSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      {/* (CORRIGIDO) A classe 'overflow-hidden' aqui contém todas as secções
          e remove a barra de rolagem lateral de forma definitiva. */}
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