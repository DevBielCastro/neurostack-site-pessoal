"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const whatsappLink = "https://wa.me/558391533883?text=Ol%C3%A1%2C%20quero%20agendar%20um%20diagn%C3%B3stico%20para%20automatizar%20minha%20empresa.";

const navLinks = [
  { href: "#solutions", text: "Soluções" },
  { href: "#sistemajab", text: "SistemaJAB" },
  { href: "#process", text: "Processo" },
  { href: "#projects", text: "Cases" },
  { href: "#contact", text: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 transition-colors duration-300 ${
      isOpen ? 'bg-ns-bg' : 'bg-ns-bg/85 backdrop-blur-md'
    }`}>
      <div className="container flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-2xl font-bold text-white tracking-tight">
          Neuro<span className="text-ns-primary">Stack</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-ns-text/80 hover:text-white transition-colors">
              {link.text}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ns-primary text-ns-bg font-bold py-2.5 px-5 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-ns-primary/20"
          >
            Diagnóstico gratuito
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menu" className="p-2 z-[60] relative">
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={toggleMenu}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-ns-bg p-6 shadow-2xl z-[60] border-l border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-8">
                <button onClick={toggleMenu} aria-label="Fechar menu" className="p-2">
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-white text-2xl font-bold py-2"
                    onClick={toggleMenu}
                  >
                    {link.text}
                  </Link>
                ))}
                <div className="border-t border-ns-card pt-6 mt-6">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center block bg-ns-primary text-ns-bg font-bold py-3 px-6 rounded-lg"
                  >
                    Diagnóstico gratuito
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
