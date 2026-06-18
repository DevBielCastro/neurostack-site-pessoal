"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Bot, CheckCircle, Cloud, Headset, LockKeyhole, Plug, Server, Shield, Smartphone, Zap } from 'lucide-react';

const resources = [
  { icon: Plug, title: "Integrações", description: "Conectamos sistemas, formulários, WhatsApp, ERPs, CRMs e ferramentas que sua empresa já usa." },
  { icon: Bot, title: "Automação", description: "Fluxos para registrar, avisar, atualizar e organizar tarefas repetitivas sem depender de ação manual." },
  { icon: BarChart3, title: "Dashboards", description: "Indicadores simples para acompanhar vendas, clientes, estoque, produtividade e gargalos operacionais." },
  { icon: LockKeyhole, title: "Permissões", description: "Acessos por perfil para proteger informações e deixar cada pessoa com a visão certa do processo." },
  { icon: Cloud, title: "Cloud", description: "Soluções online, acessíveis de qualquer lugar, com estrutura preparada para crescer com o negócio." },
  { icon: Smartphone, title: "Mobile-first", description: "Interfaces pensadas para uso no computador e no celular, sem complicar a rotina da equipe." },
  { icon: Shield, title: "Segurança", description: "Boas práticas de autenticação, backup, organização de dados e proteção do ambiente." },
  { icon: Headset, title: "Suporte", description: "Acompanhamento para implantação, ajustes e evolução da solução conforme sua operação amadurece." },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="bg-ns-bg py-20 md:py-32 border-b border-white/10">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Recursos que fazem a operação funcionar com <span className="text-ns-primary">mais controle</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed">
            Unimos desenvolvimento, automação, dados e suporte para criar soluções que entram na rotina da empresa e geram organização de verdade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="bg-ns-card/60 p-6 rounded-2xl border border-white/10 hover:border-ns-primary/50 hover:bg-ns-card transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <div className="bg-ns-bg p-3 rounded-xl inline-flex border border-white/10 mb-5">
                <resource.icon className="w-6 h-6 text-ns-primary" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">{resource.title}</h3>
              <p className="text-sm text-ns-text/70 leading-relaxed">{resource.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div className="rounded-2xl bg-ns-card/50 border border-white/10 p-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
            <Server className="w-12 h-12 text-ns-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Sistema sob medida</h3>
            <p className="text-ns-text/80">A solução respeita sua regra de negócio, sem forçar sua empresa a caber em ferramenta genérica.</p>
          </motion.div>
          <motion.div className="rounded-2xl bg-ns-card/50 border border-white/10 p-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <Zap className="w-12 h-12 text-ns-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Automação prática</h3>
            <p className="text-ns-text/80">Automatizamos o que consome tempo, gera erro e trava o crescimento da operação.</p>
          </motion.div>
          <motion.div className="rounded-2xl bg-ns-card/50 border border-white/10 p-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
            <CheckCircle className="w-12 h-12 text-ns-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Gestão com clareza</h3>
            <p className="text-ns-text/80">Transformamos dados dispersos em visão simples para o gestor acompanhar o negócio.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
