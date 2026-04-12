import React from "react";
import styles from "@/styles/landingpage/Category.module.scss";
import Image from "next/image";
import nonveg from '@/public/assets/landingpage/category/nonveg.webp'
import sweets from '@/public/assets/landingpage/category/sweets.webp'
import podi from '@/public/assets/landingpage/category/podi.webp'
import snacks from '@/public/assets/landingpage/category/snacks.webp'
import spices from '@/public/assets/landingpage/category/spices.webp'
import dryitems from '@/public/assets/landingpage/category/dryitems.webp'
import fryums from '@/public/assets/landingpage/category/fryums.webp'
import veg from '@/public/assets/landingpage/category/veg.webp'
import Link from "next/link";

const categories = [
  {
    name: "Veg Pickles",
    link: "/vegpickles",
    img: veg,
  },
  {
    name: "Non-Veg Pickles",
    link: "/nonvegpickles",
    img: nonveg,
  },
  {
    name: "Podis",
    link: "/podis",
    img: podi,
  },
  {
    name: "Dry Non-Veg Items",
    link: "/drynonveg",
    img: dryitems,
  },
  {
    name: "Snacks",
    link: "/snacks",
    img: snacks,
  },
  {
    name: "Sweets",
    link: "/sweets",
    img: sweets,
  },
  {
    name: "Vadiyalu(Fryums)",
    link: "/vadiyalu",
    img: fryums,
  },
  {
    name: "Spices",
    link: "/spices",
    img: spices,
  },
];

const Category = () => {
  return (
    <div id="categories" className={styles.mainCategoryContainer}>
      <h1>A Collection Made with Love 🌴🏡❤️</h1>
      <div className={styles.categoryContainer}>
        {categories.map((cat, index) => (
          <Link href={cat.link} key={index} className={styles.categoryCard}>
            <div className={styles.imgContainer}>
              <Image src={cat.img} alt={cat.name} loading="lazy" />
            </div>
            <h3>{cat.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
