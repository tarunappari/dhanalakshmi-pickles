import React from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ProductDetails from "@/components/common/ProductDetails";
import { products } from "@/data/products";
import { generateSlug } from "@/lib/utils";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find(
    (p) => generateSlug(p.name) === slug || p.id.toString() === slug
  );

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Venkatraogari Vantillu`,
      description: product.description,
      url: `https://venkatraogarivantillu.com/products/${slug}`,
      images: [
        {
          url: product.image?.src || "/favicon.ico",
          alt: product.name,
        },
      ],
    },
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

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

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `https://venkatraogarivantillu.com${product.image?.src || "/favicon.ico"}`,
    "description": product.description,
    "sku": product.id.toString(),
    "offers": {
      "@type": "AggregateOffer",
      "url": `https://venkatraogarivantillu.com/products/${slug}`,
      "priceCurrency": "INR",
      "lowPrice": product.variants?.[0]?.discountPrice?.toString() || "0",
      "highPrice": product.variants?.[product.variants.length - 1]?.discountPrice?.toString() || "0",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    }
  };

  return (
    <div className="pageContainer">
      <Script
        id={`product-schema-${product.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Navbar />
      <ProductDetails product={product} />
      <Footer />
    </div>
  )
};

export default page;
