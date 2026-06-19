"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ns-card/30 border-t border-ns-card">
      <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-heading text-2xl font-bold text-white mb-4 inline-block">
              Neuro<span className="text-ns-primary">Stack</span>
            </Link>
            <p className="text-ns-text/70 leading-relaxed">
              Sistemas, sites e automações para empresas que querem vender melhor, organizar processos e tomar decisões com mais controle.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 tracking-wider">Navegação</h3>
            <ul className="space-y-3">
              <li><Link href="#solutions" className="text-ns-text/70 hover:text-ns-primary transition-colors">Soluções</Link></li>
              <li><Link href="#services" className="text-ns-text/70 hover:text-ns-primary transition-colors">Serviços</Link></li>
              <li><Link href="#projects" className="text-ns-text/70 hover:text-ns-primary transition-colors">Projetos</Link></li>
              <li><Link href="#process" className="text-ns-text/70 hover:text-ns-primary transition-colors">Processo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 tracking-wider">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-ns-primary" />
                <a href="mailto:contato@neurostack.com.br" className="text-ns-text/70 hover:text-ns-primary transition-colors">contato@neurostack.com.br</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-ns-primary" />
                <a href="https://wa.me/5583993136252?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20NeuroStack." target="_blank" rel="noopener noreferrer" className="text-ns-text/70 hover:text-ns-primary transition-colors">(83) 99313-6252</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-ns-primary mt-1 flex-shrink-0" />
                <span className="text-ns-text/70">Avenida Rio Grande do Sul, 1345, Estados, João Pessoa (PB). CEP: 58030-020</span>
              </li>
            </ul>
          </div>
          
          <div>
             <h3 className="font-bold text-white mb-4 tracking-wider">Siga-nos</h3>
             <a href="https://www.instagram.com/neurostack_tech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ns-text/70 hover:text-ns-primary transition-colors">
                <Instagram size={16} className="text-ns-primary" />
                @neurostack_tech
             </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ns-card/50 text-center text-ns-text/50 text-sm">
          <p>&copy; {currentYear} NeuroStack. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
