import React from "react";
import styles from "@/styles/landingpage/HeroSection.module.scss";
import WhiteBgButton from "../common/WhiteBgButton";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import Link from "next/link";
import { categoriesForLandingPage } from "@/data/data";
import bgImg from "@/public/assets/heroBg.jpeg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className={styles.categoryContainer}>
        <div className={styles.categoriesList}>
          {categoriesForLandingPage.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className="imgContainer">
                <Image src={category.image} alt="plant-img" width={130} />
              </div>
              <p>{category.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.containerHero}>
        <div className={styles.imgContainer}>
          <Image src={bgImg} alt="bg" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
