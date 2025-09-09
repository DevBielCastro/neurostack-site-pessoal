"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// --- Configuração com posições mais orgânicas ---
const SOLUTIONS = [
  { text: "Venda enquanto dorme", icon: "/assets/icon-ecommerce.png", x: 250, y: 40 },
  { text: "Alcance um novo público", icon: "/assets/icon-publico.png", x: 440, y: 160 },
  { text: "Processos Automatizados", icon: "/assets/icon-automacao.png", x: 410, y: 340 },
  { text: "Decisões baseadas em IA", icon: "/assets/icon-ia.png", x: 250, y: 460 },
  { text: "Presença Digital Marcante", icon: "/assets/icon-presenca-digital.png", x: 90, y: 340 },
  { text: "Consultoria Estratégica", icon: "/assets/icon-consultoria.png", x: 60, y: 160 },
  { text: "Topo do Google", icon: "/assets/icon-seo.png", x: 140, y: 110 },
  { text: "Sistemas Sob Medida", icon: "/assets/icon-sistemas.png", x: 360, y: 110 },
];

// --- Função para gerar um caminho mais sinuoso ---
const generateSinuousPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const px = -dy / length;
  const py = dx / length;
  const jitter = length * 0.45;

  const cp1x = start.x + dx * 0.3 + (Math.random() - 0.5) * jitter * px;
  const cp1y = start.y + dy * 0.3 + (Math.random() - 0.5) * jitter * py;
  
  const cp2x = start.x + dx * 0.7 - (Math.random() - 0.5) * jitter * px;
  const cp2y = start.y + dy * 0.7 - (Math.random() - 0.5) * jitter * py;

  return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
};


// --- Componente principal ---
export default function HeroScene() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const center = { x: 250, y: 250 };

  const sinuousPaths = useMemo(() => 
    SOLUTIONS.map(solution => generateSinuousPath(center, { x: solution.x, y: solution.y })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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
            {/* (NOVO) Filtro de brilho para a logo */}
            <filter id="logo-glow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
          </defs>

          {/* --- Conexões --- */}
          <g>
            {SOLUTIONS.map((_, index) => (
              <motion.path
                key={`line-${index}`}
                d={sinuousPaths[index]}
                strokeWidth="1.5"
                fill="none"
                stroke={hoveredIndex === index ? "url(#line-gradient)" : "rgba(0, 174, 239, 0.2)"}
                style={{ filter: hoveredIndex === index ? "url(#glow)" : "none" }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              />
            ))}
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
                  whileHover={{ scale: 1.2, z: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
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
                  <foreignObject x={x - 20} y={y - 20} width="40" height="40">
                    <div className="flex items-center justify-center w-full h-full">
                      <Image src={solution.icon} width={28} height={28} alt={solution.text} />
                    </div>
                  </foreignObject>
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

            {/* (ALTERADO) Logo Central com Efeito de Pulsação Circular */}
            <g>
                <motion.circle
                    cx={center.x}
                    cy={center.y}
                    fill="#00AEEF"
                    style={{ filter: 'url(#logo-glow)' }}
                    animate={{ 
                        r: [35, 45, 35],
                        opacity: [0, 0.3, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <foreignObject x={center.x - 45} y={center.y - 45} width="90" height="90">
                  <motion.div
                    className="flex items-center justify-center w-full h-full bg-ns-bg p-3 rounded-full shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                  >
                    <Image src="/assets/logo.ico" width="60" height="60" alt="NeuroStack Logo" />
                  </motion.div>
                </foreignObject>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}