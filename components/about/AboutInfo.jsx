import React from 'react'
import styles from '@/styles/about/AboutInfo.module.scss'
import approachImg from '@/public/assets/about/approach.webp'
import madeToLast from '@/public/assets/about/madeToLast.webp'
import Image from 'next/image'
import FadeInWhenVisible from '../animations/FadeInWhenVisible'


const AboutInfo = () => {
    return (
        <div className={styles.AboutInfoContainer}>
            <div className={styles.info}>
                <p>A mission statement is a concise declaration of an organization's core purpose and focus. It serves as a guiding principle for decision-making and helps align the team towards common goals. A well-crafted mission statement articulates the values and objectives of the organization, providing clarity on what it stands for and its commitment to stakeholders. It often reflects the company's dedication to ethical practices, quality, and transparency in its operations.</p>
            </div>
            <div className={styles.approach}>
                <div className={`${styles.aboutInfoImgContainer}`}>
                    <Image src={approachImg} alt='img' layout='fill' objectFit='cover' objectPosition='center' />
                </div>
                <div className={styles.centeringAbout}>
                    <FadeInWhenVisible direction='bottom' delay={0.5}>
                        <h1>Our approach.</h1>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction='bottom' delay={0.75}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus justo enim, eu elementum dui tempor fringilla. Nulla facilisi. Donec dignissim elit in eros pharetra commodo. Duis et ante mattis, ultrices dolor id, varius ex. Aenean in commodo purus. Nunc odio diam, auctor ut accumsan et, tristique ornare ante. Morbi ac blandit odio. Suspendisse nec nulla eget dolor vulputate rutrum. Ut egestas nec risus vel tempus. Integer sodales magna sit amet magna commodo, sit amet sagittis massa sodales. Nulla lacinia libero eu nulla lobortis gravida.</p>
                    </FadeInWhenVisible>
                </div>
            </div>
            <div className={styles.leafBg}>

            </div>
            <div className={`${styles.approach} ${styles.madeToLastContainer}`}>
                <div className={styles.centeringAbout}>
                    <FadeInWhenVisible direction='bottom' delay={0.5}>
                        <h1>Made To Last.</h1>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction='bottom' delay={0.75}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus justo enim, eu elementum dui tempor fringilla. Nulla facilisi. Donec dignissim elit in eros pharetra commodo. Duis et ante mattis, ultrices dolor id, varius ex. Aenean in commodo purus. Nunc odio diam, auctor ut accumsan et, tristique ornare ante. Morbi ac blandit odio. Suspendisse nec nulla eget dolor vulputate rutrum. Ut egestas nec risus vel tempus. Integer sodales magna sit amet magna commodo, sit amet sagittis massa sodales. Nulla lacinia libero eu nulla lobortis gravida.</p>
                    </FadeInWhenVisible>
                </div>
                <div className={`${styles.aboutInfoImgContainer}`}>
                    <Image src={madeToLast} alt='img' layout='fill' objectFit='cover' objectPosition='center' />
                </div>
            </div>
            <div className={styles.last}>

            </div>
        </div>
    )
}

export default AboutInfo;