"use client";
import DynamicProductsPage from "@/components/common/DynamicProductsPage";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const categoryId = params?.products || "";

  return (
    <div className="pageContainer">
      <Navbar />
      <DynamicProductsPage categoryId={categoryId} />
      <Footer />
    </div>
  );
};

export default page;
