import Image from "next/image";
import Rating from "@/assets/rating.png";
import Trophy from "@/assets/trophy.png";

import { GaleryLoop } from "./GaleryLoop";
import { Qualities } from "./Qualities";

export function SectionHero() {
    return (
        <section className="w-full h-screen flex flex-col items-center">

            <div className="w-full h-4/5 max-w-[1800px] flex justify-start">
                <div className="w-1/2">
                    <div className="flex px-10 py-16  gap-20 items-center">
                        <div className="flex flex-col gap-2 items-left">
                            <Image
                                src={Rating}
                                alt="Estrelas" 
                            />
                            <span className="text-primary-gray text-xs">100+ PROJETOS CUSTOMIZADOS</span>
                        </div>
                        <div className="flex flex-col gap-2 items-left">
                            <Image
                                src={Trophy}
                                alt="Troféu"
                            />

                            <span className="text-primary-gray text-xs">#1 TOP  SITES</span>
                        </div>

                    </div>
                    <div className="pl-10 pt-6 text-primary-gray text-left">
                        <h1 className="text-7xl font-black mb-10">
                            <span className="bg-gradient-radial from-pink-500 via-red-600 to-pink-500 text-transparent bg-clip-text font-bold">
                                Tenha o site dos seus sonhos!</span>
                        </h1>
                        <span className="text-xl"><strong>Desenvolvimento Frontend</strong> com tecnologias atualizadas</span>
                    </div>
                </div>

                <div className="h-screen w-1/2 flex items-center justify-center">

                    <GaleryLoop />
                </div>
            </div>
            <Qualities />
        </section>
    )
}