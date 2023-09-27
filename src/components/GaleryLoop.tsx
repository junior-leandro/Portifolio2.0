import Image from "next/image";

import Banner1 from '@/assets/banner-01.png'
import Banner2 from '@/assets/banner-02.png'
import Banner3 from '@/assets/banner-03.png'
import Banner4 from '@/assets/banner-04.png'
import Banner5 from '@/assets/banner-05.png'

import styles from "@/app/banner.module.css"


export function GaleryLoop() {
    return (
        <div className={styles.bannerGalleryWrapper}>
            <div className={styles.bannerGalleryLoop}>
                <div className="flex gap-3 mt-7 h-3/4">
                    <div className={styles.bannerGallery1}>
                        <Image src={Banner1} alt="Banner Images"
                        />
                        <Image src={Banner1} alt="Banner Images"
                        />
                    </div>
                    <div className={styles.bannerGallery2}>
                        <Image src={Banner2} alt="Banner Images"
                        />
                        <Image src={Banner2} alt="Banner Images"
                        />
                    </div>
                    <div className={styles.bannerGallery3}>
                        <Image src={Banner3} alt="Banner Images"
                        />
                        <Image src={Banner3} alt="Banner Images"
                        />
                    </div>
                    <div className={styles.bannerGallery4}>
                        <Image src={Banner4} alt="Banner Images"
                        />
                        <Image src={Banner4} alt="Banner Images"
                        />
                    </div>
                    <div className={styles.bannerGallery5}>
                        <Image src={Banner5} alt="Banner Images"
                        />
                        <Image src={Banner5} alt="Banner Images"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}