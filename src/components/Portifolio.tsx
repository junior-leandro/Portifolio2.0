import Image from "next/image";

import Portifolio1 from '@/assets/besthouses.jpg'
import Portifolio2 from '@/assets/classicbarber.jpg'
import Portifolio3 from '@/assets/juniordev.jpg'
import Portifolio4 from '@/assets/mbconsult.jpg'
import Portifolio5 from '@/assets/stereorock.jpg'
import Portifolio6 from '@/assets/thiagaobarber.jpg'

export function Portifolio() {
    return (
        <section className="bg-secundary-blue w-full flex flex-col items-center" id="portifolio">
            <div className="w-full flex flex-col justify-center items-center my-10">
                <span className="font-bold mt-4 bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 text-transparent bg-clip-text">DEIXE O CÓDIGO COMIGO!</span>
                <h2 className="font-bold mt-2 mb-5 text-4xl bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 text-transparent bg-clip-text text-center">SITES E PROJETOS FRONTEND DESENVOLVIDOS</h2>
                <span className="font-semibold text-primary-gray text-base lg:text-xl text-center mx-1">Escolha entre meus estilos e personalize facilmente seu site seguindo suas ideias.</span>
                <span className="font-semibold text-primary-gray text-base lg:text-xl text-center">Ou vamos começar um projeto do zero!</span>
            </div>

            <div className="w-full max-w-[1800px] mt-6 flex flex-col items-center">
                <div className="w-full flex flex-col lg:flex-row items-center justify-around gap-6 px-8 cursor-pointer">
                    <a href="http://besthouses.com.br" target="_blank" className="text-white font-bold p-2">
                        <div className="shadow-xl rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                            <Image
                                src={Portifolio1}
                                alt="banner"
                                className=" rounded-t-lg"
                            />
                            <span className="text-white font-bold p-2">Best Houses Ubatuba</span>
                        </div>
                    </a>
                    <a href="http://classicbarber.com.br" target="_blank" className="text-white font-bold p-2">
                        <div className="shadow-xl rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                            <Image
                                src={Portifolio2}
                                alt="banner"
                                className=" rounded-t-lg"
                            />
                            <span className="text-white font-bold p-2">Classic Barber</span>
                        </div>
                    </a>

                    <a href="http://junior.dev.br" target="_blank" className="text-white font-bold p-2">
                        <div className="shadow-xl rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                            <Image
                                src={Portifolio3}
                                alt="banner"
                                className=" rounded-t-lg"
                            />
                            <span className="text-white font-bold p-2">Portifólio Profissional</span>
                        </div>
                    </a>
                </div>

                <div className="w-full flex flex-col lg:flex-row items-center justify-around gap-6 px-8 py-10 cursor-pointer">
                    <a href="http://mbconsulthp.com.br" target="_blank" className="text-white font-bold p-2">
                        <div className="shadow-xl rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                            <Image
                                src={Portifolio4}
                                alt="banner"
                                className=" rounded-t-lg"
                            />

                            <span className="text-white font-bold p-2">M&B Consult Holding Familiar</span>

                        </div>
                    </a>
                    <a href="http://stereorock.com.br" target="_blank" className="text-white font-bold p-2">
                        <div className="shadow-xl rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                            <Image
                                src={Portifolio5}
                                alt="banner"
                                className=" rounded-t-lg"
                            />

                            <span className="text-white font-bold p-2">Rádio Rock Stereo Rock</span>

                        </div>
                    </a>
                    <a href="http://barbeariathiagaobarber.com.br" target="_blank" className="text-white font-bold p-2">
                        <div className="shadow-xl rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                            <Image
                                src={Portifolio6}
                                alt="banner"
                                className=" rounded-t-lg"
                            />

                            <span className="text-white font-bold p-2">Barbearia Thiagão Barber</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}