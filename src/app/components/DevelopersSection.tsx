"use client";

import React from 'react';
import { Briefcase, Layers, Megaphone } from 'lucide-react';

const teamMembers = [
  {
    name: "Gabriel Castro",
    role: "Estratégia, Sistemas e Automação",
    IconComponent: Briefcase,
    valueProposition: "Responsável por transformar problemas operacionais em soluções digitais práticas, com foco em gestão, automação e melhoria de processos.",
  },
  {
    name: "W. Moura",
    role: "Marketing e Conteúdo",
    IconComponent: Megaphone,
    valueProposition: "Apoio em comunicação, posicionamento e presença digital para tornar as soluções mais claras e comerciais.",
  },
  {
    name: "Janderson Gomes",
    role: "Desenvolvimento Full Stack",
    IconComponent: Layers,
    valueProposition: "Atuação técnica no desenvolvimento de interfaces, integrações e sistemas web para operação real.",
  },
];

export default function DevelopersSection() {
  return (
    <section id="team" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-14 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Uma equipe focada em <span className="text-ns-primary">resolver problemas reais</span>
          </h2>
          <p className="mt-6 text-xl text-ns-text/80 max-w-3xl mx-auto">
            Mais do que tecnologia, entregamos leitura de processo, clareza operacional e execução prática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-2xl border border-white/10 bg-ns-card p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-ns-primary/30 bg-ns-primary/10">
                <member.IconComponent className="h-7 w-7 text-ns-primary" />
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="mt-1 font-semibold text-ns-primary">{member.role}</p>
              <p className="mt-4 text-ns-text/75 leading-relaxed">{member.valueProposition}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
