// src/app/components/LottiePlayer.tsx

"use client";

import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottiePlayerProps {
  animationData: any;
  className?: string;
}

export default function LottiePlayer({ animationData, className }: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    // Garante que o container existe antes de tentar renderizar a animação
    if (containerRef.current && !animRef.current) {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
    
    // Limpeza: destrói a animação quando o componente é desmontado para evitar vazamento de memória
    return () => {
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, [animationData]);

  return <div ref={containerRef} className={className} />;
}