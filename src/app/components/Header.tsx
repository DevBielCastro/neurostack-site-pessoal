"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: "#products", text: "Produtos" },
  { href: "#services", text: "Serviços" },
  { href: "#developers", text: "Equipe" }, // ALTERADO AQUI
  { href: "#resources", text: "Recursos" },
  { href: "#pricing", text: "Preços" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-ns-bg/80 backdrop-blur-sm border-b border-ns-card">
      <div className="container flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-2xl font-bold text-white">
          NeuroStack
        </Link>

        {/* Menu para Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-ns-text/80 hover:text-white transition-colors">
              {link.text}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center">
            <a
                href="https://wa.me/558391533883"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-ns-bg font-bold py-2 px-5 rounded-lg hover:opacity-90 transition-opacity"
            >
                Fale com nossa equipe
            </a>
        </div>


        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menu" className="p-2">
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Painel do Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-ns-bg p-6 shadow-2xl"
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
                        href="https://wa.me/558391533883"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center block bg-ns-primary text-ns-bg font-bold py-3 px-6 rounded-lg"
                    >
                        Fale com nossa equipe
                    </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}