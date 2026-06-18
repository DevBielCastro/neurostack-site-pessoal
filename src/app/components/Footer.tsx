"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';

const navLinks = [
  { href: '#solutions', label: 'Soluções' },
  { href: '#sistemajab', label: 'SistemaJAB' },
  { href: '#services', label: 'Serviços' },
  { href: '#process', label: 'Processo' },
  { href: '#projects', label: 'Cases' },
];

const officeAddress = [
  'Avenida Rio Grande do Sul',
  '1345',
  'Estados',
  'João Pessoa (PB)',
  'CEP: 58030-020',
].join(', ');

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ns-bg border-t border-white/10">
      <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="font-heading text-2xl font-bold text-white mb-4 inline-block">
              Neuro<span className="text-ns-primary">Stack</span>
            </Link>
            <p className="text-ns-text/70 leading-relaxed">
              Soluções digitais, sistemas e automações para empresas que precisam vender melhor, controlar melhor e crescer com processos mais claros.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 tracking-wider">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ns-text/70 hover:text-ns-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 tracking-wider">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-ns-primary flex-shrink-0" />
                <a href="mailto:contato@neurostack.com.br" className="text-ns-text/70 hover:text-ns-primary transition-colors">contato@neurostack.com.br</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-ns-primary flex-shrink-0" />
                <a href="https://wa.me/558391533883" target="_blank" rel="noopener noreferrer" className="text-ns-text/70 hover:text-ns-primary transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-ns-primary flex-shrink-0 mt-1" />
                <span className="text-ns-text/70">{officeAddress}</span>
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

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-ns-text/50 text-sm">
          <p>&copy; {currentYear} NeuroStack. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
