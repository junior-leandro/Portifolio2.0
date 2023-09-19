import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { SectionHero } from '@/components/SectinHero'
import { GaleryLoop } from '@/components/GaleryLoop'
import { Qualities } from '@/components/Qualities'
import { Portifolio } from '@/components/Portifolio'

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
    <html lang="pt-BR" className='bg-primary-blue flex flex-col items-center'>
      <body className=''>
        <Header />
        <SectionHero />
        <Qualities />
        <Portifolio />
      </body>
    </html>
  )
}
