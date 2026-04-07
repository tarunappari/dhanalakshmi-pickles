import Image from "next/image";
import React from "react";
import blog1 from "@/public/assets/decors/village.webp";
import styles from "@/styles/landingpage/BlogsSection.module.scss";
import Link from "next/link";

const BlogsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Ammamma Cheppina Kathalu ❤️📖</h1>
        <p>Where Every Recipe Has a Story ✨</p>
      </div>
      <div className={styles.blogCards}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image src={blog1} alt="img" />
          </div>
          <div className={styles.content}>
            <h3>The Secret Behind Authentic Konaseema Pickles 🌴✨</h3>
            <p>
              Discover the age-old techniques, handpicked spices, and love that
              go into making traditional Konaseema pickles. From sun-drying to
              slow mixing, every step carries a story of heritage and taste.
              💛🌿
            </p>
            <Link href="/blog"><button>Read More</button></Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image src={blog1} alt="img" />
          </div>
          <div className={styles.content}>
            <h3>From Amma’s Kitchen to Your Plate ❤️🍲</h3>
            <p>
              Step into a world where recipes are not written, but passed down
              through generations. Experience the warmth, care, and
              unforgettable flavours that make every bite feel like home. 🏡💛
            </p>
            <Link href="/blog"><button>Read More</button></Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image src={blog1} alt="img" />
          </div>
          <div className={styles.content}>
            <h3>Why Homemade Snacks Taste Better (And Always Will) 🌿✨</h3>
            <p>
              It’s not just about ingredients—it’s about intention. Learn why
              traditional, homemade snacks bring unmatched flavour, purity, and
              nostalgia compared to mass-produced alternatives. 💛🍘
            </p>
            <Link href="/blog"><button>Read More</button></Link>
          </div>
        </div>
      </div>
      <div className={styles.viewBtnContainer}>
        <Link href="/blog"><button className="viewBtn">VIEW MORE</button></Link>
      </div>
    </div>
  );
};

export default BlogsSection;
