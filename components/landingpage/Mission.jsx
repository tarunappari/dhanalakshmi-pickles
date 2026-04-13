import React from 'react'

// css will be in herosection 
import styles from '@/styles/landingpage/Mission.module.scss'
import palmoil from '@/public/assets/decors/nopalmoil.webp'
import nopreservatives from '@/public/assets/decors/nopreservatives.webp'
import noaddedcolors from '@/public/assets/decors/noaddedcolors.webp'
import freshlyprepared from '@/public/assets/decors/freshly.webp'
import Image from 'next/image'

const Mission = () => {
  return (
    <div className={styles.missionContainer}>
      <div className={`${styles.missionCard} ${styles.missionCard1}`}>
        <div>
          <Image src={palmoil} alt='img' loading='lazy'/>
        </div>
        <p>No palm oil</p>
      </div>
      <div className={styles.missionCard}>
        <div>
          <Image src={nopreservatives} alt='img' loading='lazy'/>
        </div>
        <p>No preservatives</p>
      </div>
      <div className={styles.missionCard}>
        <div>
          <Image src={noaddedcolors} alt='img' loading='lazy'/>
        </div>
        <p>No added colors</p>
      </div>
      <div className={styles.missionCard}>
        <div>
          <Image src={freshlyprepared} alt='img' loading='lazy'/>
        </div>
        <p>Freshly prepared</p>
      </div>
    </div>
  )
}

export default Mission;