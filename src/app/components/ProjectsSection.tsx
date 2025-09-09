"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// --- Dados dos Projetos com Extensões Corrigidas ---
const projects = [
  {
    title: "Website Institucional – Gabriel Mário Advogados",
    summary: "Site institucional responsivo, com foco em autoridade e captação de contato.",
    tags: ["Website", "Identidade Digital"],
    liveUrl: "https://www.gabrielmarioadv.com.br/",
    caseUrl: "/cases/gabriel-mario-advogados", 
    thumbnail: "/assets/project-gabriel-mario.jpg", // Extensão corrigida
  },
  {
    title: "Website Profissional – Roberlanio Advogados",
    summary: "Site otimizado para SEO local e organização de áreas de atuação.",
    tags: ["Website", "SEO Local"],
    liveUrl: "https://www.roberlanioadv.com.br/",
    caseUrl: "/cases/roberlanio-advogados",
    thumbnail: "/assets/project-roberlanio.jpg", // Extensão corrigida
  },
  {
    title: "Portal Educacional – Supletivo JP",
    summary: "Site com estrutura institucional e área de contato/matrícula, orientado à conversão.",
    tags: ["Website", "Conversão"],
    liveUrl: "https://www.supletivojp.com.br/",
    caseUrl: "/cases/supletivo-jp",
    thumbnail: "/assets/project-supletivo-jp.jpg", // Extensão corrigida
  },
  {
    title: "Garçom Digital — Cardápios & Gestão para Restaurantes",
    summary: "SaaS completo: cardápios online, pedidos, gestão financeira e painel administrativo.",
    tags: ["Produto", "SaaS", "FoodTech"],
    liveUrl: "#", 
    caseUrl: "/cases/garcom-digital",
    thumbnail: "/assets/project-garcom-digital.jpg", // Extensão corrigida
  },
];

// --- Componente Principal ---
export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-ns-bg py-20 md:py-32">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Nossos Projetos
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ns-text/80 leading-relaxed">
            Soluções reais, resultados mensuráveis. Veja como ajudamos empresas a transformar a presença digital, automatizar processos e aumentar a receita.
          </p>
        </div>

        {/* Grelha de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-ns-card rounded-2xl overflow-hidden border border-ns-card/50 group flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Imagem de fundo real com texto sobreposto */}
              <div className="relative overflow-hidden aspect-video w-full flex items-center justify-center p-8 text-center">
                  <Image
                    src={project.thumbnail}
                    alt={`Thumbnail do projeto ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                  <div className="relative z-20">
                    <h4 className="font-bold text-3xl text-white mb-2">{project.title.split('–')[0]}</h4>
                    <p className="text-white/80">{project.tags.join(' • ')}</p>
                  </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-white mb-3">{project.title}</h3>
                <p className="text-ns-text/80 mb-6 flex-grow">{project.summary}</p>
                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-ns-primary text-ns-bg font-bold py-2 px-5 rounded-lg hover:opacity-90 transition-opacity">
                    Ver Site
                  </a>
                   <Link href={project.caseUrl} className="font-semibold text-white group-hover:text-ns-primary transition-colors flex items-center gap-2">
                    Ver Case <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}