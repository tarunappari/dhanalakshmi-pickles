import React from "react";
import styles from "@/styles/landingpage/Favourites.module.scss";
import { ProductCard } from "../common/ProductCard";
import { products } from "@/data/data";
import Link from "next/link";

const GodavariSplsSection = () => {
  const newProducts = products.filter(p => p.tags && p.tags.new).slice(0, 4);

  return (
    <div className={styles.favouritesContainer}>
      <div className={styles.title}>
        <h1>New Arrivals🌴🌊</h1>
        <p>Made with Love 💛 Rooted in Tradition 🌿</p>
      </div>
      <div className={styles.carouselContainer}>
        {newProducts.map((product) => (
          <div key={product.id} className={styles.cardContainer}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div>
        <Link href="/new">
          <button className="viewBtn">VIEW ALL</button>
        </Link>
      </div>
    </div>
  );
};

export default GodavariSplsSection;
