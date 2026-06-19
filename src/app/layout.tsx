import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "NeuroStack | Automação, Sistemas e Fluxos Administrativos",
  description:
    "A NeuroStack cria sistemas, automações e soluções digitais para empresas que precisam controlar vendas, clientes, estoque e processos administrativos com mais clareza e produtividade.",
  keywords: [
    "NeuroStack",
    "case JAB",
    "automação empresarial",
    "sistemas sob medida",
    "controle de vendas",
    "controle de estoque",
    "João Pessoa",
  ],
  openGraph: {
    title: "NeuroStack | Soluções digitais para problemas reais das empresas",
    description:
      "Automatizamos processos, organizamos dados e criamos sistemas para melhorar o fluxo administrativo da sua empresa.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="overflow-x-hidden scroll-smooth">
      <body className={`${montserrat.variable} ${openSans.variable} bg-ns-bg text-ns-text font-body`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
