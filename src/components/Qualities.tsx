import Image from "next/image";

import Icone1 from "@/assets/icons-01.png"
import Icone2 from "@/assets/icons-02.png"
import Icone3 from "@/assets/icons-03.png"
import Icone4 from "@/assets/icons-04.png"

export function Qualities() {
    return (
        <section className="w-full h-64 flex flex-col items-center ">
            <div className="w-full max-w-[1800px]  flex justify-around items-top text-primary-gray">
                <div className="flex flex-col gap-4 w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                    <Image src={Icone1} alt="icone 1" />
                    <h3 className="text-xl font-semibold">Desempenho Rápido</h3>
                    <p >Sites otimizados para um tamanho de compilação menor, compilação e desenvolvimento mais rápida e melhorias de desempenho.</p>
                </div>
                <div className="flex flex-col gap-4 w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                    <Image src={Icone2} alt="icone 2" />
                    <h3 className="text-xl font-semibold">Responsivida Perfeita</h3>
                    <p>Sites projetados e desenvolvidos para todos os dispositivos nos mais variados tamanhos.</p>
                </div>
                <div className="flex flex-col gap-4 w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                    <Image src={Icone3} alt="icone 3" />
                    <h3 className="text-xl font-semibold">Suporte rápido e amigável</h3>
                    <p>Ofereço suporte 24 horas para todos os clientes. Você pode me contratar sem hesitação. :D </p>
                </div>
                <div className="flex flex-col gap-4 w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                    <Image src={Icone4} alt="icone 4" />
                    <h3 className="text-xl font-semibold">Não se preocupe!</h3>
                    <p>Crie qualquer site que você possa imaginar sem conhecer nenhuma codificação. Não há limite para a sua criatividade! Vamos conversar?</p>
                </div>
            </div>
        </section>

    )
}