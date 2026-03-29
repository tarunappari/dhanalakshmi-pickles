"use client";
import DynamicProductsPage from "@/components/common/DynamicProductsPage";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="pageContainer">
      <Navbar />
      <DynamicProductsPage />
      <Footer />
    </div>
  );
};

export default page;
