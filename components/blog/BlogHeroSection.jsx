import React from "react";
import styles from "@/styles/blog/BlogHeroSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import cover from "@/public/assets/blog/cover.webp";
import { blogData } from "@/data/blog";

const BlogHeroSection = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroImg}>
          <Image src={cover} alt="hero" />
        </div>
      </div>

      <div className={styles.storiesSection}>
        <div className={styles.storiesTitle}>
          <h1>Stories We Grew Up With</h1>
          <p>Once Upon a Time… Under Ammamma's Tree 🌙</p>
          <p>
            Before screens, before noise… there were stories, laughter, and
            little hearts listening with wonder. ✨
          </p>
        </div>
        <div className={styles.cardsContainer}>
          {blogData.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.imgContainer}>
                <Image src={item.image} alt={item.title} />
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.shortDescription}</p>
                <Link href={`/blog/${item.id}`} className={styles.readMoreBtn}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ctaSection}>
        <h2>A Feeling That Never Fades</h2>
        <p>
          We may grow up, move away, and forget many things… but somewhere deep
          inside, those stories still live within us. 🌙✨
        </p>
        <button>Relive More Stories</button>
      </div>
    </div>
  );
};

export default BlogHeroSection;
