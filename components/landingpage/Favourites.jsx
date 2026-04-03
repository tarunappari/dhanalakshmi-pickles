import React from "react";
import styles from "@/styles/landingpage/Favourites.module.scss";
import { ProductCard } from "../common/ProductCard";
import { products } from "@/data/data";
import Link from "next/link";

const Favourites = () => {
  const favProducts = products.filter(p => p.tags && p.tags.fav).slice(0, 8);

  return (
    <div className={styles.favouritesContainer}>
      <div className={styles.title}>
        <h1>Our Signature Ruchulu✨🏡</h1>
        <p>Prepared with Love❤️. Served with Tradition.🌿</p>
      </div>
      <div className={styles.carouselContainer}>
        {favProducts.map((product) => (
          <div key={product.id} className={styles.cardContainer}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div>
        <Link href="/fav">
          <button className="viewBtn">VIEW ALL</button>
        </Link>
      </div>
    </div>
  );
};

export default Favourites;
