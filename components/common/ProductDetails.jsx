"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  ChevronRight,
  Star,
} from "lucide-react";
import styles from "@/styles/common/ProductDetails.module.scss";
import clsx from "clsx";
import Cart from "../cart/Cart";
import { useCartStore } from "@/store/cartStore";

const ProductDetails = ({ product }) => {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [added, setAdded] = useState(false);

  const { items, addToCart, openCart } = useCartStore();

  if (!product) return null;

  const currentVariant =
    product.variants && product.variants.length > 0
      ? product.variants[selectedVariantIdx]
      : null;

  // Check if current variant is already in cart
  const isInCart =
    currentVariant &&
    items.some(
      (item) =>
        item.product.id === product.id &&
        item.variant.weight === currentVariant.weight,
    );

  const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const handleAddToCart = () => {
    if (isInCart) {
      openCart();
    } else {
      addToCart(product, currentVariant, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  const tagList = Object.entries(product.tags || {})
    .filter(([_, value]) => value)
    .map(([key]) => {
      if (key === "ammammabest") return "Ammamma's Best";
      if (key === "konaseemaclassics") return "Konaseema Classics";
      if (key === "godavariflavors") return "Godavari Flavors";
      if (key === "heritagerecipes") return "Heritage Recipes";
      return key;
    })
    .filter((val) => val !== "fav");

  return (
    <div className={styles.productDetailsWrapper}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <ChevronRight size={14} />
          <Link href="/products">Products</Link>
          <ChevronRight size={14} />
          <span className={styles.current}>{product.name}</span>
        </nav>

        <div className={styles.contentGrid}>
          {/* Left: Image Gallery */}
          <div className={styles.imageColumn}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.mainImageContainer}
            >
              <div className={styles.imageWrapper}>
                <Image src={product.image} alt={product.name} fill />
              </div>
            </motion.div>
          </div>

          {/* Right: Details */}
          <div className={styles.detailsColumn}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >

              <h1 className={styles.title}>{product.name}</h1>

              <div className={styles.reviews}>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="#FFC107" color="#FFC107" />
                  ))}
                </div>
                <span>(124 Reviews)</span>
              </div>

              <p className={styles.tagline}>{product.tagline}</p>

              <div className={styles.pricing}>
                {currentVariant ? (
                  <>
                    <span className={styles.currentPrice}>
                      ₹{currentVariant.discountPrice}
                    </span>
                    <span className={styles.originalPrice}>
                      ₹{currentVariant.price}
                    </span>
                    <span className={styles.discountBadge}>
                      Save{" "}
                      {Math.round(
                        ((currentVariant.price - currentVariant.discountPrice) /
                          currentVariant.price) *
                          100,
                      )}
                      %
                    </span>
                  </>
                ) : (
                  <span className={styles.currentPrice}>
                    Price not available
                  </span>
                )}
              </div>

              <div className={styles.separator} />

              {/* Weight / Variant Selection */}
              {product.variants && product.variants.length > 0 && (
                <div className={styles.variantsSection}>
                  <h3 className={styles.sectionTitle}>Select Quantity Base</h3>
                  <div className={styles.variantsGrid}>
                    {product.variants.map((v, idx) => (
                      <button
                        key={v.weight}
                        onClick={() => setSelectedVariantIdx(idx)}
                        className={clsx(
                          styles.variantBtn,
                          selectedVariantIdx === idx && styles.active,
                        )}
                      >
                        {v.weight}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Actions */}
              <div className={styles.actionsSection}>
                <div className={styles.quantitySelector}>
                  <button
                    onClick={handleDecrease}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={18} />
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    aria-label="Increase quantity"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <div className={styles.buyButtons}>
                  <button
                    onClick={handleAddToCart}
                    className={clsx(
                      styles.addToCartBtn,
                      (added || isInCart) && styles.addedSuccess,
                    )}
                  >
                    <ShoppingBag size={20} />
                    {isInCart
                      ? "View Cart"
                      : added
                        ? "Added to Cart ✓"
                        : "Add to Cart"}
                  </button>
                  <button className={styles.buyNowBtn}>Buy it Now</button>
                </div>
              </div>

              <p className={styles.description}>{product.description}</p>

              {/* Trust Badges */}
              <div className={styles.trustBadges}>
                <div className={styles.badge}>
                  <Truck size={24} />
                  <span>
                    Free Shipping
                    <br />
                    across India
                  </span>
                </div>
                <div className={styles.badge}>
                  <ShieldCheck size={24} />
                  <span>
                    100% Authentic
                    <br />
                    Homemade Recipe
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default ProductDetails;
