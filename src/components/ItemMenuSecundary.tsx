import Image from "next/image";
import Friendly from '@/assets/friendly.png'
import Talk from '@/assets/talk-icon.png'

export function ItemMenuSeecundary() {
    return (
        <div className="flex gap-3">

            <a href="https://api.whatsapp.com/send?phone=5512991054072" target="_blank">
                <div className="flex gap-3 px-1 items-center justify-center border-solid border-2 border-border-blue rounded-3xl">
                    <Image
                        src={Friendly}
                        alt=""
                        width={40}
                        height={40}
                    />
                    <span className="text-primary-gray px-2">Suporte Amigável</span>
                </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5512991054072" target="_blank">
                <div className="flex gap-3 px-1 items-center justify-center border-solid border-2 border-border-blue rounded-3xl">
                    <Image
                        src={Talk}
                        alt=""
                        width={34}
                        height={34}
                    />
                    <span className="text-primary-gray px-2">Vamos conversar?</span>
                </div>
            </a>
        </div>
    )
}