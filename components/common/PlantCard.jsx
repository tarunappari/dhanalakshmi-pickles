"use client";
import React from "react";
import Link from "next/link";
import styles from "@/styles/common/PlantCard.module.scss";
import chicken from '@/public/assets/products/nonveg/chicken.png'
import { usePathname } from "next/navigation";
import Image from "next/image";

export function PlantCard({ product }) {

  const pathname = usePathname();

  // Extract product data with fallbacks
  const title = product?.title || "Product Title";
  const price = product?.priceRange?.minVariantPrice?.amount || "600";
  const discountedPrice =  899;
  const imageUrl =
    "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=800&auto=format&fit=crop";
  const isOnSale = true;
  const inStock = true;
  

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
        {isOnSale && <div className={styles.saleBadge}>-32%</div>}
        {/* <div className={styles.rating}>
          4.82<span style={{color:'#1c9c57'}}>★</span>
        </div> */}
        <Image src={chicken} alt={title}  loading="lazy" />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>₹{price}</span>

          <span className={styles.discountedPrice}>₹{discountedPrice}</span>
        </div>

        <Link href={`/plants/${handle}`} className={styles.viewButton}>
          {inStock ? "VIEW PLANT" : "OUT OF STOCK"}
        </Link>
      </div>
    </div>
  );
}
