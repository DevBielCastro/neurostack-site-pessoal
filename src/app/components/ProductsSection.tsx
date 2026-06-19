"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const products = [
  {
    name: 'Sistemas administrativos sob medida',
    description: 'Sistemas criados a partir da rotina real da empresa para organizar clientes, vendas, estoque, relatórios, permissões e processos internos.',
    imageSrc: '/assets/produto-sistemas.png',
    href: '#projects',
  },
  {
    name: 'Garçom Digital',
    description: 'Solução para restaurantes modernizarem pedidos, cardápio digital e gestão operacional com mais velocidade e menos erro no atendimento.',
    imageSrc: '/assets/produto-garcom-digital.png',
    href: '#projects',
  },
  {
    name: 'Automação de processos',
    description: 'Fluxos digitais para reduzir retrabalho, padronizar atendimento, acompanhar vendas e conectar informações que antes ficavam espalhadas.',
    imageSrc: '/assets/produto-sistemas.png',
    href: '#services',
  },
  {
    name: 'Sites e Landing Pages',
    description: 'Presença digital com posicionamento, copy e estrutura de conversão para gerar contato qualificado, autoridade e oportunidades comerciais.',
    imageSrc: '/assets/produto-landingpage.png',
    href: '#contact',
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
      id="products"
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
      className="container py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-ns-primary mb-4">
          Produtos e soluções
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Tecnologia para tirar sua operação do improviso
        </h2>
        <p className="mt-4 text-lg text-ns-text/80">
          Cada solução é pensada para transformar processos confusos em fluxos digitais claros, mensuráveis e prontos para crescer.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-ns-card/60 shadow-2xl" ref={emblaRef}>
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
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{product.name}</h3>
                  <p className="text-lg text-ns-text/80 leading-relaxed mb-6">{product.description}</p>
                  <a href={product.href} className="inline-flex items-center gap-2 text-ns-primary font-bold hover:text-white transition-colors">
                    Entender solução <ArrowRight size={18} />
                  </a>
                </motion.div>

                <div className="order-first md:order-last flex items-center justify-center h-full">
                  <div className="w-full md:w-3/5">
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
        {products.map((product, index) => (
          <button
            key={product.name}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${ index === selectedIndex ? 'bg-ns-primary w-8' : 'bg-ns-card' }`}
            aria-label={`Ir para a solução ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
}
