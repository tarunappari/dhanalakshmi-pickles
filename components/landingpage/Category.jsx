import React from "react";
import styles from "@/styles/landingpage/Category.module.scss";
import Image from "next/image";
import majorCat from "@/public/assets/landingpage/category/majorCat.jpg";
import Link from "next/link";

const categories = [
  {
    name: "Veg Pickles",
    link: "/vegpickles",
    img: majorCat,
  },
  {
    name: "Non-Veg Pickles",
    link: "/nonvegpickles",
    img: majorCat,
  },
  {
    name: "Podis",
    link: "/podis",
    img: majorCat,
  },
  {
    name: "Dry Non-Veg Items",
    link: "/drynonveg",
    img: majorCat,
  },
  {
    name: "Snacks",
    link: "/snacks",
    img: majorCat,
  },
  {
    name: "Sweets",
    link: "/sweets",
    img: majorCat,
  },
  {
    name: "Vadiyalu(Fryums)",
    link: "/vadiyalu",
    img: majorCat,
  },
  {
    name: "Godavari Specials",
    link: "/godavari-specials",
    img: majorCat,
  },
];

const Category = () => {
  return (
    <div className={styles.mainCategoryContainer}>
      <h1>A Collection Made with Love 🌴🏡❤️</h1>
      <div className={styles.categoryContainer}>
        {categories.map((cat, index) => (
          <Link href={cat.link} key={index} className={styles.categoryCard}>
            <div className={styles.imgContainer}>
              <Image src={cat.img} alt={cat.name} />
            </div>
            <h3>{cat.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
