import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { SectionHero } from '@/components/SectionHero'
import { Qualities } from '@/components/Qualities'
import { Portifolio } from '@/components/Portifolio'
import { Projects } from '@/components/Projects'
import { Sobre } from '@/components/Sobre'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700']
})

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '700', '800', '900'],
})


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
    <html lang="pt-BR" className={montserrat.className}>
      <body className='bg-primary-blue w-full  h-full flex flex-col items-center'>
        <Header />
        <SectionHero />
        <Portifolio />
        <Projects />
        <Sobre />
      </body>
    </html>
  )
}
