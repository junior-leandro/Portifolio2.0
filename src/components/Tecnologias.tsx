
import Image from "next/image"

import Angular from "../assets/angularjs-original.svg";
import NextJS from '../assets/nextjs-original.svg';
import NodeJS from '../assets/nodejs-original.svg';
import HTML5 from '../assets/html5-original.svg';
import CSS3 from '../assets/css3-original.svg';
import JavaScript from '../assets/javascript-original.svg';
import TypeScript from '../assets/typescript-original.svg';
import React from '../assets/react-original.svg';
import Tailwind from '../assets/tailwindcss-plain.svg';
import Git from '../assets/git-original.svg';
import GitHub from '../assets/github-original.svg';
import VSCode from '../assets/vscode-original.svg';
import Figma from '../assets/figma-original.svg';
import Filezilla from '../assets/filezilla-plain.svg';
import Firefox from '../assets/firefox-original.svg';
import Chrome from '../assets/chrome-original.svg';
import Opera from '../assets/opera-original.svg';
import Safari from '../assets/safari-original.svg';
import Canva from '../assets/canva-original.svg';
import Arduino from '../assets/arduino-original.svg';
import Windows from '../assets/windows8-original.svg';
import Markdown from '../assets/markdown-original.svg';
import NPM from '../assets/npm-original-wordmark.svg';
import YARN from '../assets/yarn-original.svg';
import SASS from '../assets/sass-original.svg';
import Vite from '../assets/Vitejs-logo.svg';
import Bootstrap from '../assets/bootstrap-original.svg';
import Vercel from '../assets/logo-vercel.svg';
import StyledComponents from '../assets/styled-components-.svg';
import Google from '../assets/google-original.svg';
import Wordpress from '../assets/wordpress-plain.svg';

export function Tecnologias() {
    return (
        <section className="w-full h-full bg-neutral-200 p-16 flex flex-col items-center justify-center" id="tecnologias">
            <h2 className="font-bold mb-16 text-4xl md:text-6xl bg-gradient-radial from-blue-700 via-purple-500 to-pink-600 text-transparent bg-clip-text">TECNOLOGIAS</h2>
            <div className="w-full max-w-[1800px] flex flex-wrap gap-4 lg:gap-16 justify-center items-center pb-10">
                <Image src={Angular}
                    alt="Angular"
                    title="Angular"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={NextJS}
                    alt="Next.JS"
                    title="Next.JS"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={NodeJS}
                    alt="Node.JS"
                    title="Node.JS"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={HTML5}
                    alt="HTML 5"
                    title="HTML 5"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={CSS3}
                    alt="CSS 3"
                    title="CSS 3"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={JavaScript}
                    alt="javaScript"
                    title="javaScript"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={TypeScript}
                    alt="TypeScript"
                    title="TypeScript"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={React}
                    alt="React"
                    title="React"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Tailwind}
                    alt="Tailwind"
                    title="Tailwind"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Git}
                    alt="Git"
                    title="Git"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={GitHub}
                    alt="GitHub"
                    title="GitHub"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={VSCode}
                    alt="VSCode"
                    title="VSCode"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Figma}
                    alt="Figma"
                    title="Figma"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Filezilla}
                    alt="Filezilla"
                    title="Filezilla"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Firefox}
                    alt="Firefox"
                    title="Firefox"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Chrome}
                    alt="Chrome"
                    title="Chrome"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Opera}
                    alt="Opera"
                    title="Opera"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Safari}
                    alt="Safari"
                    title="Safari"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Canva}
                    alt="Canva"
                    title="Canva"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Arduino}
                    alt="Arduino"
                    title="Arduino"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Windows}
                    alt="Windows"
                    title="Windows"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Markdown}
                    alt="Markdown"
                    title="Markdown"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={NPM}
                    alt="NPM"
                    title="NPM"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={YARN}
                    alt="YARN"
                    title="YARN"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={SASS}
                    alt="SASS"
                    title="SASS"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Vite}
                    alt="Vite"
                    title="Vite"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Bootstrap}
                    alt="Bootstrap"
                    title="Bootstrap"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={StyledComponents}
                    alt="StyledComponents"
                    title="StyledComponents"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Vercel}
                    alt="Vercel"
                    title="Vercel"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Google}
                    alt="Google"
                    title="Google"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
                <Image src={Wordpress}
                    alt="Wordpress"
                    title="Wordpress"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] transition ease-in-out delay-150 hover:scale-125 duration-300 cursor-pointer" />
            </div>
        </section>
    )
}