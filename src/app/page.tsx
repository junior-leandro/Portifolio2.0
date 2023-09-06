import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24 ">

      <div >
        <Image
          className="relative"
          src="/logo_black.png"
          alt="junior.dev.br Logo"
          width={350}
          height={350}
          priority
        />
      </div>
    </main>
  )
}
