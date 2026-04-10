import React from "react";
import styles from "@/styles/products/ProductSection.module.scss";
import { ProductCard } from "../common/ProductCard";
import cover from "@/public/assets/decors/cover.webp";
import Image from "next/image";
import { products } from "@/data/data";

const CATEGORY_MAP = {
  vegpickles: { key: "veg", title: "Veg Pickles" },
  nonvegpickles: { key: "nonveg", title: "Non-Veg Pickles" },
  podis: { key: "podi", title: "Podis" },
  drynonveg: { key: "drynonveg", title: "Dry Non-Veg Items" },
  snacks: { key: "snacks", title: "Snacks" },
  sweets: { key: "sweets", title: "Sweets" },
  vadiyalu: { key: "vadiyalu", title: "Vadiyalu (Fryums)" },
  spices: { key: "spices", title: "Spices" },
  fav: { key: "fav", title: "Our Signature Ruchulu" },
  new: { key: "new", title: "New Arrivals" },
  ammammabest: { key: "ammammabest", title: "Ammamma’s Best" },
  konaseemaclassics: { key: "konaseemaclassics", title: "Konaseema Classics" },
  godavariflavors: { key: "godavariflavors", title: "Godavari Flavours" },
  heritagerecipes: { key: "heritagerecipes", title: "Ammamma Kathalu" },
};

const DynamicProductsPage = ({ categoryId, searchTerm }) => {
  let categoryInfo = { key: "", title: "All Products" };
  let filteredProducts = products;
  let title = "All Products";

  if (searchTerm) {
    title = `Search Results for "${searchTerm}"`;
    const lowerSearchTerm = searchTerm.toLowerCase();
    filteredProducts = products.filter(p => 
      p.name?.toLowerCase().includes(lowerSearchTerm) || 
      p.category?.toLowerCase().includes(lowerSearchTerm) ||
      p.description?.toLowerCase().includes(lowerSearchTerm)
    );
  } else {
    categoryInfo = CATEGORY_MAP[categoryId] || { key: "", title: "All Products" };
    title = categoryInfo.title;
    if (categoryInfo.key) {
      const isTag = ["fav", "new", "ammammabest", "konaseemaclassics", "godavariflavors", "heritagerecipes"].includes(categoryInfo.key);
      filteredProducts = isTag
          ? products.filter(p => p.tags && p.tags[categoryInfo.key])
          : products.filter(p => p.category === categoryInfo.key);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <Image src={cover} alt="cover" />
      </div>
      <div>
        <div className={styles.sectionContainer}>
          <div className={styles.header}>
            <h2>{title}</h2>
          </div>
          <div className={styles.productsContainer}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products found in this category.</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <h2>🌿 Our Products – Made with Love, Just Like Home</h2>
          <p>
            At Venkatraogari Vantillu, every product is more than just food — it’s
            a memory 🏡, a feeling, a piece of home.
          </p>
          <p>
            From traditional pickles 🫙 to handmade snacks 🍘, each item is
            prepared with the same care, patience, and love ❤️ that our
            grandmothers poured into every meal. We don’t just make food… we
            preserve emotions, culture, and the warmth of homemade flavors 🤍
          </p>
        </div>
        <div>
          <h3>❤️ Why Our Products Feel Special</h3>
          <ul>
            <li>Handcrafted with Love 🤲❤️</li>
            <li>Rooted in Tradition 🌿📜</li>
            <li>Homely Taste, Every Time 🏡💫</li>
            <li>No Shortcuts, Only Care ⏳✨</li>
          </ul>
        </div>
        <div>
          <h3>Our Promise 🤝✨</h3>
          <p>
            Whether it’s a spicy pickle 🌶️, crispy vadiyalu 🍘, or a traditional
            delight 🍛 — each product carries a story 📖, a memory, and a piece
            of our heart ❤️
          </p>
        </div>
        <div>
          <h2>
            Venkatraogari Vantillu is not just food… it’s love served in every
            bite.💛✨
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DynamicProductsPage;
