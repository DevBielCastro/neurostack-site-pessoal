"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function GrowthSection() {
  return (
    <section id="growth" className="relative bg-ns-bg py-20 md:py-32 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-ns-primary/10 rounded-full blur-3xl pointer-events-none z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-ns-primary/5 rounded-full blur-3xl pointer-events-none z-10"></div>

      <div className="container grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
        
        {/* Coluna de Texto (Esquerda) */}
        <div className="relative z-20 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Do site institucional ao produto SaaS — <span className="text-ns-primary">entregamos soluções que vendem.</span>
          </h2>
          <p className="text-lg md:text-xl text-ns-text/90 mb-8 leading-relaxed">
            Na Neurostack desenvolvemos soluções digitais completas: sites institucionais e lojas, plataformas sob medida, o Garçom Digital para foodservice e até jogos indie. Entregamos com agilidade, testes reais com clientes-piloto e acompanhamento para você escalar com segurança. Se prefere resultado comprovado a promessas vazias, fale com a gente.
          </p>
          
          <ul className="space-y-4 mb-10 text-left">
            <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-ns-primary flex-shrink-0" />
                <span className="text-ns-text">Desenvolvimento web e landing pages de alta conversão.</span>
            </li>
            <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-ns-primary flex-shrink-0" />
                <span className="text-ns-text">Produtos SaaS e integrações (WhatsApp, PDV, gateways de pagamento).</span>
            </li>
             <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-ns-primary flex-shrink-0" />
                <span className="text-ns-text">Games indie e experiências digitais criativas.</span>
            </li>
          </ul>

          <div className="flex flex-col items-center lg:items-start">
            <a
                href="#contact"
                className="inline-block bg-ns-primary text-ns-bg font-bold py-4 px-10 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
            >
                Fale com um especialista
            </a>
            <p className="mt-4 text-sm text-ns-primary font-semibold bg-ns-primary/10 px-3 py-1 rounded-full">
                Piloto em 48h
            </p>
          </div>
        </div>

        {/* Coluna da Imagem (Direita) */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-2/3 z-0 transform lg:translate-x-1/4">
          <Image
            src="/assets/plexus-globe-background.png"
            alt="Globo digital representando a expansão global da Neurostack"
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