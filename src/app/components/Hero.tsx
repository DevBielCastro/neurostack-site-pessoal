'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

const whatsappLink = "https://wa.me/5583993136252?text=Ol%C3%A1%2C%20quero%20um%20diagn%C3%B3stico%20da%20minha%20empresa%20para%20melhorar%20vendas%2C%20clientes%2C%20estoque%20e%20processos.";

const StaticFallback = () => (
  <div className="w-full h-[400px] bg-ns-card rounded-2xl border border-white/10 flex items-center justify-center">
    <p className="text-ns-text/50">Carregando visualização...</p>
  </div>
);

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <StaticFallback />,
});

const proofPoints = [
  "Diagnóstico do processo antes do orçamento",
  "Soluções para vendas, clientes, estoque e operação",
  "Atendimento consultivo em João Pessoa e online",
];

export default function Hero() {
  return (
    <section className="relative container py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-ns-primary/10 blur-3xl" />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-ns-primary/30 bg-ns-primary/10 px-4 py-2 text-sm font-semibold text-ns-primary mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-ns-primary" />
            Sistemas e automações para empresas que querem vender e operar melhor
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            Automatizamos processos para sua empresa <span className="text-ns-primary">parar de perder tempo, vender mais e ter controle</span>.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-ns-text/85 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            A NeuroStack cria sistemas, sites e automações para resolver problemas reais: atendimento desorganizado, vendas sem rastreio, clientes espalhados, estoque sem controle e relatórios feitos manualmente.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-ns-primary text-ns-bg font-bold py-3.5 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-xl shadow-ns-primary/20">
              Quero diagnosticar minha empresa <MessageCircle size={18} />
            </a>
            <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-ns-card border border-white/20 text-white font-bold py-3.5 px-6 rounded-lg hover:bg-white/10 transition-colors">
              Ver projetos entregues <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="mt-8 grid gap-3 text-left"
          >
            {proofPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <CheckCircle className="w-5 h-5 text-ns-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base text-ns-text/85">{point}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="w-full h-[420px] lg:h-[560px] relative z-0">
          <Suspense fallback={<StaticFallback />}>
            <HeroScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
