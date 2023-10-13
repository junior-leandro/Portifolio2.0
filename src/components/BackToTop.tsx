import Image from "next/image";
import Seta from "@/assets/seta.png"

export function BackToTop(){

    return(

        <a href="#header" className="fixed bottom-5 right-5 cursor-pointer" id="btn">
            <Image
            src={Seta}
            alt="Voltar ao Topo"
            width={60}
            height={60} />
        </a>
        
    )
}