"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, BarChart3, ClipboardList, Package, Repeat, Users } from "lucide-react";

const painPoints = [
  {
    icon: ClipboardList,
    title: "Vendas espalhadas",
    description: "Pedidos em WhatsApp, caderno, planilhas e conversas que se perdem no meio da operação.",
  },
  {
    icon: Users,
    title: "Clientes sem histórico",
    description: "A empresa atende, vende e entrega, mas não constrói uma base organizada para vender de novo.",
  },
  {
    icon: Package,
    title: "Estoque no escuro",
    description: "Entradas, saídas e reposições dependem de conferência manual, memória ou planilhas desatualizadas.",
  },
  {
    icon: BarChart3,
    title: "Relatórios manuais",
    description: "Gestores perdem horas juntando dados para entender faturamento, custos e produtividade.",
  },
  {
    icon: Repeat,
    title: "Processos repetitivos",
    description: "Tarefas que poderiam ser automáticas continuam consumindo tempo da equipe todos os dias.",
  },
  {
    icon: AlertTriangle,
    title: "Decisão sem clareza",
    description: "Sem dados centralizados, a empresa cresce com gargalos invisíveis e perde oportunidades.",
  },
];

export default function ProblemSection() {
  return (
    <section id="solutions" className="bg-ns-card/30 py-20 md:py-28 border-y border-white/10">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-ns-primary mb-4">
            Problemas que resolvemos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Sua empresa não precisa de mais planilhas. Precisa de <span className="text-ns-primary">fluxo, controle e automação</span>.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed">
            Antes de vender tecnologia, entendemos o seu processo. Depois criamos a solução certa para reduzir retrabalho, organizar informações e dar visão real da operação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-ns-bg/70 p-7 hover:border-ns-primary/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-ns-primary/10 border border-ns-primary/20 flex items-center justify-center mb-5 group-hover:bg-ns-primary group-hover:text-ns-bg transition-colors">
                <item.icon className="w-6 h-6 text-ns-primary group-hover:text-ns-bg transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-ns-text/75 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
