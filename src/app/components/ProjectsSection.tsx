"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';

type Project = {
  title: string;
  summary: string;
  tags: string[];
  liveUrl: string | null;
  caseUrl: string | null;
  thumbnail: string;
  status: string | null;
  privacyNote?: string;
};

const projects: Project[] = [
  {
    title: "Sistema administrativo — JAB",
    summary: "Sistema sob medida desenvolvido para a JAB, com foco em centralizar rotinas internas, comandas, unidades, conferências, relatórios e controles operacionais em uma plataforma própria.",
    tags: ["Sistema sob medida", "Gestão", "Automação"],
    liveUrl: null,
    caseUrl: null,
    thumbnail: "/assets/jab-dashboard-preview.png",
    status: "Projeto entregue",
    privacyNote: "Prints reais com dados protegidos",
  },
  {
    title: "Garçom Digital — Pedidos e gestão para restaurantes",
    summary: "Solução para cardápio digital, pedidos, controle operacional e atendimento mais ágil no segmento de alimentação.",
    tags: ["FoodTech", "Pedidos", "SaaS"],
    liveUrl: null,
    caseUrl: "/cases/garcom-digital",
    thumbnail: "/assets/project-garcom-digital.jpg",
    status: "Em evolução",
  },
  {
    title: "Website Institucional — Gabriel Mário Advogados",
    summary: "Site institucional responsivo, com foco em presença profissional, autoridade e captação de contatos.",
    tags: ["Website", "Autoridade", "Conversão"],
    liveUrl: "https://www.gabrielmarioadv.com.br/",
    caseUrl: "/cases/gabriel-mario-advogados", 
    thumbnail: "/assets/project-gabriel-mario.jpg",
    status: null,
  },
  {
    title: "Website Profissional — Roberlanio Advogados",
    summary: "Site otimizado para apresentação profissional, organização de áreas de atuação e fortalecimento da presença digital.",
    tags: ["Website", "SEO local", "Institucional"],
    liveUrl: "https://www.roberlanioadv.com.br/",
    caseUrl: "/cases/roberlanio-advogados",
    thumbnail: "/assets/project-roberlanio.jpg",
    status: null,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-ns-bg py-20 md:py-32">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-ns-primary mb-4">
            Soluções em prática
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Projetos que mostram como pensamos: <span className="text-ns-primary">problema primeiro, tecnologia depois</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed">
            Criamos projetos digitais para melhorar processos, fortalecer presença online e transformar operação em vantagem competitiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-ns-card rounded-2xl overflow-hidden border border-white/10 group flex flex-col hover:border-ns-primary/50 transition-colors"
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
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10"></div>
                <div className="relative z-20">
                  <h4 className="font-bold text-3xl text-white mb-2">{project.title.split('—')[0]}</h4>
                  <p className="text-white/80">{project.tags.join(' • ')}</p>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-bold text-xl text-white">{project.title}</h3>
                  {project.status && (
                    <span className="bg-ns-primary/10 text-ns-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-ns-text/80 mb-5 flex-grow leading-relaxed">{project.summary}</p>

                {project.privacyNote && (
                  <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-ns-text/70">
                    <Lock size={14} className="text-ns-primary" />
                    {project.privacyNote}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-ns-primary text-ns-bg font-bold py-2 px-5 rounded-lg hover:opacity-90 transition-opacity">
                      Ver site
                    </a>
                  )}
                  {project.caseUrl ? (
                    <Link href={project.caseUrl} className="font-semibold text-white group-hover:text-ns-primary transition-colors flex items-center gap-2">
                      Ver detalhes <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <span className="font-semibold text-ns-text/70">
                      Projeto interno apresentado sem acesso público.
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
