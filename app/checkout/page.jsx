"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CreditCard, User, Mail, Phone, MapPin } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import styles from "@/styles/checkout/Checkout.module.scss";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const CheckoutPage = () => {
  const { items, getCartTotal } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    country: "India",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if every field has a non-empty value
  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const qs = new URLSearchParams(formData).toString();
      router.push(`/test?${qs}`);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subtotal = getCartTotal();
  const total = subtotal; // Assuming shipping is free right now

  // Optionally redirect if cart is empty
  // if (items.length === 0) {
  //   router.push('/products');
  // }

  return (
    <div>
      <Navbar />
      <div className={styles.checkoutWrapper}>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <button className={styles.backButton} onClick={() => router.back()}>
              <ArrowLeft size={20} />
              Continue Shopping
            </button>
            <div className={styles.title}>
              <CreditCard size={28} />
              <h1>Checkout</h1>
            </div>
          </header>

          <div className={styles.contentGrid}>
            {/* LEFT: Order Summary */}
            <div className={styles.leftColumn}>
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Order Summary</h2>

                <div className={styles.itemsList}>
                  {items.length === 0 ? (
                    <p className={styles.emptyMsg}>Your cart is empty.</p>
                  ) : (
                    items.map((item) => (
                      <div
                        key={`${item.product.id}-${item.variant.weight}`}
                        className={styles.orderItem}
                      >
                        <div className={styles.itemImage}>
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        <div className={styles.itemInfo}>
                          <h3>{item.product.name}</h3>
                          <p className={styles.infoRow}>
                            SIZE: <span>{item.variant.weight}</span>
                          </p>
                          <p className={styles.infoRow}>
                            Qty: <span>{item.quantity}</span>
                          </p>
                          <p className={styles.unitPrice}>
                            ₹{item.variant.discountPrice}/{item.variant.weight}{" "}
                            each
                          </p>
                        </div>
                        <div className={styles.itemTotal}>
                          <p>
                            ₹
                            {(
                              item.variant.discountPrice * item.quantity
                            ).toLocaleString("en-IN")}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className={styles.summaryTotals}>
                  <div className={styles.totalRow}>
                    <span>Subtotal:</span>
                    <span>₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className={styles.totalRow}>
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className={styles.grandTotal}>
                    <span>Total:</span>
                    <span>₹{total.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Customer Information */}
            <div className={styles.rightColumn}>
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Customer Information</h2>

                <form className={styles.checkoutForm} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label>
                      <User size={16} /> Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>
                      <Mail size={16} /> Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>
                      <Phone size={16} /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <h3 className={styles.subTitle}>Delivery Address</h3>

                  <div className={styles.formGroup}>
                    <label>
                      <MapPin size={16} /> Street Address *
                    </label>
                    <textarea
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      placeholder="Enter your street address"
                      rows={3}
                      required
                    ></textarea>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.formGroup}>
                      <label>City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter your state"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.formGroup}>
                      <label>PIN Code *</label>
                      <input
                        type="text"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        placeholder="Enter PIN code"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Country *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div>
                  </div>

                  {!isFormValid && (
                    <p className={styles.mandatoryText}>
                      * All fields are mandatory
                    </p>
                  )}

                  <div className={styles.actionButtons}>
                    <button
                      type="button"
                      className={styles.continueBtn}
                      onClick={() => router.back()}
                    >
                      Continue Shopping
                    </button>
                    <button
                      type="submit"
                      className={styles.payBtn}
                      disabled={!isFormValid}
                    >
                      Pay ₹{total.toLocaleString("en-IN")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
