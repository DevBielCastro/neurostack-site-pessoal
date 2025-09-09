"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, LayoutDashboard, Code, Server, 
  Cloud, BarChart3, Palette, Gamepad2, Check
} from 'lucide-react';

// --- Dados dos Serviços Baseados no seu Plano ---
const services = [
  { 
    icon: MessageCircle, 
    title: "Automação de Pedidos por WhatsApp", 
    description: "Bot inteligente para receber pedidos, sugerir upsell e reduzir erros no atendimento.",
    cta: "Quero um piloto"
  },
  { 
    icon: LayoutDashboard, 
    title: "Painel Centralizador de Pedidos", 
    description: "Consolide iFood, Rappi, WhatsApp e telefone num único painel de gestão.",
    cta: "Ver demonstração"
  },
  { 
    icon: Code, 
    title: "Sites e Landing Pages que Convertem", 
    description: "Websites e landings focados em conversão e SEO local para capturar mais leads.",
    cta: "Solicitar orçamento"
  },
  { 
    icon: Server, 
    title: "Sistemas Sob Medida", 
    description: "Softwares customizados para os processos complexos da sua empresa.",
    cta: "Vamos conversar"
  },
  { 
    icon: Cloud, 
    title: "DevOps & Infraestrutura Gerenciada", 
    description: "Hospedagem, deploys automatizados, backups e monitoramento 24/7.",
    cta: "Conheça os planos"
  },
  { 
    icon: BarChart3, 
    title: "BI & Analytics para PMEs", 
    description: "Dashboards simples que mostram as métricas que realmente importam para o seu negócio.",
    cta: "Pedir diagnóstico gratuito"
  },
];

// --- Componente Principal ---
export default function ServicesSection() {
  return (
    <section id="services" className="bg-ns-card/30 py-20 md:py-32 border-b border-ns-card">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Cabeçalho com Copywriting */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Soluções Digitais que <span className="text-ns-primary">Aceleram o Crescimento</span> do seu Negócio
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed">
            Automação de pedidos, sistemas sob medida, websites e dados — entregues rápido, com operação confiável e foco em resultado.
          </p>
        </div>

        {/* Grelha de Serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-ns-card p-8 rounded-2xl border border-transparent hover:border-ns-primary transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <div className="bg-ns-bg inline-block p-4 rounded-xl">
                  <service.icon className="w-8 h-8 text-ns-primary" />
                </div>
              </div>
              <h3 className="font-bold text-xl text-white mb-3 h-16">{service.title}</h3>
              <p className="text-ns-text/80 mb-6 h-20">{service.description}</p>
              <a href="#contact" className="font-bold text-ns-primary hover:text-white transition-colors">
                {service.cta} &rarr;
              </a>
            </motion.div>
          ))}
        </div>
        
        {/* Secção "Como Trabalhamos" */}
        <div className="text-center max-w-4xl mx-auto">
           <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">Nosso Processo para o <span className="text-ns-primary">Seu Sucesso</span></h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-ns-card rounded-full mx-auto mb-4 border-2 border-ns-primary">
                        <span className="text-2xl font-bold text-ns-primary">1</span>
                    </div>
                    <h4 className="font-bold text-lg text-white mb-2">Diagnóstico Rápido</h4>
                    <p className="text-ns-text/70">Entendemos a sua operação em até 30 minutos.</p>
                </div>
                 <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-ns-card rounded-full mx-auto mb-4 border-2 border-ns-primary">
                        <span className="text-2xl font-bold text-ns-primary">2</span>
                    </div>
                    <h4 className="font-bold text-lg text-white mb-2">Piloto e Configuração</h4>
                    <p className="text-ns-text/70">Entregamos um piloto funcional em 48-72h.</p>
                </div>
                 <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-ns-card rounded-full mx-auto mb-4 border-2 border-ns-primary">
                        <span className="text-2xl font-bold text-ns-primary">3</span>
                    </div>
                    <h4 className="font-bold text-lg text-white mb-2">Medição e Otimização</h4>
                    <p className="text-ns-text/70">Medimos resultados e ajustamos para maximizar o ganho.</p>
                </div>
                 <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-ns-card rounded-full mx-auto mb-4 border-2 border-ns-primary">
                        <span className="text-2xl font-bold text-ns-primary">4</span>
                    </div>
                    <h4 className="font-bold text-lg text-white mb-2">Escala e Suporte</h4>
                    <p className="text-ns-text/70">Evoluímos e mantemos a sua operação estável.</p>
                </div>
           </div>
        </div>

      </div>
    </section>
  );
}