"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { ArrowLeft, CreditCard, User, Mail, Phone, MapPin } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import styles from "@/styles/checkout/Checkout.module.scss";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const CheckoutPage = () => {
  const { items, getCartTotal, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
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

  const makePayment = async () => {
    if (!isFormValid || typeof window === "undefined" || !window.Razorpay)
      return;
    setIsProcessing(true);

    try {
      // 1. Create order on backend
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total,
          receipt: `receipt_${Date.now()}`,
          customer_details: formData,
          items: items.map((item) => ({
            id: item.product.id,
            name: `${item.product.name} (${item.variant.weight})`,
            price: item.variant.discountPrice,
            quantity: item.quantity,
          })),
        }),
      });

      const orderData = await res.json();

      if (!orderData.success) {
        alert(orderData.error || "Failed to create order");
        setIsProcessing(false);
        return;
      }

      // 2. Initialize Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Dhanalakshmi Pickles",
        description: "Order Checkout",
        order_id: orderData.order.id,
        handler: async function (response) {
          // 3. Verify payment signature on backend
          try {
            const verifyRes = await fetch("/api/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                order_details: formData,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              clearCart();

              // Trigger WhatsApp notification in background
              try {
                fetch("/api/send-whatsapp", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: formData.fullName,
                    phone: formData.phone,
                    orderId: response.razorpay_order_id,
                  }),
                }).catch((e) => console.error("WhatsApp network error:", e));
              } catch (e) {
                console.error("WhatsApp notification failed:", e);
              }

              router.push(
                `/order-success?payment_id=${response.razorpay_payment_id}`,
              );
            } else {
              alert("Payment verification failed");
              setIsProcessing(false);
            }
          } catch (err) {
            console.error("Verification Error:", err);
            alert("Error in verifying payment.");
            setIsProcessing(false);
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#c0392b",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        alert(`Payment failed: ${response.error.description}`);
        setIsProcessing(false);
      });

      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong");
      setIsProcessing(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      makePayment();
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subtotal = getCartTotal();
  const deliveryCharge = 99;
  const total = subtotal + deliveryCharge;

  // Optionally redirect if cart is empty
  // if (items.length === 0) {
  //   router.push('/products');
  // }

  return (
    <div className="pageContainer">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
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
                      disabled={!isFormValid || isProcessing}
                    >
                      {isProcessing
                        ? "Processing..."
                        : `Pay ₹${total.toLocaleString("en-IN")}`}
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
                    <span>₹{deliveryCharge}</span>
                  </div>
                  <div className={styles.grandTotal}>
                    <span>Total:</span>
                    <span>₹{total.toLocaleString("en-IN")}</span>
                  </div>
                </div>
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
