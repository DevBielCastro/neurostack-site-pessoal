"use client";

import React from "react";
import Image from "next/image"; // Usando o componente de imagem otimizado do Next.js

export default function GrowthSection() {
  return (
    <section id="growth" className="relative bg-ns-bg py-20 md:py-32 overflow-hidden">
      {/* (NOVO) Elementos decorativos de brilho na camada do meio */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-ns-primary/10 rounded-full blur-3xl pointer-events-none z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-ns-primary/5 rounded-full blur-3xl pointer-events-none z-10"></div>

      <div className="container grid md:grid-cols-2 gap-8 md:gap-16 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Coluna de Texto (Esquerda) - Na camada da frente */}
        <div className="relative z-20 text-center md:text-left">
          <p className="font-bold text-lg md:text-xl text-ns-primary mb-4 tracking-wider">
            EXPANSÃO SEM FRONTEIRAS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Sua Presença Digital, <span className="text-ns-primary">Agora Global</span>.
          </h2>
          <p className="text-lg md:text-xl text-ns-text/90 mb-10 leading-relaxed">
            Nossas soluções são a ponte entre seu negócio local e o mercado mundial. 
            Com tecnologia de ponta, posicionamos sua marca para ser vista e consumida 
            em qualquer lugar do planeta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <div className="bg-gradient-to-r from-ns-primary/10 to-ns-primary/5 backdrop-blur-sm border border-ns-primary/30 py-4 px-6 rounded-xl flex-1 transition-all duration-300 hover:border-ns-primary/60">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">+900</p>
              <p className="text-ns-text/90">Empresas Impulsionadas</p>
            </div>
            <div className="bg-gradient-to-r from-ns-primary/10 to-ns-primary/5 backdrop-blur-sm border border-ns-primary/30 py-4 px-6 rounded-xl flex-1 transition-all duration-300 hover:border-ns-primary/60">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">+60</p>
              <p className="text-ns-text/90">Países Alcançados</p>
            </div>
          </div>
        </div>

        {/* Coluna da Imagem (Direita) - Na camada de trás */}
        <div className="absolute top-0 right-0 h-full w-full md:w-1/2 z-0">
          <Image
            src="/assets/plexus-globe-background.png"
            alt="Globo digital representando a expansão global da Neurostack"
            fill
            className="object-contain opacity-20 md:opacity-30"
            priority
          />
          {/* Gradiente para fundir a imagem com o fundo */}
          <div className="absolute inset-0 bg-gradient-to-r from-ns-bg via-ns-bg/50 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}