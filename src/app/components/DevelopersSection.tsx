"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Layers, Megaphone } from 'lucide-react';

const teamMembers = [
  {
    name: "Gabriel Castro",
    role: "Estratégia, automação e desenvolvimento de sistemas",
    icon: Briefcase,
    description: "Responsável por transformar problemas de operação em soluções digitais com foco em processos, sistemas, dados e automações.",
  },
  {
    name: "Janderson Gomes",
    role: "Desenvolvimento full stack",
    icon: Layers,
    description: "Atuação no desenvolvimento de aplicações completas, integrações e evolução técnica das soluções entregues pela NeuroStack.",
  },
  {
    name: "W. Moura",
    role: "Marketing e comunicação digital",
    icon: Megaphone,
    description: "Apoio em posicionamento, presença digital e comunicação para transformar soluções técnicas em mensagens comerciais claras.",
  },
];

export default function DevelopersSection() {
  return (
    <section id="team" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Especialistas em <span className="text-ns-primary">sistemas, automação e operação</span>
          </h2>
          <p className="mt-6 text-xl text-ns-text/80 max-w-3xl mx-auto">
            Uma equipe enxuta, técnica e orientada a resolver problemas reais de empresas com tecnologia prática.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-ns-card/70 border border-white/10 p-7 hover:border-ns-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-ns-primary/10 border border-ns-primary/30 flex items-center justify-center mb-5">
                <member.icon className="w-7 h-7 text-ns-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              <p className="text-ns-primary font-semibold mt-1">{member.role}</p>
              <p className="mt-5 text-ns-text/75 leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
