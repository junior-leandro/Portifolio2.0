import Image from "next/image";

import Banner1 from '@/assets/banner-01.png'
import Banner2 from '@/assets/banner-02.png'
import Banner3 from '@/assets/banner-03.png'
import Banner4 from '@/assets/banner-04.png'
import Banner5 from '@/assets/banner-05.png'


export function GaleryLoop() {
    return (
        <div className="h-screen w-full mx-4">
            <div className="flex gap-3 mt-7 h-3/4">
                <div className="overflow-hidden relative top-7">
                    <Image src={Banner1} alt="Banner Images"
                    />
                </div>
                <div className=" overflow-hidden relative top-1">
                    <Image src={Banner2} alt="Banner Images"
                    />
                </div>
                <div className=" overflow-hidden relative top-12">
                    <Image src={Banner3} alt="Banner Images"
                    />
                </div>
                <div className=" overflow-hidden relative top-10">
                    <Image src={Banner4} alt="Banner Images"
                    />
                </div>
                <div className=" overflow-hidden relative top-24">

                    <Image src={Banner5} alt="Banner Images"
                    />
                </div>
            </div>
        </div>
    )
}