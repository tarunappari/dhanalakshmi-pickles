"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Plus, Minus, ShoppingCart, Zap } from "lucide-react";
import styles from "@/styles/landingpage/PlantOfTheWeek.module.scss";
import sweets from "@/public/assets/landingpage/category/sweets.webp";
import { useCartStore } from "@/store/cartStore";

const PlantOfTheWeek = () => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { items, addToCart, openCart } = useCartStore();

  const getDiscount = (original, discounted) => {
    return Math.round(((original - discounted) / original) * 100);
  };

  // Sample plant data - you can replace this with props or API data
  const plantData = {
    name: "Pootharekulu",
    subtitle: "World famous",
    rating: 4.8,
    reviewCount: 127,
    originalPrice: 380,
    discountedPrice: 10,
    discount: getDiscount(380, 350),
    description:
      "The Monstera Deliciosa is a stunning tropical plant known for its iconic split leaves and easy care requirements. Perfect for brightening up any indoor space, this plant thrives in medium to bright indirect light and adds a touch of jungle vibes to your home.",
    features: [
      "Air purifying qualities",
      "Low maintenance care",
      "Fast growing",
      "Pet-friendly option available",
    ],
    images: [
      sweets.src,
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
    ],
    inStock: true,
    stockCount: 23,
  };

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity((prev) => Math.min(prev + 1, plantData.stockCount));
    } else {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
  };

  const currentVariant = {
    weight: "500g",
    price: plantData.originalPrice,
    discountPrice: plantData.discountedPrice,
  };
  const productToCart = {
    ...plantData,
    id: "potw-1",
    image: plantData.images[0],
  };

  const isInCart = items.some(
    (item) =>
      item.product.id === productToCart.id &&
      item.variant.weight === currentVariant.weight,
  );

  const handleAddToCart = () => {
    if (isInCart) {
      openCart();
    } else {
      addToCart(productToCart, currentVariant, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : index < rating
              ? "fill-yellow-200 text-yellow-400"
              : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.badge}>Product of the Week</div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Side - Carousel */}
          <div className={styles.carouselSection}>
            <Carousel className={styles.carousel}>
              <CarouselContent>
                {plantData.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className={styles.imageContainer}>
                      <img
                        src={image}
                        alt={`${plantData.name} - Image ${index + 1}`}
                        className={styles.plantImage}
                      />
                      {plantData.discount > 0 && index === 0 && (
                        <div className={styles.discountBadge}>
                          -{plantData.discount}%
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className={styles.carouselBtn} />
              <CarouselNext className={styles.carouselBtn} />
            </Carousel>
          </div>

          {/* Right Side - Plant Details */}
          <div className={styles.detailsSection}>
            <div>
              {/* Plant Name & Rating */}
              <div className={styles.plantHeader}>
                <h3 className={styles.plantName}>{plantData.name}</h3>
                <p className={styles.plantSubtitle}>{plantData.subtitle}</p>

                <div className={styles.ratingSection}>
                  <div className={styles.stars}>
                    {renderStars(plantData.rating)}
                  </div>
                  <span className={styles.ratingText}>
                    {plantData.rating} ({plantData.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Price Section */}
              <div className={styles.priceSection}>
                <div className={styles.priceContainer}>
                  <span className={styles.currentPrice}>
                    ₹{plantData.discountedPrice}
                  </span>
                  {plantData.originalPrice > plantData.discountedPrice && (
                    <span className={styles.originalPrice}>
                      ₹{plantData.originalPrice}
                    </span>
                  )}
                </div>
                <div className={styles.stockInfo}>
                  {plantData.inStock ? (
                    <span className={styles.inStock}>✓ In Stock</span>
                  ) : (
                    <span className={styles.outOfStock}>Out of Stock</span>
                  )}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className={styles.actionsSection}>
                <div className={styles.quantitySelector}>
                  <div className={styles.quantityControls}>
                    <button
                      onClick={() => handleQuantityChange("decrease")}
                      className={styles.quantityBtn}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className={styles.quantityValue}>{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange("increase")}
                      className={styles.quantityBtn}
                      disabled={quantity >= plantData.stockCount}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className={styles.actionBtns}>
                    <button
                      onClick={handleAddToCart}
                      className={
                        added || isInCart
                          ? `${styles.addToCartBtn} ${styles.addedSuccess}`
                          : styles.addToCartBtn
                      }
                    >
                      <ShoppingCart className="w-5 h-5" />
                      {isInCart
                        ? "View Cart"
                        : added
                          ? "Added to Cart ✓"
                          : "Add to Cart"}
                    </button>
                    <button className={styles.buyNowBtn}>
                      <Zap className="w-5 h-5" />
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className={styles.descriptionSection}>
                <p className={styles.description}>{plantData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantOfTheWeek;
