"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="contact" className="relative bg-ns-card/30 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ns-primary/5 rounded-full blur-3xl pointer-events-none z-0" />
      
      <div className="container relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl bg-ns-bg border border-white/10 p-8 md:p-12 shadow-2xl shadow-black/20"
        >
          <p className="text-ns-primary font-bold uppercase tracking-[0.25em] text-xs mb-4">Próximo passo</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Vamos organizar a operação da sua empresa com tecnologia de verdade
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 max-w-2xl mx-auto leading-relaxed">
            Agende uma conversa com a NeuroStack para entender como podemos melhorar vendas, clientes, estoque, rotinas administrativas e automações do seu negócio.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/558391533883?text=Ol%C3%A1%2C%20quero%20agendar%20um%20diagn%C3%B3stico%20com%20a%20NeuroStack."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ns-primary text-ns-bg font-bold py-4 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
            >
              <MessageCircle size={20} /> Agendar diagnóstico
            </a>
            <a
              href="mailto:contato@neurostack.com.br"
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white/10 transition-colors"
            >
              <Mail size={20} /> Enviar e-mail
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
