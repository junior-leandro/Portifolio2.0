import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { SectionHero } from '@/components/SectionHero'
import { Qualities } from '@/components/Qualities'
import { Portifolio } from '@/components/Portifolio'
import { Recursos } from '@/components/Recursos'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700']
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
    <html lang="pt-BR" className='bg-primary-blue w-full  h-full flex flex-col items-center'>
      <body className='w-full'>
        <Header />
        <SectionHero />
        <Qualities />
        <Portifolio />
        <Recursos />
      </body>
    </html>
  )
}
