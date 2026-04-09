import React from "react";
import styles from '@/styles/common/TopSlider.module.scss'

const TopSlider = () => {
  const text = "   orders prepared upon request    |     we use pure ganguga oil    |    Purely Homemade    |    Free delivery for Orders above 999    |    No added colors    |    Zero Preservatives    |    Contact us for International orders and customized orders    | ";
  
  return (
    <div className={styles.container}>
      <div className={styles.marqueeTrack}>
        {[...Array(4)].map((_, index) => (
          <span key={index} className={styles.text}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopSlider;
