"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Code, LayoutDashboard, MessageCircle, Package, Users } from 'lucide-react';

const whatsappBase = "https://wa.me/5583993136252?text=";

const services = [
  { 
    icon: LayoutDashboard, 
    title: "Fluxo administrativo digital", 
    description: "Mapeamos a rotina da empresa e transformamos controles manuais em telas, etapas e automações fáceis de acompanhar.",
    cta: "Quero organizar minha operação",
    message: "Olá, quero organizar o fluxo administrativo da minha empresa com a NeuroStack."
  },
  { 
    icon: Users, 
    title: "Controle de clientes e relacionamento", 
    description: "Centralize cadastros, histórico, retorno de contato, negociações e informações comerciais para vender com mais consistência.",
    cta: "Melhorar controle de clientes",
    message: "Olá, quero melhorar o controle de clientes da minha empresa."
  },
  { 
    icon: BarChart3, 
    title: "Controle de vendas e indicadores", 
    description: "Crie visão clara sobre vendas, status, resultados, gargalos e informações que hoje ficam espalhadas entre pessoas e planilhas.",
    cta: "Ver solução para vendas",
    message: "Olá, quero uma solução para controlar vendas e indicadores."
  },
  { 
    icon: Package, 
    title: "Estoque e movimentações", 
    description: "Acompanhe entradas, saídas, níveis de estoque, necessidade de reposição e movimentações importantes do negócio.",
    cta: "Controlar meu estoque",
    message: "Olá, quero controlar melhor o estoque da minha empresa."
  },
  { 
    icon: MessageCircle, 
    title: "Automação de atendimento e pedidos", 
    description: "Integramos canais como WhatsApp e formulários para reduzir falhas, acelerar respostas e direcionar pedidos ao fluxo certo.",
    cta: "Automatizar atendimento",
    message: "Olá, quero automatizar atendimento e pedidos da minha empresa."
  },
  { 
    icon: Code, 
    title: "Sistemas sob medida", 
    description: "Quando uma ferramenta pronta não resolve, desenvolvemos uma solução ajustada às regras reais da sua operação.",
    cta: "Criar sistema sob medida",
    message: "Olá, quero conversar sobre um sistema sob medida para minha empresa."
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-ns-card/30 py-20 md:py-32 border-b border-ns-card">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-ns-primary mb-4">
            O que entregamos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Soluções digitais que melhoram <span className="text-ns-primary">vendas, gestão e produtividade</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed">
            Não vendemos apenas site ou sistema. Vendemos clareza operacional, menos retrabalho e mais controle para empresas que precisam crescer com organização.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-ns-card p-8 rounded-2xl border border-transparent hover:border-ns-primary/60 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="mb-5">
                <div className="bg-ns-bg inline-block p-4 rounded-xl border border-white/10 group-hover:border-ns-primary/40 transition-colors">
                  <service.icon className="w-8 h-8 text-ns-primary" />
                </div>
              </div>
              <h3 className="font-bold text-xl text-white mb-3">{service.title}</h3>
              <p className="text-ns-text/80 mb-6 leading-relaxed flex-grow">{service.description}</p>
              <a
                href={`${whatsappBase}${encodeURIComponent(service.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ns-primary hover:text-white transition-colors"
              >
                {service.cta} &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
