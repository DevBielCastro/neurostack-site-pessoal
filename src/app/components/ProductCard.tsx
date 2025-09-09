// src/app/components/ProductCard.tsx

"use client";

import { motion } from 'framer-motion';
import LottiePlayer from './LottiePlayer';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  lottieAnimationData: any;
  href: string;
}

export default function ProductCard({ title, description, lottieAnimationData, href }: ProductCardProps) {
  return (
    // O componente `motion.div` da Framer Motion nos dá acesso a props de animação como `whileHover`
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }} // Animação de "levantar" e aumentar levemente
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full"
    >
      <Link href={href} className="block bg-ns-card p-8 rounded-2xl border border-white/10 h-full transform-gpu">
        {/* Container do ícone Lottie */}
        <div className="mb-6">
          <LottiePlayer animationData={lottieAnimationData} className="w-16 h-16" />
        </div>
        
        {/* Conteúdo de Texto */}
        <h3 className="font-bold text-2xl mb-3 text-white">{title}</h3>
        <p className="text-ns-text/80 leading-relaxed">{description}</p>
      </Link>
    </motion.div>
  );
}