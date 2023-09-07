import Image from 'next/image'
import Logo from '@/assets/logo_black.png'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <Image
      src={Logo}
      alt='logo'
      width={500}
      height={500}
      />

<span className=' text-primary-gray my-10'> Em Desenvolvimento...</span>
    </main>
  )
}
