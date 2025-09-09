import { getCaseBySlug } from '@/app/lib/case-data';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle, Target, Zap, BarChart2, Briefcase, Bot, UserCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Esta função gera os metadados (título da aba) para cada página
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseBySlug(params.slug);
  if (!caseStudy) return { title: 'Case não encontrado' };
  return { title: `${caseStudy.client} | Case Neurostack` };
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseBySlug(params.slug);

  // Se o case não for encontrado, mostra uma página 404
  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="bg-ns-bg text-white">
      {/* Cabeçalho do Case */}
      <header className="py-24 md:py-32 bg-ns-card/30 border-b border-ns-card">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-ns-primary mb-6 hover:underline">
            <ArrowLeft size={16} /> Voltar para Projetos
          </Link>
          <p className="font-bold text-lg text-ns-primary mb-2">{caseStudy.client}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{caseStudy.title}</h1>
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Coluna Principal de Conteúdo */}
          <div className="md:col-span-2 space-y-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold flex items-center gap-3"><Target className="text-ns-primary" /> O Desafio</h2>
              <p className="text-ns-text/80">{caseStudy.challenge}</p>

              <h2 className="text-3xl font-bold flex items-center gap-3 mt-12"><Zap className="text-ns-primary" /> A Solução</h2>
              <p className="text-ns-text/80">{caseStudy.solution}</p>
              
              <h2 className="text-3xl font-bold flex items-center gap-3 mt-12"><BarChart2 className="text-ns-primary" /> O Resultado</h2>
              <p className="text-ns-text/80">{caseStudy.result}</p>
            </div>
            
            {/* Depoimento */}
            <blockquote className="border-l-4 border-ns-primary pl-6 italic text-xl text-ns-text/90">
              "{caseStudy.quote}"
              <cite className="block not-italic mt-4 font-bold text-white">— {caseStudy.quoteAuthor}</cite>
            </blockquote>
          </div>

          {/* Barra Lateral de Informações */}
          <aside className="space-y-8">
            <div className="bg-ns-card p-6 rounded-xl border border-ns-card/50">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Briefcase /> Serviços Entregues</h3>
              <ul className="space-y-2">
                {caseStudy.services.map(service => (
                  <li key={service} className="flex items-center gap-2 text-ns-text/80">
                    <CheckCircle size={16} className="text-ns-primary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ns-card p-6 rounded-xl border border-ns-card/50">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Bot /> Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map(tech => (
                  <span key={tech} className="bg-ns-bg text-ns-primary text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>

            <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-ns-primary text-ns-bg font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
              Ver Site Ao Vivo
            </a>
          </aside>
        </div>
      </main>
    </div>
  );
}