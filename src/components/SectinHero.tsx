import Image from "next/image";
import Rating from "@/assets/rating.png";
import Trophy from "@/assets/trophy.png";

import { GaleryLoop } from "./GaleryLoop";

export function SectionHero() {
    return (

        <div className="h-full w-full flex">
            <div className="h-full w-1/2">
                <div className="flex px-10 py-16 justify-between items-center">
                    <div className="flex flex-col gap-2 items-left">
                        <Image
                            src={Rating}
                            alt="Estrelas"
                        />
                        <span className="text-primary-gray">100+ Projetos Customizados</span>
                    </div>
                    <div className="flex flex-col gap-2 items-left">
                        <Image
                            src={Trophy}
                            alt="Troféu"
                        />

                        <span className="text-primary-gray">#1 Top Sites</span>
                    </div>

                </div>
                <div className="pl-10 pt-6 text-primary-gray text-left">
                    <h1 className="text-7xl font-black mb-10">
                        <span className=" bg-gradient-radial from-blue-700 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                            Tenha o site dos seus sonhos!</span>
                    </h1>
                    <span className="text-xl"><strong>Desenvolvimento Frontend</strong> com tecnologias atualizadas</span>
                </div>
            </div>

            <div className="h-full w-1/2 flex items-center justify-center">
                
                <GaleryLoop />
            </div>
        </div>
    )
}