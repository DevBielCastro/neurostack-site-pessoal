"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Bot, CheckCircle, Cloud, CreditCard, Headset, Package, Plug, Server, Shield, Smartphone, Users, Zap } from 'lucide-react';

const resources = [
  { icon: Users, title: "CRM operacional", description: "Clientes, histórico, contatos e acompanhamento comercial em um fluxo organizado." },
  { icon: Package, title: "Estoque e movimentações", description: "Entradas, saídas, alertas e visão de produtos ou recursos críticos." },
  { icon: BarChart3, title: "Dashboards e relatórios", description: "Indicadores para vender melhor, reduzir gargalos e acompanhar resultados." },
  { icon: Bot, title: "Automação de processos", description: "Rotinas repetitivas transformadas em fluxos mais rápidos e confiáveis." },
  { icon: Plug, title: "APIs e integrações", description: "Conexão com ERPs, CRMs, gateways, WhatsApp e ferramentas externas." },
  { icon: CreditCard, title: "Pagamentos e financeiro", description: "Integrações com Pix, cartão, boletos e relatórios de movimentação." },
  { icon: Shield, title: "Segurança e permissões", description: "Acesso por usuário, boas práticas, backups e proteção de dados operacionais." },
  { icon: Cloud, title: "Cloud e disponibilidade", description: "Hospedagem, deploy e infraestrutura pensada para estabilidade do negócio." },
  { icon: Smartphone, title: "Mobile-first", description: "Sistemas e páginas pensadas para uso real no celular, tablet e desktop." },
  { icon: Headset, title: "Suporte consultivo", description: "Acompanhamento para evoluir a solução conforme a rotina da empresa muda." },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="bg-ns-bg py-20 md:py-32 border-t border-b border-ns-card/50">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-ns-primary mb-4">
            Tecnologia com propósito
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Recursos que tiram dados do improviso e colocam sua empresa no controle
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed">
            Usamos tecnologia como meio para resolver rotina empresarial: vender melhor, atender melhor, controlar melhor e decidir com mais segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="bg-ns-card/50 p-6 rounded-xl border border-ns-card hover:border-ns-primary/50 hover:bg-ns-card transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-ns-card p-3 rounded-lg border border-white/10">
                  <resource.icon className="w-6 h-6 text-ns-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{resource.title}</h3>
                  <p className="text-sm text-ns-text/70 leading-relaxed">{resource.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <Server className="w-12 h-12 text-ns-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Sistema certo</h3>
            <p className="text-ns-text/80">A solução nasce do processo da empresa, não de uma lista genérica de funcionalidades.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
            <Zap className="w-12 h-12 text-ns-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Menos retrabalho</h3>
            <p className="text-ns-text/80">Automatizamos rotinas repetitivas para liberar tempo da equipe e reduzir falhas operacionais.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} viewport={{ once: true }}>
            <CheckCircle className="w-12 h-12 text-ns-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Mais clareza</h3>
            <p className="text-ns-text/80">Dados organizados ajudam gestores a tomar decisões mais rápidas e com menos achismo.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
