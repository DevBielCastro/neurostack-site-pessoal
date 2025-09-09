"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ns-card/30 border-t border-ns-card">
      <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Coluna da Marca */}
          <div className="md:col-span-1">
            <Link href="/" className="font-heading text-2xl font-bold text-white mb-4 inline-block">
              NeuroStack
            </Link>
            <p className="text-ns-text/70 leading-relaxed">
              Construindo o futuro digital com soluções inovadoras e tecnologia de ponta.
            </p>
          </div>

          {/* Coluna de Navegação */}
          <div>
            <h3 className="font-bold text-white mb-4 tracking-wider">Navegação</h3>
            <ul className="space-y-3">
              <li><Link href="#products" className="text-ns-text/70 hover:text-ns-primary transition-colors">Produtos</Link></li>
              <li><Link href="#developers" className="text-ns-text/70 hover:text-ns-primary transition-colors">Equipe</Link></li>
              <li><Link href="#growth" className="text-ns-text/70 hover:text-ns-primary transition-colors">Expansão</Link></li>
              <li><Link href="#pricing" className="text-ns-text/70 hover:text-ns-primary transition-colors">Preços</Link></li>
            </ul>
          </div>

          {/* Coluna de Contato */}
          <div>
            <h3 className="font-bold text-white mb-4 tracking-wider">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-ns-primary" />
                <a href="mailto:contato@neurostack.com.br" className="text-ns-text/70 hover:text-ns-primary transition-colors">contato@neurostack.com.br</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-ns-primary" />
                <a href="https://wa.me/558391533883" target="_blank" rel="noopener noreferrer" className="text-ns-text/70 hover:text-ns-primary transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>
          
          {/* Coluna Social */}
          <div>
             <h3 className="font-bold text-white mb-4 tracking-wider">Siga-nos</h3>
             <a href="https://www.instagram.com/neurostack_tech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ns-text/70 hover:text-ns-primary transition-colors">
                <Instagram size={16} className="text-ns-primary" />
                @neurostack_tech
             </a>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-ns-card/50 text-center text-ns-text/50 text-sm">
          <p>&copy; {currentYear} Neurostack. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}