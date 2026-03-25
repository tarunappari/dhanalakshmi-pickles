import React from 'react'
import styles from '@/styles/about/AboutHeroSection.module.scss'
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const AboutHeroSection = () => {
    return (
        <div className={styles.AboutContainer}>
            <div>
                <FadeInWhenVisible>
                    <h1>We believe</h1>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.25}>
                    <h1>we can all make a difference.</h1>
                </FadeInWhenVisible>
            </div>
            <div className={styles.subhead}>
                <h2>Beautifully Functional. Consciously Crafted.</h2>
            </div>
        </div>
    )
}

export default AboutHeroSection;