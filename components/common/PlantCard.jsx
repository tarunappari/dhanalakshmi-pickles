"use client";
import React from "react";
import Link from "next/link";
import styles from "@/styles/common/PlantCard.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function PlantCard({ product }) {

  const pathname = usePathname();

  // Extract product data with fallbacks
  const title = product?.title || "Product Title";
  const price = product?.priceRange?.minVariantPrice?.amount || "0.00";
  const discountedPrice = price + 300;
  const currency = product?.priceRange?.minVariantPrice?.currencyCode || "USD";
  const imageUrl =
    "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=800&auto=format&fit=crop";
  const imageAlt = product?.images?.edges?.[0]?.node?.altText || title;
  const isOnSale = true;
  const inStock = true;
  const isOfferCard = pathname === '/offers';
  console.log(isOfferCard , pathname);
  

  // Create a handle from title for URL (simplified approach)
  const handle = product
    ? title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
    : "default-plant";

  return (
    <div className={styles.plantCard}>
      {/* Image at top */}
      <div className={styles.imageContainer}>
        {isOnSale && <div className={styles.saleBadge}>SALE</div>}
        <div className={styles.rating}>
          4.82<span style={{color:'#1c9c57'}}>★</span> | 321
        </div>
        <img src={imageUrl} alt={title}  loading="lazy" />
      </div>

      {/* Card content */}
      <div className={styles.cardContent}>
        {/* Title below image */}
        <h3 className={styles.title}>{title}</h3>

        {/* Price section with original and discounted prices */}
        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>{price}</span>

          <span className={styles.discountedPrice}>{discountedPrice}</span>
        </div>

        {/* View button at the bottom */}
        <Link href={`/plants/${handle}`} className={styles.viewButton}>
          {inStock ? "VIEW PLANT" : "OUT OF STOCK"}
        </Link>
      </div>
    </div>
  );
}
