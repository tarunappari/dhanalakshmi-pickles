"use client";
import React from "react";
import Link from "next/link";
import styles from "@/styles/common/ProductCard.module.scss";
import chicken from "@/public/assets/products/nonveg/chicken.png";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function ProductCard({ product }) {
  const pathname = usePathname();

  // Extract product data with fallbacks
  const title = product?.name || "Product Title";
  const price = product?.variants?.[0]?.price || "600";
  const discountedPrice = product?.variants?.[0]?.discountPrice || "899";
  
  const inStock = product?.inStock ?? true;
  
  // Calculate discount percentage if both prices exist
  const discountPercent = price && discountedPrice && price > discountedPrice 
    ? Math.round(((price - discountedPrice) / price) * 100) 
    : 0;
  const isOnSale = discountPercent > 0;

  // Create a handle from title for URL
  const handle = product
    ? title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
    : "default-product";

  return (
    <div className={styles.ProductCard}>
      {/* Image at top */}
      <div className={styles.imageContainer}>
        {isOnSale && <div className={styles.saleBadge}>-{discountPercent}%</div>}
        {/* <div className={styles.rating}>
          4.82<span style={{color:'#1c9c57'}}>★</span>
        </div> */}
        <Image src={product?.image || chicken} alt={title} loading="lazy" />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>₹{price}</span>

          <span className={styles.discountedPrice}>₹{discountedPrice}</span>
        </div>

        <Link href={`/product/${product?.id || handle}`} className={styles.viewButton}>
          {inStock ? "VIEW PRODUCT" : "OUT OF STOCK"}
        </Link>
      </div>
    </div>
  );
}
