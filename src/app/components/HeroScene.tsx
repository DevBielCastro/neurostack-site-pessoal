"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// --- Configuração da Rede Neural com seus Ícones ---
const SOLUTIONS = [
  { text: "Venda enquanto dorme", icon: "/assets/icon-ecommerce.png", x: 250, y: 30 },
  { text: "Alcance um novo público", icon: "/assets/icon-publico.png", x: 430, y: 150 },
  { text: "Processos Automatizados", icon: "/assets/icon-automacao.png", x: 420, y: 350 },
  { text: "Decisões baseadas em IA", icon: "/assets/icon-ia.png", x: 250, y: 470 },
  { text: "Presença Digital Marcante", icon: "/assets/icon-presenca-digital.png", x: 80, y: 350 },
  { text: "Consultoria Estratégica", icon: "/assets/icon-consultoria.png", x: 70, y: 150 },
  { text: "Topo do Google", icon: "/assets/icon-seo.png", x: 150, y: 100 },
  { text: "Sistemas Sob Medida", icon: "/assets/icon-sistemas.png", x: 350, y: 100 },
];

// --- Componente principal ---
export default function HeroScene() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const center = { x: 250, y: 250 };

  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto">
      {/* Imagem de fundo do cérebro */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 2.58, x: '7%', y: '14%' }}
        animate={{ opacity: 0.15, scale: 2.48, x: '7%', y: '14%' }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/assets/cerebro-background.png"
          alt="Contorno de cérebro digital como plano de fundo"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Animação SVG */}
      <div className="relative w-full h-full z-10">
        <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
          {/* --- Definições --- */}
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00AEEF" stopOpacity="0" />
              <stop offset="50%" stopColor="#00AEEF" />
              <stop offset="100%" stopColor="#00AEEF" stopOpacity="0" />
              <animate attributeName="x1" from="-100%" to="100%" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="x2" from="0%" to="200%" dur="1.5s" repeatCount="indefinite" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* --- Conexões --- */}
          <g>
            {SOLUTIONS.map((_, index) => {
              const { x, y } = SOLUTIONS[index];
              return (
                <motion.path
                  key={`line-${index}`}
                  d={`M ${center.x} ${center.y} C ${center.x} ${center.y} ${x} ${y} ${x} ${y}`}
                  strokeWidth="1.5"
                  fill="none"
                  stroke={hoveredIndex === index ? "url(#line-gradient)" : "rgba(0, 174, 239, 0.2)"}
                  style={{ filter: hoveredIndex === index ? "url(#glow)" : "none" }}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              );
            })}
          </g>

          {/* --- Nós de Solução (seus ícones) e Logo --- */}
          <g>
            {SOLUTIONS.map((solution, index) => {
              const { x, y } = solution;
              return (
                <motion.g
                  key={`node-${index}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="cursor-pointer"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.2, z: 10 }} // (ALTERADO) Efeito de crescimento
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {/* Quadrado com pontas arredondadas */}
                  <motion.rect
                    x={x - 24}
                    y={y - 24}
                    width="48"
                    height="48"
                    rx="12"
                    fill="#121829"
                    stroke="#00AEEF"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  />
                  {/* Sua imagem de ícone */}
                  <foreignObject x={x - 20} y={y - 20} width="40" height="40">
                    <div className="flex items-center justify-center w-full h-full">
                      <Image src={solution.icon} width={28} height={28} alt={solution.text} />
                    </div>
                  </foreignObject>
                  
                  {/* (NOVO) Texto que aparece abaixo do ícone no hover */}
                  <AnimatePresence>
                  {hoveredIndex === index && (
                     <foreignObject x={x-75} y={y+30} width="150" height="40">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-center text-xs text-white font-bold bg-ns-card/80 backdrop-blur-sm px-2 py-1 rounded">
                            {solution.text}
                          </p>
                        </motion.div>
                     </foreignObject>
                  )}
                  </AnimatePresence>

                </motion.g>
              );
            })}

            {/* Logo Central */}
            <foreignObject x={center.x - 40} y={center.y - 40} width="80" height="80">
              <motion.div
                className="flex items-center justify-center w-full h-full bg-ns-bg p-3 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
              >
                <Image src="/assets/logo.ico" width={50} height={50} alt="NeuroStack Logo" />
              </motion.div>
            </foreignObject>
          </g>
        </svg>
      </div>

      {/* --- Texto Interativo foi REMOVIDO daqui --- */}
    </div>
  );
}