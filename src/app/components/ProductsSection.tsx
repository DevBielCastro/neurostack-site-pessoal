"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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

  // Lembrete: Verifique se a extensão (.png ou .jpg) aqui corresponde aos seus arquivos reais.
  const products = [
    { name: 'E-commerce', description: 'Lojas virtuais completas, otimizadas para performance, conversão e prontas para escalar suas vendas.', imageSrc: '/assets/produto-ecommerce.png' },
    { name: 'Landing Pages', description: 'Páginas de alto impacto visual e totalmente focadas em capturar leads e impulsionar suas campanhas de marketing.', imageSrc: '/assets/produto-landingpage.png' },
    { name: 'Sistemas Sob Medida', description: 'Soluções de software robustas, criadas do zero para automatizar processos e otimizar a operação da sua empresa.', imageSrc: '/assets/produto-sistemas.png' },
    { name: 'Garçom Digital', description: 'Modernize o atendimento do seu restaurante com pedidos e pagamentos via QR Code, diretamente da mesa do cliente.', imageSrc: '/assets/produto-garcom-digital.png' },
  ];

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
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Soluções Digitais <span className="text-ns-primary">para Cada Necessidade</span>
        </h2>
        <p className="mt-4 text-lg text-ns-text/80">
          Do conceito à realidade, criamos produtos que impulsionam o crescimento do seu negócio.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-ns-card bg-ns-bg shadow-2xl" ref={emblaRef}>
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
                  <h3 className="text-3xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-lg text-ns-text/80">{product.description}</p>
                </motion.div>

                {/* (ALTERADO) Container da imagem agora centraliza e limita o tamanho */}
                <div className="order-first md:order-last flex items-center justify-center h-full">
                  <div className="w-full md:w-3/5"> {/* Reduz o tamanho da imagem para 60% em telas maiores */}
                    <img
                      src={product.imageSrc}
                      alt={`Imagem do produto ${product.name}`}
                      className="rounded-xl w-full h-auto object-contain" // Mostra a imagem inteira
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${ index === selectedIndex ? 'bg-ns-primary w-6' : 'bg-ns-card' }`}
            aria-label={`Ir para o produto ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
}