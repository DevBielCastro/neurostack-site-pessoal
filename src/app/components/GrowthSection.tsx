"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "1. Diagnóstico",
    description: "Entendemos como sua empresa vende, atende, controla clientes, estoque e processos internos.",
  },
  {
    title: "2. Desenho do fluxo",
    description: "Organizamos o caminho ideal: telas, permissões, automações, relatórios e prioridades de implantação.",
  },
  {
    title: "3. Desenvolvimento",
    description: "Construímos a solução com foco em uso real, clareza visual, responsividade e estabilidade.",
  },
  {
    title: "4. Evolução",
    description: "Depois da entrega, analisamos ajustes e melhorias para acompanhar o crescimento da operação.",
  },
];

export default function GrowthSection() {
  return (
    <section id="process" className="relative bg-ns-bg py-20 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-ns-primary/10 rounded-full blur-3xl pointer-events-none z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-ns-primary/5 rounded-full blur-3xl pointer-events-none z-10"></div>

      <div className="container grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
        <div className="relative z-20 text-center lg:text-left">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-ns-primary mb-4">
            Nosso processo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Primeiro entendemos o problema. Depois construímos a solução que <span className="text-ns-primary">faz sentido para sua operação</span>.
          </h2>
          <p className="text-lg md:text-xl text-ns-text/90 mb-8 leading-relaxed">
            A NeuroStack atua como parceira técnica e estratégica. Nosso trabalho é transformar processos confusos em sistemas claros, automações úteis e páginas que ajudam sua empresa a vender com mais confiança.
          </p>
          
          <div className="grid gap-4 mb-10 text-left">
            {steps.map((step) => (
              <div key={step.title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <CheckCircle className="w-6 h-6 text-ns-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-ns-text/75 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <a
              href="https://wa.me/5583993136252?text=Ol%C3%A1%2C%20quero%20fazer%20um%20diagn%C3%B3stico%20do%20processo%20da%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ns-primary text-ns-bg font-bold py-4 px-10 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
            >
              Agendar diagnóstico
            </a>
            <p className="mt-4 text-sm text-ns-primary font-semibold bg-ns-primary/10 px-3 py-1 rounded-full">
              Sem valores públicos: cada proposta parte da necessidade real da empresa.
            </p>
          </div>
        </div>

        <div className="hidden lg:block absolute top-0 right-0 h-full w-2/3 z-0 transform lg:translate-x-1/4">
          <Image
            src="/assets/plexus-globe-background.png"
            alt="Globo digital representando sistemas conectados e automações empresariais"
            fill
            className="object-contain opacity-20 md:opacity-30"
            sizes="66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ns-bg via-ns-bg/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
