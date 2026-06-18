import Hero from '@/app/components/Hero';
import ProblemSection from '@/app/components/ProblemSection';
import SistemaJABSection from '@/app/components/SistemaJABSection';
import ServicesSection from '@/app/components/ServicesSection';
import ProductsSection from '@/app/components/ProductsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ResourcesSection from '@/app/components/ResourcesSection';
import GrowthSection from '@/app/components/GrowthSection';
import CtaSection from '@/app/components/CtaSection';
import Footer from '@/app/components/Footer';

export default function HomePage() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <ProblemSection />
        <SistemaJABSection />
        <ServicesSection />
        <ProductsSection />
        <ProjectsSection />
        <ResourcesSection />
        <GrowthSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
