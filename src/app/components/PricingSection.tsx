"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

// Formatação de preço
const formatBR = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

// Estrutura de dados completa com todos os 4 produtos
const pricingData = {
  "Site Institucional": {
    plans: [
      {
        name: "Básico",
        priceTotal: 799,
        monthly: 79,
        deliveryTime: "15 dias",
        features: ["Design responsivo", "SEO inicial", "Formulário de contato", "Suporte 14 dias"],
        valueBullets: [
          "Presença profissional online",
          "Lançamento rápido — pronto para vender",
          "Suporte inicial para ajustes"
        ],
      },
      {
        name: "Intermediário",
        priceTotal: 1499,
        monthly: 129,
        deliveryTime: "10 dias",
        popular: true,
        features: ["Copy otimizada", "SEO avançado", "Integração WhatsApp", "Suporte 30 dias"],
        valueBullets: [
          "Conversões mais altas com CRO",
          "Integração de vendas para começar a faturar",
          "Relatório inicial de performance"
        ],
        benefitVsPrev: "+Taxa de conversão média 25% maior (clientes semelhantes)."
      },
      {
        name: "Premium",
        priceTotal: 2499,
        monthly: 199,
        deliveryTime: "7 dias",
        features: ["Estratégia completa", "Landing pages extras", "Automação", "Suporte prioritário"],
        valueBullets: [
          "Estratégia completa para escalar vendas",
          "Testes A/B contínuos",
          "Acompanhamento 1 mês"
        ],
        benefitVsPrev: "Equipe dedicada e pipelines de vendas automatizados"
      },
    ],
    cta: "O futuro começa na decisão de hoje!",
    guarantee: "Garantia: 30 dias de satisfação ou reembolso",
    limitedSpots: { active: true, remaining: 10, deadlineDays: 7 },
  },
  "Landing Page": {
    plans: [
      {
        name: "Básico",
        priceTotal: 599,
        monthly: 59,
        deliveryTime: "7 dias",
        features: ["Copywriting", "Design focado em conversão", "Formulário + WhatsApp"],
        valueBullets: ["Teste rápido de captação", "Setup para campanhas", "Entrega ágil"],
      },
      {
        name: "Intermediário",
        priceTotal: 1099,
        monthly: 99,
        deliveryTime: "4 dias",
        popular: true,
        features: ["Copy persuasivo", "CRO", "Integração CRM", "Testes A/B"],
        valueBullets: ["Conversão otimizada", "Integrações para vendas", "Relatório de campanhas"],
        benefitVsPrev: "Testes A/B contínuos para escalar ROI"
      },
      {
        name: "Premium",
        priceTotal: 1799,
        monthly: 159,
        deliveryTime: "3 dias",
        features: ["Sequência de e-mails", "Funnels", "Analytics avançado"],
        valueBullets: ["Automação desde o lead até a venda", "Dashboards personalizados"],
      },
    ],
    cta: "Transformamos cliques em clientes.",
    guarantee: "Garantia de 30 dias",
    limitedSpots: { active: false },
  },
  "E-commerce": {
    plans: [
        {
            name: "Básico",
            priceTotal: 1299,
            monthly: 119,
            deliveryTime: "20 dias",
            features: ["Até 50 produtos", "Carrinho e checkout", "1 gateway de pagamento", "Automação de e-mail", "Suporte"],
            valueBullets: ["Inicie suas vendas online rapidamente", "Estrutura pronta para crescer", "Pagamentos seguros"],
        },
        {
            name: "Intermediário",
            priceTotal: 2499,
            monthly: 199,
            deliveryTime: "15 dias",
            popular: true,
            features: ["Até 100 produtos", "Carrinho e checkout", "2 gateways de pagamento", "Automação de e-mail", "Suporte"],
            valueBullets: ["Mais opções de pagamento para seus clientes", "Ferramentas para aumentar o ticket médio", "Design que gera confiança"],
            benefitVsPrev: "Recuperação de carrinho e mais opções de frete."
        },
        {
            name: "Premium",
            priceTotal: 4999,
            monthly: 399,
            deliveryTime: "12 dias",
            features: ["Até 200 produtos", "Carrinho e checkout", "3 gateways de pagamento", "Automação de e-mail", "Suporte prioritário"],
            valueBullets: ["Plataforma robusta para alto volume de vendas", "Integrações com marketplaces", "Relatórios avançados"],
        },
    ],
    cta: "Seu negócio vendendo 24h por dia com tecnologia de verdade.",
    guarantee: "Garantia de performance e segurança",
    limitedSpots: { active: false },
  },
  "Sistema Web": {
    plans: [
        {
            name: "Básico",
            priceTotal: 9999,
            monthly: 899,
            deliveryTime: "30 dias",
            features: ["Módulos CRUD essenciais", "Dashboards personalizados", "Integrações externas (até 2)"],
            valueBullets: ["Digitalize e centralize suas operações", "Visão clara dos seus dados", "Otimize processos manuais"],
        },
        {
            name: "Intermediário",
            priceTotal: 19999,
            monthly: 1599,
            deliveryTime: "25 dias",
            popular: true,
            features: ["Dashboards personalizados", "Relatórios avançados", "Autenticação e permissões", "Integrações complexas"],
            valueBullets: ["Controle total de acesso para sua equipe", "Inteligência de negócio com relatórios detalhados", "Automatize fluxos de trabalho"],
            benefitVsPrev: "Escalabilidade e segurança para empresas em crescimento."
        },
        {
            name: "Premium",
            priceTotal: 29999,
            monthly: 2499,
            deliveryTime: "20 dias",
            features: ["Módulos CRUD ilimitados", "Dashboards em tempo real", "Integrações e permissões avançadas", "Suporte dedicado"],
            valueBullets: ["Solução totalmente sob medida para suas regras de negócio", "Performance máxima para alto volume de dados", "Consultoria de arquitetura incluída"],
        },
    ],
    cta: "O futuro começa na decisão de hoje!",
    guarantee: "Garantia de entrega e conformidade com o escopo",
    limitedSpots: { active: false },
  },
} as const;

type Category = keyof typeof pricingData;

// --- Componente principal ---
export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<Category>("Site Institucional");
  const activeCategoryData = pricingData[activeTab];

  // (NOVO) Função para gerar o link do WhatsApp com a mensagem personalizada
  const generateWhatsAppLink = (product: string, plan: string) => {
    const phoneNumber = "558391533883";
    const message = `Olá! Tenho interesse no serviço de ${product}, plano ${plan}. Gostaria de agendar um diagnóstico.`;
    
    // Codifica a mensagem para ser usada em uma URL de forma segura
    const encodedMessage = encodeURIComponent(message);
    
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <section id="pricing" className="bg-ns-card/30 py-20 md:py-32">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header com copy otimizada */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            O Investimento Que Transforma <span className="text-ns-primary">Empresas em Líderes</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-ns-text/80 leading-relaxed">
            Cada dia parado custa clientes. Agende um diagnóstico gratuito — garanta sua vaga e comece a ver resultados.
          </p>
          <div className="mt-4">
            <a
              href="https://wa.me/558391533883?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito."
              className="inline-block bg-ns-primary text-ns-bg font-bold py-3 px-6 rounded-lg shadow hover:opacity-95"
              aria-label="Agende diagnóstico gratuito"
            >
              Agende Diagnóstico (Grátis)
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {Object.keys(pricingData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category as Category)}
              className={`px-4 py-2 text-sm md:text-base font-bold rounded-full transition-all duration-300 ${
                activeTab === category
                  ? "bg-ns-primary text-ns-bg shadow-lg shadow-ns-primary/20"
                  : "bg-ns-card text-ns-text hover:bg-ns-card/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de planos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activeCategoryData.plans.map((plan, idx) => {
            const isPopular = (plan as any).popular;
            return (
              <motion.div
                key={activeTab + plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`relative flex flex-col p-8 rounded-2xl border ${
                  isPopular ? "bg-ns-card border-ns-primary shadow-2xl shadow-ns-primary/20" : "bg-ns-card/50 border-ns-card"
                }`}
                aria-labelledby={`plan-${plan.name}`}
              >
                {isPopular && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-ns-primary text-ns-bg text-sm font-bold rounded-full">
                    MAIS POPULAR
                  </div>
                )}

                <h3 id={`plan-${plan.name}`} className="text-xl font-bold text-white mb-2">
                  {plan.name.toUpperCase()}
                </h3>

                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">{formatBR(plan.priceTotal)}</span>
                  <div className="text-sm text-ns-text/80">ou {formatBR(plan.monthly)}/mês (até 12x)</div>
                  <div className="mt-1 text-xs text-ns-primary font-semibold">{(plan as any).deliveryTime} — Entrega rápida</div>
                </div>

                <ul className="space-y-3 mb-4 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-ns-primary mt-1 flex-shrink-0" />
                      <span className="text-ns-text/90">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* bullets de valor */}
                <div className="mb-6">
                  {(plan as any).valueBullets?.map((b: string) => (
                    <div key={b} className="text-sm text-ns-text/85 mb-1">• {b}</div>
                  ))}
                  {(plan as any).benefitVsPrev && (
                    <div className="mt-2 text-xs bg-ns-bg/25 p-2 rounded text-ns-primary">{(plan as any).benefitVsPrev}</div>
                  )}
                </div>

                {/* (MODIFICADO) O href agora é gerado dinamicamente */}
                <a
                  href={generateWhatsAppLink(activeTab, plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                    isPopular ? "bg-ns-primary text-ns-bg hover:opacity-90" : "bg-ns-card text-white hover:bg-ns-primary/20"
                  }`}
                >
                  Agendar Diagnóstico — Quero Vaga
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* CTA secundário com garantia e provas */}
        <div className="text-center mt-10">
          <p className="text-md text-ns-text/80 font-semibold">{activeCategoryData.cta}</p>
          <p className="mt-3 text-sm text-ns-text/70">{activeCategoryData.guarantee}</p>

          <div className="mt-6 text-sm text-ns-text/70">+900 empresas atendidas · Aumento médio de conversão em casos: +32%</div>

          {activeCategoryData.limitedSpots?.active && (
            <div className="mt-4 inline-block bg-ns-primary/10 text-ns-primary px-3 py-2 rounded-full font-semibold">
              Apenas {activeCategoryData.limitedSpots.remaining} vagas com desconto — oferta termina em {activeCategoryData.limitedSpots.deadlineDays} dias
            </div>
          )}
        </div>
      </div>
    </section>
  );
}