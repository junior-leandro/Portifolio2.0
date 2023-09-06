import Image from "next/image";
import Logo from '@/assets/logo_black.png'

export function Header() {
    return (
        <header className="w-full h-20 bg-primary-blue">
            <div className="w-full max-w-[1246px] p-4 mx-auto">
                <div>
                    <div className="flex items-end gap-24">
                        <Image
                            src={Logo}
                            alt="logo"
                            width={80}
                            height={80}
                        />
                        <ul className="flex flex-row gap-8">
                            <li>
                                <button className="flex items-center gap-3">
                                    <span className="text-white font-bold">Projetos</span>
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center gap-3">
                                    <span className="text-white font-bold">Tecnologias</span>
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center gap-3">
                                    <span className="text-white font-bold">Contato</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </header>
    )
}