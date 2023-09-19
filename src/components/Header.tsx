import Image from "next/image";
import Logo from '@/assets/logo-x_black.png'
import { ItemMenu } from "./ItemMenu";
import { ItemMenuSeecundary } from "./ItemMenuSecundary";

export function Header() {
    return (
        <header className="w-full h-20 bg-primary-blue">
            <div className="w-full max-w-[1800px] p-4 mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="http://www.junior.dev.br">
                            <Image
                                src={Logo}
                                alt="logo"
                                width={200}
                            />
                        </a>
                        <span className="text-primary-gray "> | </span>
                        <ul className="flex flex-row gap-8">
                            <li>
                                <ItemMenu
                                    name='Projetos' />
                            </li>
                            <li>
                                <ItemMenu
                                    name='Tecnologias' />
                            </li>
                            <li>
                                <ItemMenu
                                    name='Contato' />
                            </li>
                            <li>
                                <ItemMenu
                                    name='FAQ' />
                            </li>
                        </ul>


                    </div>
                    <div className="">
                        <ItemMenuSeecundary />
                    </div>
                </div>
            </div>


        </header>
    )
}