import './globals.css';
import type { Metadata } from 'next';

import { Header } from '@/components/Header';
import { SectionHero } from '@/components/SectionHero';
import { Portifolio } from '@/components/Portifolio';
import { Projects } from '@/components/Projects';
import { Sobre } from '@/components/Sobre';
import { Tecnologias } from '@/components/Tecnologias';
import { Contato } from '@/components/Contato';
import { Footer } from '@/components/Footer';



export const metadata: Metadata = {
  title: 'junior.dev.br | Portifólio',
  description: 'Portifólio de Projetos Frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className='bg-primary-blue w-full  h-full flex flex-col items-center'>
        <Header />
        <SectionHero />
        <Portifolio />
        <Projects />
        <Sobre />
        <Tecnologias />
        <Contato />
        <Footer />
      </body>
    </html>
  )
}
