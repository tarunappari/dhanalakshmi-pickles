"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "@/styles/cart/Cart.module.scss";
import { useCartStore } from "@/store/cartStore";

const Cart = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    getCartTotal,
  } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Prevent hydration mismatch for persisted store
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and pause Lenis when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = "unset";
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "unset";
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.start();
      }
    };
  }, [isCartOpen]);

  if (!mounted) return null;

  const total = getCartTotal();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className={styles.cartOverlay}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className={styles.backdrop}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className={styles.sidebar}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.titleWrapper}>
                <ShoppingBag size={24} />
                <h2>Your Cart</h2>
                <span className={styles.itemCount}>
                  {items.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button
                className={styles.closeBtn}
                onClick={closeCart}
                aria-label="Close cart"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Items */}
            <div className={styles.itemsContainer} data-lenis-prevent="true">
              {items.length === 0 ? (
                <div className={styles.emptyCart}>
                  <ShoppingBag size={64} className={styles.emptyIcon} />
                  <p>Your cart is currently empty.</p>
                  <button
                    className={styles.continueShoppingBtn}
                    onClick={closeCart}
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                <div className={styles.itemsList}>
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.variant.weight}`}
                      className={styles.cartItem}
                    >
                      <div className={styles.itemImageWrapper}>
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                        />
                      </div>

                      <div className={styles.itemDetails}>
                        <div className={styles.itemHeader}>
                          <h3>{item.product.name}</h3>
                          <button
                            className={styles.deleteBtn}
                            onClick={() =>
                              removeFromCart(
                                item.product.id,
                                item.variant.weight,
                              )
                            }
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className={styles.weightLabel}>
                          Weight: {item.variant.weight}
                        </p>

                        <div className={styles.itemFooter}>
                          <div className={styles.quantityControl}>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.variant.weight,
                                  item.quantity - 1,
                                )
                              }
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={14} />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.variant.weight,
                                  item.quantity + 1,
                                )
                              }
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className={styles.itemPrice}>
                            ₹{item.variant.discountPrice * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Fixed Footer */}
            {items.length > 0 && (
              <div className={styles.footer}>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span className={styles.totalPrice}>₹{total}</span>
                </div>
                <div
                  className={styles.deliveryRow}
                  style={{ marginTop: "0.5rem" }}
                >
                  <span>Delivery Charge</span>
                  <span className={styles.totalPrice}>₹0</span>
                </div>
                <div
                  className={styles.summaryRow}
                  style={{
                    borderTop: "1px solid var(--border-color, #e2e8f0)",
                    paddingTop: "0.75rem",
                    marginTop: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  <span>Grand Total</span>
                  <div
                    style={{
                      display: "flex",
                      alignItems:"center",
                      gap:"0.5rem"
                    }}
                  >
                    <p className={styles.taxInfo}>Including tax</p>
                    <span className={styles.totalPrice}>₹{total}</span>
                  </div>
                </div>

                <div className={styles.actionButtons}>
                  <button className={styles.continueBtn} onClick={closeCart}>
                    Continue Shopping
                  </button>
                  <button
                    className={styles.checkoutBtn}
                    onClick={() => {
                      closeCart();
                      router.push("/checkout");
                    }}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
