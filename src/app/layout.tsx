import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // 1. Importe o novo componente

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
  title: "Neurostack | Construindo o Futuro Digital",
  description: "Sites, sistemas e soluções de software que unem design inovador com tecnologia de ponta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable} ${openSans.variable} bg-ns-bg text-ns-text font-body`}>
        <Header /> {/* 2. Adicione o Header aqui */}
        {children}
      </body>
    </html>
  );
}