'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, CheckCircle, Database, MessageCircle, PackageCheck, TrendingUp } from 'lucide-react';

const whatsappLink = "https://wa.me/558391533883?text=Ol%C3%A1%2C%20quero%20uma%20demonstra%C3%A7%C3%A3o%20do%20SistemaJAB%20para%20minha%20empresa.";

const metrics = [
  { label: 'Vendas registradas', value: 'R$ 42,8k', icon: TrendingUp },
  { label: 'Clientes ativos', value: '318', icon: Database },
  { label: 'Estoque crítico', value: '12 itens', icon: PackageCheck },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,174,239,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,174,239,0.08),transparent_30%)]" />
      <div className="container relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="text-center lg:text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-ns-primary/30 bg-ns-primary/10 px-4 py-2 text-sm font-semibold text-ns-primary mb-6"
            >
              <CheckCircle size={16} /> Tecnologia para empresas que precisam de controle real
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white"
            >
              Automatizamos processos e organizamos a <span className="text-ns-primary">operação da sua empresa</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-ns-text/85 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Criamos sistemas, automações e painéis de gestão para controlar vendas, clientes, estoque e rotinas administrativas sem depender de planilhas soltas, retrabalho ou informações perdidas.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-ns-primary text-ns-bg font-bold py-3.5 px-7 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 shadow-xl shadow-ns-primary/20">
                Quero uma demonstração <ArrowRight size={18} />
              </a>
              <a href="#sistemajab" className="bg-white/5 border border-white/15 text-white font-bold py-3.5 px-7 rounded-lg hover:bg-white/10 transition-colors">
                Conhecer o SistemaJAB
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0 text-left"
            >
              {['Fluxo administrativo mais claro', 'Automação de tarefas repetitivas', 'Decisões com dados em tempo real'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-ns-text/80">
                  <CheckCircle size={16} className="text-ns-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="rounded-2xl bg-ns-card border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="text-sm text-ns-text/60">Painel operacional</p>
                    <h3 className="text-white font-bold text-xl">SistemaJAB</h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-ns-primary/80" />
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                </div>

                <div className="p-5 space-y-5">
                  <div className="grid sm:grid-cols-3 gap-3">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="rounded-xl bg-ns-bg/70 p-4 border border-white/10">
                        <metric.icon className="w-5 h-5 text-ns-primary mb-3" />
                        <p className="text-2xl font-bold text-white">{metric.value}</p>
                        <p className="text-xs text-ns-text/60 mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-4">
                    <div className="rounded-xl bg-ns-bg/70 p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <p className="font-bold text-white flex items-center gap-2"><BarChart3 size={18} className="text-ns-primary" /> Fluxo de vendas</p>
                        <span className="text-xs text-ns-primary bg-ns-primary/10 px-2 py-1 rounded-full">Ao vivo</span>
                      </div>
                      <div className="space-y-3">
                        {[72, 58, 86, 44].map((width, index) => (
                          <div key={index}>
                            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                              <div className="h-full rounded-full bg-ns-primary" style={{ width: `${width}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl bg-ns-bg/70 p-4 border border-white/10">
                      <p className="font-bold text-white flex items-center gap-2 mb-4"><MessageCircle size={18} className="text-ns-primary" /> Rotinas automáticas</p>
                      <div className="space-y-3 text-sm text-ns-text/75">
                        <p className="flex items-center gap-2"><CheckCircle size={15} className="text-ns-primary" /> Cliente cadastrado</p>
                        <p className="flex items-center gap-2"><CheckCircle size={15} className="text-ns-primary" /> Venda registrada</p>
                        <p className="flex items-center gap-2"><CheckCircle size={15} className="text-ns-primary" /> Estoque atualizado</p>
                      </div>
                    </div>
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
