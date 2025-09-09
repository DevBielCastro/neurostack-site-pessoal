"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Shield, CreditCard, Plug, Bot, BarChart3, 
  Smartphone, Headset, CheckCircle, Server, Zap 
} from 'lucide-react';

// --- Dados dos Recursos ---
const resources = [
  // (ALTERADO) Adicionado "Google Cloud" à descrição
  { icon: Cloud, title: "Hosting & Cloud", description: "Infraestrutura em cloud escalável (Google Cloud / AWS) para performance 24/7." },
  { icon: Shield, title: "Segurança & Compliance", description: "SSL, WAF, backups automáticos e políticas de recovery." },
  { icon: CreditCard, title: "Plataforma de Pagamentos", description: "Integração com Stripe, Mercado Pago: Pix, Cartão, Boletos." },
  { icon: Plug, title: "APIs & Integrações", description: "Conectamos seu negócio a ERPs, CRMs e gateways via APIs." },
  { icon: Bot, title: "Automação & Fluxos", description: "Automação de vendas (WhatsApp, E-mail) para reduzir o CAC." },
  { icon: BarChart3, title: "Analytics & CRO", description: "Tracking avançado, dashboards e otimização de conversão (CRO)." },
  { icon: Smartphone, title: "Mobile-first & PWA", description: "Apps progressivos (PWA) para uma experiência mobile superior." },
  { icon: Headset, title: "Suporte & SLA", description: "Suporte dedicado e SLA definido para projetos empresariais." },
];

// --- Componente Principal ---
export default function ResourcesSection() {
  return (
    <section id="resources" className="bg-ns-bg py-20 md:py-32 border-t border-b border-ns-card/50">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Recursos que Transformam <span className="text-ns-primary">Visitantes em Clientes</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed">
            Nossa pilha tecnológica e operações foram projetadas para entregar conversão, segurança e escala. Veja o que você ganha.
          </p>
        </div>

        {/* Grid de Recursos Principais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="bg-ns-card/50 p-6 rounded-xl border border-ns-card hover:border-ns-primary/50 hover:bg-ns-card transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-ns-card p-3 rounded-lg">
                  <resource.icon className="w-6 h-6 text-ns-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{resource.title}</h3>
                  <p className="text-sm text-ns-text/70">{resource.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bloco de Destaque (3 Colunas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <Server className="w-12 h-12 text-ns-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Infraestrutura</h3>
            <p className="text-ns-text/80">Deploys rápidos, auto-scaling e CDN global para estabilidade e performance, mesmo em picos de acesso.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
            <Zap className="w-12 h-12 text-ns-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Automação</h3>
            <p className="text-ns-text/80">Do lead ao pagamento: criamos pipelines que transformam cliques em receita recorrente e otimizam sua operação.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} viewport={{ once: true }}>
            <CheckCircle className="w-12 h-12 text-ns-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Segurança</h3>
            <p className="text-ns-text/80">Protegemos seu negócio com as melhores práticas de segurança, testes contínuos e planos de disaster recovery.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}