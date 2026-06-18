"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

const steps = [
  "Entendemos a rotina atual da empresa",
  "Mapeamos vendas, clientes, estoque e tarefas administrativas",
  "Definimos módulos, integrações e prioridades",
  "Implantamos a solução com acompanhamento",
];

export default function PricingSection() {
  return (
    <section id="proposal" className="bg-ns-card/30 py-20 md:py-32">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-ns-bg border border-white/10 p-8 md:p-12"
        >
          <p className="text-ns-primary font-bold uppercase tracking-[0.25em] text-xs mb-4">Atendimento consultivo</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            A solução ideal começa pelo entendimento da sua operação
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed max-w-3xl mx-auto">
            Sistemas e automações precisam respeitar a realidade do negócio. Por isso, conduzimos uma conversa inicial antes de indicar o melhor caminho.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-10 text-left">
            {steps.map((step) => (
              <div key={step} className="flex items-start gap-3 rounded-xl bg-ns-card/70 border border-white/10 p-4">
                <CheckCircle className="w-5 h-5 text-ns-primary flex-shrink-0 mt-0.5" />
                <span className="text-ns-text/85">{step}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/558391533883?text=Ol%C3%A1%2C%20quero%20conversar%20com%20a%20NeuroStack%20sobre%20uma%20solu%C3%A7%C3%A3o%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 bg-ns-primary text-ns-bg font-bold py-4 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
          >
            <MessageCircle size={20} /> Conversar com a NeuroStack <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
