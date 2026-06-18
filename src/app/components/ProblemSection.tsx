"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, BarChart3, FileSpreadsheet, PackageSearch, Repeat2, ShoppingCart, Users } from 'lucide-react';

const problems = [
  {
    icon: FileSpreadsheet,
    title: 'Planilhas espalhadas',
    description: 'Informações importantes ficam soltas, difíceis de encontrar e vulneráveis a erro humano.',
  },
  {
    icon: ShoppingCart,
    title: 'Vendas sem rastreio',
    description: 'Pedidos, orçamentos e negociações se perdem entre conversas, anotações e controles paralelos.',
  },
  {
    icon: Users,
    title: 'Clientes desorganizados',
    description: 'Sem histórico centralizado, o atendimento perde contexto e oportunidades deixam de virar venda.',
  },
  {
    icon: PackageSearch,
    title: 'Estoque sem previsibilidade',
    description: 'A empresa compra tarde, vende sem saber o saldo real ou deixa dinheiro parado em produtos.',
  },
  {
    icon: Repeat2,
    title: 'Retrabalho operacional',
    description: 'A equipe repete tarefas que poderiam ser automatizadas e desperdiça tempo administrativo.',
  },
  {
    icon: BarChart3,
    title: 'Decisão sem dados',
    description: 'Sem painel claro, o gestor depende de sensação e demora para enxergar gargalos e oportunidades.',
  },
];

export default function ProblemSection() {
  return (
    <section id="solutions" className="bg-ns-bg py-20 md:py-28 border-b border-white/10">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-ns-accent/30 bg-ns-accent/10 px-4 py-2 text-sm font-semibold text-ns-accent mb-6">
              <AlertTriangle size={16} /> O problema não é falta de esforço
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Sua empresa pode estar perdendo dinheiro por falta de <span className="text-ns-primary">processo e controle</span>
            </h2>
            <p className="mt-6 text-lg text-ns-text/80 leading-relaxed">
              A NeuroStack entra para transformar rotinas manuais em fluxos digitais: menos retrabalho, mais clareza para vender, atender, controlar e decidir.
            </p>
            <a
              href="https://wa.me/558391533883?text=Ol%C3%A1%2C%20quero%20mapear%20os%20gargalos%20da%20minha%20empresa%20com%20a%20NeuroStack."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-white text-ns-bg font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              Mapear gargalos da minha empresa
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-ns-card/70 border border-white/10 p-6 hover:border-ns-primary/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-ns-primary/10 border border-ns-primary/30 flex items-center justify-center mb-5 group-hover:bg-ns-primary group-hover:text-ns-bg transition-colors">
                  <problem.icon className="w-6 h-6 text-ns-primary group-hover:text-ns-bg transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-ns-text/75 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
