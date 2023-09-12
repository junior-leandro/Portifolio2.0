import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { SectionHero } from '@/components/SectinHero'

const lato = Lato({ 
  subsets: ['latin'],
  weight:['400', '700']
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
    <html lang="pt-BR" className='bg-primary-blue'>
      <Header />
      <SectionHero />
    </html>
  )
}
