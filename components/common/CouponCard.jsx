// components/CouponCard.jsx
import React from 'react';
import styles from '@/styles/common/CouponCard.module.scss';

const CouponCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.ribbon}>LIMITED OFFER</div>
      <div className={styles.percentIcon}>%</div>
      <h2 className={styles.title}>Free Shipping</h2>
      <p className={styles.description}>
        Enjoy free delivery on all orders above <strong>₹499</strong>.
      </p>
      <div className={styles.infoStrip}>
        <span className={styles.checkmark}>✔</span>
        <span>Offer applied automatically at checkout</span>
      </div>
      <button className={styles.cta}>Shop Now</button>
    </div>
  );
};

export default CouponCard;
