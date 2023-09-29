import Image from "next/image";

import PortifolioHome from '@/assets/demo-home.png'
import DigitalAgency from '@/assets/digital-agency.png'
import CorporateAgency from '@/assets/corporate-agency.png'
import DarkPersonal from '@/assets/dark-personal-portfolio-landing.png'
import PersonalLandingPage from '@/assets/personal-portfolio.png'
import ProfessionalService from '@/assets/professional-services.png'

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
                            src={PortifolioHome}
                            alt="banner"
                            className=" rounded-t-lg"
                        />
                        <span className="text-white font-bold p-2">Modelo de LandingPage</span>
                    </div>
                    <div className="rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                        <Image
                            src={DigitalAgency}
                            alt="banner"
                            className=" rounded-t-lg"
                        />
                        <span className="text-white font-bold p-2">Agencia Digital</span>
                    </div>
                    <div className="rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                        <Image
                            src={DarkPersonal}
                            alt="banner"
                            className=" rounded-t-lg"
                        />
                        <span className="text-white font-bold p-2">Portifólio Profissional</span>
                    </div>
                </div>

                <div className="w-full flex items-center justify-around gap-6 px-8 py-10 cursor-pointer">
                    <div className="rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                        <Image
                            src={CorporateAgency}
                            alt="banner"
                            className=" rounded-t-lg"
                        />
                        <span className="text-white font-bold p-2">Agencia Corporativa</span>
                    </div>
                    <div className="rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                        <Image
                            src={PersonalLandingPage}
                            alt="banner"
                            className=" rounded-t-lg"
                        />
                        <span className="text-white font-bold p-2">Portifólio Pessoal</span>
                    </div>
                    <div className="rounded-lg flex flex-col items-center bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 transition ease-in-out delay-150 hover:-translate-y-3 duration-150">
                        <Image
                            src={ProfessionalService}
                            alt="banner"
                            className=" rounded-t-lg"
                        />
                        <span className="text-white font-bold p-2">Agencia de Marketing</span>
                    </div>
                </div>
            </div>

        </section>
    )
}