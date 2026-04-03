import React from "react";
import styles from "@/styles/products/ProductSection.module.scss";
import { ProductCard } from "../common/ProductCard";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import cover from "@/public/assets/decors/cover.png";
import Image from "next/image";
import { products } from "@/data/data";
import Link from "next/link";

const ProductsSection = () => {
  const sections = [
    { title: "Veg Pickles", category: "veg", link: "/vegpickles" },
    { title: "Non-Veg Pickles", category: "nonveg", link: "/nonvegpickles" },
    { title: "Sweets", category: "sweets", link: "/sweets" },
    { title: "Hot Snacks", category: "snacks", link: "/snacks" },
    { title: "Dry Non-Veg Items", category: "drynonveg", link: "/drynonveg" },
    { title: "Podi's (powders)", category: "podi", link: "/podis" },
    { title: "Fryums (vadiyalu)", category: "vadiyalu", link: "/vadiyalu" },
    { title: "Spices", category: "spices", link: "/spices" },
  ];

  

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <Image src={cover} alt="cover" />
      </div>
      <div className={styles.productsContainer}>
        {sections.map(({ title, category, link }) => (
          <div className={styles.sectionContainer} key={category}>
            <div className={styles.header}>
              <h2>{title}</h2>
              <Link href={link} className={styles.viewAllBtn}>
                VIEW ALL
                <IconArrowNarrowRight />
              </Link>
            </div>
            <div className={styles.productsContainer}>
              {products
                .filter((p) => p.category === category)
                .slice(0, 4)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Link href={link} className={`viewBtn ${styles.viewBtnInMobile}`}>
              View All
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <div>
          <h2>🌿 Our Products – Made with Love, Just Like Home</h2>
          <p>
            At Dhanalakshmi Ruchulu, every product is more than just food — it’s
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
            Dhanalakshmi Ruchulu is not just food… it’s love served in every
            bite.💛✨
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
