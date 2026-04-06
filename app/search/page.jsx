"use client";
import DynamicProductsPage from "@/components/common/DynamicProductsPage";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const SearchContent = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("q") || "";

  return (
    <div className="pageContainer">
      <Navbar />
      <DynamicProductsPage searchTerm={searchTerm} />
      <Footer />
    </div>
  );
};

const page = () => {
  return (
    <Suspense fallback={<div className="pageContainer"><Navbar /><div style={{minHeight:"60vh", display:"flex", justifyContent:"center", alignItems:"center"}}>Loading search results...</div><Footer /></div>}>
      <SearchContent />
    </Suspense>
  );
};

export default page;
