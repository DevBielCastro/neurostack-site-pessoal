"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section id="contact" className="relative bg-ns-bg py-20 md:py-28 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ns-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      
      <div className="container relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Pronto para Construir o Futuro do Seu Negócio?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 max-w-2xl mx-auto leading-relaxed">
            Nossa equipa está pronta para transformar as suas ideias em realidade. Agende uma conversa sem compromisso e vamos traçar o plano para o seu sucesso.
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/558391533883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ns-primary text-ns-bg font-bold py-4 px-10 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
            >
              Fale com um Especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}