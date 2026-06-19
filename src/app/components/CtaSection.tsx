"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="contact" className="relative bg-ns-bg py-20 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] bg-ns-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl border border-ns-primary/20 bg-gradient-to-br from-ns-card to-ns-bg p-8 md:p-12 text-center shadow-2xl shadow-black/20"
        >
          <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-ns-primary mb-4">
            Próximo passo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Vamos encontrar onde sua empresa perde tempo, controle e dinheiro?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 max-w-3xl mx-auto leading-relaxed">
            Fale com a NeuroStack para analisarmos seu processo e indicar a melhor solução: automação, site, landing page, Garçom Digital ou sistema sob medida.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5583993136252?text=Ol%C3%A1%2C%20quero%20agendar%20um%20diagn%C3%B3stico%20com%20a%20NeuroStack."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ns-primary text-ns-bg font-bold py-4 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
            >
              Chamar no WhatsApp <MessageCircle size={20} />
            </a>
            <a
              href="tel:+5583993136252"
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white/10 transition-colors"
            >
              Ligar: (83) 99313-6252
            </a>
          </div>

          <div className="mt-10 max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-ns-text/80">
            <MapPin className="w-5 h-5 text-ns-primary flex-shrink-0" />
            <p>
              Avenida Rio Grande do Sul, 1345, Estados, João Pessoa (PB). CEP: 58030-020
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
