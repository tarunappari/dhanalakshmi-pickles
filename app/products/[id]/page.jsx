import React from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ProductDetails from "@/components/common/ProductDetails";
import { products } from "@/data/data";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  const { id } = await params;
  
  // Find product by id. Assuming id from params is a string and data ids are numbers.
  const product = products.find((p) => p.id === parseInt(id));

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
