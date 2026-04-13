import React from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ProductDetails from "@/components/common/ProductDetails";
import { products } from "@/data/products";
import { generateSlug } from "@/lib/utils";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  const { slug } = await params;
  
  // Find product by slugifying the name OR by legacy ID
  const product = products.find(
    (p) => generateSlug(p.name) === slug || p.id.toString() === slug
  );

  // If no product found, show a 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="pageContainer">
      <Navbar />
      <ProductDetails product={product} />
      <Footer />
    </div>
  )
};

export default page;
