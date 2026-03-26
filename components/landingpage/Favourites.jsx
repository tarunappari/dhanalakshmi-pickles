import React from "react";
import styles from "@/styles/landingpage/Favourites.module.scss";
import { ProductCard } from "../common/ProductCard";

const Favourites = () => {
  return (
    <div className={styles.favouritesContainer}>
      <div className={styles.title}>
        <h1>Our Signature Ruchulu✨🏡</h1>
        <p>Prepared with Love❤️. Served with Tradition.🌿</p>
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

export default Favourites;
