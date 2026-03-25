"use client";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import styles from "@/styles/landingpage/DiscoverGreens.module.scss";
import store3 from "@/public/assets/decors/rjytrain.png";
import store2 from "@/public/assets/decors/village.png";
import store1 from "@/public/assets/decors/cart.png";
import Image from "next/image";

export default function DiscoverAranyaGreens() {
  return (
    <div className={styles.container}>
      {/* 3 Cards Grid */}
      <div className={styles.aboutContainer}>
        <div className={styles.content}>
          <h2>Dhanalakshmi Ruchulu</h2>
          <p>
            not just a food brand — it is a journey back to the kitchens of
            Konaseema, where every recipe carries the warmth of home and the
            love of generations.
          </p>
          <p>
            Born from the hands of Ammamma Dhanalakshmi, our food is prepared
            using traditional methods that have been followed for decades. From
            sun-dried ingredients to slow-cooked pickles, every step reflects
            patience, care, and authenticity.
          </p>
          <p>
            We don’t believe in shortcuts. No factory processes, no artificial
            preservatives — just real ingredients, real flavors, and real
            stories.
          </p>
          <p>
            Each jar, each snack, and each podi brings you a piece of Konaseema
            — the aroma of fresh spices, the taste of homemade cooking, and the
            feeling of sitting in a grandmother’s kitchen.
          </p>
          <p>
            From our village to your table, we bring you flavors that feel like
            home.
          </p>
        </div>
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
            </WobbleCard>
          </div>

          <WobbleCard
            containerClassName={`${styles.cardContainer} ${styles.card3}`}
            className={`${styles.wobbleCardWrapper}`}
          >
            <Image
              src={store3}
              alt="Rare plants collection"
              className={styles.cardImage}
            />
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}
