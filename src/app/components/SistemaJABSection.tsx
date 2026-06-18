"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, CheckCircle, Package, Settings2, ShoppingCart, Users, WalletCards, Workflow } from 'lucide-react';

const modules = [
  {
    name: 'Clientes',
    icon: Users,
    title: 'Relacionamento organizado do primeiro contato ao pós-venda',
    description: 'Cadastre clientes, acompanhe histórico, registre interações e entenda melhor quem compra de você.',
    bullets: ['Histórico centralizado', 'Segmentação por perfil', 'Acompanhamento de oportunidades'],
  },
  {
    name: 'Vendas',
    icon: ShoppingCart,
    title: 'Controle comercial para não perder pedidos e negociações',
    description: 'Registre vendas, acompanhe status, organize orçamentos e reduza falhas no processo comercial.',
    bullets: ['Pedidos e orçamentos', 'Funil comercial', 'Relatórios de desempenho'],
  },
  {
    name: 'Estoque',
    icon: Package,
    title: 'Estoque visível para comprar melhor e vender com segurança',
    description: 'Monitore entradas, saídas, níveis críticos e movimentações para evitar perdas e falta de produto.',
    bullets: ['Saldo atualizado', 'Alertas de reposição', 'Movimentações auditáveis'],
  },
  {
    name: 'Financeiro',
    icon: WalletCards,
    title: 'Visão administrativa para entender o dinheiro da operação',
    description: 'Acompanhe recebimentos, custos, relatórios e indicadores essenciais para decisões mais seguras.',
    bullets: ['Contas e recebíveis', 'Indicadores por período', 'Relatórios para gestão'],
  },
  {
    name: 'Automação',
    icon: Workflow,
    title: 'Rotinas automáticas para tirar trabalho repetitivo da equipe',
    description: 'Crie fluxos que notificam, atualizam dados e mantêm a operação andando com menos intervenção manual.',
    bullets: ['Alertas automáticos', 'Integrações sob medida', 'Padronização de processos'],
  },
];

export default function SistemaJABSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeModule = modules[activeIndex];
  const ActiveIcon = activeModule.icon;

  return (
    <section id="sistemajab" className="relative bg-ns-card/30 py-20 md:py-32 border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,174,239,0.12),transparent_28%)]" />
      <div className="container relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-ns-primary/30 bg-ns-primary/10 px-4 py-2 text-sm font-semibold text-ns-primary mb-6">
            <Settings2 size={16} /> Produto principal NeuroStack
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            SistemaJAB: uma central para gerenciar vendas, clientes, estoque e administração
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed">
            Uma solução criada para empresas que precisam sair do controle manual e ganhar visão real da operação, com módulos ajustáveis conforme a rotina do negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-ns-bg border border-white/10 p-4 md:p-6"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {modules.map((module, index) => {
                const Icon = module.icon;
                const active = activeIndex === index;
                return (
                  <button
                    key={module.name}
                    onClick={() => setActiveIndex(index)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all ${
                      active ? 'bg-ns-primary text-ns-bg shadow-lg shadow-ns-primary/20' : 'bg-white/5 text-ns-text hover:bg-white/10'
                    }`}
                  >
                    <Icon size={16} /> {module.name}
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl bg-ns-card border border-white/10 p-6 md:p-8 min-h-[360px] flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-ns-primary/10 border border-ns-primary/30 flex items-center justify-center mb-6">
                <ActiveIcon className="w-7 h-7 text-ns-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">{activeModule.title}</h3>
              <p className="mt-4 text-ns-text/80 leading-relaxed">{activeModule.description}</p>

              <div className="mt-8 space-y-3">
                {activeModule.bullets.map((bullet) => (
                  <p key={bullet} className="flex items-center gap-3 text-ns-text/85">
                    <CheckCircle size={18} className="text-ns-primary flex-shrink-0" />
                    {bullet}
                  </p>
                ))}
              </div>

              <a
                href="https://wa.me/558391533883?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20SistemaJAB%20e%20entender%20como%20ele%20pode%20ajudar%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-8 inline-flex items-center gap-2 font-bold text-ns-primary hover:text-white transition-colors"
              >
                Solicitar demonstração do SistemaJAB <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-ns-bg border border-white/10 p-4 md:p-6 shadow-2xl shadow-black/20"
          >
            <div className="rounded-2xl bg-ns-card overflow-hidden border border-white/10">
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-ns-primary font-bold">Dashboard</p>
                  <h3 className="text-white font-bold text-xl">Visão da operação</h3>
                </div>
                <span className="text-xs bg-green-500/10 text-green-300 px-3 py-1 rounded-full border border-green-400/20">Online</span>
              </div>

              <div className="p-5 md:p-6 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-ns-bg/70 border border-white/10 p-4">
                    <p className="text-ns-text/60 text-sm">Receita do mês</p>
                    <p className="text-2xl font-extrabold text-white mt-2">R$ 68.420</p>
                    <p className="text-xs text-ns-primary mt-1">+18% vs. mês anterior</p>
                  </div>
                  <div className="rounded-xl bg-ns-bg/70 border border-white/10 p-4">
                    <p className="text-ns-text/60 text-sm">Pedidos em aberto</p>
                    <p className="text-2xl font-extrabold text-white mt-2">24</p>
                    <p className="text-xs text-ns-primary mt-1">priorizados por status</p>
                  </div>
                </div>

                <div className="rounded-xl bg-ns-bg/70 border border-white/10 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-white font-bold flex items-center gap-2"><BarChart3 size={18} className="text-ns-primary" /> Indicadores por área</p>
                    <span className="text-xs text-ns-text/60">Atualizado agora</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      ['Vendas concluídas', 82],
                      ['Clientes retornando', 64],
                      ['Estoque saudável', 73],
                      ['Tarefas automatizadas', 91],
                    ].map(([label, width]) => (
                      <div key={label as string}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-ns-text/80">{label}</span>
                          <span className="text-white font-bold">{width}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full rounded-full bg-ns-primary" style={{ width: `${width}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-ns-primary/10 border border-ns-primary/20 p-4">
                    <p className="font-bold text-white mb-2">Próxima ação sugerida</p>
                    <p className="text-sm text-ns-text/75">Repor 12 itens com giro alto antes do fim da semana.</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="font-bold text-white mb-2">Fluxo automatizado</p>
                    <p className="text-sm text-ns-text/75">Pedido aprovado → estoque baixado → cliente notificado.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
