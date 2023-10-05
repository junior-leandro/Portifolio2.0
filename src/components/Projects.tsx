import Image from "next/image";

import Projeto1 from '@/assets/AluraPlus.jpg'
import Projeto2 from '@/assets/CardForms.jpg'
import Projeto3 from '@/assets/NasaProject.jpg'
import Projeto4 from '@/assets/memorygame.jpg'
import Projeto5 from '@/assets/NewsLetter.jpg'
import Projeto6 from '@/assets/Spotify.jpg'

export function Projects() {
    return (
        <section className="w-full h-96 flex flex-col items-center bg-primary-blue">
            <div className="w-full flex flex-col justify-center items-center my-10">
                <h2 className="font-bold mt-6 mb-5 text-4xl bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 text-transparent bg-clip-text">MEUS PROJETOS DE ESTUDO DESENVOLVIDOS</h2>
                <span className="font-semibold text-primary-gray text-xl">Aqui listo alguns projetos que desenvolvi para estudo de tecnologias.</span>
            </div>
            <div className="w-full max-w-[1800px] mt-6 flex flex-col items-center">
                <div className="w-full flex items-center justify-around gap-6 px-8 cursor-pointer">
                    
                    <div className="rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                        <Image
                            src={Projeto1}
                            alt="banner"
                            className=" rounded-t-lg"
                        />
                        <span className="text-white font-bold p-2">Landing Page da Alura Plus</span>
                    </div>
                    <div className="rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                        <Image
                            src={Projeto2}
                            alt="banner"
                            className=" rounded-t-lg"
                        />
                        <span className="text-white font-bold p-2">Formulário de cadastro de cartão</span>
                    </div>
                    <div className="rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                        <Image
                            src={Projeto3}
                            alt="banner"
                            className=" rounded-t-lg"
                        />
                        <span className="text-white font-bold p-2">Projeto consumindo API da Nasa com Next.JS</span>
                    </div>
                </div>

                <div className="w-full flex items-center justify-around gap-6 px-8 py-10 cursor-pointer">
                    <div className="rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                        <Image
                            src={Projeto4}
                            alt="banner"
                            className=" rounded-t-lg"
                        />
                        <span className="text-white font-bold p-2">MemoryGame com React</span>
                    </div>
                    <div className="rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                        <Image
                            src={Projeto5}
                            alt="banner"
                            className=" rounded-t-lg"
                        />
                        <span className="text-white font-bold p-2">Formulário de NewsLetter</span>
                    </div>
                    <div className="rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                        <Image
                            src={Projeto6}
                            alt="banner"
                            className=" rounded-t-lg"
                        />
                        <span className="text-white font-bold p-2">Spotify Interface com Angular</span>
                    </div>
                </div>
            </div>

            <div>
                <a className="text-white">Clique aqui para ver mais projetos</a>
            </div>

        </section>
    )
}