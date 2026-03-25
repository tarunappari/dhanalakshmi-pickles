import React from "react";
import styles from "@/styles/landingpage/Category.module.scss";
import Image from "next/image";
import nonveg from '@/public/assets/landingpage/category/nonveg.png'
import sweets from '@/public/assets/landingpage/category/sweets.png'
import podi from '@/public/assets/landingpage/category/podi.png'
import snacks from '@/public/assets/landingpage/category/snacks.png'
import spices from '@/public/assets/landingpage/category/spices.png'
import dryitems from '@/public/assets/landingpage/category/dryitems.png'
import fryums from '@/public/assets/landingpage/category/fryums.png'
import veg from '@/public/assets/landingpage/category/veg.png'
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
