import Image from "next/image";
import React from "react";
import styles from "@/styles/landingpage/About.module.scss";
import grandpa from "@/public/assets/decors/grandpa2.png";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Dhanalakshmi & Venkatrao</h2>
        <p>
          At the heart of వెంకట్రావ్ గారి వంటిల్లు are two souls who have spent a
          lifetime living simply, cooking traditionally, and sharing generously
          — Dhanalakshmi and Venkatrao.
        </p>
        <p>
          Dhanalakshmi, our beloved Ammamma, has been preparing traditional
          Konaseema recipes for over 40 years. Her cooking is not learned from
          books, but from experience, intuition, and the age-old practices
          passed down through generations. Every spice she adds, every step she
          follows, carries a story.
        </p>
        <p>
          Venkatrao, our Thatha, has been her constant support — helping in
          preparation, sourcing ingredients, and being part of the everyday
          rhythm of their village life.
        </p>
        <h3>
          They may come from a small village, but the values they carry are
          timeless.Through this brand, we are not just sharing food — we are
          sharing their life, their legacy, and their love.
        </h3>
      </div>
      <div className={styles.imgContainer}>
        <Image src={grandpa} alt="grand" />
      </div>
    </div>
  );
};

export default About;
