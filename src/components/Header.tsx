import Image from "next/image";
import Logo from '@/assets/logo-x_black.png'
import { ItemMenu } from "./ItemMenu";
import { ItemMenuSeecundary } from "./ItemMenuSecundary";

export function Header() {
    return (
        <header className="w-full h-24 bg-primary-blue" id="header">
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
                        <span className="text-primary-gray hidden lg:block"> | </span>
                        <ul className="hidden lg:flex lg:flex-row gap-8">
                            <li>
                                <a href="#portifolio">
                                    <ItemMenu name='Portifólio' />
                                </a>
                            </li>
                            <li>
                                <a href="#projetos">
                                    <ItemMenu name='Projetos' />
                                </a>
                            </li>
                            <li>
                                <a href='#tecnologias'>
                                    <ItemMenu name='Tecnologias' />
                                </a>
                            </li>
                            <li>
                                <a href='#sobre'>
                                    <ItemMenu name='Sobre' />
                                </a>
                            </li>
                            <li>
                                <a href="#contato">
                                    <ItemMenu name='Contato' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <ItemMenuSeecundary />
                    </div>
                </div>
            </div>


        </header>
    )
}