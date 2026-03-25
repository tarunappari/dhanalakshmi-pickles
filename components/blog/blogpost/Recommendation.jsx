import React from 'react'
import carouselStyles from '@/styles/landingpage/Favourites.module.scss'
import styles from '@/styles/blog/BlogPost.module.scss'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import BlackBtn from '@/components/common/BlackBtn'

import Image from 'next/image'
import favImg from '@/public/assets/landingpage/fav.webp'
import Link from 'next/link'


const Recommendation = () => {
    return (
        <div className={styles.recommendation}>
            <h1>//Product Recommendation based on blog//</h1>
            <div className={carouselStyles.carouselContainer}>
                <Carousel className={carouselStyles.carousel}>
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-3 md:basis-1/3 lg:basis-1/4">
                                <div className="p-1">
                                    <Link href={'/shop/plantDetails'}>
                                        <div className={carouselStyles.favCard}>
                                            <div className={carouselStyles.imgContainer}>
                                                <Image src={favImg} alt='plant' />
                                            </div>
                                            <div className={carouselStyles.favInfo}>
                                                <div style={{ paddingTop: '0.5rem' }}>
                                                    <p>Plant & Pot</p>
                                                    <p>$60</p>
                                                </div>
                                                <div className={carouselStyles.color}>Colour</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className={'carouselbtn'} />
                    <CarouselNext className={'carouselbtn'} />
                </Carousel>
            </div>
            <Link href={'/shop'}>
                <BlackBtn text={'Shop Now'} />
            </Link>
        </div>
    )
}

export default Recommendation;