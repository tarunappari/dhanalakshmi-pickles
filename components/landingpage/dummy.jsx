import React from 'react'
import styles from '@/styles/landingpage/Favourites.module.scss'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import testimonalImg from '@/public/assets/landingpage/testimonial.jpg'
import Image from 'next/image'
import StarIcon from '@/public/assets/icons/star.svg'
import Link from 'next/link'

const Testimonals = () => {
    return (
        <div className={styles.testimonalContainer}>
            <Carousel className={styles.testimonalCarousel}>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className={'carouselItemTestimonal'}>
                            <div className="p-1">
                                <Link href={'/shop/plantDetails'}>
                                    <div className={styles.testimonalCard}>
                                        <div className={styles.cardInfo}>
                                            <div>
                                                <span>People Are Talking</span>
                                            </div>
                                            <div className={styles.customerTestimonal}>
                                                <div>
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                </div>
                                                <p>"This plant is amazing! It thrives in my living room and adds a vibrant touch to the space. The leaves are lush and healthy, making it a joy to care for."</p>
                                            </div>
                                            <div>
                                                <span>– Arun</span>
                                            </div>
                                        </div>
                                        <div className={styles.imgContainer}>
                                            <Image src={testimonalImg} alt='img' />
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
    )
}

export default Testimonals;