"use client";

import { motion } from 'framer-motion';
import LottiePlayer from './LottiePlayer';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  lottieAnimationData: any;
  href?: string; // (MELHORIA) href agora é opcional
  status?: string; // (MELHORIA) Nova propriedade para o status do produto
}

export default function ProductCard({ title, description, lottieAnimationData, href, status }: ProductCardProps) {
  
  // O conteúdo do card é extraído para ser reutilizado
  const cardContent = (
    <>
      <div className="mb-6">
        <LottiePlayer animationData={lottieAnimationData} className="w-16 h-16" />
      </div>
      
      {/* Container para o título e o selo de status */}
      <div className="flex items-center gap-3 mb-3">
        <h3 className="font-bold text-2xl text-white">{title}</h3>
        {status && (
          <span className="bg-ns-primary/10 text-ns-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            {status}
          </span>
        )}
      </div>
      
      <p className="text-ns-text/80 leading-relaxed">{description}</p>
    </>
  );

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full"
    >
      {/* (MELHORIA) O card só é um Link clicável se a propriedade 'href' for fornecida.
        Caso contrário, é uma div normal para produtos em desenvolvimento.
      */}
      {href ? (
        <Link href={href} className="block bg-ns-card p-8 rounded-2xl border border-white/10 h-full transform-gpu">
          {cardContent}
        </Link>
      ) : (
        <div className="block bg-ns-card p-8 rounded-2xl border border-white/10 h-full transform-gpu">
          {cardContent}
        </div>
      )}
    </motion.div>
  );
}