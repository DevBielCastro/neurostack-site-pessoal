"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ns-bg/80 backdrop-blur-sm border-b border-ns-card">
      <div className="container flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-2xl font-bold text-white">
          NeuroStack
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#products" className="text-ns-text hover:text-white transition-colors">Produtos</Link>
          <Link href="#developers" className="text-ns-text hover:text-white transition-colors">Desenvolvedores</Link>
          <Link href="#resources" className="text-ns-text hover:text-white transition-colors">Recursos</Link>
          <Link href="#pricing" className="text-ns-text hover:text-white transition-colors">Preços</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/558391533883"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-ns-bg font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Fale com nossa equipe
          </a>
        </div>
      </div>
    </header>
  );
}