import React from 'react'

// css will be in herosection 
import styles from '@/styles/landingpage/Mission.module.scss'
import palmoil from '@/public/assets/decors/nopalmoil.webp'
import Image from 'next/image'

const Mission = () => {
  return (
    <div className={styles.missionContainer}>
      <div className={styles.missionCard}>
        <div>
          <Image src={palmoil} alt='img' loading='lazy'/>
        </div>
        <p>No palm oil</p>
      </div>
      <div className={styles.missionCard}>
        <div>
          <Image src={palmoil} alt='img' loading='lazy'/>
        </div>
        <p>No preservatives</p>
      </div>
      <div className={styles.missionCard}>
        <div>
          <Image src={palmoil} alt='img' loading='lazy'/>
        </div>
        <p>No added colors</p>
      </div>
      <div className={styles.missionCard}>
        <div>
          <Image src={palmoil} alt='img' loading='lazy'/>
        </div>
        <p>Freshly prepared</p>
      </div>
    </div>
  )
}

export default Mission;