"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "SistemaJAB — Gestão administrativa e comercial",
    summary: "Produto NeuroStack para centralizar clientes, vendas, estoque, financeiro, relatórios e automações em uma operação mais clara e controlável.",
    tags: ["Produto", "Gestão", "Automação"],
    thumbnail: "/assets/produto-sistemas.png",
    status: "Produto principal",
  },
  {
    title: "Garçom Digital — Atendimento e pedidos para restaurantes",
    summary: "Solução para modernizar atendimento, organizar pedidos e reduzir falhas em operações de food service.",
    tags: ["FoodTech", "Pedidos", "SaaS"],
    thumbnail: "/assets/project-garcom-digital.jpg",
    status: "Em evolução",
  },
  {
    title: "Sites institucionais focados em conversão",
    summary: "Projetos de presença digital para empresas que precisam apresentar serviços com clareza, autoridade e canal de contato comercial.",
    tags: ["Website", "Autoridade", "Conversão"],
    thumbnail: "/assets/project-gabriel-mario.jpg",
    status: "Publicado",
  },
  {
    title: "Portais de captação e atendimento",
    summary: "Estruturas digitais para organizar informações, orientar visitantes e facilitar solicitações de contato ou matrícula.",
    tags: ["Portal", "Captação", "Atendimento"],
    thumbnail: "/assets/project-supletivo-jp.jpg",
    status: "Publicado",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-ns-card/30 py-20 md:py-32 border-y border-white/10">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Construímos produtos e projetos para resolver <span className="text-ns-primary">necessidades reais</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed">
            Nosso foco é transformar operação, presença digital e processos em ferramentas práticas para empresas venderem melhor e administrarem com mais segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-ns-card rounded-3xl overflow-hidden border border-white/10 group flex flex-col hover:border-ns-primary/60 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden aspect-video w-full flex items-center justify-center p-8 text-center bg-ns-bg">
                <Image
                  src={project.thumbnail}
                  alt={`Thumbnail do projeto ${project.title}`}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />
                <div className="relative z-20 self-end">
                  <p className="text-ns-primary font-bold text-xs uppercase tracking-[0.25em] mb-2">{project.tags.join(' • ')}</p>
                  <h4 className="font-bold text-2xl md:text-3xl text-white">{project.title.split('—')[0]}</h4>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-bold text-xl text-white">{project.title}</h3>
                  <span className="bg-ns-primary/10 text-ns-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap border border-ns-primary/20">
                    {project.status}
                  </span>
                </div>

                <p className="text-ns-text/80 mb-6 flex-grow leading-relaxed">{project.summary}</p>
                <a
                  href="https://wa.me/558391533883?text=Ol%C3%A1%2C%20vi%20os%20projetos%20da%20NeuroStack%20e%20quero%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20para%20minha%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white group-hover:text-ns-primary transition-colors flex items-center gap-2 mt-auto"
                >
                  Quero algo assim <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
