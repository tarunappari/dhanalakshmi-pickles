"use client";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ProductsSection from "@/components/products/ProductsSection";
import React from "react";

const page = () => {
  return (
    <div className="pageContainer">
      <Navbar />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default page;
