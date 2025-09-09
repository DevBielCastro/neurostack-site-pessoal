import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import DevelopersSection from './components/DevelopersSection';
import ResourcesSection from './components/ResourcesSection'; // 1. Importa a nova seção
import GrowthSection from './components/GrowthSection';
import PricingSection from './components/PricingSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <ProductsSection />
        <DevelopersSection />
        <ResourcesSection /> {/* 2. Adiciona a nova seção na ordem correta */}
        <GrowthSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}