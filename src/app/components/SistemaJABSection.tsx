"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle, FileText, Lock, Package, Settings, ShieldCheck, Users } from "lucide-react";

const modules = [
  { icon: FileText, title: "Comandas", description: "Organização de solicitações, conferências, status e histórico operacional em uma tela centralizada." },
  { icon: Users, title: "Unidades", description: "Controle separado por unidade, facilitando leitura, acompanhamento e tomada de decisão." },
  { icon: Package, title: "Operação", description: "Acompanhamento de entregas, pendências, rotinas internas e movimentações importantes." },
  { icon: BarChart3, title: "Relatórios", description: "Painéis e indicadores para substituir controles manuais e reduzir dependência de planilhas soltas." },
  { icon: ShieldCheck, title: "Acesso interno", description: "Ambiente restrito para equipe autorizada, com foco em segurança e organização dos dados." },
  { icon: Settings, title: "Regras sob medida", description: "Fluxos adaptados ao jeito que a empresa trabalha, sem forçar a operação a caber em um sistema genérico." },
];

const screenshots = [
  {
    src: "/assets/jab-login-preview.png",
    title: "Tela de acesso",
    description: "Ambiente interno com entrada segura, identidade visual da operação e estrutura exclusiva para a equipe.",
  },
  {
    src: "/assets/jab-dashboard-preview.png",
    title: "Central de trabalho",
    description: "Visão inicial com tarefas, urgências, alertas e notificações para orientar a rotina administrativa.",
  },
  {
    src: "/assets/jab-comandas-preview.png",
    title: "Controle de comandas",
    description: "Módulo para registrar, acompanhar e conferir comandas, com dados sensíveis ocultados na apresentação pública.",
  },
  {
    src: "/assets/jab-unidades-preview.png",
    title: "Controle por unidade",
    description: "Tela para filtrar unidades, acompanhar saldos, contratos e informações operacionais em um só lugar.",
  },
];

export default function SistemaJABSection() {
  return (
    <section id="jab-project" className="relative bg-ns-card/30 py-20 md:py-32 overflow-hidden border-y border-white/10">
      <div className="absolute -top-32 right-0 w-96 h-96 bg-ns-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-ns-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-ns-primary/30 bg-ns-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-ns-primary mb-6">
              Projeto entregue
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Sistema administrativo desenvolvido <span className="text-ns-primary">sob medida para a JAB</span>.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed">
              O Sistema JAB é um projeto real entregue pela NeuroStack para organizar uma operação administrativa específica. Ele aparece aqui como prova de capacidade técnica: não é um produto pronto à venda, e sim um exemplo de como criamos sistemas próprios para resolver problemas reais de uma empresa.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Mapeamos a rotina administrativa antes de desenhar telas ou escrever código.",
                "Criamos módulos para centralizar comandas, unidades, conferências, relatórios e informações operacionais.",
                "Os prints abaixo são reais, mas foram tratados para ocultar valores, nomes, credenciais e dados sensíveis.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <CheckCircle className="w-5 h-5 text-ns-primary mt-1 flex-shrink-0" />
                  <p className="text-ns-text/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2rem] border border-white/10 bg-ns-bg/80 p-3 shadow-2xl shadow-black/30">
              <div className="absolute right-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-ns-primary/30 bg-ns-bg/90 px-3 py-1.5 text-xs font-bold text-ns-primary backdrop-blur">
                <Lock size={14} /> Dados protegidos
              </div>
              <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-ns-primary/20 bg-ns-bg">
                <Image
                  src="/assets/jab-login-preview.png"
                  alt="Print real da tela de acesso do Sistema JAB com dados protegidos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-ns-primary mb-4">
              Prints reais do sistema
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Uma plataforma criada para dar clareza, controle e velocidade à operação.
            </h3>
            <p className="mt-5 text-lg text-ns-text/80 leading-relaxed">
              A apresentação preserva a identidade do projeto, mas oculta informações estratégicas do cliente para manter confidencialidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.figure
                key={screenshot.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-ns-card/70 shadow-xl shadow-black/20"
              >
                <div className="relative aspect-video overflow-hidden bg-ns-bg">
                  <Image
                    src={screenshot.src}
                    alt={`${screenshot.title} do Sistema JAB com dados sensíveis ocultados`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <figcaption className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{screenshot.title}</h4>
                  <p className="text-ns-text/75 leading-relaxed">{screenshot.description}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-ns-card/60 border border-white/10 p-6"
            >
              <module.icon className="w-7 h-7 text-ns-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
              <p className="text-ns-text/75 leading-relaxed">{module.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
