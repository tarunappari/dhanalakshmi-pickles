"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import styles from "@/styles/checkout/Success.module.scss";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");

  return (
    <div className={styles.successWrapper}>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <CheckCircle />
        </div>
        <h1 className={styles.title}>Order Confirmed!</h1>
        <p className={styles.message}>
          Thank you for choosing Dhanalakshmi Pickles. We have received your order and will begin preparing it right away.
        </p>

        {paymentId && (
          <div className={styles.detailsBox}>
            <div className={styles.detailRow}>
              <span className={styles.label}>Payment ID:</span>
              <span className={styles.value}>{paymentId}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.label}>Status:</span>
              <span className={styles.value}>Success</span>
            </div>
          </div>
        )}

        <Link href="/" className={styles.actionBtn}>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

const OrderSuccessPage = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div style={{height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>}>
        <SuccessContent />
      </Suspense>
      <Footer />
    </div>
  );
};

export default OrderSuccessPage;
