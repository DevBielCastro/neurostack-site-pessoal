"use client";

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Fallback estático
const StaticFallback = () => (
  <div className="w-full h-[400px] bg-ns-card rounded-lg border border-white/10 flex items-center justify-center">
    <p className="text-ns-text/50">A carregar visualização...</p>
  </div>
);

// Importação dinâmica do componente 3D
const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <StaticFallback />,
});

export default function Hero() {
  return (
    <section className="container py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* (ALTERADO) O grid agora passa para 2 colunas apenas em ecrãs grandes (lg) */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Coluna de Texto */}
        <div className="text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            Criamos soluções digitais que <span className="text-ns-primary">transformam</span> o seu negócio
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-ns-text/80 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Sites, sistemas e soluções de software que unem design inovador com tecnologia de ponta.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#projects" className="bg-ns-primary text-ns-bg font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
              Nossos Projetos
            </a>
            <a href="#services" className="bg-ns-card border border-white/20 text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors">
              Nossos Serviços
            </a>
          </motion.div>
        </div>

        {/* Coluna Visual (Animação) */}
        <div className="w-full h-[400px] lg:h-[500px]">
          <Suspense fallback={<StaticFallback />}>
            <HeroScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
}