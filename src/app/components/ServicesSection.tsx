"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Check, ClipboardList, DatabaseZap, LayoutDashboard, PackageCheck, Route, ShoppingBag, UsersRound } from 'lucide-react';

const services = [
  {
    icon: ClipboardList,
    title: 'Fluxo administrativo digital',
    description: 'Mapeamos rotinas internas e transformamos processos manuais em etapas claras, acompanháveis e padronizadas.',
    outcome: 'Menos retrabalho e mais previsibilidade.',
  },
  {
    icon: ShoppingBag,
    title: 'Controle de vendas e pedidos',
    description: 'Centralizamos orçamentos, pedidos, status, histórico e acompanhamento comercial em um fluxo único.',
    outcome: 'Menos venda perdida e mais gestão comercial.',
  },
  {
    icon: UsersRound,
    title: 'Gestão de clientes e atendimento',
    description: 'Organizamos cadastro, histórico e etapas de relacionamento para sua equipe atender com contexto.',
    outcome: 'Clientes melhor acompanhados.',
  },
  {
    icon: PackageCheck,
    title: 'Estoque e movimentações',
    description: 'Criamos controle de entradas, saídas, alertas e relatórios para evitar perda, ruptura e compras sem dados.',
    outcome: 'Estoque mais seguro e administrável.',
  },
  {
    icon: Bot,
    title: 'Automação de tarefas repetitivas',
    description: 'Automatizamos notificações, registros, atualizações, integrações e etapas que consomem tempo da equipe.',
    outcome: 'Equipe livre para focar no que gera valor.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboards e indicadores',
    description: 'Construímos painéis simples para visualizar vendas, clientes, estoque, produtividade e gargalos da operação.',
    outcome: 'Decisão baseada em dados reais.',
  },
];

const process = [
  {
    title: 'Diagnóstico',
    description: 'Entendemos sua operação, gargalos, ferramentas atuais e o que precisa virar processo digital.',
  },
  {
    title: 'Protótipo funcional',
    description: 'Montamos uma visão inicial do fluxo, telas e módulos para validar com quem realmente usa.',
  },
  {
    title: 'Implantação',
    description: 'Configuramos módulos, dados, permissões, automações e treinamos a equipe para usar na rotina.',
  },
  {
    title: 'Evolução contínua',
    description: 'Acompanhamos ajustes, novos módulos e melhorias conforme a empresa cresce e muda.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-ns-bg py-20 md:py-32 border-b border-white/10">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-ns-primary/30 bg-ns-primary/10 px-4 py-2 text-sm font-semibold text-ns-primary mb-6">
            <DatabaseZap size={16} /> Soluções para problemas reais
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            O que a NeuroStack resolve dentro da sua empresa
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed">
            Nós não vendemos apenas tecnologia. Entregamos controle, fluxo e automação para empresas que precisam operar melhor, vender melhor e decidir com mais clareza.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-ns-card/70 p-7 rounded-2xl border border-white/10 hover:border-ns-primary/60 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-ns-bg inline-flex w-14 h-14 items-center justify-center rounded-xl border border-white/10 mb-5">
                <service.icon className="w-7 h-7 text-ns-primary" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3">{service.title}</h3>
              <p className="text-ns-text/75 mb-5 leading-relaxed flex-grow">{service.description}</p>
              <p className="flex items-start gap-2 text-sm font-semibold text-ns-primary">
                <Check size={16} className="mt-0.5 flex-shrink-0" /> {service.outcome}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div id="process" className="rounded-3xl bg-ns-card/50 border border-white/10 p-6 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-ns-primary/30 bg-ns-primary/10 px-4 py-2 text-sm font-semibold text-ns-primary mb-5">
                <Route size={16} /> Método de implantação
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">Como tiramos a ideia do papel sem travar sua rotina</h3>
            </div>
            <a
              href="https://wa.me/558391533883?text=Ol%C3%A1%2C%20quero%20entender%20como%20a%20NeuroStack%20pode%20implantar%20uma%20solu%C3%A7%C3%A3o%20na%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ns-primary text-ns-bg font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Falar sobre implantação <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {process.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl bg-ns-bg/70 border border-white/10 p-6">
                <div className="w-10 h-10 rounded-full bg-ns-primary text-ns-bg font-extrabold flex items-center justify-center mb-5">{index + 1}</div>
                <h4 className="text-white font-bold text-lg mb-3">{step.title}</h4>
                <p className="text-ns-text/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
