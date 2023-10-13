import Image from 'next/image';

import JuniorLogo from '../assets/logo-x_black.png'
import GitHubLogo from '../assets/github.png';
import LinkedInLogo from '../assets/linkedin.svg';
import WhatsAppLogo from '../assets/whatsapp.svg';
import InstagramLogo from '../assets/instagram.svg';
import ContactLogo from '../assets/mail.png';

export function Contato() {
    return (
        <section className="w-full h-full p-6 flex flex-col items-center justify-center" id="contato">
            <div className="w-full max-w-[1000px] mx-3 flex flex-col items-center justify-center border-4 border-violet-700 rounded-2xl">
                <Image 
                src={JuniorLogo}
                alt="Logotipo Junior.Dev" 
                width={200}
                className='bg-primary-blue border-4 border-violet-700 rounded-3xl -mt-12'/>
                <h2 className="font-bold m-16  text-center text-4xl lg:text-6xl bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 text-transparent bg-clip-text">VAMOS CONVERSAR?</h2>
                <div className='flex justify-center items-center gap-4 mb-16'>
                    <a href="https://github.com/junior-leandro" target="_blank" rel="noopener noreferrer">
                        <Image src={GitHubLogo}
                            alt="Logotipo do GitHub"
                            width={60}
                            height={60}
                            className='bg-white rounded-full p-1 transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer' />
                    </a>

                    <a href="https://www.linkedin.com/in/junior-oliveira-leandro/" target="_blank" rel="noopener noreferrer">
                        <Image src={LinkedInLogo}
                            alt="Logotipo do LinkedIn"
                            width={60}
                            height={60}
                            className='bg-white rounded-full p-1 transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer' />
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=5512992556872" target="_blank" rel="noopener noreferrer">
                        <Image src={WhatsAppLogo}
                            alt="Logotipo do WhatsApp"
                            width={60}
                            height={60}
                            className='bg-white rounded-full p-1 transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer' />
                    </a>

                    <a href="https://www.instagram.com/jr_uba" target="_blank" rel="noopener noreferrer">
                        <Image src={InstagramLogo}
                            alt="Logotipo do Instagram"
                            width={60}
                            height={60}
                            className='bg-white rounded-full p-1 transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer' />
                    </a>

                    <a href="mailto:contato_jr@outlook.com" target="_blank" rel="noopener noreferrer">
                        <Image src={ContactLogo}
                            alt="Logotipo de envelope"
                            width={60}
                            height={60}
                            className='bg-white rounded-full p-1 transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer' />
                    </a>
                </div>
            </div>

        </section>
    )
}