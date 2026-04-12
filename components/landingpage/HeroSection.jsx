import React from "react";
import styles from "@/styles/landingpage/HeroSection.module.scss";
import { categoriesForLandingPage } from "@/data/data";
import bgImg from "@/public/assets/decors/herosection.webp";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <div className={styles.categoryContainer}>
        <div className={styles.categoriesList}>
          {categoriesForLandingPage.map((category, index) => (
            <Link href={category.path || '/products'} key={index} className={styles.categoryCard}>
              <div className="imgContainer">
                <Image src={category.image} alt="plant-img" width={130} priority />
              </div>
              <p>{category.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.containerHero}>
        <div className={styles.imgContainer}>
          <Image src={bgImg} alt="bg" priority />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
