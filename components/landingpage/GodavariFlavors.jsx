import React from "react";
import styles from "@/styles/landingpage/Favourites.module.scss";
import { ProductCard } from "../common/ProductCard";

const GodavariSplsSection = () => {
  return (
    <div className={styles.favouritesContainer}>
      <div className={styles.title}>
        <h1>New Arrivals🌴🌊</h1>
        <p>Made with Love 💛 Rooted in Tradition 🌿</p>
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.cardContainer}>
          <ProductCard />
        </div>
        <div className={styles.cardContainer}>
          <ProductCard />
        </div>
        <div className={styles.cardContainer}>
          <ProductCard />
        </div>
        <div className={styles.cardContainer}>
          <ProductCard />
        </div>
      </div>
      <div>
        <button className="viewBtn">VIEW ALL</button>
      </div>
    </div>
  );
};

export default GodavariSplsSection;
