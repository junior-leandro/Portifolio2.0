import Image from "next/image";

import Icone1 from "@/assets/icons-01.png"
import Icone2 from "@/assets/icons-02.png"
import Icone3 from "@/assets/icons-03.png"
import Icone4 from "@/assets/icons-04.png"

export function Qualities() {
    return (
        <section className="w-full h-full flex flex-col items-center ">
            <div className="w-full max-w-[1800px] flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-start my-3 text-primary-gray">
                <div className="flex flex-col items-center gap-4 w-full md:w-3/4 lg:w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                    <Image src={Icone1} alt="icone 1" className="mt-6 lg:mt-0" />
                    <h3 className="text-xl font-semibold text-center">Desempenho Rápido</h3>
                    <p className="text-center mx-4 lg:mx-0">Sites otimizados para um tamanho de compilação menor, compilação e desenvolvimento mais rápida e melhorias de desempenho.</p>
                </div>
                <div className="flex flex-col items-center gap-4 w-full md:w-3/4 lg:w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                    <Image src={Icone2} alt="icone 2" className="mt-6 lg:mt-0" />
                    <h3 className="text-xl font-semibold text-center">Responsivida Perfeita</h3>
                    <p className="text-center mx-4 lg:mx-0">Sites projetados e desenvolvidos para todos os dispositivos nos mais variados tamanhos.</p>
                </div>
                <div className="flex flex-col items-center gap-4 w-full md:w-3/4 lg:w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                    <Image src={Icone3} alt="icone 3" className="mt-6 lg:mt-0" />
                    <h3 className="text-xl font-semibold text-center">Suporte rápido e amigável</h3>
                    <p className="text-center mx-4 lg:mx-0">Ofereço suporte 24 horas para todos os clientes. Você pode me contratar sem hesitação. :D </p>
                </div>
                <div className="flex flex-col items-center gap-4 w-full md:w-3/4 lg:w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                    <Image src={Icone4} alt="icone 4" className="mt-6 lg:mt-0" />
                    <h3 className="text-xl font-semibold text-center">Não se preocupe!</h3>
                    <p className="text-center mx-4 lg:mx-0">Crie qualquer site que você possa imaginar sem conhecer nenhuma codificação. Não há limite para a sua criatividade! Vamos conversar?</p>
                </div>
            </div>
        </section>

    )
}