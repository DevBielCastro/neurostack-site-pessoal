"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const whatsappLink = "https://wa.me/558391533883?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20NeuroStack%20para%20minha%20empresa.";

const products = [
  {
    name: 'SistemaJAB',
    eyebrow: 'Produto principal',
    description: 'Central administrativa para organizar clientes, vendas, estoque, financeiro, relatórios e automações em um ambiente feito para a realidade da empresa.',
    imageSrc: '/assets/produto-sistemas.png',
  },
  {
    name: 'Automações Comerciais',
    eyebrow: 'Vendas e atendimento',
    description: 'Fluxos que ajudam sua equipe a registrar oportunidades, acionar clientes, acompanhar pedidos e reduzir tarefas repetitivas no atendimento.',
    imageSrc: '/assets/produto-garcom-digital.png',
  },
  {
    name: 'Painéis de Gestão',
    eyebrow: 'Dados para decidir',
    description: 'Dashboards para visualizar vendas, clientes, estoque, indicadores e gargalos sem precisar garimpar informações em várias planilhas.',
    imageSrc: '/assets/produto-ecommerce.png',
  },
  {
    name: 'Sites e Portais que Vendem',
    eyebrow: 'Presença digital estratégica',
    description: 'Páginas e portais para apresentar sua empresa com clareza, gerar confiança e levar o visitante para uma conversa comercial.',
    imageSrc: '/assets/produto-landingpage.png',
  },
];

export default function ProductsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <motion.section
      id="solutions"
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
      className="container py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Soluções digitais para transformar operação em <span className="text-ns-primary">vantagem competitiva</span>
        </h2>
        <p className="mt-5 text-lg text-ns-text/80 leading-relaxed">
          Cada solução é pensada para resolver uma dor concreta: vender melhor, controlar melhor, atender melhor e enxergar melhor a empresa.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-ns-card/60 shadow-2xl shadow-black/20" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            <div className="flex-shrink-0 flex-grow-0 basis-full min-w-0" key={product.name}>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center p-8 md:p-12">
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center md:text-left"
                >
                  <p className="text-ns-primary font-bold uppercase tracking-[0.25em] text-xs mb-3">{product.eyebrow}</p>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{product.name}</h3>
                  <p className="text-lg text-ns-text/80 leading-relaxed mb-7">{product.description}</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-ns-primary text-ns-bg font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                    Quero conversar sobre isso <ArrowRight size={18} />
                  </a>
                </motion.div>

                <div className="order-first md:order-last flex items-center justify-center h-full">
                  <div className="w-full md:w-3/5 rounded-2xl bg-ns-bg/70 border border-white/10 p-4">
                    <img
                      src={product.imageSrc}
                      alt={`Imagem da solução ${product.name}`}
                      className="rounded-xl w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-3 mt-8">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${ index === selectedIndex ? 'bg-ns-primary w-8' : 'bg-ns-card' }`}
            aria-label={`Ir para a solução ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
}
