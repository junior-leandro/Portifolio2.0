import Image from "next/image";

import myphoto from "@/assets/junior.png"

export function Sobre() {
    return (
        <section className="w-full h-full bg-secundary-blue flex flex-col items-center" id="sobre">
            <div className="text-white flex flex-col items-center w-full max-w-[1800px]">
                <h2 className="text-center font-bold m-16 text-5xl lg:text-6xl bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 text-transparent bg-clip-text">
                    SOBRE MIM
                </h2>
                <div className="flex flex-col xl:flex-row justify-center items-center gap-6 mb-16 mx-4">

                    <Image
                        src={myphoto}
                        alt="Junior.Dev.Br"
                        className=" bg-yellow-300 rounded-full border-8 border-white"
                    />
                    <div>
                        <p className="text-xl lg:text-2xl text-center my-6">Olá, sou o Junior! Prazer em conheço-lo, e seja bem vindo ao meu portifólio!</p>
                        <p className="text-base lg:text-xl text-justify my-6">
                            Sou de natural de Ubatuba, litoral norte de São Paulo onde nasci e ainda resido,
                            tenho 32 anos e estudo desenvolvimento frontend a aproximadamente um ano,
                            meu primeiro contato com desenvolvimento foi em 2013 quando fazia o curso tecnico de T.I no
                            Centro Paula Souza e uma das matérias era desenvolvimento web. Foi amor a primeira vista!
                            A possibilidade de fazer algo atraente, funcional e útil, me fascinava.
                            Fiz alguns modelos de sites na época, usando HTML, CSS e JavaScript, e até me aventurei um pouco em PHP e SQL. Por motivos adversos, precisei deixar o curso técnico para trabalhar mas a paixão ficou ali
                            esperando a oportunidade de voltar aos estudos. <br />
                            No final de 2022 me matriculei na faculdade de Analise e Desenvolvimento de Sistemas pela Universidade
                            Paulista (UNIP) e paralelamente comecei a estudar desenvolvimento frontend na ALURA, lá conheci um dos
                            professores, o Pedro Marins. O Pedro tem uma mentoria especifica para dev's e eu participei desta mentoria,
                            foi um grande divisor na minha tragetória pois ao invés de ensinar a copiar código, na mentoria
                            aprendi a pensar como um dev e a procurar as soluções dos problemas dos códigos nos lugares certos. <br /><br />
                            Desde que comecei minha jornada como desenvolvedor frontend,
                            fiz alguns trabalhos remotos para pequenas empresas e pessoas fisicas.
                            Sou naturalmente curioso e sempre busco melhorar minhas habilidades
                            a cada projeto, tento sempre focar em um problema por vez.
                            Gosto de codificar coisas do zero e gosto de dar vida às ideias no navegador.
                            Estudo e me desenvolvo em UX e UI sempre em cada projeto.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}