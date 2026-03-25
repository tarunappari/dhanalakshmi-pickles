import React from 'react'

// css will be in herosection 
import styles from '@/styles/landingpage/HeroSection.module.scss'
import WhiteBgButton from '../common/WhiteBgButton';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import Link from 'next/link';

const Mission = () => {
  return (
    <div className={styles.missionContainer}>
      <FadeInWhenVisible direction="left" delay={0}>
        <h1>We’re on a Mission To Clean Up the Industry</h1>
      </FadeInWhenVisible>
      <FadeInWhenVisible direction="left" delay={0.25}>
        <p>Read about our progress in our latest Impact Report.</p>
      </FadeInWhenVisible>
      <FadeInWhenVisible direction="left" delay={0.5} effect='bounce'>
        <Link href={'/about'}><WhiteBgButton text={'LEARN MORE'} /></Link>
      </FadeInWhenVisible>
    </div>
  )
}

export default Mission;