import React from 'react'
import initiativeImg from '@/public/assets/blog/initiative.webp'
import Image from 'next/image';
import styles from '@/styles/blog/BlogInitiative.module.scss'


const BlogInitiativeCard = () => {
    return (
        <div className={styles.initiativeCard}>
            <div className={styles.imgContainer}>
                <Image src={initiativeImg} alt='img' layout='fill' objectFit='cover' />
            </div>
            <p>Carbon Commitment</p>
        </div>
    )
}

export default BlogInitiativeCard;