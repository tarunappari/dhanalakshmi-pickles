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
import sweets from '@/public/assets/landingpage/category/sweets.webp';

const PlantOfTheWeek = () => {
  const [quantity, setQuantity] = useState(1);

  // Sample plant data - you can replace this with props or API data
  const plantData = {
    name: "Pootharekulu",
    subtitle: "World famous",
    rating: 4.8,
    reviewCount: 127,
    originalPrice: 89.99,
    discountedPrice: 64.99,
    discount: 28,
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
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.badge}>Product of the Week</div>
        </motion.div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Side - Carousel */}
          <motion.div
            className={styles.carouselSection}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* Right Side - Plant Details */}
          <motion.div
            className={styles.detailsSection}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
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
                    <span className={styles.inStock}>
                      ✓ In Stock
                    </span>
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

                  <button className={styles.addToCartBtn}>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className={styles.buyNowBtn}>
                    <Zap className="w-5 h-5" />
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className={styles.descriptionSection}>
                <p className={styles.description}>{plantData.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PlantOfTheWeek;
