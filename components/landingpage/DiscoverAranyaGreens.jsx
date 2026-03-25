 "use client";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import styles from "@/styles/landingpage/DiscoverGreens.module.scss";
import store1 from '@/public/assets/storeImages/store1.jpg'
import store2 from '@/public/assets/storeImages/store2.jpg'
import store3 from '@/public/assets/storeImages/store3.jpg'
import Image from "next/image";

export default function DiscoverAranyaGreens() {
  return (
    <div className={styles.container}>
      {/* Heading */}
      <div className={styles.headingSection}>
        <h2 className={styles.mainHeading}>Discover Aranya Greens</h2>
        <p className={styles.subtitle}>
          Hyderabad
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className={styles.cardsGrid}>
        <div className="grid1">
          <WobbleCard
            containerClassName={styles.cardContainer}
            className={styles.wobbleCardWrapper}
          >
            <Image
              src={store1}
              alt="Indoor plants collection"
              className={styles.cardImage}
            />
            <div className={styles.cardTextOverlay}>
              <h3 className={styles.cardTitle}>Indoor Plants</h3>
            </div>
          </WobbleCard>

          <WobbleCard
            containerClassName={styles.cardContainer}
            className={styles.wobbleCardWrapper}
          >
            <Image
              src={store2}
              alt="Outdoor plants collection"
              className={styles.cardImage}
            />
            <div className={styles.cardTextOverlay}>
              <h3 className={styles.cardTitle}>Pots & Planters</h3>
            </div>
          </WobbleCard>
        </div>

        <WobbleCard
          containerClassName={styles.cardContainer}
          className={styles.wobbleCardWrapper}
        >
          <Image
            src={store3}
            alt="Rare plants collection"
            className={styles.cardImage}
          />
          <div className={styles.cardTextOverlay}>
            <h3 className={styles.cardTitle}>Rare Plants</h3>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
}
