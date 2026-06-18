"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const outcomes = [
  "Processos internos mais organizados e fáceis de acompanhar.",
  "Vendas, clientes e estoque em um fluxo único de informação.",
  "Menos dependência de planilhas, conversas soltas e controles manuais.",
  "Base pronta para crescer com novos módulos, integrações e automações.",
];

export default function GrowthSection() {
  return (
    <section id="growth" className="relative bg-ns-bg py-20 md:py-32 overflow-hidden border-b border-white/10">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-ns-primary/10 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-ns-primary/5 rounded-full blur-3xl pointer-events-none z-10" />

      <div className="container grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative px-4 sm:px-6 lg:px-8">
        <div className="relative z-20 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Do caos administrativo a uma operação <span className="text-ns-primary">mais previsível e escalável</span>
          </h2>
          <p className="text-lg md:text-xl text-ns-text/90 mb-8 leading-relaxed">
            A NeuroStack desenvolve soluções para empresas que querem parar de apagar incêndio e começar a trabalhar com processo, dados e automação. O objetivo é simples: fazer a tecnologia trabalhar a favor da gestão.
          </p>
          
          <ul className="space-y-4 mb-10 text-left">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-ns-primary flex-shrink-0 mt-0.5" />
                <span className="text-ns-text">{outcome}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <a
              href="https://wa.me/558391533883?text=Ol%C3%A1%2C%20quero%20automatizar%20processos%20da%20minha%20empresa%20com%20a%20NeuroStack."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ns-primary text-ns-bg font-bold py-4 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
            >
              Quero automatizar minha empresa
            </a>
            <a href="#sistemajab" className="inline-block bg-white/5 border border-white/15 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white/10 transition-colors">
              Ver SistemaJAB
            </a>
          </div>
        </div>

        <div className="hidden lg:block absolute top-0 right-0 h-full w-2/3 z-0 transform lg:translate-x-1/4">
          <Image
            src="/assets/plexus-globe-background.png"
            alt="Rede digital representando processos conectados pela NeuroStack"
            fill
            className="object-contain opacity-20 md:opacity-30"
            sizes="66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ns-bg via-ns-bg/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
