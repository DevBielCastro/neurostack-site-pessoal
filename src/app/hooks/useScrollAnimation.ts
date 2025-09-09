"use client";

import { useEffect, useRef, useState } from 'react';

// A anotação de tipo <T extends HTMLElement> torna nosso hook mais específico e poderoso.
export function useScrollAnimation<T extends HTMLElement>() {
  // Agora o TypeScript sabe que esta ref será para um elemento HTML.
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible] as const; // 'as const' ajuda o TypeScript a entender os tipos do array.
}